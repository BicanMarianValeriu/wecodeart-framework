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
        gutters,
        className,
    } = attributes;
    
    return (
        <div {...useBlockProps.save({
            className: classnames(className, 'wca-section', {
                [`align${align}`]: align,
            })
        })}>
            <div className={classnames('wca-section__container', {
                'container': container && ['full', 'wide'].includes(align) === false,
                'container-fluid': container && ['full', 'wide'].includes(align) === true,
            })}>
                <div className={classnames('wca-section__row', 'row', {
                    [`align-items-${verticalAlignment}`]: verticalAlignment,
                    'no-gutters': container && gutters,
                })}>
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    );
}