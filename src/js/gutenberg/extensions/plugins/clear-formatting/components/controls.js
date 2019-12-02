/**
 * External dependencies
 */
const { get } = lodash;

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { select, withSelect, withDispatch } = wp.data;
const { Component } = wp.element;
const { withSpokenMessages } = wp.components;
const { PluginBlockSettingsMenuItem } = wp.editPost;
const { compose, ifCondition } = wp.compose;
const { create, toHTMLString } = wp.richText;

const allowedBlocks = ['core/paragraph', 'core/heading'];

/**
 * Render plugin
 */
class ClearBlockFormatting extends Component {
	render() {
		const { blockId, blockName, blockContent, clearBlockFormatting } = this.props;

		const record = create({ html: blockContent });

		return (
			<PluginBlockSettingsMenuItem
				icon="editor-removeformatting"
				label={__('Clear Block Formatting', 'wecodeart')}
				onClick={() => {
					clearBlockFormatting(blockId, blockName, toHTMLString({
						value: { ...record, formats: Array(record.formats.length) },
					}));
				}}
			/>
		);
	}
}

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
			isDisabled: false,
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
	ifCondition((props) => {
		return !props.isDisabled && allowedBlocks.includes(props.blockName);
	}),
	withSpokenMessages,
)(ClearBlockFormatting);
