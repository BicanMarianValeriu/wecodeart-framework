/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Fragment } = wp.element;
const { Component } = wp.element;
const { SelectControl, TabPanel } = wp.components;

/**
 * Internal dependencies
 */
import icons from './icons';

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

            if (isFull(option)) {
                label = __('Full Width', 'wecodeart');
            } else if (isNumber(option)) {
                const number = isNumber(option);
                label = sprintf(__('%s/12', 'wecodeart'), number);
            } else {
                label = __('Fill - Remaining', 'wecodeart');
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
                        const isNone = bootstrapColumns[tab.name] === '';
                        return (
                            <Fragment>
                                <SelectControl
                                    className={'components-font-size-picker__select'}
                                    label={sprintf(label, tab.name.toUpperCase())}
                                    value={bootstrapColumns[tab.name]}
                                    onChange={(value) => onChange(value, tab.name)}
                                    options={this.getSelectOptions(tab.name)}
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

export default ResponsiveColumns;