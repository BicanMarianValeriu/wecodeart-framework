/**
 * External dependencies
 */
const { get } = lodash;

/**
 * WordPress dependencies
 */
const {
	i18n: { __ },
	data: { select, withSelect, withDispatch },
	components: { withSpokenMessages, Icon },
	editPost: { PluginBlockSettingsMenuItem },
	compose: { compose, ifCondition },
	richText: { create, toHTMLString }
} = wp;

const allowedBlocks = ['core/paragraph', 'core/heading'];

/**
 * Render plugin
 */
const Control = ({ blockId, blockName, blockContent, clearBlockFormatting }) => {
	const record = create({ html: blockContent });

	return (
		<PluginBlockSettingsMenuItem
			icon={<Icon icon="editor-removeformatting" className="components-menu-items__item-icon" />}
			label={__('Clear Block Formatting', 'wecodeart')}
			onClick={() => {
				clearBlockFormatting(blockId, blockName, toHTMLString({
					value: { ...record, formats: Array(record.formats.length) },
				}));
			}}
		/>
	);
};

export default compose(
	withSelect(() => {
		const selectedBlock = select('core/block-editor').getSelectedBlock();
		if (!selectedBlock) {
			return {};
		}
		return {
			blockId: selectedBlock.clientId,
			blockName: selectedBlock.name,
			blockContent: get(selectedBlock, 'attributes.content'),
		};
	}),
	withDispatch((dispatch) => {
		const { updateBlockAttributes } = dispatch('core/block-editor');
		return {
			clearBlockFormatting(blockId, blockName, blockContent) {
				updateBlockAttributes(blockId, { content: blockContent });
			},
		};
	}),
	ifCondition(({ blockName }) => allowedBlocks.includes(blockName)),
	withSpokenMessages,
)(Control);
