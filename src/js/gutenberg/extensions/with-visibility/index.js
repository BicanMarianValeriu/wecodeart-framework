/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;
const { PanelBody } = wp.components;
const { restrictedBlocks } = wecodeartInfo;

/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
import DevicesOptions from './components';
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
	if (typeof settings.attributes === 'undefined' && restrictedBlocks.includes(blockName)) return settings;

	settings.attributes = Object.assign(settings.attributes, {
		wecodeart: {
			type: 'object',
			default: {
				desktop: true,
				tablet: true,
				mobile: true,
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
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withVisibilityControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const {
			name,
			isSelected,
			isDisabledDevices,
		} = props;

		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && !isDisabledDevices && !restrictedBlocks.includes(name) &&
					<InspectorControls>
						<PanelBody
							title={__('Visibility', 'wecodeart')}
							initialOpen={false}
							className="wecodeart-panel"
						>
							<p>
								<small>{__('Attention: The display settings will only take effect once you are on the live page, and not while you\'re editing in Gutenberg.', 'wecodeart')}</small>
							</p>
							{DevicesOptions(props)}
						</PanelBody>
					</InspectorControls>
				}
			</Fragment>
		);
	};
}, 'withAdvancedControls');

/**
 * Override props assigned to save component to inject atttributes
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function applyExtraClasses(extraProps, blockType, attributes) {
	const { wecodeart } = attributes;

	if (
		typeof wecodeart.mobile !== 'undefined' && !wecodeart.mobile ||
		typeof wecodeart.tablet !== 'undefined' && !wecodeart.tablet ||
		typeof wecodeart.desktop !== 'undefined' && !wecodeart.desktop
	) {
		extraProps.className = classnames(extraProps.className, getVisibilityClasses(attributes));
	}

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