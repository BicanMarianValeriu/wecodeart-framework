/**
 * WordPress dependencies
 */
 const {
    i18n: {
        __, sprintf
    },
	element: {
		Component
	},
    components: {
        SelectControl,
		TabPanel,
    },
    data: {
        withSelect, 
		withDispatch
    },
    compose: {
        compose,
    },
} = wp;

/**
 * Internal dependencies
 */
import icons from './../icons';

/**
 * BootstrapColumns
 */
class ResponsiveColumns extends Component {
	constructor() {
		super(...arguments);
		this.setColumn = this.setColumn.bind(this);
		// this.state = { selectedDevice: 'Desktop' };
	}

	// getDeviceType() {
	// 	return this.props.deviceType ? this.props.deviceType : this.state.selectedDevice;
	// }

	// setDeviceType(deviceType) {
	// 	if (this.props.deviceType) {
	// 		this.props.setDeviceType(deviceType);
	// 	} else {
	// 		this.setState({ selectedDevice: deviceType });
	// 	}
	// };

	setColumn(value, breakpoint = 'global') {
		const { attributes: { bootstrapColumns }, setAttributes } = this.props;
		setAttributes({ bootstrapColumns: { ...bootstrapColumns, [breakpoint]: value } });
	}

	getSelectOptions(prefix = 'global') {
		const { columnsClasses } = this.props;

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
			columnsClasses,
			attributes: {
				bootstrapColumns
			}
		} = this.props;

		if (columnsClasses === undefined) return null;

		// const deviceType = this.getDeviceType();

		let tab = 'lg';

		// if (deviceType === 'Desktop') {
		// 	tab = 'lg';
		// } else if (deviceType === 'Tablet') {
		// 	tab = 'md';
		// } else if (deviceType === 'Mobile') {
		// 	tab = 'global';
		// }

		return (
			<TabPanel
				className="components-base-control wecodeart-horizontal-tabs"
				activeClass="is-active"
				initialTabName={tab}
				onSelect={(tab) => {
					let device = 'Desktop';
					if (tab === 'global' || tab === 'sm') {
						device = 'Mobile';
					} else if (tab === 'md') {
						device = 'Tablet';
					} else if (tab === 'lg' || tab === 'xl') {
						device = 'Desktop';
					}
					// this.setDeviceType(device);
				}}
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
							<>
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
							</>
						);
					}
				}
			</TabPanel>
		);
	}
}

export default compose(
	// withDispatch((dispatch) => ({
	// 	setDeviceType(type) {
	// 		const { __experimentalSetPreviewDeviceType } = dispatch('core/edit-post');

	// 		__experimentalSetPreviewDeviceType(type);
	// 	}
	// })),
	withSelect((select) => {
		const { wecodeart: { columnsClasses = undefined } = {} } = select('core/editor').getEditorSettings();
		const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');

		return {
			deviceType: __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null,
			columnsClasses,
			select,
		};
	}),
)(ResponsiveColumns);