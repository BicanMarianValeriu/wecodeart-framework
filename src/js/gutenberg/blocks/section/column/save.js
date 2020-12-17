/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
    blockEditor: { InnerBlocks, useBlockProps }
} = wp;

export default function save({ attributes }) {
    const {
        verticalAlignment,
        bootstrapColumns: { global, xs, sm, md, lg, xl },
    } = attributes;

    let columnClasses = ['col'];
    if (global || xs || sm || md || lg || xl) {
        columnClasses = [...columnClasses, ...[
            { [global]: global !== 'col' },
            { [sm]: sm },
            { [md]: md },
            { [lg]: lg },
            { [xl]: xl },
        ]];
    }

    return (
        <div {...useBlockProps.save({
            className: classnames('wca-column', columnClasses, {
                [`align-self-${verticalAlignment}`]: verticalAlignment,
            }),
        })}>
            <InnerBlocks.Content />
        </div>
    );
}