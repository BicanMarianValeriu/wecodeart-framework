/**
 * External dependencies
 */
import classnames from 'classnames';
import { getLayouts, getGridWidth } from './../constants';

/**
 * WordPress dependencies
 */
const {
    get,
    times,
} = lodash;

const {
    i18n: {
        __
    },
    blocks: {
        createBlocksFromInnerBlocksTemplate,
    },
    blockEditor: {
        InspectorControls,
        InnerBlocks,
        BlockControls,
        BlockVerticalAlignmentToolbar,
        useBlockProps,
        __experimentalBlockVariationPicker,
        __experimentalGetGradientClass,
        __experimentalUseInnerBlocksProps: useInnerBlocksProps,
    },
    components: {
        PanelBody,
        Button,
        ToolbarGroup,
        MenuGroup,
        MenuItem,
        Dropdown,
        SelectControl
    },
    compose: {
        compose
    },
    data: {
        withSelect,
        withDispatch,
        useDispatch,
        useSelect
    },
} = wp;

/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = ['wca/column'];

// Note this uses __experimentalGetPreviewDeviceType, but has a fallback for older versions of Gutenberg.
// The fallback will be removed once WordPress contains supports for __experimentalGetPreviewDeviceType
function EditContainer(props) {
    const {
        isSelected,
        attributes = {},
        deviceType,
        setDeviceType,
        setAttributes,
        updateAlignment,
    } = props;

    const {
        align,
        verticalAlignment,
        container,
        gutter,
        gradient,
        backgroundUrl = false,
        backgroundOverlay = 0,
        style: {
            color: {
                gradient: customGradient = false
            } = {}
        } = {}
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames('wca-section', {
            [`align${align}`]: align,
            'wca-section--mobile': deviceType === 'Mobile',
            'wca-section--tablet': deviceType === 'Tablet',
            'wca-section--desktop': deviceType === 'Desktop',
        }),
    });

    const innerBlocksProps = useInnerBlocksProps({
        className: classnames('wca-section__row', 'row', {
            [`gx-${gutter}`]: gutter,
            [`align-items-${verticalAlignment}`]: verticalAlignment,
        }),
    }, {
        allowedBlocks: ALLOWED_BLOCKS,
        orientation: 'horizontal',
        renderAppender: isSelected && InnerBlocks.ButtonBlockAppender,
    });

    return (
        <>
            <BlockControls>
                <BlockVerticalAlignmentToolbar
                    onChange={updateAlignment}
                    value={verticalAlignment}
                />
                <Dropdown
                    renderToggle={({ isOpen, onToggle }) => (
                        <ToolbarGroup>
                            <Button
                                aria-expanded={isOpen}
                                onClick={onToggle}
                                icon={getLayouts().find((layout) => layout.value === deviceType).icon}
                            />
                        </ToolbarGroup>
                    )}
                    renderContent={({ onClose }) => (
                        <MenuGroup>
                            {getLayouts().map((layout) => (
                                <MenuItem
                                    key={layout.value}
                                    isSelected={layout.value === deviceType}
                                    onClick={() => setDeviceType(layout.value)}
                                    icon={layout.icon}
                                >
                                    {layout.label}
                                </MenuItem>
                            ))}
                        </MenuGroup>
                    )}
                />
            </BlockControls>
            <InspectorControls>
                <PanelBody
                    title={__('Section settings', 'wecodeart')}
                    initialOpen={false}
                    className="components-panel__body--wecodeart-panel"
                >
                    <SelectControl
                        label={__('Container', 'wecodeart')}
                        value={container}
                        options={[
                            { label: 'None', value: '' },
                            { label: 'Container', value: 'container' },
                            { label: 'Container Fluid', value: 'container-fluid' },
                        ]}
                        onChange={(container) => setAttributes({ container })}
                    />
                    <SelectControl
                        label={__('Gutter - Horizontal', 'wecodeart')}
                        value={gutter}
                        options={[
                            { label: 'None', value: 0 },
                            { label: '1', value: 1 },
                            { label: '2', value: 2 },
                            { label: '3', value: 3 },
                            { label: '4', value: 4 },
                            { label: '5', value: 5 },
                        ]}
                        onChange={(gutter) => setAttributes({ gutter: parseInt(gutter) })}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                {backgroundUrl && (gradient || customGradient) && backgroundOverlay !== 0 && (
                    <span {...{
                        className: classnames('wp-block__gradient-background', __experimentalGetGradientClass(gradient)),
                        style: customGradient
                            ? { background: customGradient }
                            : undefined,
                        'aria-hidden': 'true',
                    }} />
                )}
                <div className={classnames('wca-section__overlay')}>
                    {times(getGridWidth(deviceType)).map((i) => <div className="wca-section__overlay-col" key={i} />)}
                </div>
                <div {...{
                    className: classnames({
                        'wca-section__container': true,
                        [container]: container,
                    })
                }}>
                    <div {...innerBlocksProps} />
                </div>
            </div>
        </>
    );
};

const EditWrapper = compose([
    withDispatch((dispatch, ownProps, registry) => {
        const { clientId, setAttributes } = ownProps;
        const { updateBlockAttributes } = dispatch('core/block-editor');
        const { getBlockOrder } = registry.select('core/block-editor');

        return {
            updateAlignment(verticalAlignment) {
                // Update own alignment.
                setAttributes({ verticalAlignment });
                // Update all child Column Blocks to match
                const innerBlockClientIds = getBlockOrder(clientId);
                innerBlockClientIds.forEach((id) => updateBlockAttributes(id, { verticalAlignment }));
            },
            setDeviceType(type) {
                const { __experimentalSetPreviewDeviceType } = dispatch('core/edit-post');
                __experimentalSetPreviewDeviceType(type);
            }
        };
    }),
    withSelect((select, { clientId }) => {
        const { getBlockCount } = select('core/block-editor');
        const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');

        return {
            columns: getBlockCount(clientId),
            deviceType: __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null,
        };
    }),
])(EditContainer);

function Placeholder({ clientId, name, setAttributes }) {
    const { blockType, defaultVariation, variations } = useSelect((select) => {
        const {
            getBlockVariations,
            getBlockType,
            getDefaultBlockVariation,
        } = select('core/blocks');

        return {
            blockType: getBlockType(name),
            defaultVariation: getDefaultBlockVariation(name, 'block'),
            variations: getBlockVariations(name, 'block'),
        };
    }, [name]);
    const { replaceInnerBlocks } = useDispatch('core/block-editor');
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <__experimentalBlockVariationPicker
                icon={get(blockType, ['icon', 'src'])}
                label={get(blockType, ['title'])}
                variations={variations}
                onSelect={(next = defaultVariation) => {
                    if (next.attributes) {
                        setAttributes(next.attributes);
                    }
                    if (next.innerBlocks) {
                        replaceInnerBlocks(clientId, createBlocksFromInnerBlocksTemplate(next.innerBlocks));
                    }
                }}
                allowSkip
            />
        </div>
    );
}

const Edit = (props) => {
    const { clientId } = props;
    const hasInnerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId).length > 0, [clientId]);

    const Component = hasInnerBlocks ? EditWrapper : Placeholder;

    return <Component {...props} />;
};

export default Edit;