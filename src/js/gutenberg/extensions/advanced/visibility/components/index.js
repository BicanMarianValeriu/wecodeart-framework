/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { dispatch } = wp.data;
const { Fragment } = wp.element;
const { ToggleControl } = wp.components;

const DevicesOptions = (props) => {
	const { clientId, attributes, reloadModal, } = props;

	const { wecodeart } = attributes;

	const onSelectDevice = (device) => {
		const newValue = !wecodeart[device];

		delete wecodeart[device];

		const blockOptions = Object.assign({ [device]: newValue }, wecodeart);

		dispatch('core/block-editor').updateBlockAttributes(clientId, { wecodeart: blockOptions });

		if (reloadModal) {
			reloadModal();
		}
	};

	if (typeof wecodeart === 'undefined') {
		return;
	}

	return (
		<Fragment>
			<ToggleControl
				label={__('Hide on Mobile', 'wecodeart')}
				checked={typeof wecodeart.mobile !== 'undefined' && !wecodeart.mobile}
				onChange={() => onSelectDevice('mobile')}
			/>
			<ToggleControl
				label={__('Hide on Tablet', 'wecodeart')}
				checked={typeof wecodeart.tablet !== 'undefined' && !wecodeart.tablet}
				onChange={() => onSelectDevice('tablet')}
			/>
			<ToggleControl
				label={__('Hide on Desktop', 'wecodeart')}
				checked={typeof wecodeart.desktop !== 'undefined' && !wecodeart.desktop}
				onChange={() => onSelectDevice('desktop')}
			/>
		</Fragment>
	);
};

export default DevicesOptions;