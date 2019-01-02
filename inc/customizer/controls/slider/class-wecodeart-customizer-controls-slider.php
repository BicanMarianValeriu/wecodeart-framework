<?php namespace WeCodeArt\Customizer\Controls;
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;
// Use
use WP_Customize_Control as WP_Customize_Control;
// If exists return null.
if ( class_exists( 'WeCodeArt\Customizer\Controls\Slider' ) ) return NULL;
/**
 * Sortable control (uses checkboxes).
 */
class Slider extends WP_Customize_Control {
	/**
	 * The control type.
	 *
	 * @access 	public
	 * @var 	string
	 */
	public $type = 'wecodeart-slider';

	/**
	 * The control type.
	 *
	 * @access public
	 * @var string
	 */
	public $suffix = '';

	/**
	 * Enqueue control related scripts/styles.
	 *
	 * @access public
	 */
	public function enqueue() {
		$handle = strtolower( str_replace( '\\', '-', __CLASS__ ) );

		wp_enqueue_style(
            $handle,
			get_theme_file_uri( '/assets/css/customizer/controls/slider.css' ),
            array(),
			''
		);
		
		wp_enqueue_script(
            $handle,
			get_theme_file_uri( '/assets/js/customizer/controls/slider.js' ),
            array( 'jquery', 'customize-base' ),
            false,
            true
        );
	}

	/**
	 * Refresh the parameters passed to the JavaScript via JSON.
	 *
	 * @see WP_Customize_Control::to_json()
	 */
	public function to_json() {
		parent::to_json();

		$this->json['default'] = $this->setting->default;
		if ( isset( $this->default ) ) {
			$this->json['default'] = $this->default;
		}

		$this->json['value']  = $this->value();
		$this->json['link']   = $this->get_link();
		$this->json['id']     = $this->id;
		$this->json['label']  = esc_html( $this->label );
		$this->json['suffix'] = $this->suffix;

		$this->json['inputAttrs'] = '';
		foreach ( $this->input_attrs as $attr => $value ) {
			$this->json['inputAttrs'] .= $attr . '="' . esc_attr( $value ) . '" ';
		} 
	}

	/**
	 * An Underscore (JS) template for this control's content (but not its container).
	 *
	 * Class variables for this control class are available in the `data` JS object;
	 * export custom variables by overriding {@see WP_Customize_Control::to_json()}.
	 *
	 * @see WP_Customize_Control::print_template()
	 *
	 * @access protected
	 */
	protected function content_template() {
		?>
		<label class="wecodeart-slider">
			<# if ( data.label ) { #>
				<span class="customize-control-title">{{{ data.label }}}</span>
			<# } #>
			<# if ( data.description ) { #>
				<span class="description customize-control-description">{{{ data.description }}}</span>
			<# } #>
			<div class="wecodeart-slider__wrapper">
				<input {{{ data.inputAttrs }}} type="range" value="{{ data.value }}" data-reset_value="{{ data.default }}" />
				<div class="wecodeart-slider__number">
					<input type="number" 
						class="value wecodeart-slider__number-input" {{{ data.link }}} 
						value="{{ data.value }}" {{{ data.inputAttrs }}} ><#
					if ( data.suffix ) { #><span class="wecodeart-slider__unit">{{ data.suffix }}</span><#
					} #>
				</div>
				<div class="wecodeart-slider__reset">
					<span class="dashicons dashicons-image-rotate"></span>
				</div>
			</div>
		</label>
		<?php
	}

	/**
	 * Render the control's content.
	 *
	 * @see WP_Customize_Control::render_content()
	 */
	protected function render_content() {}
}
