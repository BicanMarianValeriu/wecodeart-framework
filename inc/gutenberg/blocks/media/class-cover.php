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
	 * Constructor.
	 *
	 * @return 	void
	 */
	public function init() {
		\add_filter( 'render_block_' . $this->get_block_type(), [ $this, 'render' ], 20, 2 );
	}

	/**
	 * Dynamically renders the `core/cover` block.
	 *
	 * @param 	string 	$content 	The block markup.
	 * @param 	array 	$block 		The parsed block.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( string $content = '', array $block = [] ): string {
		if ( get_prop( $block, [ 'attrs', 'useFeaturedImage' ] ) ) {
			$content = wecodeart( 'dom' )::processor( $content );
			if( $content->next_tag( [
				'tag_name' 	=> 'IMG',
			] ) ) {
				$content->add_class( 'wp-block-cover__image-background' );
			}
			$content = $content->get_updated_html();
		}

		if ( get_prop( $block, [ 'attrs', 'hasParallax' ] ) ) {
			wecodeart( 'styles' )->Components->load( [ 'parallax' ] );
		}
	
		return $content;
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return <<<CSS
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
				overflow: clip;
			}
			.wp-block-cover:is(.alignleft,.alignright) {
				margin-top: 0;
				margin-left: 0;
				margin-right: 0;
				float: none;
			}
			.wp-block-cover[class*="is-position-center"] {
				align-items: center;
			}
			.wp-block-cover[class*="-center"] {
				justify-content: center;
			}
			.wp-block-cover[class*="is-position-top"] {
				align-items: flex-start;
			}
			.wp-block-cover[class*="-left"] {
				justify-content: flex-start;
			}
			.wp-block-cover[class*="is-position-bottom"] {
				align-items: flex-end;
			}
			.wp-block-cover[class*="-right"] {
				justify-content: flex-end;
			}
			.wp-block-cover__inner-container {
				width: 100%;
				color: var(--wp--preset--color--white);
				z-index: 2;
			}
			.wp-block-cover.has-custom-content-position .wp-block-cover__inner-container {
				margin: 0;
			}
			.wp-block-cover.has-custom-content-position:is([class*=left],[class*=right]) .wp-block-cover__inner-container {
				width: auto; 
			}
			.wp-block-cover.is-light .wp-block-cover__inner-container {
				color: var(--wp--preset--color--dark);
			}
			.wp-block-cover__background,
			.wp-block-cover__image-background,
			.wp-block-cover__video-background,
			.wp-block-cover__gradient-background {
				position: absolute;
				inset: 0;
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
			.wp-block-cover .is-placeholder {
				filter: opacity(0.1);
			}
			.wp-block-cover .has-background-dim {
				z-index: 1;
			}
			.wp-block-cover :where(h1, h2, h3, h4, h5, h6, p, ul, ol, hr):not(.has-text-color,.dropdown-menu) {
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
		CSS;
	}
}
