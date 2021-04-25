/**
 * WordPress dependencies
 */
const {
	apiFetch,
	i18n: { __, sprintf },
	compose: { compose },
	element: { useState },
	blocks: { serialize },
	blockEditor: { BlockPreview },
	data: { withSelect, withDispatch },
	components: { Button, Modal, TextControl, TextareaControl, SelectControl }
} = wp;

const PatternsModal = ({
	blockPatternCategories,
	closeModal,
	isOpen,
	selectedBlocks,
	createErrorNotice,
	createSuccessNotice,
	setIsInserterOpened,
	getSettings,
	updateSettings
}) => {
	const [data, setData] = useState({
		name: '',
		description: '',
		category: '',
	});

	const savePattern = (e) => {
		e.preventDefault();

		const { name, category, description } = data;

		apiFetch({
			path: '/wp/v2/wca_pattern',
			method: 'POST',
			data: {
				title: name,
				slug: name,
				content: serialize(selectedBlocks),
				excerpt: description,
				status: 'publish',
				terms: {
					wca_pattern_type: ['pattern'],
					wca_pattern_category: [category],
				},
			},
		}).then(() => {
			closeModal();

			// Inject block pattern into the inserter.
			updateSettings({
				...getSettings(),
				__experimentalBlockPatterns: [
					...getSettings().__experimentalBlockPatterns,
					{
						title: name,
						name: `wca_pattern/${name}`,
						content: serialize(selectedBlocks),
						description,
						categories: [category],
					},
				],
			});

			createSuccessNotice(sprintf(__('"%s" pattern has been saved.', 'wecodeart'), name), {
				type: 'snackbar',
				actions: [
					{
						label: __('View Patterns', 'wecodeart'),
						onClick: () => setIsInserterOpened(true),
					},
				],
			});
		}).catch(() => createErrorNotice(__('Failed to save new pattern.', 'wecodeart')));
	};

	return isOpen && (
		<Modal
			title={__('Save Design Pattern', 'wecodeart')}
			onRequestClose={closeModal}
			className="wecodeart-patterns-modal"
		>
			<div className="wecodeart-patterns-modal__preview">
				<BlockPreview autoHeight blocks={selectedBlocks} />
			</div>
			<form onSubmit={savePattern}>
				<TextControl
					label={__('Name', 'wecodeart') + '*'}
					onChange={(name) => setData({ ...data, name })}
					required
				/>
				<TextareaControl
					label={__('Description', 'wecodeart')}
					onChange={(description) => setData({ ...data, description })}
				/>
				<SelectControl
					label={__('Category', 'wecodeart')}
					options={[
						{ label: __('Select a pattern category', 'wecodeart'), value: '' },
						...blockPatternCategories.map((category) => ({ ...category, value: category.name })),
					]}
					onChange={(category) => setData({ ...data, category })}
				/>
				<Button isPrimary type="submit">
					{__('Save Pattern', 'wecodeart')}
				</Button>
			</form>
		</Modal>
	);
};

export default compose([
	withSelect((select) => {
		const {
			getMultiSelectedBlocks,
			getSelectedBlock,
			getSelectedBlockCount,
			getSettings,
		} = select('core/block-editor');

		return {
			getSettings,
			selectedBlocks: getSelectedBlockCount() === 1 ? getSelectedBlock() : getMultiSelectedBlocks(),
			blockPatternCategories: getSettings().__experimentalBlockPatternCategories,
		};
	}),
	withDispatch((dispatch) => {
		const { updateSettings } = dispatch('core/block-editor');

		const { setIsInserterOpened } = dispatch('core/edit-post');

		const { createErrorNotice, createSuccessNotice } = dispatch('core/notices');

		return {
			createErrorNotice,
			createSuccessNotice,
			setIsInserterOpened,
			updateSettings,
		};
	}),
])(PatternsModal);