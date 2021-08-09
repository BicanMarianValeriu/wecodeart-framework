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
	compose: { compose },
	richText: { create, toHTMLString }
} = wp;

const allowedBlocks = ['core/paragraph', 'core/heading'];

/**
 * Render plugin
 */
const Control = () => {
	const { blockId, blockName, blockContent } = useSelect((select) => {
		const selectedBlock = select('core/block-editor').getSelectedBlock();

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

		const { updateBlockAttributes } = useDispatch('core/block-editor', [blockId, record]);

		return (
			<PluginBlockSettingsMenuItem
				icon={<Icon icon="editor-removeformatting" className="components-menu-items__item-icon" />}
				label={__('Clear Block Formatting', 'wecodeart')}
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

export default compose(withSpokenMessages)(Control);
