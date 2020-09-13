/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
    blockEditor: { InnerBlocks }
} = wp;

export default function save({ attributes }) {
    const {
        customWidth,
        verticalAlignment,
        bootstrapColumns: { global, xs, sm, md, lg, xl }
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

    const className = classnames('wca-column', columnClasses, {
        [`align-self-${verticalAlignment}`]: verticalAlignment,
    });

    let style;
    if (Number.isFinite(customWidth)) {
        style = { flexBasis: customWidth + '%' };
    }

    return (
        <div className={className} style={style}>
            <InnerBlocks.Content />
        </div>
    );
}