/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;
const { PanelBody } = wp.components;

/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
import DevicesOptions from './components';
import { restrictedBlocks } from '../../attributes';
import { getVisibilityClasses } from './utils';

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
	const { name: blockName } = blockType;

	if (!restrictedBlocks.includes(blockName) && typeof wecodeart !== 'undefined') {
		if (
			typeof wecodeart.mobile !== 'undefined' && !wecodeart.mobile ||
			typeof wecodeart.tablet !== 'undefined' && !wecodeart.tablet ||
			typeof wecodeart.desktop !== 'undefined' && !wecodeart.desktop
		) {
			extraProps.className = classnames(extraProps.className, getVisibilityClasses(attributes));
		}
	}

	return extraProps;
}

/**
 * Apply Filters
 */
function applyFilters() {
	addFilter('editor.BlockEdit', 'wecodeart/editor/visibility/withVisibilityControls', withVisibilityControls);
	addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/visibility/applyExtraClass', applyExtraClasses);
}

applyFilters();