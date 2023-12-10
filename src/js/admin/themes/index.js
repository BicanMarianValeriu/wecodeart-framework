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

const { installed = [], installers = [], child = false } = wecodeartThemes || {};

import { Manager } from './Components';

import './../../../scss/admin/themes/index.scss';

addFilter('wecodeart.admin.tabs.themes', 'wecodeart/themes/admin/panel', optionsPanel);
function optionsPanel(panels) {
	const [activeTheme, setActiveTheme] = useState(child || 'wecodeart');
	const [allThemes, setAllThemes] = useState(installed);
	const [hasChanges, setHasChanges] = useState(false);

	return [{
		name: 'manager',
		title: __('Themes Manager', 'wecodeart'),
		render: (props) => <Manager {...{ ...props, installers, activeTheme, setActiveTheme, allThemes, setAllThemes, hasChanges, setHasChanges }} />
	}, ...panels];
}