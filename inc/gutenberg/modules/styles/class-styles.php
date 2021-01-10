<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg CSS Module
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since		4.0.3
 * @version		4.2.0
 */

namespace WeCodeArt\Gutenberg\Modules;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg;
use WeCodeArt\Core\Scripts;
use function WeCodeArt\Functions\hex_rgba;

/**
 * Handles Gutenberg Theme CSS Functionality.
 */
class Styles {

	use Singleton;
	use Scripts\Base;

	/**
	 * Class Init.
	 *
	 * @return void
	 */
	public function init() {
		// CSS Handler
		Styles\Handler::get_instance();
		// Enqueue Styles
		Styles\Embed::get_instance();
	}

	/**
	 * Get Blocks CSS
	 *
	 * @param 	int 	$post_id Post id.
	 * @return 	string
	 * @since   4.2.0
	 */
	public function get_blocks_css( $post_id ) {
		if ( function_exists( 'has_blocks' ) ) {
			$content = get_post_field( 'post_content', $post_id );
			$blocks  = Gutenberg::parse_blocks( $content );

			if ( ! is_array( $blocks ) || empty( $blocks ) ) {
				return;
			}

			return $this->cycle_through_static_blocks( $blocks );
		}
	}

	/**
	 * Get Reusable Blocks CSS
	 *
	 * @param 	int 	$post_id Post id.
	 * @return 	string
	 * @since   4.2.0
	 */
	public function get_reusable_block_css( $post_id ) {
		$reusable_block = get_post( $post_id );

		if ( ! $reusable_block || 'wp_block' !== $reusable_block->post_type ) {
			return;
		}

		if ( 'publish' !== $reusable_block->post_status || ! empty( $reusable_block->post_password ) ) {
			return;
		}

		$blocks = Gutenberg::parse_blocks( $reusable_block->post_content );

		return $this->cycle_through_static_blocks( $blocks );
	}

	/**
	 * Cycle thorugh Static Blocks
	 *
	 * @param 	array 	$blocks List of blocks.
	 *
	 * @return 	string 	Style.
	 * @since   4.2.0
	 */
	public function cycle_through_static_blocks( $blocks ) {
		$style = '';
		foreach ( $blocks as $block ) {
			$style .= $this->get_css_from_attributes( $block );

			if ( isset( $block['innerBlocks'] ) && ! empty( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) ) {
				$style .= $this->cycle_through_static_blocks( $block['innerBlocks'] );
			}
		}

		return $style;
	}

	/**
	 * Cycle thorugh Reusable Blocks
	 *
	 * @since   4.2.0
	 * @param 	array $blocks List of blocks.
	 *
	 * @return 	string Style.
	 */
	public function cycle_through_reusable_blocks( $blocks ) {
		$style = '';
		foreach ( $blocks as $block ) {
			if ( 'core/block' === $block['blockName'] && ! empty( $block['attrs']['ref'] ) ) {
				$style .= $this->get_reusable_block_css( $block['attrs']['ref'] );
			}

			if ( isset( $block['innerBlocks'] ) && ! empty( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) ) {
				$style .= $this->cycle_through_reusable_blocks( $block['innerBlocks'] );
			}
		}

		return $style;
	}

	/**
	 * Generate Blocks CSS
	 *
	 * @since   4.2.0
	 * @param 	mixed $block Block data.
	 *
	 * @return 	string
	 */
	public function get_css_from_attributes( $block = [] ) {
		$attr  = $block['attrs'] ?: [];
		$style = '';
		
		$css_style		= isset( $attr['style'] ) ? $attr['style'] : [];
		$block_class 	= isset( $attr['className'] ) ? explode( ' ', $attr['className'] ) : [];
		$block_class 	= array_filter( $block_class, function( $key ) {
			return strpos( $key, 'wcacss-' ) === 0;
		} );
		$block_class 	= '.' . end( $block_class );

		if( ! $block_class ) return $style;

		$block_style = [];
		$block_style[$block_class] = [];

		// Background Color
		if( isset( $css_style['color'] ) && isset( $css_style['color']['background'] ) ) {
			$block_style[$block_class]['background-color'] = $this->get_css_value( $css_style['color']['background'], 'color' );
		}

		// Background Image
		if( isset( $attr['backgroundUrl'] ) && ! empty( $attr['backgroundUrl'] ) ) {
			$block_style[$block_class]['background-image'] = $this->get_css_value( $attr['backgroundUrl'], 'url' );
		}

		// Background Position
		$focal_point = isset( $attr['focalPoint'] ) ? $attr['focalPoint'] : false;
		if( $focal_point ) {
			$block_style[$block_class]['background-position'] = $this->get_css_value( $focal_point, 'focal' );
		}

		// Filter attributes that should generate styles
		$block_style = apply_filters( 'wecodeart/gutenberg/css/attributes', $block_style, $attr );

		// Parse Attributes Style
		$style .= $this->parse_css( $block_style );

		if ( isset( $attr['hasCustomCSS'] ) && $attr['hasCustomCSS'] && ! empty( $attr['customCSS'] ) ) {
			$style .= $this->get_attr_value( $attr['customCSS'] );
		}

		return $style;
	}

	/**
	 * Check if string is empty without accepting zero
	 *
	 * @since   4.2.0
	 * @param 	string $var Var to check.
	 *
	 * @return 	bool
	 */
	public function is_empty( $var ) {
		return empty( $var ) && 0 !== $var;
	}

	/**
	 * Get block attribute value with default
	 *
	 * @since   4.2.0
	 * @param 	mixed $attr Attributes.
	 * @param 	mixed $default Default value.
	 *
	 * @return 	mixed
	 */
	public function get_attr_value( $attr, $default = 'unset' ) {
		if ( ! $this->is_empty( $attr ) ) {
			return $attr;
		} else {
			return $default;
		}
	}

	/**
	 * Get CSS value
	 *
	 * @since   4.2.0
	 * @param  	string $value	CSS value.
	 * @param  	string $unit	CSS unit.
	 * @param  	string $default	CSS default font.
	 *
	 * @return 	mixed			CSS value depends on $unit
	 */
	public function get_css_value( $value = '', $unit = '', $default = '' ) {

		if ( '' == $value && '' == $default ) {
			return $value;
		}

		$css_val = '';

		switch ( $unit ) {

			case 'font':
				if ( 'inherit' != $value ) {
					$value   = $value['family'];
					$css_val = $value;
				} elseif ( '' != $default ) {
					$css_val = $default;
				} else {
					$css_val = '';
				}
				break;

			case 'px':
			case '%':
				if ( 'inherit' === strtolower( $value ) || 'inherit' === strtolower( $default ) ) {
					return $value;
				}
				$value   = ( '' != $value ) ? $value : $default;
				$css_val = esc_attr( $value ) . $unit;
				break;

			case 'url':
				$css_val = $unit . '(' . esc_url( $value ) . ')';
				break;

			case 'rem':
				if ( 'inherit' === strtolower( $value ) || 'inherit' === strtolower( $default ) ) {
					return $value;
				}
				$css_val = esc_attr( $value );
				break;

			case 'focal':
				$css_val = is_array( $value ) ? $value['x'] * 100 . '% ' . $value['y'] * 100 . '%' : $default;
				break;

			case 'color':
				$css_val = hex_rgba( sanitize_hex_color( $value ) );
				break;

			default:
				$value = ( '' != $value ) ? $value : $default;
				if ( '' != $value ) {
					$css_val = esc_attr( $value ) . $unit;
				}
		}

		return $this->get_attr_value( $css_val, 'initial' );
	}

	/**
	 * Parse CSS
	 * 
	 * @since   4.2.0
	 * @param  	array  $css_output Array of CSS.
	 * @param  	string $min_media  Min Media breakpoint.
	 * @param  	string $max_media  Max Media breakpoint.
	 *
	 * @return 	string Generated CSS.
	 */
	public function parse_css( $output = [], $min_media = '', $max_media = '' ) {

		$parse_css = '';
		if ( is_array( $output ) && count( $output ) > 0 ) {

			foreach ( $output as $selector => $properties ) {

				if ( null === $properties ) break;

				if ( ! count( $properties ) ) continue;

				$temp_parse_css   = $selector . '{';
				$properties_added = 0;

				foreach ( $properties as $property => $value ) {

					if ( '' === $value ) continue;

					$properties_added++;
					$temp_parse_css .= $property . ':' . $value . ';';
				}

				$temp_parse_css .= '}';

				if ( $properties_added > 0 ) {
					$parse_css .= $temp_parse_css;
				}
			}

			if ( '' != $parse_css && ( '' !== $min_media || '' !== $max_media ) ) {

				$media_css       = '@media ';
				$min_media_css   = '';
				$max_media_css   = '';
				$media_separator = '';

				if ( '' !== $min_media ) {
					$min_media_css = '(min-width:' . $min_media . 'px)';
				}
				if ( '' !== $max_media ) {
					$max_media_css = '(max-width:' . $max_media . 'px)';
				}
				if ( '' !== $min_media && '' !== $max_media ) {
					$media_separator = ' and ';
				}

				$media_css .= $min_media_css . $media_separator . $max_media_css . '{' . $parse_css . '}';

				return $media_css;
			}
		}

		return $parse_css;
	}
}
