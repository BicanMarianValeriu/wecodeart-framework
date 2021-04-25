import classnames from 'classnames';
/**
 * WordPress dependencies.
 */
const {
    hooks: {
        addFilter
    },
    blockEditor: {
        InnerBlocks,
        useBlockProps
    }
} = wp;
const { noop, isEmpty } = lodash;
const DEFAULT_MEDIA_SIZE_SLUG = 'full';

/**
 * Override props assigned to save component to inject atttributes
 *
 * @param {Object} element      The save element.
 * @param {Object} blockType    Block type.
 * @param {Object} attributes   Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function getSaveElement(element, blockType, attributes) {
    const { name: blockName } = blockType;
    if (blockName !== 'core/media-text') {
        return element;
    }

    const {
        isStackedOnMobile,
        mediaAlt,
        mediaPosition,
        mediaType,
        mediaUrl,
        mediaId,
        imageFill,
        href,
        linkClass,
        linkTarget,
        rel,
        align,
        verticalAlignment,
    } = attributes;

    const mediaSizeSlug = attributes.mediaSizeSlug || DEFAULT_MEDIA_SIZE_SLUG;
    const newRel = isEmpty(rel) ? undefined : rel;

    const imageClasses = classnames('img-fluid', {
        [`wp-image-${mediaId}`]: mediaId && mediaType === 'image',
        [`size-${mediaSizeSlug}`]: mediaId && mediaType === 'image',
    });

    let image = (<img src={mediaUrl} alt={mediaAlt} className={imageClasses || null} />);

    if (href) {
        image = (<a className={linkClass} href={href} target={linkTarget} rel={newRel}>{image}</a>);
    }

    const mediaTypeRenders = {
        image: () => image,
        video: () => <video controls src={mediaUrl} />,
    };

    const fullContainer = ['wide', 'full'].includes(align);

    return (
        <div {...useBlockProps.save({
            className: classnames({
                [`is-vertically-aligned-${verticalAlignment}`]: verticalAlignment,
            })
        })}>
            <div className={classnames({
                'container': !fullContainer,
                'container-fluid': fullContainer,
            })}>
                <div className={classnames('row', {
                    'flex-column': isStackedOnMobile,
                    'flex-md-row': isStackedOnMobile,
                })}>
                    <figure className={classnames('col', 'wp-block-media-text__media', {
                        'wp-block-media-text__media--fill': mediaType === 'image' && imageFill,
                        'order-last': mediaPosition === 'right' && !isStackedOnMobile,
                        'order-md-last': mediaPosition === 'right' && isStackedOnMobile,
                        'gx-0': fullContainer,
                        'ratio': mediaType === 'video',
                        'ratio-16x9': mediaType === 'video',
                    })}>
                        {(mediaTypeRenders[mediaType] || noop)()}
                    </figure>
                    <div className={classnames('col', 'wp-block-media-text__content')}>
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div >
        </div >
    );
}

/**
 * Apply Filters
 */
function applyFilters() {
    addFilter('blocks.getSaveElement', 'wecodeart/blocks/media-text/save', getSaveElement);
}

applyFilters();
