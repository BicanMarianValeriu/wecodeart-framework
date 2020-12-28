/**
 * WordPress dependencies.
 */
const { assign } = lodash;
const { hasBlockSupport } = wp.blocks;
const { createHigherOrderComponent } = wp.compose;
const { InspectorAdvancedControls } = wp.blockEditor;
const { Fragment } = wp.element;
const { addFilter } = wp.hooks;

/**
 * Internal dependencies.
 */
import { restrictedBlocks } from '../../attributes';
import CSSEditor from './components/editor';
import './handler';
import './inject-css';

const addAttributes = (settings) => {
	if (!restrictedBlocks.includes(settings.name) && hasBlockSupport(settings, 'customClassName', true)) {
		settings.attributes = assign(settings.attributes, {
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

	return settings;
};

/**
 * Override the default edit UI to include a new block inspector control for
 * assigning the custom class name, if block supports custom class name.
 *
 * @param {Function} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */
const withInspectorControl = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const { name, isSelected } = props;
		const isRestrictedBlock = !restrictedBlocks.includes(name);
		const hasCustomClassName = hasBlockSupport(name, 'customClassName', true);
		if (isRestrictedBlock && hasCustomClassName && isSelected) {
			return (
				<Fragment>
					<BlockEdit {...props} />
					<InspectorAdvancedControls>
						<CSSEditor
							clientId={props.clientId}
							setAttributes={props.setAttributes}
							attributes={props.attributes}
						/>
					</InspectorAdvancedControls>
				</Fragment>
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