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

/**
 * Internal dependencies.
 */
import CSSEditor from './Editor';
import './injector';

const addAttributes = (props) => {
	if (hasBlockSupport(props, '__experimentalStyles')) {
		props.attributes = assign(props.attributes, {
			customStyle: {
				type: 'string',
				default: null
			},
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
		const { name } = props;
		if (hasBlockSupport(name, '__experimentalStyles')) {
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
	addFilter('editor.BlockEdit', 'wecodeart/editor/custom-css/withInspectorControl', withInspectorControl, 90);
}

wp.domReady(applyFilters);