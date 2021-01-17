/**
 * External dependencies
 */
const { get } = lodash;
import { alignJustify } from '@wordpress/icons';

/**
 * WordPress dependencies
 */
const {
	i18n: { __ },
	components: { Icon },
	element: { Component },
	compose: { compose, ifCondition },
	data: { select, withDispatch, withSelect },
	blockEditor: { RichTextToolbarButton },
} = wp;

class JustifyControl extends Component {
	render() {
		const {
			blockId,
			isBlockJustified,
			updateBlockAttributes,
		} = this.props;

		const onToggle = () => {
			updateBlockAttributes(blockId, { align: isBlockJustified ? null : 'justify' });
		};

		return (
			<RichTextToolbarButton
				icon={<Icon icon={alignJustify} />}
				title={__('Justify', 'wecodeart')}
				onClick={onToggle}
				isActive={isBlockJustified}
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
			isBlockJustified: 'justify' === get(selectedBlock, 'attributes.align'),
			formatTypes: select('core/rich-text').getFormatTypes(),
		};
	}),
	withDispatch((dispatch) => ({
		updateBlockAttributes: dispatch('core/block-editor').updateBlockAttributes,
	})),
	ifCondition(({ formatTypes, blockName }) => {
		const checkFormats = formatTypes.filter(({ name }) => name === 'wpcom/justify');
		return 'core/paragraph' === blockName && checkFormats.length === 0;
	})
)(JustifyControl);
