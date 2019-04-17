<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Entry Media Class
 * @copyright   Copyright (c) 2019, WeCodeArt Framework
 * @since		3.6
 * @version		3.7.3
 */

namespace WeCodeArt\Core\Entry;

if ( ! defined( 'ABSPATH' ) ) exit();

use WeCodeArt\Core\Callbacks;
use WeCodeArt\Utilities\Markup as Markup;
use WeCodeArt\Utilities\Markup\SVG;

/**
 * Handles Entry Media output
 */
class Media {

	use \WeCodeArt\Singleton;

	/**
	 * Send to Constructor
	 * @since 3.6.4
	 */
	public function init() {
		// Actions.
		add_action( 'wecodeart/hook/entry/header', [ $this, 'render_image' ], 20 );

		// Filters.
		add_filter( 'wecodeart/filter/media/render_image/disable', [ $this, 'filter_render_image' ] );
	}
	
	/**
	 * Get information about available image sizes
	 *
	 * @since	3.6.4
	 * @param 	string 	$size
	 *
	 * @return 	mixed
	 */
	public static function get_image_sizes( $size = '' ) {
		global $_wp_additional_image_sizes;
	
		$sizes = array();
		$get_intermediate_image_sizes = get_intermediate_image_sizes();
	
		// Create the full array with sizes and crop info
		foreach( $get_intermediate_image_sizes as $_size ) {
			if ( in_array( $_size, array( 'thumbnail', 'medium', 'large' ) ) ) {
				$sizes[ $_size ]['width'] 	= get_option( $_size . '_size_w' );
				$sizes[ $_size ]['height'] 	= get_option( $_size . '_size_h' );
				$sizes[ $_size ]['crop'] 	= (bool) get_option( $_size . '_crop' );
			} elseif ( isset( $_wp_additional_image_sizes[ $_size ] ) ) {
				$sizes[ $_size ] = array( 
					'width' 	=> $_wp_additional_image_sizes[ $_size ]['width'],
					'height' 	=> $_wp_additional_image_sizes[ $_size ]['height'],
					'crop' 		=> $_wp_additional_image_sizes[ $_size ]['crop']
				);
			}
		}
	
		// Get only 1 size if found
		if ( $size ) {
			if( isset( $sizes[ $size ] ) ) {
				return $sizes[ $size ];
			} else {
				return false;
			}
		}

		// Get all
		return $sizes;
	}

	/**
	 * Pull an attachment ID from a post, if one exists.
	 *
	 * @since 	3.6.4
	 *
	 * @param 	int 		$index   	Optional. 	Index of which image to return from a post. Default is 0.
	 * @param 	int 		$post_id 	Optional. 	Post ID. Default is `get_the_ID()`.
	 *
	 * @return 	int|bool 	Image ID, or `false` if image with given index does not exist.
	 */
	public static function get_media_id( $type = 'image', $index = 0, $post_id = null ) {

		$media_ids = array_keys( get_attached_media( $type, $post_id ? $post_id : get_the_ID() ) ); 

		if ( isset( $media_ids[ $index ] ) ) return $media_ids[ $index ]; 

		return false;
	}

	/**
	 * Generate a Dummy Placeholder
	 *
	 * @since	3.6.4
	 *
	 * @param 	array 	$args 	- must have an width and height key
	 *
	 * @return 	string 	$html
	 */
	public static function generate_dummy_placeholder( $args ) { 

		$args = apply_filters( 'wecodeart/filter/media/dummy/args', wp_parse_args( $args, [
			'width'		=> 768,
			'height'	=> 768, 
			'padding' 	=> number_format( absint( $args['height'] ) / absint( $args['width'] ) * 100, 7 )
		] ), $args ); 

		$html = '<div ' . Markup::generate_attr( 'media-dummy', [ 
			'aria-hidden' 	=> 'true', 
			'class'			=> 'entry-media__dummy',
			'style'			=> 'padding-bottom:' .  $args['padding'] . '%;'
		] ) . '></div>'; 

		return $html;
	}

	/**
	 * Get Image Ratio
	 *
	 * @since 	3.6.4
	 *
	 * @param  	int		$id
	 * @param	string	$size
	 * @param 	int 	$dummy ratio
	 *
	 * @return 	mixed
	 */
	public static function get_image_ratio( $id, $size, $dummy_ratio ) {
		$real_sizes = wp_get_attachment_metadata( $id );
		$real_sizes = $real_sizes ? $real_sizes : []; 
		$real_ratio = 1; // 1 by default

		if( array_key_exists( 'sizes', $real_sizes ) ) {
			if( array_key_exists( $size, $real_sizes['sizes'] ) ) {
				$real_sizes = $real_sizes['sizes'][$size]; 
			} 
		}   

		$real_ratio = $real_sizes['width'] / $real_sizes['height'];

		if( $real_ratio > $dummy_ratio ) $ratio_class = 'wider';
		if( $real_ratio < $dummy_ratio ) $ratio_class = 'taller';
		if( $real_ratio === $dummy_ratio ) $ratio_class = 'match';

		if( isset( $ratio_class ) ) return $ratio_class;
		return null;
	}

	/**
	 * Get Image - Return an image pulled from the media gallery. 
	 *
	 * @since 	3.6.4
	 *
	 * @param 	array	$args
	 * @param	bool	$echo
	 *
	 * @return 	string|bool
	 */
	public static function get_image( $args = [], $echo = false ) {
		$defaults = [
			'post_id'	=> null,
			'format'   	=> 'html',
			'size'     	=> 'large',
			'dummy'		=> true,
			'num'      	=> 0,
			'attrs'    	=> [],
			'fallback' 	=> 'first' 
		];  

		$args = apply_filters( 'wecodeart/filter/media/get_image/args', wp_parse_args( $args, $defaults ), get_post_type() );
		
		// Allow child theme to short-circuit this function.
		$pre = apply_filters( 'wecodeart/filter/media/get_image/pre', false, $args, get_post() );
		if ( false !== $pre ) return $pre; 
		
		// If post thumbnail (native WP) exists, use its id.
		if ( 0 === $args['num'] && has_post_thumbnail( $args['post_id'] ) ) {
			$id = get_post_thumbnail_id( $args['post_id'] );
		} elseif ( 'first' === $args['fallback'] ) { 
			$id = self::get_media_id( 'image', $args['num'], $args['post_id'] );
		} elseif ( is_int( $args['fallback'] ) ) { 
			$id = $args['fallback'];
		} 

		// If we have an id, get the HTML and URL.
		if ( isset( $id ) ) {	
			$html = '';

			if( (bool) $args['dummy'] ) {
				$dummy_sizes = self::get_image_sizes( $args['size'] ); 
				$dummy_ratio = absint( $dummy_sizes['width'] ) / absint( $dummy_sizes['height'] );
				  
				$args['attrs']['class'] .= ' ' . self::get_image_ratio( $id, $args['size'], $dummy_ratio ); 

				$html .= self::generate_dummy_placeholder( $dummy_sizes ); 
			}

			$html .= wp_get_attachment_image( $id, $args['size'], false, $args['attrs'] ); 

			list( $url ) = wp_get_attachment_image_src( $id, $args['size'], false );

		} elseif ( is_array( $args['fallback'] ) ) { 

			$id   = 0;
			$html = $args['fallback']['html'];
			$url  = $args['fallback']['url'];

		} else return false; 

		// Source path, relative to the root.
		$src = str_replace( home_url(), '', $url );

		// Determine output.
		if ( 'html' === mb_strtolower( $args['format'] ) ) $output = $html;
		elseif ( 'url' === mb_strtolower( $args['format'] ) ) $output = $url;
		else $output = $src; 

		// Return false if $url is blank.
		if ( empty( $url ) ) $output = false; 

		// Return data, filtered.
		$output = apply_filters( 'wecodeart/filter/media/get_image', $output, $args, $id, $html, $url, $src );
		if( $echo ) echo $output;
		else return $output;
	}

	/**
	 * Echo the Entry IMG Markup
	 *
	 * @since 	1.0
	 * @version 3.6.4
	 *
	 * @param 	array	$args
	 *
	 * @return 	mixed
	 */
	public function render_image( $args = [] ) {  
		$disable = apply_filters( 'wecodeart/filter/media/render_image/disable', false );
		if ( post_password_required() || is_attachment() || $disable === true ) return; 
		
		$args = wp_parse_args( $args, [ 'attrs' => [ 'class' => 'entry-media__src' ] ] ); 

		$wrappers = [ [ 'tag' => 'div', 'attrs' => [ 'class' => 'entry-media' ] ] ];

		if ( ! is_singular() ) $wrappers[] = [
			'tag' 	=> 'a',
			'attrs' => [
				'href'	=> esc_url( get_permalink() ),
				'class' => 'entry-media__link'  
			]
		];
		
		/**
		 * Return the image wrapped into containers
		 * @return string html
		 */
		$image = Markup::wrap( 'entry-media', $wrappers, [ __CLASS__, 'get_image' ], [ $args, true ], false ); 

		if ( $image ) {
		 	echo $image;
			return null;
		} else {
			return false;
		} 
	}

	/**
	 * Filter to disable image on single posts by default
	 *
	 * @since	3.6.4
	 *
	 * @param 	boolean	$disable
	 *
	 * @return 	boolean
	 */
	public function filter_render_image( $disable ) {
		if( is_singular() ) $disable = true;
		return $disable;
	}
}