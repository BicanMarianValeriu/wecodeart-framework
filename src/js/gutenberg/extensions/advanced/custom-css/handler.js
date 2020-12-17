/**
 * WordPress dependencies
 */
const { debounce } = lodash;
const {
    apiFetch,
    data: {
        select,
        subscribe
    },
} = wp;

const savePostMeta = debounce(async () => {
    const { getCurrentPostId } = select('core/editor');
    await apiFetch({ path: `wecodeart/v1/save_post_meta/${getCurrentPostId()}`, method: 'POST' });
}, 1000);

let reusableBlocks = {};

export default subscribe(() => {
    // const {
    //     isCurrentPostPublished,
    //     isSavingPost,
    //     isPublishingPost,
    //     isAutosavingPost,
    //     __unstableGetReusableBlocks,
    //     __unstableIsSavingReusableBlock
    // } = select('core/editor');

    // const isAutoSaving = isAutosavingPost();
    // const isPublishing = isPublishingPost();
    // const isSaving = isSavingPost();
    // const isSavingReusableBlock = id => __unstableIsSavingReusableBlock(id);
    // const getReusableBlocks = __unstableGetReusableBlocks();
    // const postPublished = isCurrentPostPublished();

    // getReusableBlocks.map(block => {
    //     if (block) {
    //         const isBlockSaving = isSavingReusableBlock(block.id);

    //         if (isBlockSaving && !block.isTemporary) {
    //             reusableBlocks[block.id] = {
    //                 id: block.id,
    //                 isSaving: true
    //             };
    //         }

    //         if (!isBlockSaving && !block.isTemporary && !!reusableBlocks[block.id]) {
    //             if (block.id === reusableBlocks[block.id].id && (!isBlockSaving && reusableBlocks[block.id].isSaving)) {
    //                 reusableBlocks[block.id].isSaving = false;
    //                 apiFetch({ path: `wecodeart/v1/save_block_meta/${block.id}`, method: 'POST' });
    //             }
    //         }
    //     }
    // });

    // if ((isPublishing || (postPublished && isSaving)) && !isAutoSaving && !status) {
    //     savePostMeta();
    // }
});