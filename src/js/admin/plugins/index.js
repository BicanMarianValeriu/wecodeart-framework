/**
 * WordPress dependencies
 */
const {
	i18n: {
		__,
		sprintf
	},
	hooks: {
		addFilter
	},
	components: {
		Spinner,
		Button,
	},
	element: {
		useState,
	}
} = wp;

const { active: _activePlugins, all: _allPlugins, installers: plugins = [] } = wecodeartPlugins;

import { Plugin } from './Components';

import './../../../scss/admin/plugins/index.scss';

addFilter('wecodeart.admin.extensions', 'wecodeart/plugins/admin/panel', optionsPanel);
function optionsPanel(panels) {
	return [{
		name: 'manager',
		title: __('Plugin Manager', 'wecodeart'),
		render: (props) => <Options {...props} />
	}, ...panels];
}

const Options = ({ createNotice }) => {
	const [activePlugins, setActivePlugins] = useState(_activePlugins);
	const [allPlugins, setAllPlugins] = useState(_allPlugins);
	const [hasChanges, setHasChanges] = useState(false);
	const [reloading, setReloading] = useState(false);

	const getPluginDir = ({ slug, source = 'wordpress' }) => {
		let dir = slug;

		if (!slug) {
			return dir;
		}

		switch (source) {
			case 'github':
				dir = slug.replace(/^.*\//, '');
				break;
			case 'custom':
				dir = slug.substring(slug.lastIndexOf('/') + 1, slug.lastIndexOf('.zip'));
				break;
			default:
				dir = slug.replace(/\/[^/]*$/, '');
				break;
		}

		return dir;
	}

	const handleNotice = (message) => {
		setReloading(false);
		setHasChanges(true);

		return createNotice('success', message);
	};

	const hasRecommendedPlugins = plugins.filter(({ recommended, ...rest }) => recommended && allPlugins.includes(getPluginDir(rest)) === false);

	const extraPluginProps = { activePlugins, setActivePlugins, allPlugins, setAllPlugins, getPluginDir, handleNotice };

	return (
		<>
			{hasRecommendedPlugins.length ? <div className="components-notice is-info flex-column align-items-start m-0 mb-3">
				<p>{
					sprintf(
						__('Your theme has recommended the following plugins: %s. Would you like to install them?', 'wecodeart'),
						hasRecommendedPlugins.map(({ title }) => title).join(', ')
					)
				}</p>
				<p>
					<Button className="button" isPrimary icon={reloading && <Spinner />} onClick={() => {
						setReloading(true);

						const formData = new FormData();
						formData.append('action', 'wca_manage_plugins');
						formData.append('type', 'install');
						formData.append('plugins', JSON.stringify(hasRecommendedPlugins.map(({ slug, source }) => ({ slug, source }))));

						return fetch(ajaxurl, {
							method: 'POST',
							body: formData
						}).then(r => r.json()).then(({ data: { message = '', success = [] } = {} }) => {
							if (success.length) {
								setAllPlugins([...allPlugins, ...success.map(({ slug, source }) => getPluginDir({ slug, source }))]);
							}
							handleNotice(message);
						});
					}} {...{ disabled: reloading }} >{reloading ? '' : __('Install', 'wecodeart')}</Button>
				</p>
			</div> : null}
			<div className="grid grid--installables mb-3">
				{plugins.map((props) => <Plugin {...{ ...props, ...extraPluginProps }} />)}
			</div>
			<Button className="button" isPrimary icon={reloading && <Spinner />} onClick={() => {
				setReloading(true);
				window.location.reload();
			}} {...{ disabled: !hasChanges }} >
				{reloading ? '' : __('Reload', 'wecodeart')}
			</Button>
		</>
	);
};