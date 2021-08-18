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
	components: { Icon, withSpokenMessages },
	compose: { compose },
	data: { useSelect, useDispatch },
	blockEditor: { RichTextToolbarButton, store: blockEditorStore },
} = wp;

const allowedBlocks = ['core/paragraph', 'core/heading'];

const Control = () => {
	const { blockId, blockName, isBlockJustified, formatTypes = [] } = useSelect((select) => {
		const selectedBlock = select(blockEditorStore).getSelectedBlock();

		if (selectedBlock) {
			return {
				blockId: selectedBlock.clientId,
				blockName: selectedBlock.name,
				isBlockJustified: 'justify' === get(selectedBlock, 'attributes.align'),
				formatTypes: select('core/rich-text').getFormatTypes(),
			};
		}

		return {};
	});

	const checkFormats = formatTypes.filter(({ name }) => name === 'wpcom/justify');

	if (allowedBlocks.includes(blockName) && checkFormats.length === 0) {
		const { updateBlockAttributes } = useDispatch(blockEditorStore, [blockId]);

		const onToggle = () => updateBlockAttributes(blockId, { align: isBlockJustified ? null : 'justify' });

		return (
			<RichTextToolbarButton
				icon={<Icon icon={alignJustify} />}
				title={__('Justify', 'wecodeart')}
				onClick={onToggle}
				isActive={isBlockJustified}
			/>
		);
	}

	return null;
};

export default compose(withSpokenMessages)(Control);
