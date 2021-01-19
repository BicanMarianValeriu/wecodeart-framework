/**
 * WordPress Dependencies
 */
const { camelCase, pick } = lodash;

const {
	i18n: { __ },
	components: { ToggleControl, PanelBody },
	blockEditor: { InspectorControls },
} = wp;

const Inspector = (props) => {
	const { attributes, setAttributes, reloadModal, isDisabledDevices } = props;

	const { wecodeart } = attributes;

	if (typeof wecodeart === undefined || isDisabledDevices) {
		return;
	}

	const devices = pick(wecodeart, ['mobile', 'tablet', 'desktop']);

	const onSelectDevice = (device) => {
		const newValue = !wecodeart[device];

		delete wecodeart[device];

		const blockOptions = Object.assign({ [device]: newValue }, wecodeart);

		setAttributes({ wecodeart: blockOptions });

		if (reloadModal) {
			reloadModal();
		}
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Visibility', 'wecodeart')}
					initialOpen={false}
					className="wecodeart-panel"
				>
					<p>
						<small>{__('Attention: The display settings will only take effect once you are on the live page, and not while you\'re editing in Gutenberg.', 'wecodeart')}</small>
					</p>
					{Object.keys(devices).map(k => {
						return (
							<ToggleControl
								key={k}
								label={sprintf(__('Hide on %s', 'wecodeart'), camelCase(k))}
								checked={!devices[k]}
								onChange={() => onSelectDevice(k.toString())}
							/>
						);
					})}
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;