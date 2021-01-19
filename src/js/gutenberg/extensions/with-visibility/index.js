/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { restrictedBlocks } = wecodeartInfo;

/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
import Inspector from './Inspector';
import { getVisibilityClasses } from './utils';

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param 	{Object} settings Original block settings.
 *
 * @return 	{Object} Filtered block settings.
 */
function addAttributes(settings) {
	const { name: blockName } = settings;
	if (typeof settings.attributes === undefined || restrictedBlocks.includes(blockName)) return settings;

	settings.attributes = Object.assign(settings.attributes, {
		wecodeart: {
			type: 'object',
			default: {
				mobile: true,
				tablet: true,
				desktop: true,
				loggedin: true,
				loggedout: true,
			},
		},
	});

	return settings;
}

/**
 * Add custom Controls to selected blocks
 *
 * @param 	{Function} 	BlockEdit Original component.
 * @return 	{string} 	Wrapped component.
 */
const withVisibilityControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const { name } = props;

		if (restrictedBlocks.includes(name)) {
			return (<BlockEdit {...props} />);
		}

		return (
			<>
				<BlockEdit {...props} />
				<Inspector {...props} />
			</>
		);
	};
}, 'withVisibilityControls');

/**
 * Override props assigned to save component to inject atttributes
 *
 * @param 	{Object} 	extraProps 	Additional props applied to save element.
 * @param 	{Object} 	blockType  	Block type.
 * @param 	{Object} 	attributes 	Current block attributes.
 *
 * @return 	{Object} 	Filtered props applied to save element.
 */
function applyExtraClasses(extraProps, blockType, attributes) {
	const { wecodeart } = attributes;
	
	if (typeof wecodeart === undefined) return extraProps;

	const { className } = extraProps;

	extraProps = { ...extraProps, className: classnames(className, ...getVisibilityClasses(attributes)) };

	return extraProps;
}

/**
 * Apply Filters
 */
function applyFilters() {
	addFilter('blocks.registerBlockType', 'wecodeart/blocks/visibility/attributes', addAttributes);
	addFilter('editor.BlockEdit', 'wecodeart/editor/visibility/withVisibilityControls', withVisibilityControls);
	addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/visibility/applyExtraClass', applyExtraClasses);
}

applyFilters();