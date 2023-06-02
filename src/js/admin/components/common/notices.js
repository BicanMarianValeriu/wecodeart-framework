/**
 * WordPress dependencies
 */
const {
    data: {
        useSelect,
        useDispatch
    },
    components: {
        SnackbarList
    },
} = wp;

export default () => {
    const notices = useSelect((select) => select('core/notices').getNotices().filter(({ type }) => type === 'snackbar'), []);
    const { removeNotice } = useDispatch('core/notices');
    return (
        <SnackbarList
            className="components-editor-notices__snackbar"
            notices={notices}
            onRemove={removeNotice}
        />
    );
};
