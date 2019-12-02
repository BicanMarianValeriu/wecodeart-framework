/**
 * Background Video.
 *
 * @param {Object} attributes The attributes.
 * @returns {string} html content.
 */
function BackgroundVideo(attributes) {
    const {
        backgroundImg,
        backgroundType,
        videoMuted,
        videoLoop,
    } = attributes;

    return [
        backgroundType === 'video' && backgroundImg ?
            <div className="wecodeart-video-bg position-absolute overflow-hidden w-100 h-100 pin-t pin-r pin-b pin-l">
                <video className="w-100 h-100 bg-center-center object-cover object-position" playsinline="" autoPlay="" muted={videoMuted} loop={videoLoop} src={backgroundImg}></video>
            </div> :
            null,
    ];
}

export default BackgroundVideo;