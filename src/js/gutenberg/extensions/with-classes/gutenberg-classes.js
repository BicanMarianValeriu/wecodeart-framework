/**
 * External dependencies
 */
const { split, replace, get, join } = lodash;

/**
 * WordPress Dependencies
 */
const {
	i18n: { __ },
	hooks: { addFilter, removeFilter },
	blocks: { hasBlockSupport },
	compose: { createHigherOrderComponent },
	data: { useSelect },
	blockEditor: { InspectorAdvancedControls, store: blockEditorStore },
	components: { FormTokenField },
	element: { useState }
} = wp;

/**
 * Override the default edit UI to include a new block inspector control for
 * assigning the custom class name, if block supports custom class name.
 *
 * @param {Function} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */
const withInspectorControl = createHigherOrderComponent((BlockEdit) => {
	return ((props) => {
		const {
			name,
			isSelected,
			setAttributes,
		} = props;

		const [customClassNames, setCustomClassNames] = useState([]);

		const { suggestions } = useSelect((select, block) => {
			const selectedBlock = select(blockEditorStore).getSelectedBlock();
			
			const { wecodeart: { customClasses = [] } = {} } = select('core/editor').getEditorSettings();

			let getClasses = get(selectedBlock, 'attributes.className');
			if (getClasses) {
				getClasses = replace(getClasses, ',', ' ');
			}

			if (selectedBlock && getClasses && join(customClassNames, ' ') !== getClasses) {
				if (block.clientId === selectedBlock.clientId) {
					setCustomClassNames(split(getClasses, ' '));
				}
			}

			return {
				suggestions: customClasses,
			};
		});

		const hasClassName = hasBlockSupport(name, 'className', true);

		if (hasClassName && isSelected) {
			return (
				<>
					<BlockEdit {...props} />
					<InspectorAdvancedControls>
						<FormTokenField
							label={__('Additional CSS Class(es)', 'wecodeart')}
							value={customClassNames}
							suggestions={suggestions}
							maxSuggestions={20}
							onChange={(val) => {
								setAttributes({ className: val !== '' ? join(val, ' ') : undefined });
								setCustomClassNames(val !== '' ? val : undefined);
							}}
						/>
					</InspectorAdvancedControls>
				</>
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