/**
 * WordPress dependencies
 */
const {
	i18n: {
		__,
	},
	hooks: {
		applyFilters
	},
	data: {
		useSelect,
		useDispatch,
		dispatch
	},
	element: {
		useRef,
		useEffect,
		render,
	},
	components: {
		TabPanel,
		Panel,
		PanelBody,
		PanelRow,
	}
} = wp;

/**
 * Localization
 */
const {
	theme: {
		version: themeVersion
	}
} = wecodeart;

/**
 * Components
 */
import { GettingStarted, SubPanel, Licenses, Notices } from './components';

/**
 * Styles
 */
import './../../scss/admin/index.scss';

// Core
const WeCodeArt = () => {
	const { createNotice: coreCreateNotice } = useDispatch('core/notices');

	const createNotice = (type, desc, opts) => {
		return coreCreateNotice(type, desc, {
			isDismissible: true,
			type: 'snackbar',
			...opts
		});
	};

	const {
		settings,
		saveEntityRecord,
		editEntityRecord,
		deleteEntityRecord,
		isRequesting,
	} = useSelect(select => {
		const { isResolving } = select('core/data');
		const { getEntityRecord } = select('core');
		const { saveEntityRecord, editEntityRecord, deleteEntityRecord } = dispatch('core');

		return {
			saveEntityRecord,
			editEntityRecord,
			deleteEntityRecord,
			isRequesting: isResolving('core', 'getEntityRecord', ['wecodeart', 'settings']),
			settings: getEntityRecord('wecodeart', 'settings'),
		};
	});

	const saveSettings = (formData, callback = () => { }) => {
		const value = Object.keys(formData).reduce((result, key) => {
			result[key] = formData[key] === '' ? 'unset' : formData[key];

			return result;
		}, {});

		saveEntityRecord('wecodeart', 'settings', value).then(callback);
	}

	const tabProps = { settings, wecodeartSettings: settings, saveSettings, isRequesting, createNotice, saveEntityRecord, editEntityRecord, deleteEntityRecord };

	const tabs = applyFilters('wecodeart.admin.tabs', [
		{
			name: 'intro',
			title: __('Getting Started', 'wecodeart'),
			className: 'wecodeart-intro',
			render: <GettingStarted />
		},
		...(applyFilters('wecodeart.admin.tabs.plugins', []).length
			? [
				{
					name: 'plugins',
					title: __('Plugins', 'wecodeart'),
					className: 'wecodeart-plugins',
					render: <SubPanel {...tabProps} tabs={applyFilters('wecodeart.admin.tabs.plugins', [])} />
				}
			]
			: []
		),
		...(applyFilters('wecodeart.admin.tabs.themes', []).length
			? [
				{
					name: 'themes',
					title: __('Themes', 'wecodeart'),
					className: 'wecodeart-themes',
					render: <SubPanel {...tabProps} tabs={applyFilters('wecodeart.admin.tabs.themes', [])} />
				}
			]
			: []
		),
		{
			name: 'license',
			title: __('License(s)', 'wecodeart'),
			className: 'wecodeart-license',
			render: <Licenses {...tabProps} />
		}
	]);

	const urlParams = new URLSearchParams(window.location.search);
	const requestedTab = urlParams.get('tab');
	const initialTab = requestedTab ? tabs.find(({ name }) => name === requestedTab)?.name : tabs[0]?.name;

	const updateUrl = (tabName) => {
		urlParams.set('tab', tabName);

		const { location: { protocol, host, pathname, hash } } = window;

		if (history.pushState) {
			const newUrl = `${protocol}//${host}${pathname}?${urlParams.toString()}${hash}`;

			return window.history.replaceState({ path: newUrl }, '', newUrl);
		}

		return window.location.search = urlParams.toString();
	};

	const scriptRef = useRef(null);

	useEffect(() => {
		if (!settings) return;

		scriptRef.current = document.createElement('script');
		scriptRef.current.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';

		scriptRef.current.onload = () => {
			PayPal.Donation.Button({
				env: 'production',
				hosted_button_id: 'PV9A4JDX84Z3W',
				image: {
					src: 'https://pics.paypal.com/00/s/MzMzMTdhOWItZmYxZS00MjcwLWIyNmItNDRiYzhhNGZhOWI0/file.PNG',
					alt: __('Donate with PayPal button', 'wecodeart'),
					title: __('Support the development of WeCodeArt Framework!', 'wecodeart'),
				},
			}).render('#donate-button');
		};

		document.head.appendChild(scriptRef.current);

		return () => {
			document.head.removeChild(scriptRef.current);
		};
	}, [settings]);

	const MainPanel = () => (
		<Panel>
			<PanelBody opened={true}>
				<div className="components-panel__header">
					<div className="grid">
						<div className="g-col-12 g-col-md-8 g-col-lg-10">
							<p className="wecodeart-panel__header-hint">{__('Appearance', 'wecodeart')} → WeCodeArt</p>
							<h2><strong>WeCodeArt Framework</strong><code>{themeVersion}</code></h2>
						</div>
						<div className="g-col-12 g-col-md-4 g-col-lg-2 align-self-end">
							<div id="donate-button-container">
								<div id="donate-button"></div>
							</div>
						</div>
					</div>
				</div>
				<PanelRow>
					<TabPanel className="wecodeart-tab-panel"
						activeClass="active-tab"
						initialTabName={initialTab}
						onSelect={updateUrl}
						tabs={tabs}>
						{({ render }) => render}
					</TabPanel>
				</PanelRow>
			</PanelBody>
		</Panel>
	);

	return (
		<>
			<MainPanel />
			<Notices />
		</>
	);
};

wp.domReady(() => {
	// Expose Settings
	dispatch('core').addEntities([
		{
			name: 'settings',	// route name
			kind: 'wecodeart', 	// namespace
			baseURL: '/wecodeart/v1/settings'  // API path without /wp-json
		},
		{
			name: 'notifications',	// route name
			kind: 'wecodeart', 		// namespace
			baseURL: '/wecodeart/v1/notifications'	// API path without /wp-json
		}
	]);
	// Render Admin
	render(<WeCodeArt />, document.getElementById('wecodeart'));
});
