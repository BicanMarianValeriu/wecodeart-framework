/**
 * External dependencies
 */
const {
    i18n: {
        __
    },
    blockEditor: {
        useBlockProps,
    },
    components: {
        Placeholder,
    }
} = wp;

const Edit = () => {
    const blockProps = useBlockProps();
    return (
        <div {...blockProps}>
            <Placeholder
                style={{ backgroundColor: 'transparent' }}
                label={__('Content Area', 'wecodeart')}
                instructions={__('This block renders the content area (loop/sidebar) as a block.', 'wecodeart')}
            />
        </div>
    );
};

export default Edit;