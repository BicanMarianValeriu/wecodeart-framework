/**
 * Internal dependencies
 */
import icons from './icons';

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Component } = wp.element;
const { RangeControl, TabPanel } = wp.components;

class ResponsiveTabsControl extends Component {
    constructor() {
        super(...arguments);
        this.setGutterTo = this.setGutterTo.bind(this);
        this.setGutterMobileTo = this.setGutterMobileTo.bind(this);
    }

    setGutterTo(value) {
        this.props.setAttributes({ gutter: value });
    }

    setGutterMobileTo(value) {
        this.props.setAttributes({ gutterMobile: value });
    }

    render() {
        const {
            label = __('Gutter', 'wecodeart'),
            max = 50,
            min = 0,
            onChange = this.setGutterTo,
            onChangeMobile = this.setGutterMobileTo,
            step = 5,
            value = this.props.attributes.gutter,
            valueMobile = this.props.attributes.gutterMobile,
        } = this.props;

        return (
            <TabPanel
                className="components-base-control wecodeart-responsive-tabs"
                activeClass="is-active"
                initialTabName="desk"
                tabs={[
                    {
                        name: 'desk',
                        title: icons.desktopChrome,
                        className: 'wecodeart-responsive-tabs__item wecodeart-responsive-tabs__item--desktop',
                    },
                    {
                        name: 'mobile',
                        title: icons.mobile,
                        className: 'wecodeart-responsive-tabs__item wecodeart-responsive-tabs__item--mobile',
                    },
                ]}>
                {
                    (tab) => {
                        if ('mobile' === tab.name) {
                            return (
                                <RangeControl
                                    label={sprintf(
                                        /* translators: %s: values associated with CSS syntax, 'Width', 'Gutter', 'Height in pixels', 'Width' */
                                        __('Mobile %s', 'wecodeart'),
                                        label
                                    )}
                                    value={valueMobile}
                                    onChange={(valueMobile) => onChangeMobile(valueMobile)}
                                    min={min}
                                    max={max}
                                    step={step}
                                />
                            );
                        }
                        return (
                            <RangeControl
                                label={label}
                                value={value}
                                onChange={(value) => onChange(value)}
                                min={min}
                                max={max}
                                step={step}
                            />
                        );
                    }
                }
            </TabPanel>
        );
    }
}

export default ResponsiveTabsControl;