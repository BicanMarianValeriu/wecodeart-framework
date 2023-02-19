/**
 * External dependencies
 */
const { get } = lodash;

/**
 * WordPress dependencies
 */
const {
	i18n: { __ },
	data: { useSelect, useDispatch },
	components: { withSpokenMessages, Icon },
	editPost: { PluginBlockSettingsMenuItem },
	blockEditor: { store: blockEditorStore },
	compose: { compose },
	richText: { create, toHTMLString }
} = wp;

const allowedBlocks = [ 'core/heading', 'core/paragraph', 'core/code', 'core/list-item' ];

/**
 * Render plugin
 */
const Controls = () => {
	const { blockId, blockName, blockContent } = useSelect((select) => {
		const selectedBlock = select(blockEditorStore).getSelectedBlock();

		if (selectedBlock) {
			return {
				blockId: selectedBlock.clientId,
				blockName: selectedBlock.name,
				blockContent: get(selectedBlock, 'attributes.content'),
			};
		}

		return {};
	});

	if (allowedBlocks.includes(blockName)) {
		const record = create({ html: blockContent });

		const { updateBlockAttributes } = useDispatch(blockEditorStore, [blockId, record]);

		return (
			<PluginBlockSettingsMenuItem
				icon={<Icon icon="editor-removeformatting" className="components-menu-items__item-icon" />}
				label={__('Clear block formatting', 'wecodeart')}
				onClick={() => updateBlockAttributes(blockId, {
					content: toHTMLString({
						value: { ...record, formats: Array(record.formats.length) },
					})
				})}
			/>
		);
	}

	return null;
};

export default compose(withSpokenMessages)(Controls);
