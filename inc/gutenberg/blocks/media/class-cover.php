<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg\Blocks
 * @copyright   Copyright (c) 2023, WeCodeArt Framework
 * @since		5.0.0
 * @version		5.7.2
 */

namespace WeCodeArt\Gutenberg\Blocks\Media;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use WeCodeArt\Support\Styles\Property\Focal;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Cover block.
 */
class Cover extends Dynamic {

	use Singleton;

	/**
	 * Block namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'core';

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'cover';

	/**
	 * Shortcircuit Register
	 */
	public function register() {
		\add_filter( 'block_type_metadata_settings', [ $this, 'filter_render' ], 10, 2 );
	}

	/**
	 * Filter markup
	 *
	 * @param	array 	$settings
	 * @param	array 	$data
	 */
	public function filter_render( $settings, $data ) {
		if ( $this->get_block_type() === $data['name'] ) {
			$settings = wp_parse_args( [
				'render_callback' => [ $this, 'render' ]
			], $settings );
		}
		
		return $settings;
	}

	/**
	 * Dynamically renders the `core/cover` block.
	 *
	 * @param 	string 	$content 	The block markup.
	 * @param 	array 	$block 		The parsed block.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( $attributes = [], $content = '' ) {

		if ( 'image' !== get_prop( $attributes, [ 'backgroundType' ] ) || ! get_prop( $attributes, [ 'useFeaturedImage' ] ) ) {
			return $content;
		}
	
		$current_featured_image = get_the_post_thumbnail_url();
		$placeholder = wecodeart_config( 'placeholder', false );

		if ( false === $current_featured_image ) {
			if( $placeholder === false ) {
				return $content;
			}

			$current_featured_image = get_prop( $placeholder, [ 'src' ] );
		}
		
		$is_img_element		= ! ( get_prop( $attributes, [ 'hasParallax' ] ) || get_prop( $attributes, [ 'isRepeated' ] ) );
		$is_img_data		= strpos( $current_featured_image, 'data:image' ) !== false;
		$escaped_url		= esc_url( $current_featured_image, $is_img_data ? [ 'data' ] : null );
		$escaped_alt		= esc_attr( get_the_post_thumbnail_caption() ?: get_prop( $placeholder, 'text' ) );
		
		if ( $is_img_element ) {
			$object_position = '';
			
			if ( $focal = get_prop( $attributes, [ 'focalPoint' ] ) ) {
				$object_position = ( new Focal( 'object-position', $focal ) )->get_value(); // Already escaped/sanitized
				$object_position = sprintf( 'data-object-position="%s" style="object-position:%s"', $object_position, $object_position );
			}
	
			$image_template = '<img class="wp-block-cover__image-background" src="%s" alt="%s" data-object-fit="cover" %s />';
	
			$image = sprintf( $image_template, $escaped_url, $escaped_alt, $object_position );
	
			$content = str_replace( '</span><div', '</span>' . $image . '<div', $content );
		} else {
			if ( in_the_loop() ) {
				update_post_thumbnail_cache();
			}

			$content	= preg_replace(
				'/class=\".*?\"/',
				'${0} style="background-image:url(' . $escaped_url . ')"',
				$content,
				1
			);
		}
	
		return $content;
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return '
		.wp-block-cover {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			min-height: 350px;
			padding: 1rem var(--wp--custom--gutter);
			background-size: cover;
			background-position: center center;
			overflow: hidden;
		}
		.single-post .wp-block-cover__inner-container {
			max-width: var(--wp--style--global--content-size);
			margin-left: auto;
			margin-right: auto;
		}
		.wp-block-cover.alignleft, wp-block-cover.alignright {
			margin-top: 0;
			margin-left: 0;
			margin-right: 0;
			float: none;
		}
		.wp-block-cover[class*="is-position-center"],
		.wp-block-cover[class*="-center"] .wp-block-cover__inner-container {
			align-items: center;
		}
		.wp-block-cover[class*="is-position-top"],
		.wp-block-cover[class*="-left"] .wp-block-cover__inner-container {
			align-items: flex-start;
		}
		.wp-block-cover[class*="is-position-bottom"],
		.wp-block-cover[class*="-right"] .wp-block-cover__inner-container {
			align-items: flex-end;
		}
		.wp-block-cover__inner-container {
			width: 100%;
			color: var(--wp--preset--color--white);
			z-index: 2;
		}
		.wp-block-cover.is-light .wp-block-cover__inner-container {
			color: var(--wp--preset--color--dark);
		}
		.has-custom-content-position .wp-block-cover__inner-container {
			display: flex;
			flex-direction: column;
		}
		.wp-block-cover__background,
		.wp-block-cover__image-background,
		.wp-block-cover__video-background,
		.wp-block-cover__gradient-background {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: 0;
			padding: 0;
			width: 100%;
			height: 100%;
			max-width: none;
			max-height: none;
			object-fit: cover;
			outline: none;
			border: none;
			box-shadow: none;
		}
		.wp-block-cover__background,
		.wp-block-cover__gradient-background {
			opacity: var(--wp--bg--opacity);
		}
		.wp-block-cover .has-parallax {
			background-attachment: fixed;
			background-size: cover;
			background-repeat: no-repeat;
		}
		.wp-block-cover .is-repeated {
			background-repeat: repeat;
			background-size: auto;
		}
		.wp-block-cover .has-background-dim {
			z-index: 1;
		}
		.wp-block-cover :is(h1, h2, h3, h4, h5, h6, p, ul, ol, hr):not(.has-text-color) {
			color: inherit;
		}
		@supports (-webkit-overflow-scrolling: touch) {
			.wp-block-cover .has-parallax {
				background-attachment: scroll;
			}
		}
		@media (prefers-reduced-motion: reduce) {
			.wp-block-cover .has-parallax {
				background-attachment: scroll;
			}
		}
		';
	}
}
