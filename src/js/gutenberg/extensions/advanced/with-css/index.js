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
import './inject-css.js';

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

const withInspectorControl = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const isRestrictedBlock = !restrictedBlocks.includes(props.name);
		const hasCustomClassName = hasBlockSupport(props.name, 'customClassName', true);
		if (isRestrictedBlock && hasCustomClassName && props.isSelected) {
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

addFilter('blocks.registerBlockType', 'wecodeart/blocks/custom-css/addAttributes', addAttributes);
addFilter('editor.BlockEdit', 'wecodeart/editor/custom-css/withInspectorControl', withInspectorControl);
