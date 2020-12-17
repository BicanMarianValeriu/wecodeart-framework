/**
 * Internal dependencies
 */
import { ALLOWED_BG_MEDIA_TYPES } from './';

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { mediaUpload } = wp.blockEditor;
const { DropZone: CoreDropzone } = wp.components;

class DropZone extends Component {
    constructor() {
        super(...arguments);
        this.addFile = this.addFile.bind(this);
        this.onSelectFile = this.onSelectFile.bind(this);
    }

    addFile(files) {
        mediaUpload({
            allowedTypes: ALLOWED_BG_MEDIA_TYPES,
            filesList: files,
            onFileChange: ([media]) => this.onSelectFile(media),
        });
    }

    onSelectFile(media) {
        if (media && media.url) {
            let mediaType = 'image';

            if (media.mime_type && media.mime_type.includes('video')) {
                mediaType = 'video';
            }

            this.props.setAttributes({ backgroundUrl: media.url, backgroundType: mediaType });
        }
    }

    render() {
        return (
            <Fragment>
                <CoreDropzone onFilesDrop={this.addFile} label={this.props.label} />
            </Fragment>
        );
    }
}

export default DropZone;