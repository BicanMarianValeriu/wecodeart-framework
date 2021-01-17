/**
 * External dependencies
 */
const { split, replace, get, join } = lodash;

/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter, removeFilter } = wp.hooks;
const { Fragment } = wp.element;
const { withSelect, select } = wp.data;
const { compose, createHigherOrderComponent, withState } = wp.compose;
const { InspectorAdvancedControls } = wp.blockEditor;
const { FormTokenField } = wp.components;

/**
 * Enhance Block
 */
const enhance = compose(
	withState({
		customClassNames: [],
	}),
	withSelect((select, block) => {
		const selectedBlock = select('core/block-editor').getSelectedBlock();
		let getClasses = get(selectedBlock, 'attributes.className');

		if (getClasses) {
			getClasses = replace(getClasses, ',', ' ');
		}

		if (selectedBlock && getClasses && join(block.customClassNames, ' ') !== getClasses) {
			if (block.clientId === selectedBlock.clientId) {
				block.setState({ customClassNames: split(getClasses, ' ') });
			}
		}

		const { wecodeart: { customClasses } } = select('core/editor').getEditorSettings();

		return {
			suggestions: customClasses,
		};
	}),
);

/**
 * Override the default edit UI to include a new block inspector control for
 * assigning the custom class name, if block supports custom class name.
 *
 * @param {Function} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */
const withInspectorControl = createHigherOrderComponent((BlockEdit) => {
	return enhance(({ ...props }) => {
		const {
			customClassNames,
			suggestions,
			isSelected,
			setAttributes,
			setState,
		} = props;

		if (isSelected) {
			return (
				<Fragment>
					<BlockEdit {...props} />
					<InspectorAdvancedControls>
						<FormTokenField
							label={__('Additional CSS Class(es)', 'wecodeart')}
							value={customClassNames}
							suggestions={suggestions}
							maxSuggestions={20}
							onChange={(val) => {
								setAttributes({ className: val !== '' ? join(val, ' ') : undefined });
								setState({ customClassNames: val !== '' ? val : undefined });
							}}
						/>
					</InspectorAdvancedControls>
				</Fragment>
			);
		}

		return <BlockEdit {...props} />;
	});
}, 'withInspectorControl');

/**
 * Apply Filters
 */
function applyFilters() {
	removeFilter('editor.BlockEdit', 'core/editor/custom-class-name/with-inspector-control');
	addFilter('editor.BlockEdit', 'wecodeart/editor/custom-classes/withInspectorControl', withInspectorControl);
}

applyFilters();