/**
 * WordPress dependencies.
 */
const { assign } = lodash;
const {
	hooks: { addFilter },
	compose: { createHigherOrderComponent },
	blockEditor: { InspectorAdvancedControls },
	element: { useEffect }
} = wp;

const { restrictedBlocks } = wecodeartGutenberg;

/**
 * Internal dependencies.
 */
import CSSEditor from './Editor';
import './injector';

const addAttributes = (props) => {
	const { name } = props;
	const isRestrictedBlock = restrictedBlocks.includes(name);
	if (!isRestrictedBlock) {
		props.attributes = assign(props.attributes, {
			customCSSId: {
				type: 'string',
				default: null
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
		const { name, clientId, setAttributes } = props;
		const isRestrictedBlock = restrictedBlocks.includes(name);

		if (!isRestrictedBlock) {

			useEffect(() => setAttributes({ customCSSId: clientId }), []);

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
addFilter('blocks.registerBlockType', 'wecodeart/blocks/custom-css/addAttributes', addAttributes);
addFilter('editor.BlockEdit', 'wecodeart/editor/custom-css/withInspectorControl', withInspectorControl, 90);