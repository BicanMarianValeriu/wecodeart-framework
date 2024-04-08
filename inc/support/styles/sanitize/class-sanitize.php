<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Support\Styles
 * @copyright   Copyright (c) 2024, WeCodeArt Framework
 * @since 		5.0.0
 * @version		6.3.9
 */

namespace WeCodeArt\Support\Styles;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Config\Traits\Singleton;
use WeCodeArt\Support\Styles\Sanitize\Property;
use function WeCodeArt\Functions\get_prop;

/**
 * The Sanitize object.
 */
final class Sanitize {

	use Singleton;

	/**
	 * Font.
	 *
	 * @since   6.3.7
	 * @param 	mixed $value
	 *
	 * @return 	string
	 */
	public static function font( $value ): string {
		return ( new Property\Font( $value ) )->get_value();
	}

	/**
	 * Focal.
	 *
	 * @since   6.3.7
	 * @param 	array $value
	 *
	 * @return 	string
	 */
	public static function focal( array $value ): string {
		return ( new Property\Focal( $value ) )->get_value();
	}

	/**
	 * Background.
	 *
	 * @since   6.3.7
	 * @param 	mixed $value (int|string)
	 *
	 * @return 	string
	 */
	public static function background( $value ): string {
		return ( new Property\Background( $value ) )->get_value();
	}

	/**
	 * Sanitize rgba color.
	 *
	 * @since   5.0.0
	 * @param 	string $value Color in rgba format.
	 *
	 * @return 	string
	 */
	public static function color_rgba( string $value = '' ): string {
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
	public static function color_hex( string $value = '' ): string {
		return sanitize_hex_color( $value );
	}

	/**
	 * Sanitize color.
	 *
	 * @param 	string $value Color value.
	 *
	 * @return 	string
	 */
	public static function color( string $value = '' ): string {
		// Is CSS Variable or RGB
		$is_var = ( strpos( $value, 'var(' ) !== false || strpos( $value, 'rgb(' ) !== false );
	
		if ( $is_var ) {
			return filter_var( $value, FILTER_SANITIZE_STRING );
		}
	
		// Is this an rgba color or a hex?
		$mode = ( strpos( $value, 'rgba(' ) !== false ) ? 'rgba' : 'hex';
	
		if ( 'rgba' === $mode ) {
			return self::color_rgba( $value );
		} else {
			return self::color_hex( $value );
		}
	}
}