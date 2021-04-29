/**
 * WordPress dependencies
 */
const {
    apiFetch,
    data: {
        select,
        subscribe,
        dispatch
    },
} = wp;

const handleNotice = ({ message }) => {
    const { createNotice } = dispatch('core/notices');

    return createNotice('success', message, {
        isDismissible: true,
        type: 'snackbar',
    });
};

let checked = true;
let reusableBlocks = {};

export default subscribe(() => {
    const { __experimentalReusableBlocks } = select('core/block-editor').getSettings();
    const {
        getCurrentPostId,
        isSavingPost,
        isPublishingPost,
        isAutosavingPost,
        isCurrentPostPublished,
        __experimentalIsSavingReusableBlock
    } = select('core/editor');
    const { isSavingEntityRecord } = select('core');

    let isSavingReusableBlock;
    if (__experimentalIsSavingReusableBlock) {
        isSavingReusableBlock = id => __experimentalIsSavingReusableBlock(id);
    } else {
        isSavingReusableBlock = id => isSavingEntityRecord('postType', 'wp_block', id);
    }

    const isAutoSaving = isAutosavingPost();
    const isPublishing = isPublishingPost();
    const isSaving = isSavingPost();
    const getReusableBlocks = __experimentalReusableBlocks || [];
    const postPublished = isCurrentPostPublished();

    /**
     * Handle Reusable Blocks
     */
    getReusableBlocks.map(({ id, isTemporary }) => {
        if (id) {
            const isBlockSaving = isSavingReusableBlock(id);

            if (isBlockSaving && !isTemporary) {
                reusableBlocks[id] = { id, isSaving: true };
            }

            if (!isBlockSaving && !isTemporary && !!reusableBlocks[id]) {
                if (id === reusableBlocks[id].id && (!isBlockSaving && reusableBlocks[id].isSaving)) {
                    reusableBlocks[id].isSaving = false;
                    apiFetch({ path: `wecodeart/v1/save_block_meta/${id}`, method: 'POST' }).then(handleNotice);
                }
            }
        }
    });

    /**
     * Handle Normal Blocks
     */
    if ((isPublishing || (postPublished && isSaving)) && !isAutoSaving) {
        checked = false;
    } else {
        if (!checked) {
            apiFetch({ path: `wecodeart/v1/save_post_meta/${getCurrentPostId()}`, method: 'POST' }).then(handleNotice);
            checked = true;
        }
    }
});