/**
 * External dependencies
 */
const { isEmpty } = lodash;

/**
 * Internal dependencies
 */
import ResponsiveTabsControl from '../responsive-tabs';

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Component, Fragment } = wp.element; 
const {
	SelectControl,
	RangeControl,
	ToggleControl,
	PanelBody,
	Button,
	FocalPointPicker,
} = wp.components;

class BackgroundPanel extends Component {
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
			hasOverlay,
			setAttributes,
		} = this.props;

		const {
			backgroundUrl,
			backgroundOverlay,
			backgroundPosition,
			backgroundRepeat = 'no-repeat',
			backgroundSize,
			backgroundType = 'image',
			focalPoint,
			hasParallax,
			videoLoop,
			videoMuted,
		} = attributes;

		const backgroundPositionOptions = [
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

		const backgroundRepeatOptions = [
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

		const backgroundSizeOptions = [
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

		return (
			<PanelBody
				title={__('Background settings', 'wecodeart')}
				initialOpen={false}
				className="components-panel__body--wecodeart-background-panel wecodeart-background-panel"
			>
				{backgroundUrl && (
					<Fragment>
						{backgroundType === 'image' && (
							<ToggleControl
								label={__('Fixed Background', 'wecodeart')}
								checked={!!hasParallax}
								onChange={() => setAttributes({ hasParallax: !hasParallax })}
							/>
						)}
						{!hasParallax && FocalPointPicker && backgroundType === 'image' && backgroundRepeat !== 'repeat' && (
							<FocalPointPicker
								label={__('Focal Point', 'wecodeart')}
								url={backgroundUrl}
								value={focalPoint}
								onChange={(focalPoint) => setAttributes({ focalPoint })}
								className="components-focal-point-picker--wecodeart"
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
								options={backgroundRepeatOptions}
								onChange={(nextbackgroundRepeat) => this.onSelectRepeat(nextbackgroundRepeat)}
							/>
						)}
						{hasParallax && backgroundType === 'image' && (
							<SelectControl
								label={__('Position', 'wecodeart')}
								value={backgroundPosition ? backgroundPosition : 'center center'}
								options={backgroundPositionOptions}
								onChange={(backgroundPosition) => setAttributes({ backgroundPosition })}
							/>
						)}
						{backgroundRepeat === 'no-repeat' && backgroundType === 'image' && (
							<SelectControl
								label={__('Display', 'wecodeart')}
								value={backgroundSize ? backgroundSize : 'zzzzzzz'}
								options={backgroundSizeOptions}
								onChange={(backgroundSize) => setAttributes({ backgroundSize })}
							/>
						)}
						{backgroundType === 'video' && (
							<ToggleControl
								label={__('Mute Video', 'wecodeart')}
								help={videoMuted ? __('Muting the background video.', 'wecodeart') : __('Toggle to mute the video.', 'wecodeart')}
								checked={!!videoMuted}
								onChange={() => setAttributes({ videoMuted: !videoMuted })}
							/>
						)}
						{backgroundType === 'video' && (
							<ToggleControl
								label={__('Loop Video', 'wecodeart')}
								help={videoLoop ? __('Looping the background video.', 'wecodeart') : __('Toggle to loop the video.', 'wecodeart')}
								checked={!!videoLoop}
								onChange={() => setAttributes({ videoLoop: !videoLoop })}
							/>
						)}
						<Button
							className="components-button--wecodeart-remove-background-image"
							type="button"
							isDefault
							label={__('Remove background', 'wecodeart')}
							onClick={() => {
								setAttributes({
									backgroundUrl: '',
									backgroundOverlay: 0,
									backgroundRepeat: 'no-repeat',
									backgroundPosition: '',
									backgroundSize: 'cover',
									hasParallax: false,
								});
							}}
						>
							{sprintf(__('Remove %s', 'wecodeart'), backgroundType)}
						</Button>
					</Fragment>
				)}
			</PanelBody>
		);
	}
}

export default BackgroundPanel;