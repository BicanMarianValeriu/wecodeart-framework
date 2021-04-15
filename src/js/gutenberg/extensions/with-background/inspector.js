/**
 * WordPress dependencies
 */
const {
	i18n: { __ },
	element: { Component },
	components: {
		SelectControl,
		RangeControl,
		ToggleControl,
		PanelBody,
		Button,
		FocalPointPicker,
	},
} = wp;

const BG_POSITION_OPTS = [
	{
		value: 'top left',
		/* translators: block layout */
		label: __('Top Left', 'wecodeart'),
	},
	{
		value: 'top center',
		/* translators: block layout */
		label: __('Top Center', 'wecodeart'),
	},
	{
		value: 'top right',
		/* translators: block layout */
		label: __('Top Right', 'wecodeart'),
	},
	{
		value: 'center left',
		/* translators: block layout */
		label: __('Center Left', 'wecodeart'),
	},
	{
		value: 'center center',
		/* translators: block layout */
		label: __('Center Center', 'wecodeart'),
	},
	{
		value: 'center right',
		/* translators: block layout */
		label: __('Center Right', 'wecodeart'),
	},
	{
		value: 'bottom left',
		/* translators: block layout */
		label: __('Bottom Left', 'wecodeart'),
	},
	{
		value: 'bottom center',
		/* translators: block layout */
		label: __('Bottom Center', 'wecodeart'),
	},
	{
		value: 'bottom right',
		/* translators: block layout */
		label: __('Bottom Right', 'wecodeart'),
	},
];

const BG_REPEAT_OPTS = [
	{
		value: 'no-repeat',
		/* translators: block layout */
		label: __('No Repeat', 'wecodeart'),
	},
	{
		value: 'repeat',
		/* translators: block layout */
		label: __('Repeat', 'wecodeart'),
	},
	{
		value: 'repeat-x',
		/* translators: block layout */
		label: __('Repeat Horizontally', 'wecodeart'),
	},
	{
		value: 'repeat-y',
		/* translators: block layout */
		label: __('Repeat Vertically', 'wecodeart'),
	},
];

const BG_SIZE_OPTS = [
	{
		value: 'auto',
		/* translators: block layout */
		label: __('Auto', 'wecodeart'),
	},
	{
		value: 'cover',
		/* translators: block layout */
		label: __('Cover', 'wecodeart'),
	},
	{
		value: 'contain',
		/* translators: block layout */
		label: __('Contain', 'wecodeart'),
	},
];

class Inspector extends Component {
	constructor() {
		super(...arguments);
		this.onSelectRepeat = this.onSelectRepeat.bind(this);
	}

	onSelectRepeat(value) {
		if (value === 'no-repeat') {
			this.props.setAttributes({
				backgroundRepeat: value,
				backgroundSize: 'cover',
			});
		} else {
			this.props.setAttributes({
				backgroundRepeat: value,
				backgroundSize: 'contain',
				focalPoint: undefined,
			});
		}
	}

	render() {
		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			backgroundUrl,
			backgroundOverlay,
			backgroundPosition = 'center center',
			backgroundRepeat = 'no-repeat',
			backgroundSize = 'cover',
			backgroundType = 'image',
			focalPoint,
			hasParallax,
			videoLoop,
			videoMuted,
		} = attributes;

		return (
			<PanelBody
				title={__('Background settings', 'wecodeart')}
				initialOpen={false}
				className="components-panel__body--wecodeart-background-panel wecodeart-background-panel"
			>
				{backgroundType === 'image' && (
					<ToggleControl
						label={__('Fixed Background', 'wecodeart')}
						checked={!!hasParallax}
						onChange={(hasParallax) => {
							let attributes = { hasParallax };
							if (hasParallax) {
								attributes = { ...attributes, focalPoint: undefined };
							}
							if (!hasParallax) {
								attributes = { ...attributes, backgroundPosition: 'center center' };
							}
							setAttributes(attributes);
						}}
					/>
				)}
				{!hasParallax && FocalPointPicker && backgroundType === 'image' && backgroundRepeat !== 'repeat' && (
					<FocalPointPicker
						label={__('Focal Point', 'wecodeart')}
						className="components-focal-point-picker--wecodeart"
						url={backgroundUrl}
						value={focalPoint}
						onChange={(focalPoint) => setAttributes({ focalPoint })}
					/>
				)}
				<RangeControl
					label={__('Background Opacity', 'wecodeart')}
					value={backgroundOverlay}
					onChange={(backgroundOverlay) => setAttributes({ backgroundOverlay })}
					min={0}
					max={100}
					step={10}
				/>
				{backgroundType === 'image' && (
					<SelectControl
						label={__('Repeat', 'wecodeart')}
						className="components-background-display-select--wecodeart"
						value={backgroundRepeat ? backgroundRepeat : 'no-repeat'}
						options={BG_REPEAT_OPTS}
						onChange={(value) => this.onSelectRepeat(value)}
					/>
				)}
				{backgroundType === 'image' && hasParallax && (
					<SelectControl
						label={__('Position', 'wecodeart')}
						value={backgroundPosition ? backgroundPosition : 'center center'}
						options={BG_POSITION_OPTS}
						onChange={(backgroundPosition) => setAttributes({ backgroundPosition })}
					/>
				)}
				{backgroundType === 'image' && backgroundRepeat === 'no-repeat' && (
					<SelectControl
						label={__('Display', 'wecodeart')}
						value={backgroundSize ? backgroundSize : ''}
						options={BG_SIZE_OPTS}
						onChange={(backgroundSize) => setAttributes({ backgroundSize })}
					/>
				)}
				{backgroundType === 'video' && (
					<ToggleControl
						label={__('Mute Video', 'wecodeart')}
						help={videoMuted ? __('Muting the background video.', 'wecodeart') : __('Toggle to mute the video.', 'wecodeart')}
						checked={!!videoMuted}
						onChange={(videoMuted) => setAttributes({ videoMuted })}
					/>
				)}
				{backgroundType === 'video' && (
					<ToggleControl
						label={__('Loop Video', 'wecodeart')}
						help={videoLoop ? __('Looping the background video.', 'wecodeart') : __('Toggle to loop the video.', 'wecodeart')}
						checked={!!videoLoop}
						onChange={(videoLoop) => setAttributes({ videoLoop })}
					/>
				)}
				<Button
					className="button"
					type="button"
					icon="trash"
					label={__('Remove background', 'wecodeart')}
					style={{ display: 'flex' }}
					onClick={() => {
						setAttributes({
							backgroundUrl: '',
							backgroundOverlay: 0,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center center',
							backgroundSize: 'cover',
							hasParallax: false,
							focalPoint: undefined
						});
					}}
				>
					<span style={{ display: 'inline-block', verticalAlign: 'middle' }}>{
						sprintf(__('Remove %s', 'wecodeart'), backgroundType)
					}</span>
				</Button>
			</PanelBody>
		);
	}
}

export default Inspector;