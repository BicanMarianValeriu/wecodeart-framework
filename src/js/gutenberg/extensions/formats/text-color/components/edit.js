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

const name = 'wca/color';
const title = __('Text Color', 'wecodeart');

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
			colors,
		} = this.props;

		let activeColor;

		const activeColorFormat = getActiveFormat(value, name);

		if (activeColorFormat) {
			const styleColor = activeColorFormat.attributes.style;

			if (styleColor) {
				activeColor = styleColor.replace(new RegExp(`^color:\\s*`), '');
			}

			const currentClass = activeColorFormat.attributes.class;

			if (currentClass) {
				const colorSlug = currentClass.replace(/.*has-(.*?)-color.*/, '$1');
				activeColor = getColorObjectByAttributeValues(colors, colorSlug).color;
			}
		}

		return (
			<Fragment>
				<BlockControls>
					<Toolbar className="wca-components-toolbar">
						<IconButton
							className="components-button components-icon-button components-wca-toolbar__control components-toolbar__control components-wca-color-format"
							icon="editor-textcolor"
							aria-haspopup="true"
							tooltip={title}
							onClick={this.toggle}
						>
							<span
								className="components-wca-inline-color__indicator"
								style={{
									backgroundColor: activeColor,
								}}
							/>
						</IconButton>

						{isOpen && (
							<Popover
								position="bottom center"
								className="components-wca__inline-color-popover"
								focusOnMount="container"
								onClickOutside={(onClickOutside) => {
									if ((!onClickOutside.target.classList.contains('components-wca-color-format') && !document.querySelector('.components-wca-color-format').contains(onClickOutside.target)) && (!document.querySelector('.components-color-palette__picker') || (document.querySelector('.components-color-palette__picker') && !document.querySelector('.components-color-palette__picker').contains(onClickOutside.target)))) {
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
													attributes: colorObject ?
														{
															class: getColorClassName('color', colorObject.slug),
														} :
														{
															style: `color:${color}`,
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