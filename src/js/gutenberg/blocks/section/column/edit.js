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
    },
} = wp;

export default function Edit(props) {
    const { className, attributes, clientId } = props;

    const {
        verticalAlignment,
        bootstrapColumns: { global, xs, sm, md, lg, xl },
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
        const { getBlockOrder, getBlockRootClientId } = select(
            'core/block-editor'
        );

        return {
            hasChildBlocks: getBlockOrder(clientId).length > 0,
            rootClientId: getBlockRootClientId(clientId),
        };
    }, [clientId]);

    const { updateBlockAttributes } = useDispatch('core/block-editor');

    const updateAlignment = (value) => {
        setAttributes({ verticalAlignment });
        updateBlockAttributes(rootClientId, { verticalAlignment: null });
    };

    const blockProps = useBlockProps({
        className: classnames(className, columnClasses, {
            [`align-self-${verticalAlignment}`]: verticalAlignment,
        }),
        style: getBackgroundStyles(attributes)
    });

    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        renderAppender: hasChildBlocks ? undefined : () => <InnerBlocks.ButtonBlockAppender />,
        templateLock: false,
    });

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
                    <p className="components-base-control__label">{
                        __('Bootstrap columns uses mobile-first approach.', 'wecodeart') + ' ' +
                        __('*Currently the preview does not work unless you resize the browser window. ', 'wecodeart') + ' ' +
                        __('See frontend for a better preview.', 'wecodeart')
                    }</p>
                    <ResponsiveColumns {...props} />
                </PanelBody>
            </InspectorControls>
            <div {...innerBlocksProps} />
        </>
    );
};