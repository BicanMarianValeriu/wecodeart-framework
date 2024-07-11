<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg\Blocks
 * @copyright   Copyright (c) 2024, WeCodeArt Framework
 * @since		5.0.0
 * @version		6.4.8
 */

namespace WeCodeArt\Gutenberg\Blocks\Media;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\{ get_prop, get_placeholder_source };

/**
 * Gutenberg Media Text block.
 */
class Text extends Dynamic {

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
	protected $block_name = 'media-text';

	/**
	 * Block args.
	 *
	 * @return 	array
	 */
	public function block_type_args(): array {
		return [
			'render_callback' => [ $this, 'render' ]
		];
	}

	/**
	 * Dynamically renders the `core/media-text` block.
	 *
	 * @param 	array 	$attributes	The attributes.
	 * @param 	string 	$content 	The block markup.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( array $attributes = [], string $content = '' ): string {
		$dom	= $this->dom( $content );
		$div  	= wecodeart( 'dom' )::get_element( 'figure', $dom );
		$link 	= wecodeart( 'dom' )::get_element( 'a', $div );

		// If no image, add placeholder.
		if( ! get_prop( $attributes, 'mediaLink' ) ) {
			wecodeart( 'dom' )::add_classes( $div, [ 'is-placeholder' ] );

			$image = $dom->createElement( 'img' );

			$image->setAttribute( 'class', 'wp-block-media-text__placeholder' );
			$image->setAttribute( 'src', get_placeholder_source() );
			$image->setAttribute( 'alt', esc_html__( 'Placeholder', 'wecodeart' ) );
			
			( $link ?? $div )->appendChild( $image );
		}

		return $dom->saveHTML();
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		$breaks 	= wecodeart_json( [ 'settings', 'custom', 'breakpoints' ], [] );
		$tablet		= get_prop( $breaks, 'md', '768px' );
		$desktop	= get_prop( $breaks, 'lg', '992px' );
		
		return <<<CSS
			.wp-block-media-text {
				--wp--custom--gutter: 1rem;
				display: grid;
				grid-template-columns: 50% 1fr;
				grid-template-rows: auto;
			}
			.wp-block-media-text:not(.has-background) {
				gap: var(--wp--custom--gutter);
			}
			.wp-block-media-text.has-media-on-the-right {
				grid-template-columns: 1fr 50%;
			}
			.wp-block-media-text.has-background .wp-block-media-text__content {
				padding: var(--wp--custom--gutter);
			}
			.wp-block-media-text__media {
				margin: 0;
			}
			.wp-block-media-text__media.is-placeholder {
				background-color: var(--wp--preset--color--accent);
				background-blend-mode: soft-light;
			}
			.wp-block-media-text__media.is-placeholder img {
				height: 100%;
				filter: opacity(.035);
			}
			.wp-block-media-text__media img,
			.wp-block-media-text__media video {
				display: block;
				width: 100%;
				object-fit: cover;
			}
			.wp-block-media-text__media .wp-block-media-text__placeholder {
				object-fit: initial;
				min-height: 250px;
			}
			.is-image-fill .wp-block-media-text__media {
				position: relative;
				min-height: 250px;
				background-size: cover;
				background-position: center;
			}
			.is-image-fill .wp-block-media-text__media img {
				position: absolute;
				width: 1px;
				height: 1px;
				padding: 0;
				margin: -1px;
				overflow: hidden;
				clip: rect(0, 0, 0, 0);
				border: 0;
				min-width: 0;
				min-height: 0;
			}
			@media (min-width: $tablet) {
				.wp-block-media-text {
					--wp--custom--gutter: 2rem;
				}
				.wp-block-media-text.has-media-on-the-right .wp-block-media-text__media {
					grid-column: 2;
				}
				.wp-block-media-text.has-media-on-the-right .wp-block-media-text__content {
					grid-column: 1;
				}
				.wp-block-media-text.is-vertically-aligned-top .wp-block-media-text__content {
					align-self: flex-start;
				}
				.wp-block-media-text.is-vertically-aligned-center .wp-block-media-text__content {
					align-self: center;
				}
				.wp-block-media-text.is-vertically-aligned-bottom .wp-block-media-text__content {
					align-self: flex-end;
				}
				.wp-block-media-text__media {
					grid-column: 1;
					grid-row: 1;
				}
				.wp-block-media-text__content {
					grid-column: 2;
					grid-row: 1;
					align-self: center;
				}
			}
			@media (max-width: 767.98px) {
				.wp-block-media-text.is-stacked-on-mobile {
					grid-template-columns: 100%!important;
				}
				.wp-block-media-text.is-stacked-on-mobile .wp-block-media-text__media {
					grid-column: 1;
					grid-row: 1;
				}
				.wp-block-media-text.is-stacked-on-mobile .wp-block-media-text__content {
					grid-column: 1;
					grid-row: 2;
				}
			}
		CSS;
	}
}
