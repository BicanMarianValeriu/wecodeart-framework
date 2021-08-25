<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Support\Styles
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		5.0.0
 * @version		5.0.0
 */

namespace WeCodeArt\Support\Styles;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Singleton;
use function WeCodeArt\Functions\get_prop;

/**
 * The Sanitize object.
 */
final class Sanitize {

	use Singleton;

	/**
	 * Sanitize rgba color.
	 *
	 * @since   5.0.0
	 * @param 	string $value Color in rgba format.
	 *
	 * @return 	string
	 */
	public static function color_rgba( string $value = '' ) {
		$red   = 'rgba(0,0,0,0)';
		$green = 'rgba(0,0,0,0)';
		$blue  = 'rgba(0,0,0,0)';
		$alpha = 'rgba(0,0,0,0)'; // If empty or an array return transparent
		
		if ( empty( $value ) || is_array( $value ) ) {
			return '';
		}

		// By now we know the string is formatted as an rgba color so we need to further sanitize it.
		$value = str_replace( ' ', '', $value );
		sscanf( $value, 'rgba(%d,%d,%d,%f)', $red, $green, $blue, $alpha );

		return 'rgba(' . $red . ',' . $green . ',' . $blue . ',' . $alpha . ')';
	}
	
	/**
	 * Sanitize hex color.
	 *
	 * @since   5.0.0
	 * @param 	string $value Color in hex format.
	 *
	 * @return 	string
	 */
	public static function color_hex( string $value = '' ) {
		return sanitize_hex_color( $value );
	}

	/**
	 * Sanitize color.
	 *
	 * @param 	string $value recieved value.
	 *
	 * @return 	string
	 */
	public static function color( string $value = '' ) {
		// Is CSS Variable
		$is_var = ( strpos( $value, 'var' ) !== false );
	
		if ( $is_var ) {
			return sanitize_text_field( $value );
		}
	
		// Is this an rgba color or a hex?
		$mode = ( strpos( $value, 'rgba' ) === false ) ? 'hex' : 'rgba';
	
		if ( 'rgba' === $mode ) {
			return self::color_rgba( $value );
		} else {
			return self::color_hex( $value );
		}
	}
}