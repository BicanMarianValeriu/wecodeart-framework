<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework 
 * @subpackage 	Functions
 * @copyright   Copyright (c) 2025, WeCodeArt Framework
 * @since		5.0.0
 * @version     6.4.8
 */

namespace WeCodeArt\Functions;

defined( 'ABSPATH' ) || exit;

/**
 * Helper function to encode an array to an excaped json string
 * Useful to use it for placing encoded object in html attrs
 *
 * @since	3.5
 * @version 6.3.5
 * @param 	array   $json
 *
 * @return 	string 
 */
function toJSON( array $json = [], $options = JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ) {
    if( ! is_array( $json ) ) {
        return null;
    }

    return wp_json_encode( $json, $options );
}

/**
 * Get a specific property of an array
 *
 * @since  	3.8.1
 * @version 5.0.0
 *
 * @return  null|string|mixed The value
 */
function get_prop( $array, $prop, $default = null ) {
    return _wp_array_get( $array, (array) $prop, $default );
}

/**
 * Set Theme Settings
 *
 * @param 	array 	$target
 * @param 	array 	$array
 * @param 	mixed 	$value
 *
 * @return 	array
 */
function set_prop( $target, $array, $value ) {
	$key     = array_shift( $array );
	$current =& $target;
    
	while ( 0 < sizeof( $array ) ) {
		if ( ! property_exists( $current, $key ) ) {
			$current->{ $key } = (object) [];
		}
		$current =& $current->{ $key };
		$key     = array_shift( $array );
	}

	$current->{ $key } = $value;

	return $target;
}

/**
 * WP_Parse_Args Reccursive
 *
 * @param 	array 	$a
 * @param 	array 	$b
 *
 * @return 	array
 */
function wp_parse_args_r( &$a, $b ) {
    $a = (array) $a;
    $b = (array) $b;
    $r = $b;

    foreach ( $a as $k => &$v ) {
        if ( is_array( $v ) && isset( $r[ $k ] ) ) {
            $r[ $k ] = wp_parse_args_r( $v, $r[ $k ] );
        } else {
            $r[ $k ] = $v;
        }
    }

    return $r;
}

/**
 * Calc FN
 *
 * @param 	int 	$number1
 * @param 	string 	$action
 * @param 	int 	$number2
 * @param 	bool 	$round
 * @param 	int 	$decimals
 * @param 	int 	$precision
 *
 * @return 	int|float|false
 */
function calc( $number1, $action, $number2, $round = false, $decimals = 0, $precision = 10 ) {
    static $bc;

    if ( ! is_scalar( $number1 ) || ! is_scalar( $number2 ) ) {
        return false;
    }

    if ( ! isset( $bc ) ) {
        $bc = extension_loaded( 'bcmath' );
    }

    if ( $bc ) {
        $number1 = number_format( $number1, 10, '.', '' );
        $number2 = number_format( $number2, 10, '.', '' );
    }

    $result  = null;
    $compare = false;

    switch ( $action ) {
    case '+':
    case 'add':
    case 'addition':
        $result = ( $bc ) ? bcadd( $number1, $number2, $precision ) /* string */ : ( $number1 + $number2 );
        break;

    case '-':
    case 'sub':
    case 'subtract':
        $result = ( $bc ) ? bcsub( $number1, $number2, $precision ) /* string */ : ( $number1 - $number2 );
        break;

    case '*':
    case 'mul':
    case 'multiply':
        $result = ( $bc ) ? bcmul( $number1, $number2, $precision ) /* string */ : ( $number1 * $number2 );
        break;

    case '/':
    case 'div':
    case 'divide':
        if ( $bc ) {
            $result = bcdiv( $number1, $number2, $precision ); // String, or NULL if right_operand is 0.
        } elseif ( $number2 != 0 ) {
            $result = ( $number1 / $number2 );
        }

        if ( ! isset( $result ) ) {
            $result = 0;
        }
        break;

    case '%':
    case 'mod':
    case 'modulus':
        if ( $bc ) {
            $result = bcmod( $number1, $number2 ); // String, or NULL if modulus is 0.
        } elseif ( $number2 != 0 ) {
            $result = ( $number1 % $number2 );
        }

        if ( ! isset( $result ) ) {
            $result = 0;
        }
        break;

    case '=':
    case 'comp':
    case 'compare':
        $compare = true;
        if ( $bc ) {
            $result = bccomp( $number1, $number2, $precision ); // Returns int 0, 1 or -1.
        } else {
            $result = ( $number1 == $number2 ) ? 0 : ( ( $number1 > $number2 ) ? 1 : - 1 );
        }
        break;
    }

    if ( isset( $result ) ) {
        if ( $compare === false ) {
            if ( $round === true ) {
                $result = round( floatval( $result ), $decimals );
                if ( $decimals === 0 ) {
                    $result = (int) $result;
                }
            } else {
                $result = ( intval( $result ) == $result ) ? intval( $result ) : floatval( $result );
            }
        }

        return $result;
    }

    return false;
}

/**
 * Flattens a multidimensional array to a simple array.
 *
 * @param   array $array a multidimensional array.
 *
 * @return  array a simple array
 */
function array_flatten( array $array = [] ): array {
    $result = [];
    
    foreach ( $array as $element ) {
        if( empty( $element ) ) {
            continue;
        }

        if ( is_array( $element ) ) {
            array_push( $result, ...array_flatten( $element ) );
        } else {
            $result[] = $element;
        }
    }

    return $result;
}

/**
 * Extract from array.
 *
 * @param   array   $array  a multidimensional array.
 * @param   string  $string a string to match keys against.
 *
 * @return  array   Array containg matching keys
 */
function array_extract( array &$array, string $string = '' ): array {
    return array_values( array_filter( $array, function( $item ) use ( &$array, $string ) {
        if ( strpos( $item, $string ) !== false ) {
            $array = array_values( array_diff( $array, [ $item ] ) );
            return true;
        }
        return false;
    } ) );
}

/**
 * Import image as SVG
 *
 * @since   6.2.7
 *
 * @param   DOMDocument $dom    DOM Document to change.
 * @param   DOMElement  $wrap   DOM Element to add image to.
 * @param   DOMElement  $img    DOM Element image to change.
 * @param   array       $attributes
 * @param   string      $content
 *
 * @return  DOMElement
 */
function dom_image_2_svg( \DOMDocument $dom, \DOMElement $wrap, \DOMElement $img, array $attributes = [], string $content = '' ) {
    $file = get_prop( $attributes, [ 'url' ] ) ?: $img->getAttribute( 'src' );
    $file = str_replace( content_url(), dirname( dirname( get_template_directory() ) ), $file );

    if ( ! file_exists( $file ) ) {
        return $content;
    }

    $svg = $dom->importNode( wecodeart( 'dom' )::create( file_get_contents( $file ) )->documentElement, true );

    if ( ! method_exists( $svg, 'setAttribute' ) ) {
        return $content;
    }

    if( $value = $img->getAttribute( 'class' ) ) {
        $svg->setAttribute( 'class', $value );
    }

    if( $value = get_prop( $attributes, [ 'width' ] ) ?: $img->getAttribute( 'width' ) ) {
        $svg->setAttribute( 'width', $value );
    }

    if( $value = get_prop( $attributes, [ 'height' ] ) ?: $img->getAttribute( 'height' ) ) {
        $svg->setAttribute( 'height', $value );
    }

    if( $value = get_prop( $attributes, [ 'alt' ] ) ?: $img->getAttribute( 'alt' ) ) {
        $svg->setAttribute( 'aria-label', $value );
    }

    $svg->setAttribute( 'role', 'img' );

    ( $wrap )->removeChild( $img );
    ( $wrap )->appendChild( $svg );

    return $svg;
}

/**
 * Encode SVG string as url.
 *
 * @since   6.2.5
 * @version 6.3.7
 *
 * @return  string
 */
function encode_svg_data( string $svg = '' ): string {
    // Encode svg to URL.
    $svg = \rawurlencode( \str_replace( '"', "'", \preg_replace( '/\v(?:[\v\h]+)/', ' ', $svg ) ) );
    // re-decode a few characters understood by browsers to improve compression.
    $svg = \str_replace( [ '%20', '%3D', '%3A', '%2F' ], [ ' ', '=', ':', '/' ], $svg );
    
    return 'data:image/svg+xml;utf8,' . $svg;
}

/**
 * Returns an Image placeholder source.
 *
 * @since   6.0.0
 * @version 6.4.8
 *
 * @return  string
 */
function get_placeholder_source( bool $encoded = true ): string {
    $file = apply_filters( 'wecodeart/filter/placeholder', 'assets/images/placeholder-img.svg' );

    if( $encoded ) {
        $svg_string	= \file_get_contents( get_parent_theme_file_path( $file ) );
    
        return encode_svg_data( $svg_string );
    }
    
    return get_parent_theme_file_uri( $file );
}

/**
 * Returns lightness compare limit (light/dark).
 *
 * @since   6.0.0
 *
 * @return  float
 */
function get_lightness_limit(): float {
	return 0.6;
}

/**
 * Returns pallete color from theme JSON (including vars).
 *
 * @since   6.0.0
 *
 * @return  string
 */
function get_json_color( array $path = [], $default = false ): string {
	// Theme pallete.
    $palette 	= wecodeart_json( [ 'settings', 'color', 'palette' ], [] );
    $color      = wecodeart_json( $path, $default );

    // Is WP way of saved color.
    if( strpos( $color, 'var:' ) !== false ) {
        $slug = explode( '|', $color );
        $slug = end( $slug );
    }
    
    // Or is a CSS variable.
    if( strpos( $color, '--wp--' ) !== false ) {
        $slug = explode( '--', $color );
        $slug = str_replace( ')', '', end( $slug ) );
    }
    
    // If slug found, get color.
    if ( isset( $slug  ) ) {
        $color	= get_prop( current( wp_list_filter( $palette, [
            'slug' => $slug,
        ] ) ), 'color', '#0088cc' );
    }

    return $color;
}
