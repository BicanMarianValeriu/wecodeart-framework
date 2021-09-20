/**
 * WordPress dependencies
 */
const { useSelect, useDispatch } = wp.data;
const { SnackbarList } = wp.components;

export default () => {
    const notices = useSelect((select) => select('core/notices').getNotices().filter((n) => n.type === 'snackbar'), []);
    const { removeNotice } = useDispatch('core/notices');
    return (
        <SnackbarList
            className="components-editor-notices__snackbar"
            notices={notices}
            onRemove={removeNotice}
        />
    );
};
