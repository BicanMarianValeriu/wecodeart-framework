/**
 * WordPress dependencies.
 */
const { assign } = lodash;
const { __ } = wp.i18n;
const { hasBlockSupport } = wp.blocks;
const { createHigherOrderComponent } = wp.compose;
const { InspectorAdvancedControls } = wp.blockEditor || wp.editor;
const { Fragment } = wp.element;
const { addFilter } = wp.hooks;

/**
 * Internal dependencies.
 */

import CSSEditor from './components/editor';

import './inject-css.js';

const addAttribute = (settings) => {
	if (hasBlockSupport(settings, 'customClassName', true)) {
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
		const hasCustomClassName = hasBlockSupport(props.name, 'customClassName', true);
		if (hasCustomClassName && props.isSelected) {
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

addFilter('blocks.registerBlockType', 'wecodeart/editor/advanced/custom-css/add-attribute', addAttribute);
addFilter('editor.BlockEdit', 'wecodeart/editor/advanced/custom-css/with-inspector-control', withInspectorControl);
