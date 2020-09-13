/**
 * External dependencies
 */
import classnames from 'classnames';
import { getBackgroundStyles } from './../../../controls/background';

/**
 * WordPress dependencies
 */
const {
    get,
    map,
} = lodash;

const {
    i18n: { __ },
    blocks: { createBlock },
    blockEditor: {
        InspectorControls,
        InnerBlocks,
        BlockControls,
        BlockVerticalAlignmentToolbar,
        __experimentalBlockVariationPicker,
        __experimentalBlock: Block,
    },
    components: {
        PanelBody,
        ToggleControl
        // RangeControl,
        // Notice
    },
    data: {
        withDispatch,
        useDispatch,
        useSelect
    }
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

const wcaCBFIBT = (a) => map(a, ([name, attr, blocks = []]) => createBlock(name, attr, wcaCBFIBT(blocks)));

const EditContainer = ({
    attributes,
    setAttributes,
    className,
    updateAlignment,
}) => {
    const { align, verticalAlignment, container, gutters } = attributes;

    const sectionClassName = classnames(className, 'wca-section', {
        [`align${align}`]: align
    });

    const containerClassName = classnames('wca-section__container', {
        'container': container && ['full', 'wide'].includes(align) === false,
        'container-fluid': container && ['full', 'wide'].includes(align) === true,
    });

    const rowClassName = classnames('wca-section__row', 'row', {
        [`align-items-${verticalAlignment}`]: verticalAlignment,
        'no-gutters': container && gutters,
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
            <Block.div className={sectionClassName} style={getBackgroundStyles(attributes)}>
                <div className={containerClassName}>
                    <InnerBlocks
                        allowedBlocks={ALLOWED_BLOCKS}
                        orientation="horizontal"
                        __experimentalTagName="div"
                        __experimentalPassedProps={{ className: rowClassName }}
                    />
                </div>
            </Block.div>
        </>
    );
};

const EditWrapper = withDispatch((dispatch, ownProps, registry) => ({
    /**
     * Update all child Column blocks with a new vertical alignment setting
     * based on whatever alignment is passed in. This allows change to parent
     * to overide anything set on a individual column basis.
     *
     * @param {string} verticalAlignment the vertical alignment setting
     */
    updateAlignment(verticalAlignment) {
        const { clientId, setAttributes } = ownProps;
        const { updateBlockAttributes } = dispatch('core/block-editor');
        const { getBlockOrder } = registry.select('core/block-editor');

        // Update own alignment.
        setAttributes({ verticalAlignment });

        // Update all child Column Blocks to match
        const innerBlockClientIds = getBlockOrder(clientId);
        innerBlockClientIds.forEach((id) => updateBlockAttributes(id, { verticalAlignment }));
    },
}))(EditContainer);


const Edit = (props) => {
    const { clientId, name } = props;
    const {
        blockType,
        defaultVariation,
        hasInnerBlocks,
        variations,
    } = useSelect(
        (select) => {
            const { getBlockVariations, getBlockType, getDefaultBlockVariation } = select('core/blocks');

            return {
                blockType: getBlockType(name),
                defaultVariation: getDefaultBlockVariation(name, 'block'),
                hasInnerBlocks: select('core/block-editor').getBlocks(clientId).length > 0,
                variations: getBlockVariations(name, 'block'),
            };
        },
        [clientId, name]
    );

    if (hasInnerBlocks) {
        return <EditWrapper {...props} />;
    }

    const { replaceInnerBlocks } = useDispatch('core/block-editor');

    return (
        <Block.div>
            <__experimentalBlockVariationPicker
                icon={get(blockType, ['icon', 'src'])}
                label={get(blockType, ['title'])}
                variations={variations}
                onSelect={(nextVariation = defaultVariation) => {
                    if (nextVariation.attributes) {
                        props.setAttributes(nextVariation.attributes);
                    }
                    if (nextVariation.innerBlocks) {
                        replaceInnerBlocks(props.clientId, wcaCBFIBT(nextVariation.innerBlocks));
                    }
                }}
                allowSkip
            />
        </Block.div>
    );
};

export default Edit;