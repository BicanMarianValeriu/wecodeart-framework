/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;
const { PanelBody } = wp.components;
const { Fragment } = wp.element;
const { addFilter } = wp.hooks;

/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies.
 */
import ResponsiveColumns from '../../controls/bootstrap-columns';

/**
 * Column Controls
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withColumnControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const {
            name: blockName,
            isSelected,
        } = props;

        if (blockName === 'core/column' && isSelected) {
            return (
                <Fragment>
                    <BlockEdit {...props} />
                    <InspectorControls>
                        <PanelBody
                            title={__('Bootstrap Settings', 'wecodeart')}
                            initialOpen={false}
                            className="components-panel__body--wecodeart-column-panel"
                        >
                            <p className="components-base-control__label">{
                                __('Bootstrap columns uses mobile-first approach. This option has no visual preview but it will affect the live page.', 'wecodeart')
                            }</p>
                            <ResponsiveColumns {...props} />
                        </PanelBody>
                    </InspectorControls>
                </Fragment>
            );
        }

        return <BlockEdit {...props} />;
    };
}, 'withColumnControls');

/**
 * Column Controls
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withColumnClasses = createHigherOrderComponent((BlockListBlock) => {
    return (props) => {
        const {
            name: blockName,
            className,
        } = props;

        if (blockName === 'core/column') {
            const { attributes } = props;
            const { bootstrapColumns: { global, xs, sm, md, lg, xl } } = attributes;
            let columnClasses = ['col'];
            if (global || xs || sm || md || lg || xl) {
                columnClasses = [...columnClasses, ...[
                    { [global]: global !== 'col' },
                    { [sm]: sm },
                    { [md]: md },
                    { [lg]: lg },
                    { [xl]: xl },
                ]];
            }

            return <BlockListBlock {...props} className={classnames(className, columnClasses)} style={{}} />;
        }

        return <BlockListBlock {...props} />;
    };
}, 'withColumnClasses');

/**
 * Override props assigned to save component to inject atttributes
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function applyExtraSettings(extraProps, blockType, attributes) {
    const { name: blockName } = blockType;

    if (blockName === 'core/column') {
        const { bootstrapColumns: { global, xs, sm, md, lg, xl } } = attributes;
        let columnClasses = ['col'];
        if (global || xs || sm || md || lg || xl) {
            columnClasses = [...columnClasses, ...[
                { [global]: global !== 'col' },
                { [sm]: sm },
                { [md]: md },
                { [lg]: lg },
                { [xl]: xl },
            ]];
        }

        extraProps.className = classnames(extraProps.className, columnClasses);
    }

    return extraProps;
}

/**
 * Apply Filters
 */
function applyFilters() {
    addFilter('editor.BlockEdit', 'wecodeart/editor/column/withColumnControls', withColumnControls);
    addFilter('editor.BlockListBlock', 'wecodeart/editor/column/withColumnClasses', withColumnClasses);
    addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/column/applyExtraSettings', applyExtraSettings);
}

applyFilters();
