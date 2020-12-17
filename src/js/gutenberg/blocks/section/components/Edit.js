/**
 * External dependencies
 */
import classnames from 'classnames';
import { getBackgroundStyles } from './../../../controls/background';
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
        createBlocksFromInnerBlocksTemplate
    },
    blockEditor: {
        InspectorControls,
        InnerBlocks,
        BlockControls,
        BlockVerticalAlignmentToolbar,
        __experimentalBlockVariationPicker,
        useBlockProps,
    },
    components: {
        PanelBody,
        ToggleControl,
        Button,
        ToolbarGroup,
        MenuGroup,
        MenuItem,
        Dropdown,
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
// const wcaCBFIBT = (a) => map(a, ([name, attr, blocks = []]) => createBlock(name, attr, wcaCBFIBT(blocks)));

// Note this uses __experimentalGetPreviewDeviceType, but has a fallback for older versions of Gutenberg.
// The fallback will be removed once WordPress contains supports for __experimentalGetPreviewDeviceType
function EditContainer(props) {
    const {
        isSelected,
        className,
        attributes = {},
        deviceType,
        setDeviceType,
        setAttributes,
        updateAlignment,
    } = props;

    const { align, verticalAlignment, container, gutters } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, 'wca-section', {
            [`align${align}`]: align,
            'wp-block-wca-layout--mobile': deviceType === 'Mobile',
            'wp-block-wca-layout--tablet': deviceType === 'Tablet',
            'wp-block-wca-layout--desktop': deviceType === 'Desktop',
        }),
        style: getBackgroundStyles(attributes),
    });

    return (
        <>
            <div {...blockProps} >
                <div className={classnames({
                    'wca-overlay-grid': true,
                    'wca-overlay-grid--no-gutters': container && gutters,
                })}>
                    {times(getGridWidth(deviceType)).map((i) => <div className="wca-overlay-grid__column" key={i} />)}
                </div>
                <div className={classnames('wca-section__container', {
                    'container': container && ['full', 'wide'].includes(align) === false,
                    'container-fluid': container && ['full', 'wide'].includes(align) === true,
                })}>
                    <InnerBlocks {...{
                        renderAppender: isSelected ? () => <InnerBlocks.ButtonBlockAppender /> : false,
                        allowedBlocks: ALLOWED_BLOCKS,
                        orientation: 'horizontal',
                        passedProps: {
                            className: classnames('wca-section__row', 'row', {
                                [`align-items-${verticalAlignment}`]: verticalAlignment,
                                'no-gutters': container && gutters,
                            }),
                        }
                    }} />
                </div>
            </div>
            <InspectorControls>
                <PanelBody
                    title={__('Section settings', 'wecodeart')}
                    initialOpen={false}
                    className="components-panel__body--wecodeart-panel"
                >
                    <ToggleControl
                        label={__('Enable container wrapper?', 'wecodeart')}
                        checked={!!container}
                        onChange={() => setAttributes({ container: !container })}
                    />
                    {!!container && <ToggleControl
                        label={__('Disable gutters?', 'wecodeart')}
                        checked={!!gutters}
                        onChange={() => setAttributes({ gutters: !gutters })}
                    />}
                </PanelBody>
            </InspectorControls>
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
                onSelect={(nextVariation = defaultVariation) => {
                    if (nextVariation.attributes) {
                        setAttributes(nextVariation.attributes);
                    }
                    if (nextVariation.innerBlocks) {
                        replaceInnerBlocks(clientId, createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks));
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