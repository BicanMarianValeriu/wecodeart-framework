<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Customizer/Controls
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since		3.5
 * @version		5.0.0
 */

namespace WeCodeArt\Admin\Customizer;

defined( 'ABSPATH' ) || exit; 

use WeCodeArt\Singleton;
use WeCodeArt\Admin\Customizer\Controls\Palette;

/**
 * Customizer Controls Class
 */
class Controls {

	use Singleton;  

	/**
	 * Registered Controls.
	 *
	 * @since 	3.5
	 * @var 	Array
	 */
	public static $controls; 
	
	/**
	 * Send to Constructor
	 * @since 3.6.2
	 */
	public function init() {
		// Register our custom controls.
		add_action( 'customize_register', [ $this, 'register_controls' ] );

		$formatting = Formatting::get_instance();

		/**
		 * Register Custom Customizer Controls
		 */
		self::add_control( 'wecodeart-range', [ 
			'callback' 			=> Controls\Range::class,
			'sanitize_callback' => [ $formatting, 'sanitize_number' ]
		] );

		self::add_control( 'wecodeart-sortable', [ 
			'callback' 			=> Controls\Sortable::class,
			'sanitize_callback' => [ $formatting, 'sanitize_sortable_choices' ]
		] );

		self::add_control( 'wecodeart-divider', [ 
			'callback' 			=> Controls\Divider::class,
			'sanitize_callback' => [ $formatting, 'sanitize_text_field' ]
		] );

		self::add_control( 'wecodeart-fonts', [ 
			'callback' 			=> Controls\Fonts::class,
			'sanitize_callback' => [ $formatting, 'sanitize_font' ]
		] );
	
		self::add_control( 'wecodeart-color', [ 
			'callback' 			=> Controls\Color::class,
			'sanitize_callback' => [ $formatting, 'sanitize_text_field' ]
		] );
		
		self::add_control( 'wecodeart-palette', [ 
			'callback' 			=> Controls\Palette::class,
			'sanitize_callback' => [ $formatting, 'sanitize_text_field' ]
		] );
	}

	/**
	 * Register Customizer Controls
	 */
	public function register_controls( $wp_customize ) { 
		if( ! self::$controls ) return;
		foreach( self::$controls as $name => $atts ) {
			if ( isset( $atts['callback'] ) ) $wp_customize->register_control_type( $atts['callback'] ); 
		}
	}

	/**
	 * Add Control to self::$controls and Register control to WordPress Customizer.
	 *
	 * @param 	string $name Slug for the control.
	 * @param 	array  $atts Control Attributes.
	 *
	 * @return 	void
	 */
	public static function add_control( $name, $atts ) {
		self::$controls[ $name ] = $atts;
	}

	/**
	 * Returns control instance
	 *
	 * @since 	3.5
	 * @param  	string 	$control_type control type.
	 *
	 * @return 	string
	 */
	public static function get_control_instance( $control_type ) {
		$control_class = self::get_control( $control_type );
		if ( isset( $control_class['callback'] ) ) {
			return class_exists( $control_class['callback'] ) ? $control_class['callback'] : false;
		}
		return false;
	}

	/**
	 * Returns control and its attributes
	 *
	 * @since 	3.5
	 * @param  	string 	$control_type control type.
	 *
	 * @return 	array
	 */
	public static function get_control( $control_type ) {
		if ( isset( self::$controls[ $control_type ] ) ) return self::$controls[ $control_type ]; 
		return [];
	}

	/**
	 * Returns Santize callback for control
	 *
	 * @since 	3.5
	 * @param  	string 	$control control.
	 *
	 * @return 	string
	 */
	public static function get_sanitize_call( $control ) {
		if ( isset( self::$controls[ $control ]['sanitize_callback'] ) ) {
			return self::$controls[ $control ]['sanitize_callback'];
		}
		return false;
	}
}