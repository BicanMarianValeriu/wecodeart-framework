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
const { ToggleControl, PanelBody } = wp.components;
const { InspectorControls, InnerBlocks } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;

/**
 * Internal dependencies.
 */
import { BackgroundVideo, BackgroundClasses, BackgroundStyles } from '../../controls/background';
import { getVisibilityClasses } from '../../extensions/advanced/visibility/utils';
import { restrictedBlocks } from '../../extensions/attributes';

/**
 * Columns Controls
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withColumnsControls = createHigherOrderComponent((BlockEdit) => {
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
}, 'withColumnsControls');

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
    addFilter('editor.BlockEdit', 'wecodeart/editor/columns/withColumnsControls', withColumnsControls);
}

applyFilters();
