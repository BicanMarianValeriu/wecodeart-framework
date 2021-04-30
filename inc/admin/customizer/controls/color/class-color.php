<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Customizer\Controls\Color
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		5.0.0
 * @version		5.0.0
 */

namespace WeCodeArt\Admin\Customizer\Controls;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Core\Scripts;

/**
 * Sortable control (uses checkboxes).
 */
class Color extends \WP_Customize_Control {

	use Scripts\Base;

	/**
	 * The control type.
	 *
	 * @access 	public
	 * @var 	string
	 */
	public $type = 'wecodeart-color';
       
    /**
	 * Additional arguments passed to JS.
	 *
	 * @var string
	 */
    public $default = '';
    
	/**
	 * Disable Alpha in colorpicker.
	 *
	 * @var bool
	 */
    public $disable_alpha = false;

	/**
	 * Enqueue control related scripts/styles.
	 *
	 * @access public
	 *
	 * @since 	unknown
	 * @version	5.0.0
	 */
	public function enqueue() {
		wp_enqueue_style(
			$this->make_handle(),
			$this->get_asset( 'css', 'customizer-color' ),
			[ 'wp-components' ],
			wecodeart( 'version' )
		);

		$deps = [ 'lodash', 'react', 'react-dom', 'wp-components', 'wp-element', 'wp-i18n', 'wp-polyfill' ];
		
		wp_enqueue_script(
            $this->make_handle(),
			$this->get_asset( 'js', 'customizer-color' ),
           	array_merge( $deps, [ 'jquery', 'customize-base' ] ),
			wecodeart( 'version' ),
            true
		);

		static $localized;

		if ( is_null( $localized ) ) {
			wp_localize_script( $this->make_handle(), 'wecodeartColorControl', [
				'palette' 	=> current( get_theme_support( 'editor-color-palette' ) )
			] );
			$localized = true;
		}
    }
    
	/**
	 * Send to JS.
	 */
	public function to_json() {
		parent::to_json();
		$this->json['default'] = $this->setting->default;
		if ( isset( $this->default ) ) {
			$this->json['default'] = $this->default;
		}
		$this->json['disableAlpha'] = $this->disable_alpha;
	}
}
