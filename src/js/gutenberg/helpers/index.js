/**
 * External dependencies
 */
const { pick, get, findIndex } = lodash;

// Set dim ratio.
export function overlayToClass(ratio) {
    return (ratio === 0 || ratio === 50) ? null : 'has-background-overlay-' + (10 * Math.round(ratio / 10));
}

// Pick image media attributes.
export const pickRelevantMediaFiles = (image, images) => {
    const imageProps = pick(image, ['alt', 'id', 'link', 'caption', 'imgLink']);
    imageProps.url = get(image, ['sizes', 'large', 'url']) || get(image, ['media_details', 'sizes', 'large', 'source_url']) || image.url;
    const imgKey = findIndex(images, function (img) {
        return img.url === imageProps.url;
    });
    imageProps.imgLink = imgKey >= 0 ? images[imgKey].imgLink : '';
    return imageProps;
};

// Define accepted media for gallery blocks.
export const ALLOWED_GALLERY_MEDIA_TYPES = ['image'];