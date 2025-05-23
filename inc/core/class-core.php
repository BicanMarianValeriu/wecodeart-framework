<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Core
 * @copyright   Copyright (c) 2025, WeCodeArt Framework
 * @since 		3.0
 * @version		6.4.1
 */

namespace WeCodeArt;

defined( 'ABSPATH' ) || exit; 

use WeCodeArt\Config\Traits\Singleton;

/**
 * General Hooks
 */
class Core {

	use Singleton;

	/**
	 * Send to Constructor
	 *
	 * @since 3.6.2
	 */
	public function init() {
		Core\Header		::get_instance();
		Core\Content	::get_instance();
		Core\Footer		::get_instance();

		add_filter( 'post_gallery',	[ $this, 'post_gallery'	], 10, 2 );
	}

	/**
	 * Gallery Shortcode
	 *
	 * @since	5.0.0
	 * @version	5.5.8
	 *
	 * @return 	string
	 */
	public function post_gallery( $output, $attr ) {
		global $post, $wp_locale;

		static $instance = 0;
		$instance++;

		extract( shortcode_atts( [
			'id'         => $post->ID,
			'order'      => 'ASC',
			'orderby'    => 'menu_order ID',
			'itemtag'    => 'figure',
			'icontag'    => 'div',
			'captiontag' => 'figcaption',
			'columns'    => 0,
			'size'       => 'large',
			'include'    => '',
			'exclude'    => ''
		], $attr ) );

		$id 	= intval( $id );

		if( 'RAND' == $order ) $orderby = 'none';

		$args 	= [
			'post_type'		 => 'attachment',
			'post_status' 	 => 'inherit',
			'post_mime_type' =>	'image',
			'order' 		 => $order, 
			'orderby' 		 => $orderby
		];

		$attachments = [];

		if( ! empty( $include ) ) {
			$include 		= preg_replace( '/[^0-9,]+/', '', $include );
			$_attachments 	= get_posts( wp_parse_args( [
				'include' 	=> $include,
			], $args ) );

			foreach( $_attachments as $key => $val ) {
				$attachments[$val->ID] = $_attachments[$key];
			}
		} elseif( ! empty( $exclude ) ) {
			$exclude 	 = preg_replace( '/[^0-9,]+/', '', $exclude );
			$attachments = get_children( wp_parse_args( [
				'exclude' 		=> $exclude,
				'post_parent' 	=> $id, 
			], $args ) );
		} else {
			$attachments = get_children( wp_parse_args( [
				'post_parent' 	=> $id,
			], $args ) );
		}

		if( empty( $attachments ) ) {
			return '';
		}

		if( is_feed() ) {
			$output = "\n";
			foreach( $attachments as $att_id => $attachment ) $output .= wp_get_attachment_link( $att_id, $size, true ) . "\n";
			return $output;
		}

		$itemtag 	= tag_escape( $itemtag );
		$captiontag = tag_escape( $captiontag );
		$columns 	= intval( $columns );
		$has_cols 	= $columns > 0 ? true : false;

		$wrapper	= [ 'wp-gallery', 'wp-gallery--id-' . $id ];
		$items 		= [ 'wp-gallery__item' ];

		if( $has_cols ) {
			$wrapper[] = 'grid';
			$items 	= array_merge( $items, [ 'span-12', 'span-lg-' . $columns ] );

			wecodeart( 'styles' )->Utilities->load( [ 'span-12', 'span-lg-' . $columns ] );
		}
		
		$items 		= implode( ' ', $items );
		$wrapper 	= implode( ' ', $wrapper );

		$output 	= "<div id='gallery-{$instance}' class='${wrapper}'>";

		$i = 0;
		foreach( $attachments as $id => $attachment ) {
			$link 	= ( isset( $attr['link'] ) && 'file' == $attr['link'] );
			$link	= wp_get_attachment_link( $id, $size, $link, false );

			$output .= "<{$itemtag} class='{$items}'>";
			$output .= "<{$icontag} class='wp-gallery__icon'>$link</{$icontag}>";

			if ( $captiontag && trim( $attachment->post_excerpt ) ) {
				$output .= "<{$captiontag} class='wp-gallery__caption'>" . wptexturize( $attachment->post_excerpt ) . "</{$captiontag}>";
			}
			
			$output .= "</{$itemtag}>";
		}

		$output .= "</div>\n";

		return $output;
	}
}