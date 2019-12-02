/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { createHigherOrderComponent, compose } = wp.compose;
const { PanelBody } = wp.components;
const { withSelect } = wp.data;
const { Fragment } = wp.element;
const { addFilter } = wp.hooks;

/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies.
 */
import { restrictedBlocks } from '../../extensions/attributes';
import ResponsiveColumns from './controls';

/**
 * Override the default block element to add Font Panels.
 *
 * @param  {Function} BlockListBlock Original component
 * @return {Function} Wrapped component
 */
const enhance = compose(
    withSelect((select) => {
        return {
            selected: select('core/block-editor').getSelectedBlock(),
            select,
        };
    })
);

/**
 * Column Controls
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withColumnControls = createHigherOrderComponent((BlockEdit) => {
    return enhance((props) => {
        const {
            name: blockName,
            isSelected,
        } = props;

        if (!restrictedBlocks.includes(blockName) && blockName === 'core/column' && isSelected) {
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
    });
}, 'withColumnControls');

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
                { [sm]: sm !== 'col-sm-12' && global === 'col-12' },
                { [md]: md },
                { [lg]: lg },
                { [xl]: xl },
            ]];
        }

        extraProps.className = classnames(extraProps.className, columnClasses);
    }

    return extraProps;
}

function applyFilters() {
    addFilter('editor.BlockEdit', 'wecodeart/editor/columns/withColumnControls', withColumnControls);
    addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/columns/applyExtraSettings', applyExtraSettings);
}

applyFilters();
