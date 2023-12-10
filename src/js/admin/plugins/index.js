/**
 * WordPress dependencies
 */
const {
	i18n: {
		__,
	},
	hooks: {
		addFilter
	},
	element: {
		useState,
	}
} = wp;

const { installers = [], modules: _allModules = [], plugins: _allPlugins = [], plugins_active: _activePlugins = [] } = wecodeartPlugins || {};

import { Manager } from './Components';

import './../../../scss/admin/plugins/index.scss';

addFilter('wecodeart.admin.tabs.plugins', 'wecodeart/plugins/admin/panel', optionsPanel);
function optionsPanel(panels) {
	const [activePlugins, setActivePlugins] = useState(_activePlugins);
	const [allPlugins, setAllPlugins] = useState(_allPlugins);
	const [allModules, setAllModules] = useState(_allModules);
	const [hasChanges, setHasChanges] = useState(false);
	const extraProps = {
		installers,
		activePlugins,
		setActivePlugins,
		allPlugins,
		setAllPlugins,
		allModules,
		setAllModules,
		hasChanges,
		setHasChanges,
	};

	return [{
		name: 'manager',
		title: __('Plugins Manager', 'wecodeart'),
		render: (props) => <Manager {...{ ...props, ...extraProps }} />
	}, ...panels];
}