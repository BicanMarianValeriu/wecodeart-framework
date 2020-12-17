/**
 * WordPress dependencies
 */
const {
	i18n: {
		__,
	},
	blockLibrary: {
		registerCoreBlocks
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
		useEffect,
		useState,
		render,
	},
	components: {
		TabPanel,
		Panel,
		PanelBody,
		PanelRow,
	}
} = wp;

/* Settings */
import { License, CustomCSS } from './settings';
import { GettingStarted, Extensions, Notices } from './components';

import './../../scss/admin/admin.scss';

const WeCodeArt = () => {
	const { currentUser, version, editorSettings: jsonSettings } = wecodeart;
	const { createNotice } = useDispatch('core/notices');
	const {
		editorSettings,
		wecodeartSettings,
		saveEntityRecord,
		isRequesting,
	} = useSelect(select => {
		const { getEntityRecord } = select('core');
		const { isResolving } = select('core/data');
		const { saveEntityRecord } = dispatch('core');
		const isRequesting = isResolving('core', 'getEntityRecord', ['wecodeart', 'settings']);

		return {
			isRequesting,
			saveEntityRecord,
			wecodeartSettings: getEntityRecord('wecodeart', 'settings'),
			editorSettings: select('core/editor').getEditorSettings(),
		};
	});

	let getSettings = editorSettings.wecodeart;

	if (typeof getSettings === 'undefined' && typeof jsonSettings !== 'undefined') {
		getSettings = JSON.parse(jsonSettings).settings;
	}

	let tabs = [{
		name: 'wca-getting-started',
		title: __('Getting Started', 'wecodeart'),
		className: 'wca-getting-started',
		render: <GettingStarted />
	}];

	const extensions = applyFilters('wecodeart.admin.extensions', []);

	if (extensions.length) {
		tabs = [...tabs, {
			name: 'wca-extensions',
			title: __('Extensions', 'wecodeart'),
			className: 'wca-extensions',
			render: <Extensions {...{
				saveEntityRecord,
				isRequesting,
				wecodeartSettings,
				createNotice,
				extensions,
			}} />
		}];
	}

	tabs = [
		...tabs,
		// {
		// 	name: 'wca-license',
		// 	title: __('License(s)', 'wecodeart'),
		// 	className: 'wca-license',
		// 	render: <License {...{
		// 		saveEntityRecord,
		// 		wecodeartSettings,
		// 		isRequesting,
		// 		createNotice,
		// 	}} />
		// },
		{
			name: 'wca-customcss',
			title: __('Custom CSS', 'wecodeart'),
			className: 'wca-customcss',
			render: <CustomCSS {...{
				saveEntityRecord,
				isRequesting,
				wecodeartSettings,
				createNotice,
			}} />
		}
	];

	const [initialTab, setInitialTab] = useState('');
	useEffect(() => {
		const { hash = '' } = document.location;
		setInitialTab(hash.replace('#', ''));
	}, [wecodeartSettings]);

	const SettingsPanel = () => (
		<TabPanel className="wecodeart-tab-panel"
			activeClass="active-tab"
			initialTabName={initialTab}
			onSelect={(tab) => document.location.hash = tab}
			tabs={tabs}>
			{(tab) => tab.render}
		</TabPanel>
	);

	const MainPanel = () => (
		<Panel>
			<PanelBody opened={true}>
				<div className="components-panel__header">
					<p className="wecodeart-panel__header-hint">{__('Appearance → WeCodeArt', 'wecodeart')}</p>
					<h2>{__('Getting Started with', 'wecodeart')} <strong>WeCodeArt Framework</strong><code>{version}</code></h2>
					<p>{__(`Congratulations ${currentUser}! You\'ve just unlocked more Gutenberg block editor tools for easier editing and better workflow.`, 'wecodeart')}</p>
				</div>
				<PanelRow>
					<SettingsPanel />
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
			kind: 'core', 		// namespace
			baseURL: '/wp/v2/settings'  // API path without /wp-json
		},
		{
			name: 'settings',	// route name
			kind: 'wecodeart', 	// namespace
			baseURL: '/wecodeart/v1/settings'  // API path without /wp-json
		}
	]);
	// Register Core Blocks
	registerCoreBlocks();
	// Render Admin
	render(<WeCodeArt />, document.getElementById('wecodeart'));
});
