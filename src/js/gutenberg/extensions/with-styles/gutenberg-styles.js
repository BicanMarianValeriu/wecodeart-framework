/**
 * WordPress dependencies.
 */
const { assign } = lodash;
const {
	hooks: { addFilter },
	blocks: { hasBlockSupport },
	compose: { createHigherOrderComponent },
	blockEditor: { InspectorAdvancedControls },
} = wp;

const { restrictedBlocks, removeStyles = [] } = wecodeartGutenberg;

/**
 * Internal dependencies.
 */
import CSSEditor from './Editor';
import './handler';
import './inject-css';

const addAttributes = (props) => {
	const { name } = props;
	const isRestrictedBlock = restrictedBlocks.includes(name);
	const hasClassName = hasBlockSupport(name, 'className', true);
	if (!isRestrictedBlock && hasClassName) {
		props.attributes = assign(props.attributes, {
			hasCustomCSS: {
				type: 'boolean',
				default: false
			},
			customCSS: {
				type: 'string',
				default: null
			}
		});
	}

	return props;
};

/**
 * Override props assigned to save component to inject atttributes
 *
 * @param   {Object}    extraProps Additional props applied to save element.
 * @param   {Object}    blockType  Block type.
 * @param   {Object}    attributes Current block attributes.
 *
 * @return  {Object}    Filtered props applied to save element.
 */
function applyExtraSettings(extraProps, blockType) {
	const { name: blockName } = blockType;

	if (removeStyles.includes(blockName)) {
		extraProps.style = {};
	}

	return extraProps;
}

/**
 * Override the default edit UI to include a new block inspector control for
 * assigning the custom class name, if block supports custom class name.
 *
 * @param 	{Function} 	BlockEdit Original component.
 *
 * @return 	{string} 	Wrapped component.
 */
const withInspectorControl = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const { name, isSelected } = props;
		const isRestrictedBlock = restrictedBlocks.includes(name);
		const hasClassName = hasBlockSupport(name, 'className', true);
		if (!isRestrictedBlock && hasClassName && isSelected) {
			return (
				<>
					<BlockEdit {...props} />
					<InspectorAdvancedControls>
						<CSSEditor {...props} />
					</InspectorAdvancedControls>
				</>
			);
		}

		return <BlockEdit {...props} />;
	};
}, 'withInspectorControl');

/**
 * Apply Filters
 */
function applyFilters() {
	addFilter('blocks.registerBlockType', 'wecodeart/blocks/custom-css/addAttributes', addAttributes);
	addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/custom-css/applyExtraSettings', applyExtraSettings);
	addFilter('editor.BlockEdit', 'wecodeart/editor/custom-css/withInspectorControl', withInspectorControl);
}

applyFilters();