/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import ResponsiveColumns from './Control';

/**
 * WordPress dependencies
 */
const {
    i18n: {
        __
    },
    components: {
        PanelBody,
    },
    data: {
        useSelect,
        useDispatch
    },
    blockEditor: {
        BlockControls,
        InspectorControls,
        InnerBlocks,
        BlockVerticalAlignmentToolbar,
        useBlockProps,
        __experimentalUseInnerBlocksProps: useInnerBlocksProps,
        __experimentalGetGradientClass,
    },
} = wp;

export default function Edit(props) {
    const { clientId, className, attributes, setAttributes } = props;

    const {
        bootstrapColumns: { global, xs, sm, md, lg, xl },
        verticalAlignment,
        templateLock,
        // Background Support
        gradient,
        backgroundUrl = undefined,
        backgroundOverlay = 0,
        style: {
            color: {
                gradient: customGradient
            } = {}
        } = {}
        // End Background Support
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

    const { hasChildBlocks, rootClientId } = useSelect((select) => {
        const { getBlockOrder, getBlockRootClientId } = select('core/block-editor');

        return {
            hasChildBlocks: getBlockOrder(clientId).length > 0,
            rootClientId: getBlockRootClientId(clientId),
        };
    }, [clientId]);

    const { updateBlockAttributes } = useDispatch('core/block-editor');

    const updateAlignment = (verticalAlignment) => {
        setAttributes({ verticalAlignment });
        updateBlockAttributes(rootClientId, { verticalAlignment: null });
    };

    // BG Support
    const style = {
        background: customGradient && !backgroundUrl ? customGradient : undefined,
    };
    // End BG Support
    
    const blockProps = useBlockProps({
        className: classnames(className, columnClasses, {
            [`align-self-${verticalAlignment}`]: verticalAlignment,
        }),
        style
    });

    const innerBlocksProps = useInnerBlocksProps({}, {
        renderAppender: hasChildBlocks ? undefined : InnerBlocks.ButtonBlockAppender,
        templateLock,
    });

    return (
        <>
            <BlockControls>
                <BlockVerticalAlignmentToolbar onChange={updateAlignment} value={verticalAlignment} />
            </BlockControls>
            <InspectorControls>
                <PanelBody title={__('Column settings')} initialOpen={false}>
                    <p className="components-base-control__label">{
                        __('Bootstrap columns uses mobile-first approach.', 'wecodeart') + ' ' +
                        __('*Currently the preview does not work unless you resize the browser window. ', 'wecodeart') + ' ' +
                        __('See frontend for a better preview.', 'wecodeart')
                    }</p>
                    <ResponsiveColumns {...props} />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps} style={{ ...style, ...blockProps.style }}>
                {backgroundUrl && (gradient || customGradient) && backgroundOverlay !== 0 && (
                    <span {...{
                        className: classnames('wp-block__gradient-background', __experimentalGetGradientClass(gradient)),
                        style: customGradient ? { background: customGradient } : undefined,
                        'aria-hidden': 'true',
                    }} />
                )}
                <div {...innerBlocksProps} />
            </div>
        </>
    );
};