<?php namespace WeCodeArt\Customizer;
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit();
/**
 * Class to handle sanitization for WeCodeArt Framework Customizer
 * 
 * @package 	WeCodeArt Framework
 * @subpackage 	Customizer Formatting
 * @copyright   Copyright (c) 2019, WeCodeArt Framework
 * @since 		v1.6
 * @version 	v3.6.2
 */ 

final class Formatting {
	use \WeCodeArt\Singleton;  

	// Don't let any other code un-singleton this class.
	private function __construct() {}
	private function __clone() {} 
	
	/**
	 * Sanitize a value for use as a linear CSS value.
	 * Stuff like, `10px`, `5em`, `20%`, `calc( 100% - 30px )`.
	 * @param  $string string Any string.
	 * @return string  The provided string, sanitized for linear CSS.
	 */
	public static function wecodeart_sanitize_linear_css( $string ) {
		// Strip away any chars that aren't part of a linear CSS value.
		$out = preg_replace( '/[^a-zA-Z0-9 +-_.()% ]/', '', $string );
		return $out;
	}
	
	/**
	 * Sanitize checkbox inputs.
	 * @return 	1/0 (enabled/disabled).
	 */
	public static function wecodeart_sanitize_checkbox( $input ) {
		// Return 1 for enable and 0 for disable
		return( 1 === absint( $input ) ) ? 1 : 0;
	}
	
	/**
	 * Sanitize Select and Radios.
	 * @param  	string 	$input    setting input.
	 * @param  	object 	$setting  setting object.
	 * @return 	array 	choices/default
	 */
	public static function sanitize_choices( $input, $setting ) {
		$choices = $setting->manager->get_control( $setting->id )->choices;
		return( array_key_exists( $input, $choices ) ? $input : $setting->default );
	}
	
	/**
	 * Sanitize Sortable Choices Control.
	 * @param  string $input    setting input.
	 * @param  object $setting  setting object.
	 * @return mixed            setting input value.
	 */
	public static function sanitize_sortable_choices( $input, $setting ) {	
		$choices = $setting->manager->get_control( $setting->id )->choices;
		foreach( $input as $key => $value ) if( ! array_key_exists( $value, $choices ) ) unset( $input[ $key ] );
		return( is_array( $input ) ? $input : $setting->default );
	}

	/**
	 * Sanitize Number
	 * @param  int 		$val      Customizer setting input number.
	 * @param  object 	$setting  Setting object.
	 * @return int		Return number.
	 */
	public static function sanitize_number( $val, $setting ) {
		$input_attrs = $setting->manager->get_control( $setting->id )->input_attrs;

		if ( isset( $input_attrs ) ) {
			$input_attrs['min']  = isset( $input_attrs['min'] ) ? $input_attrs['min'] : 0;
			$input_attrs['step'] = isset( $input_attrs['step'] ) ? $input_attrs['step'] : 1;

			if ( isset( $input_attrs['max'] ) && $val > $input_attrs['max'] ) {
				$val = $input_attrs['max'];
			} elseif ( $val < $input_attrs['min'] ) {
				$val = $input_attrs['min'];
			}
			$dv = $val / $input_attrs['step'];
			$dv = round( $dv );
			$val = $dv * $input_attrs['step'];
			$val = number_format( (float) $val, 2, '.', '' );
			if ( $val == (int) $val ) {
				$val = (int) $val;
			}
		}

		return is_numeric( $val ) ? $val : 0;
	}
}