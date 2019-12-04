/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Fragment } = wp.element;
const { Component } = wp.element;
const { SelectControl, TabPanel } = wp.components;
const { compose } = wp.compose;
const { withSelect } = wp.data;

/**
 * Internal dependencies
 */
import icons from './icons';

/**
 * BootstrapColumns
 */
class ResponsiveColumns extends Component {
    constructor() {
        super(...arguments);
        this.setColumn = this.setColumn.bind(this);
    }

    setColumn(value, breakpoint = 'global') {
        const { attributes: { bootstrapColumns }, setAttributes } = this.props;
        setAttributes({ bootstrapColumns: { ...bootstrapColumns, [breakpoint]: value } });
    }

    getSelectOptions(prefix = 'global') {
        const { select } = this.props;
        const { wecodeart: { columnsClasses } } = select('core/editor').getEditorSettings();

        const makeLabel = (option) => {
            let label = option;

            const isNumber = (string) => {
                const match = string.match(/\d+$/);
                if (match) {
                    return parseInt(match[0]);
                }
                return false;
            };

            const isFull = (string) => {
                return string.endsWith('-12');
            };

            const isAuto = (string) => {
                return string.endsWith('-auto');
            };

            if (isFull(option)) {
                label = __('Full Width', 'wecodeart');
            } else if (isNumber(option)) {
                const number = isNumber(option);
                label = sprintf(__('%s/12', 'wecodeart'), number);
            } else if (isAuto(option)) {
                label = __('Auto - Shrink', 'wecodeart');
            } else {
                label = __('Auto - Expand', 'wecodeart');
            }

            return label;
        };

        let breakpointOpts = [...columnsClasses[prefix].map(option => ({ value: option, label: makeLabel(option) }))];

        if (prefix !== 'global') {
            breakpointOpts.unshift({
                value: '',
                label: __('None', 'wecodeart')
            });
        }

        return breakpointOpts;
    }

    render() {
        const {
            label = __('Column Width - %s', 'wecodeart'),
            onChange = this.setColumn,
            attributes: {
                bootstrapColumns
            }
        } = this.props;

        return (
            <TabPanel
                className="components-base-control wecodeart-horizontal-tabs"
                activeClass="is-active"
                initialTabName="global"
                tabs={[
                    {
                        name: 'global',
                        title: icons.global,
                        className: 'wecodeart-horizontal-tabs__item wecodeart-horizontal-tabs__item--global',
                    },
                    {
                        name: 'sm',
                        title: icons.sm,
                        className: 'wecodeart-horizontal-tabs__item wecodeart-horizontal-tabs__item--sm',
                    },
                    {
                        name: 'md',
                        title: icons.md,
                        className: 'wecodeart-horizontal-tabs__item wecodeart-horizontal-tabs__item--md',
                    },
                    {
                        name: 'lg',
                        title: icons.lg,
                        className: 'wecodeart-horizontal-tabs__item wecodeart-horizontal-tabs__item--lg',
                    },
                    {
                        name: 'xl',
                        title: icons.xl,
                        className: 'wecodeart-horizontal-tabs__item wecodeart-horizontal-tabs__item--xl',
                    },
                ]}>
                {
                    (tab) => {
                        const { name: tabName } = tab;
                        const isNone = bootstrapColumns[tabName] === '';
                        return (
                            <Fragment>
                                <SelectControl
                                    className={'components-font-size-picker__select'}
                                    label={sprintf(label, tabName.toUpperCase())}
                                    value={bootstrapColumns[tabName]}
                                    onChange={(value) => onChange(value, tabName)}
                                    options={this.getSelectOptions(tabName)}
                                />
                                {isNone && <span class="wecodeart-horizontal-tabs__item-help">
                                    <small>{__('Previous breakpoint column size is used.', 'wecodeart')}</small>
                                </span>}
                            </Fragment>
                        );
                    }
                }
            </TabPanel>
        );
    }
}

export default compose(
    withSelect((select) => {
        return {
            select
        };
    }),
)(ResponsiveColumns);