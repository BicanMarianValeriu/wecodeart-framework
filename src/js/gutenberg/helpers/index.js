/**
 * External dependencies
 */
const { pick, get, findIndex } = lodash;

// Pick image media attributes.
export const pickRelevantMediaFiles = (image, images) => {
    const imageProps = pick(image, ['alt', 'id', 'link', 'caption', 'imgLink']);
    imageProps.url = get(image, ['sizes', 'large', 'url']) || get(image, ['media_details', 'sizes', 'large', 'source_url']) || image.url;
    const imgKey = findIndex(images, (img) => img.url === imageProps.url);
    imageProps.imgLink = imgKey >= 0 ? images[imgKey].imgLink : '';
    return imageProps;
};

// Define accepted media for gallery blocks.
export const ALLOWED_GALLERY_MEDIA_TYPES = ['image'];