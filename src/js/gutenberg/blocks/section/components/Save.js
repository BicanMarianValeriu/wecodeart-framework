/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
    blockEditor: {
        InnerBlocks
    }
} = wp;

export default function save({ attributes }) {
    const {
        align,
        className,
        verticalAlignment,
        container,
        gutters,
    } = attributes;

    const sectionClassName = classnames(className, 'wca-section', {
        [`align${align}`]: align,
    });

    const containerClassName = classnames('wca-section__container', {
        'container': container && ['full', 'wide'].includes(align) === false,
        'container-fluid': container && ['full', 'wide'].includes(align) === true,
    });

    const rowClassName = classnames('wca-section__row', 'row', {
        [`align-items-${verticalAlignment}`]: verticalAlignment,
        'no-gutters': container && gutters,
    });

    return (
        <div className={sectionClassName}>
            <div className={containerClassName}>
                <div className={rowClassName}>
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    );
}