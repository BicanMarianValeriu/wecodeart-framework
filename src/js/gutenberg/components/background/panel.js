/**
 * External dependencies
 */
const { isEmpty } = lodash;

/**
 * Internal dependencies
 */
import { BLOCKS_WITH_AUTOPADDING } from './';
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
	ColorPalette,
	ColorIndicator
} = wp.components;

class BackgroundPanel extends Component {
	constructor() {
		super(...arguments);
		this.setBackgroundPaddingTo = this.setBackgroundPaddingTo.bind(this);
		this.setBackgroundPaddingMobileTo = this.setBackgroundPaddingMobileTo.bind(this);
		this.onSelectRepeat = this.onSelectRepeat.bind(this);
	}

	setBackgroundPaddingTo(value) {
		this.props.setAttributes({ backgroundPadding: value });

		if (this.props.attributes.backgroundPadding <= 0) {
			this.props.setAttributes({
				backgroundRadius: 0,
			});
		}
	}

	setBackgroundPaddingMobileTo(value) {
		this.props.setAttributes({ backgroundPaddingMobile: value });
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
			select,
			attributes,
			backgroundColor,
			setBackgroundColor,
			hasGalleryControls,
			hasOverlay,
			setAttributes,
		} = this.props;

		const {
			align,
			backgroundImg,
			backgroundOverlay,
			backgroundPadding,
			backgroundPaddingMobile,
			backgroundPosition,
			backgroundRadius,
			backgroundRepeat,
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

		const backgroundSizeDefault = 'cover';

		const { colors } = select('core/block-editor').getSettings();

		return (
			<PanelBody
				title={__('Background Settings', 'wecodeart')}
				icon={<ColorIndicator colorValue={backgroundColor.color} />}
				initialOpen={false}
				className="components-panel__body--wecodeart-background-panel wecodeart-background-panel"
			>
				<br />
				<ColorPalette
					colors={colors}
					value={backgroundColor.color}
					title={__('Background Color', 'wecodeart')}
					onChange={setBackgroundColor}
				/>
				{backgroundImg && (
					<Fragment>
						<hr />
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
								url={backgroundImg}
								value={focalPoint}
								onChange={(value) => setAttributes({ focalPoint: value })}
								className="components-focal-point-picker--wecodeart"
							/>
						)}
						{hasOverlay && (
							<RangeControl
								label={__('Background Opacity', 'wecodeart')}
								value={backgroundOverlay}
								onChange={(nextBackgroundOverlay) => setAttributes({ backgroundOverlay: nextBackgroundOverlay })}
								min={0}
								max={100}
								step={10}
							/>
						)}
						{hasGalleryControls && (
							<Fragment>
								<ResponsiveTabsControl {...this.props}
									label={__('Padding', 'wecodeart')}
									value={backgroundPadding}
									valueMobile={backgroundPaddingMobile}
									onChange={this.setBackgroundPaddingTo}
									onChangeMobile={this.setBackgroundPaddingMobileTo}
									min={5}
									max={100}
								/>
								{((!isEmpty(backgroundImg) || !isEmpty(backgroundColor.color)) && backgroundPadding > 0) && align !== 'full' &&
									<RangeControl
										label={__('Rounded Corners', 'wecodeart')}
										value={backgroundRadius}
										onChange={(nextBackgroundRadius) => setAttributes({ backgroundRadius: nextBackgroundRadius })}
										min={0}
										max={20}
										step={1}
									/>
								}
							</Fragment>
						)}
						{backgroundType === 'image' && (
							<SelectControl
								label={__('Repeat', 'wecodeart')}
								className="components-background-display-select--wecodeart"
								value={backgroundRepeat ? backgroundRepeat : 'no-repeat'}
								options={backgroundRepeatOptions}
								onChange={(nextbackgroundRepeat) => this.onSelectRepeat(nextbackgroundRepeat)}
							/>
						)}
						{!FocalPointPicker && backgroundType === 'image' && (
							<SelectControl
								label={__('Position', 'wecodeart')}
								value={backgroundPosition ? backgroundPosition : 'center center'}
								options={backgroundPositionOptions}
								onChange={(nextbackgroundPosition) => setAttributes({ backgroundPosition: nextbackgroundPosition })}
							/>
						)}
						{backgroundRepeat === 'no-repeat' && backgroundType === 'image' && (
							<SelectControl
								label={__('Display', 'wecodeart')}
								value={backgroundSize ? backgroundSize : backgroundSizeDefault}
								options={backgroundSizeOptions}
								onChange={(nextbackgroundSize) => setAttributes({ backgroundSize: nextbackgroundSize })}
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
									backgroundImg: '',
									backgroundOverlay: 0,
									backgroundRepeat: 'no-repeat',
									backgroundPosition: '',
									backgroundSize: 'cover',
									hasParallax: false,
									backgroundPadding: 0,
									backgroundPaddingMobile: 0,
								});

								// Remove padding when background image is removed.
								if (BLOCKS_WITH_AUTOPADDING.includes(this.props.name)) {
									if (attributes.paddingSize) {
										setAttributes({ paddingSize: 'no' });
									}
								}
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