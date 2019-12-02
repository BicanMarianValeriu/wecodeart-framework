/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { select, withSelect } = wp.data;
const { BlockControls, getColorClassName, getColorObjectByColorValue, getColorObjectByAttributeValues } = wp.blockEditor;
const { applyFormat, removeFormat, getActiveFormat } = wp.richText;
const { Toolbar, IconButton, Popover, ColorPalette } = wp.components;
const { compose, ifCondition } = wp.compose;

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import icon from '../icon';

const name = 'wca/background';
const title = __('Highlight Color', 'wecodeart');

class Edit extends Component {
	constructor() {
		super(...arguments);

		this.toggle = this.toggle.bind(this);

		this.state = {
			isOpen: false,
		};
	}

	toggle() {
		this.setState((state) => ({
			isOpen: !state.isOpen,
		}));
	}

	render() {
		const { isOpen } = this.state;
		const {
			value,
			onChange,
			isActive,
			colors,
		} = this.props;

		let activeColor;

		const activeColorFormat = getActiveFormat(value, name);

		if (activeColorFormat) {
			const styleColor = activeColorFormat.attributes.style;

			if (styleColor) {
				activeColor = styleColor.replace(new RegExp(`^background-color:\\s*`), '');
			}

			const currentClass = activeColorFormat.attributes.class;

			if (currentClass) {
				const colorSlug = currentClass.replace(/.*has-(.*?)-background-color.*/, '$1');
				activeColor = getColorObjectByAttributeValues(colors, colorSlug).color;
			}
		}

		return (
			<Fragment>
				<BlockControls>
					<Toolbar className="components-toolbar--wca">
						<IconButton
							className={classnames(
								'components-button components-icon-button components-toolbar__control components-wca-background-format', {
								'is-active': isActive,
							})}
							icon={icon.highlighter}
							aria-haspopup="true"
							tooltip={title}
							onClick={this.toggle}
						>
						</IconButton>

						{isOpen && (
							<Popover
								position="bottom center"
								className="components-popover--wca"
								focusOnMount="container"
								onClickOutside={(onClickOutside) => {
									if (
										(
											!onClickOutside.target.classList.contains('components-wca-background-format') &&
											!document.querySelector('.components-wca-background-format').contains(onClickOutside.target)
										) && (
											!document.querySelector('.components-color-palette__picker') ||
											(
												document.querySelector('.components-color-palette__picker') &&
												!document.querySelector('.components-color-palette__picker').contains(onClickOutside.target)
											)
										)
									) {
										this.setState({ isOpen: !isOpen });
									}
								}}
							>
								<ColorPalette
									colors={colors}
									value={activeColor}
									onChange={(color) => {
										if (color) {
											let colorObject = null;

											if (
												typeof window.wecodeartInfo !== 'undefined' &&
												window.wecodeartInfo.supports.colorPalette
											) {
												colorObject = getColorObjectByColorValue(colors, color);
											}

											onChange(
												applyFormat(value, {
													type: name,
													attributes: colorObject ? {
														class: getColorClassName('background-color', colorObject.slug),
													} : {
															style: `background-color:${color}`,
														},
												})
											);
										} else {
											onChange(removeFormat(value, name));
										}
									}}
								>
								</ColorPalette>
							</Popover>
						)}

					</Toolbar>
				</BlockControls>
			</Fragment>
		);
	}
}

export default compose(
	withSelect(() => {
		const { colors } = select('core/block-editor').getSettings();

		return {
			colors: colors ? colors : [],
			isDisabled: false,
		};
	}),
	ifCondition((props) => !props.isDisabled),
)(Edit);