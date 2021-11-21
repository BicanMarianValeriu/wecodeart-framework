<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Entry Media Class
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since		3.6.x
 * @version		5.1.4
 */

namespace WeCodeArt\Core;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Markup;
use WeCodeArt\Singleton;

/**
 * Handles Entry Media output
 */
class Media {

	use Singleton;

	/**
	 * Pull an attachment ID from a post, if one exists.
	 *
	 * @since 	3.6.4
	 * @version	3.9.5
	 *
	 * @param 	int 		$index   	Optional. 	Index of which image to return from a post. Default is 0.
	 * @param 	int 		$post_id 	Optional. 	Post ID. Default is `get_the_ID()`.
	 *
	 * @return 	int|bool 	Image ID, or `false` if image with given index does not exist.
	 */
	public static function get_media_id( $type = 'image', $index = 0, $post_id = null ) {

		$media_ids = array_keys( get_attached_media( $type, $post_id ?: get_the_ID() ) );

		if ( isset( $media_ids[ $index ] ) ) return $media_ids[ $index ]; 

		return false;
	}

	/**
	 * Get Image Ratio
	 *
	 * @since 	3.7.6
	 * @version	3.9.5
	 *
	 * @param  	int		$id
	 * @param	string	$size
	 * @param 	int 	$dummy ratio
	 *
	 * @return 	mixed
	 */
	public static function get_image_ratio( $id, $size, $dummy_ratio ) {
		$real_sizes = wp_get_attachment_metadata( $id );
		$real_sizes = $real_sizes ?: []; 
		$real_ratio = 1; // 1 by default

		if( array_key_exists( 'sizes', $real_sizes ) ) {
			if( array_key_exists( $size, $real_sizes['sizes'] ) ) {
				$real_sizes = $real_sizes['sizes'][$size]; 
			} 
		}

		if( ! empty( $real_sizes ) ) {
			if( empty( $real_sizes['height'] ) ) $real_sizes['height'] = $real_sizes['width']; 
			$real_ratio = $real_sizes['width'] / $real_sizes['height'];
		}

		if( $real_ratio > $dummy_ratio ) $ratio_class = 'wider';
		if( $real_ratio < $dummy_ratio ) $ratio_class = 'taller';
		if( $real_ratio === $dummy_ratio ) $ratio_class = 'match';

		if( isset( $ratio_class ) ) return $ratio_class;
		return null;
	}

	/**
	 * Get information about available image sizes
	 *
	 * @since	3.6.4
	 * @version	4.1.5
	 * 
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
			if ( in_array( $_size, [ 'thumbnail', 'medium', 'medium_large', 'large' ] ) ) {
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
	 * Get Image - Return an image pulled from the media gallery. 
	 *
	 * @since 	3.6.4
	 * @version	5.0.0
	 *
	 * @param 	array	$args
	 * @param	bool	$echo
	 *
	 * @return 	string|bool
	 */
	public static function get_image( $args = [], $echo = false ) {
		$defaults = [
			'post_id'	=> null,
			'media_id'	=> null,
			'format'   	=> 'html',
			'size'     	=> 'large',
			'num'      	=> 0,
			'attrs'    	=> [],
			'fallback' 	=> [
				'html' 	=> '<img class="%2$s" src="%1$s" width="%3$s" height="%4$s" alt="%5$s"/>',
				'url'	=> get_template_directory_uri() . '/assets/images/placeholder.svg'
			]
		];  

		$args = apply_filters( 'wecodeart/filter/media/get_image/args', wp_parse_args( $args, $defaults ), get_post_type() );
		
		// Allow child theme to short-circuit this function.
		$pre = apply_filters( 'wecodeart/filter/media/get_image/pre', false, $args );

		if ( false !== $pre ) return $pre; 
		
		// If post thumbnail (native WP) exists, use its id.
		if( is_int( $args['media_id'] ) ) {
			$id = absint( $args['media_id'] );
		} elseif ( 0 === $args['num'] && has_post_thumbnail( $args['post_id'] ) ) {
			$id = get_post_thumbnail_id( $args['post_id'] );
		} elseif ( 'first' === $args['fallback'] ) { 
			$id = self::get_media_id( 'image', $args['num'], $args['post_id'] );
		} elseif ( is_int( $args['fallback'] ) ) { 
			$id = $args['fallback'];
		} 

		// If we have an id, get the HTML and URL.
		$dummy_sizes	= self::get_image_sizes( $args['size'] );
		$dummy_ratio	= absint( $dummy_sizes['height'] ) / absint( $dummy_sizes['width'] );
		$src_classes	= [ 'wp-block-featured-image__src' ];
		$html 			= '';
		
		if ( isset( $id ) ) {	
			$ratio_class	= self::get_image_ratio( $id, $args['size'], $dummy_ratio );
			$src_classes	= array_merge( $src_classes, [ $ratio_class ] );
			$html .= wp_get_attachment_image( $id, $args['size'], false, [
				'class' => implode( ' ', $src_classes )
			] );
			list( $url ) = wp_get_attachment_image_src( $id, $args['size'], false );
		} elseif ( is_array( $args['fallback'] ) ) { 
			$id		= 0;
			$url	= $args['fallback']['url'];
			$html	= sprintf(
				$args['fallback']['html'],
				esc_url( $url ),
				join( ' ', $src_classes ),
				intval( $dummy_sizes['width'] ),
				intval( $dummy_sizes['height'] ),
				esc_html__( 'Placeholder image', 'wecodeart' )
			);
		} else return false; 

		// Source path, relative to the root.
		$src = str_replace( home_url(), '', $url );

		// Determine output.
		if( 'html' === mb_strtolower( $args['format'] ) ) {
			$output = Markup::wrap( 'get-media', [ [
				'tag' 	=> 'figure',
				'attrs'	=> wp_parse_args( $args['attrs'], [
					'class'	=> 'wp-block-featured-image ratio',
					'style'	=> sprintf( '--wp--aspect-ratio:%s;', number_format( $dummy_ratio * 100, 3 ) . '%' )
				] )
			] ], $html, null, false );
		} elseif ( 'url' === mb_strtolower( $args['format'] ) ) {
			$output = $url;
		} else {
			$output = $src;
		};

		// Return false if $url is blank.
		if ( empty( $url ) ) $output = false; 

		// Return data, filtered.
		$output = apply_filters( 'wecodeart/filter/media/get_image', $output, $args, $id, $html, $url, $src );

		if( $echo ) {
			echo $output; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			return;
		}

		return $output; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}