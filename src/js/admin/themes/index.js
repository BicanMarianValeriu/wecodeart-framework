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
} = wp;

import { Manager } from './Components';

import './../../../scss/admin/themes/index.scss';

addFilter('wecodeart.admin.tabs.themes', 'wecodeart/themes/admin/panel', optionsPanel);
function optionsPanel(panels) {
	return [{
		name: 'manager',
		title: __('Themes Manager', 'wecodeart'),
		render: (props) => <Manager {...props} />
	}, ...panels];
}