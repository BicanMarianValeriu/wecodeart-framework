/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { ToggleControl, PanelBody, Path, SVG } = wp.components;
const { InspectorControls, InnerBlocks } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;

/**
 * Internal dependencies.
 */
import { BackgroundVideo, BackgroundClasses, BackgroundStyles } from '../../controls/background';
import { getVisibilityClasses } from '../../extensions/advanced/visibility/utils';
import { restrictedBlocks } from '../../extensions/attributes';

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param 	{Object} settings Original block settings.
 *
 * @return 	{Object} Filtered block settings.
 */
function addColumnsPatterns(settings) {
    const { name: blockName } = settings;
    if (!restrictedBlocks.includes(blockName) && blockName === 'core/columns') {
        settings.patterns = [
            {
                name: 'one-column',
                label: __('One Column'),
                icon: <SVG className="dashicon" height="26" viewBox="0 0 50 26" width="50" xmlns="http://www.w3.org/2000/svg"><Path d="m48.0833333 0h-46.16666663c-1.05416667 0-1.91666667.9-1.91666667 2v22c0 1.1.8625 2 1.91666667 2h46.16666663c1.0541667 0 1.9166667-.9 1.9166667-2v-22c0-1.1-.8625-2-1.9166667-2zm0 24h-46.16666663v-22h46.16666663z" /></SVG>,
                isDefault: true,
                innerBlocks: [
                    ['core/column', {
                        width: 100,
                        bootstrapColumns: {
                            global: 'col-12',
                            sm: 'col-sm',
                        }
                    }],
                ],
            },
        ];
    }

    return settings;
}

/**
 * Columns Controls
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
function withColumnsControls(BlockEdit) {
    return (props) => {
        const {
            name: blockName,
            isSelected,
        } = props;

        if (!restrictedBlocks.includes(blockName) && blockName === 'core/columns' && isSelected) {

            const { attributes, setAttributes } = props;
            const { container, gutters } = attributes;

            const getStateText = (boolean) => {
                return boolean ? __('enabled', 'wecodeart') : __('disabled', 'wecodeart');
            };

            const wraperText = sprintf(__('Container wrapper is now %s!', 'wecodeart'), getStateText(container));
            const gutterText = sprintf(__('Gutters are now %s!', 'wecodeart'), getStateText(!gutters));

            return (
                <Fragment>
                    <BlockEdit {...props} />
                    <InspectorControls>
                        <PanelBody
                            title={__('Section Settings', 'wecodeart')}
                            initialOpen={false}
                            className="components-panel__body--wecodeart-panel"
                        >
                            <br />
                            <ToggleControl
                                label={__('Enable Container Wrapper?', 'wecodeart')}
                                help={wraperText}
                                checked={!!container}
                                onChange={() => setAttributes({ container: !container })}
                            />
                            {!!container && <ToggleControl
                                label={__('Disable Gutters?', 'wecodeart')}
                                help={gutterText}
                                checked={!!gutters}
                                onChange={() => setAttributes({ gutters: !gutters })}
                            />}
                        </PanelBody>
                    </InspectorControls>
                </Fragment>
            );
        }

        return <BlockEdit {...props} />;
    };
};

/**
 * Override props assigned to save component to inject atttributes
 *
 * @param {Object} props Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function getSaveElement(element, blockType, attributes) {
    const { name: blockName } = blockType;

    if (blockName === 'core/columns') {
        const { container, className, align, verticalAlignment, gutters } = attributes;

        const sectionClassName = classnames('wca-section', className,
            BackgroundClasses(attributes),
            getVisibilityClasses(attributes)
        );

        const innerClassName = classnames('wca-section__inner', {
            'container': container && ['full', 'wide'].includes(align) === false,
            'container-fluid': container && ['full', 'wide'].includes(align) === true,
        });

        const rowClassName = classnames('row', {
            [`align-items-${verticalAlignment}`]: verticalAlignment,
            'no-gutters': container && gutters,
        });

        return (
            <section className={sectionClassName} style={BackgroundStyles(attributes, {})}>
                {BackgroundVideo(attributes)}
                <div className={innerClassName}>
                    <div className={rowClassName}>
                        <InnerBlocks.Content />
                    </div>
                </div>
            </section>
        );
    }

    return element;
}

/**
 * Apply Filters
 */
function applyFilters() {
    addFilter('blocks.getSaveElement', 'wecodeart/blocks/columns/getSaveElement', getSaveElement);
    addFilter('blocks.registerBlockType', 'wecodeart/blocks/columns/patters', addColumnsPatterns);
    addFilter('editor.BlockEdit', 'wecodeart/editor/columns/withColumnsControls', withColumnsControls);
}

applyFilters();
