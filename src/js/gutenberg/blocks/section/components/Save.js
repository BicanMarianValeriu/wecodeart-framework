/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
    blockEditor: {
        InnerBlocks,
        useBlockProps
    }
} = wp;

export default function save({ attributes }) {
    const {
        align,
        verticalAlignment,
        container,
        gutter,
        className,
    } = attributes;

    return (
        <div {...useBlockProps.save({
            className: classnames(className, 'wca-section', {
                [`align${align}`]: align,
            })
        })}>
            <div className={classnames('wca-section__container', {
                [container]: container
            })}>
                <div className={classnames('wca-section__row', 'row', {
                    [`gx-${gutter}`]: gutter,
                    [`align-items-${verticalAlignment}`]: verticalAlignment,
                })}>
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    );
}