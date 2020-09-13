/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import ResponsiveColumns from './../../../controls/bootstrap-columns';
import { getBackgroundStyles } from './../../../controls/background';

/**
 * WordPress dependencies
 */
const {
    i18n: { __ },
    blockEditor: {
        InnerBlocks,
        BlockControls,
        BlockVerticalAlignmentToolbar,
        InspectorControls,
        __experimentalBlock: Block,
    },
    components: {
        PanelBody,
        RangeControl
    },
    data: {
        useSelect,
        useDispatch
    }
} = wp;

export default function edit(props) {
    const {
        attributes,
        setAttributes,
        clientId,
    } = props;

    const {
        customWidth,
        verticalAlignment,
        bootstrapColumns: { global, xs, sm, md, lg, xl }
    } = attributes;

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

    const className = classnames('wca-column', columnClasses, {
        [`align-self-${verticalAlignment}`]: verticalAlignment,
    });

    const { blocksCount, rootClientId } = useSelect((select) => {
        const { getBlockOrder, getBlockRootClientId } = select('core/block-editor');

        return {
            blocksCount: getBlockOrder(clientId).length,
            rootClientId: getBlockRootClientId(clientId),
        };
    }, [clientId]);

    const { updateBlockAttributes } = useDispatch('core/block-editor');

    const updateAlignment = (verticalAlignment) => {
        // Update own alignment.
        setAttributes({ verticalAlignment });
        // Reset parent Columns block.
        updateBlockAttributes(rootClientId, { verticalAlignment: null });
    };

    const hasWidth = Number.isFinite(customWidth);

    let style = {};

    if (hasWidth) {
        style = { flexBasis: customWidth + '%' };
    }

    style = { ...style, ...getBackgroundStyles(attributes) };

    return (
        <>
            <BlockControls>
                <BlockVerticalAlignmentToolbar
                    onChange={updateAlignment}
                    value={verticalAlignment}
                />
            </BlockControls>
            <InspectorControls>
                <PanelBody title={__('Column settings')}>
                    <RangeControl
                        label={__('Custom Width')}
                        value={customWidth || ''}
                        onChange={(customWidth) => setAttributes({ customWidth })}
                        min={0}
                        max={100}
                        step={1}
                        allowReset
                        placeholder={customWidth === undefined ? __('Auto') : undefined}
                    />
                    <p className="components-base-control__label">{
                        __('Bootstrap columns uses mobile-first approach.', 'wecodeart')
                    }</p>
                    <ResponsiveColumns {...props} />
                </PanelBody>
            </InspectorControls>
            <InnerBlocks
                templateLock={false}
                __experimentalTagName={Block.div}
                __experimentalPassedProps={{
                    className,
                    style,
                }}
            />
        </>
    );
} 