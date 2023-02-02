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
 * @since		5.2.2
 * @version		5.7.2
 */

namespace WeCodeArt\Gutenberg\Blocks\Site;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function str_contains;
use function str_replace;
use function dirname;
use function content_url;
use function method_exists;
use function add_filter;
use function file_exists;
use function file_get_contents;
use function get_template_directory;
use function WeCodeArt\Functions\get_prop;
use function WeCodeArt\Functions\get_dom_element;

/**
 * Gutenberg Site Logo block.
 */
class Logo extends Dynamic {

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
	protected $block_name = 'site-logo';

	/**
	 * Shortcircuit Register
	 */
	public function register() {
		\add_filter( 'render_block_' . $this->get_block_type(),	[ $this, 'render'	], 10, 2 );
    }

    /**
	 * Filter Custom Logo
	 * 
	 * @since  	5.7.2
	 * @version	5.7.2
	 * 
	 * @return 	string
	 */
	public function render( $content = '', $block = [] ) {
		$dom	= $this->dom( $content );
		$div  	= get_dom_element( 'div', $dom );
		$link 	= get_dom_element( 'a', $div );
		$img  	= get_dom_element( 'img', $link ?? $div );

		// If no image, bail early.
		if ( ! $img ) {
			return $content;
		}

		// Update classes
		$img->setAttribute( 'class', 'wp-block-site-logo__img' );
		
		if( $link ) {
			$link->setAttribute( 'class', 'wp-block-site-logo__link' );
		}

		// If image is SVG, import it.
		if ( str_contains( $content, '.svg' ) ) {
			$file = str_replace( content_url(), dirname( dirname( get_template_directory() ) ), $img->getAttribute( 'src' ) );
	
			if ( ! file_exists( $file ) ) {
				return $content;
			}
	
			$svg = $dom->importNode( $this->dom( file_get_contents( $file ) )->documentElement, true );
	
			if ( ! method_exists( $svg, 'setAttribute' ) ) {
				return $content;
			}
	
			$svg->setAttribute( 'class', $img->getAttribute( 'class' ) );
			$svg->setAttribute( 'width', $img->getAttribute( 'width' ) );
			$svg->setAttribute( 'height', $img->getAttribute( 'height' ) );
			$svg->setAttribute( 'aria-label', $img->getAttribute( 'alt' ) );
	
			( $link ?? $div )->removeChild( $img );
			( $link ?? $div )->appendChild( $svg );
		}

		return $dom->saveHTML();
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return '
		.wp-block-site-logo.is-style-rounded {
			border-radius: 9999px;
		}
		.wp-block-site-logo.is-default-size :where(img,svg) {
            max-width: 120px;
            height: auto;
        }
        .wp-block-site-logo.aligncenter {
            display: table;
        }
        .wp-block-site-logo.aligncenter :where(img,svg) {
            display: block;
            margin: 0 auto;
        }
		.wp-block-site-logo > * {
			padding-top: 0.3125rem;
			padding-bottom: 0.3125rem;
        }
        .wp-block-site-logo :where(a,img,svg) {
            border-radius: inherit;
        }
        .wp-block-site-logo a {
			display: inline-block;
			color: inherit;
			white-space: nowrap;
        }
		/* Navigation */
		.wp-block-navigation .navbar-nav .wp-site-logo {
			color: var(--wp--nav-link-color);
		}
		.wp-block-navigation .navbar-nav .wp-site-logo a:is(:hover,:focus) {
			color: var(--wp--nav-link-hover-color);
		}
		';
	}
}
