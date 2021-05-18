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

const { restrictedBlocks } = wecodeartGutenberg;

/**
 * Internal dependencies.
 */
import CSSEditor from './Editor';
import './handler';
import './injector';

const addAttributes = (props) => {
	const { name } = props;
	const isRestrictedBlock = restrictedBlocks.includes(name);
	const hasClassName = hasBlockSupport(name, 'className', true);
	if (!isRestrictedBlock && hasClassName) {
		props.attributes = assign(props.attributes, {
			hasCustomCSS: {
				type: 'boolean',
				default: true // Defaults to true
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
	addFilter('editor.BlockEdit', 'wecodeart/editor/custom-css/withInspectorControl', withInspectorControl);
}

applyFilters();