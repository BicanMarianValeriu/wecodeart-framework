/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { withSelect, select } = wp.data;
const { InspectorControls } = wp.blockEditor;
const { compose, createHigherOrderComponent } = wp.compose;
const { PanelBody } = wp.components;

import DevicesOptions from './components';

const restrictedBlocks = ['core/block', 'core/freeform', 'core/shortcode', 'core/template', 'core/nextpage'];

const enhance = compose(
	withSelect(() => {
		return {};
	})
);

/**
 * Add custom CoBlocks attributes to selected blocks
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withAdvancedControls = createHigherOrderComponent((BlockEdit) => {
	return enhance(({ ...props }) => {
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
	});
}, 'withAdvancedControls');

addFilter('editor.BlockEdit', 'wecodeart/editor/visibility/with-advanced-controls', withAdvancedControls);