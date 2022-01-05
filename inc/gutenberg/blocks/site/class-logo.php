<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg\Blocks
 * @copyright   Copyright (c) 2022, WeCodeArt Framework
 * @since		5.2.2
 * @version		5.2.2
 */

namespace WeCodeArt\Gutenberg\Blocks\Site;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;

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
        add_filter( 'get_custom_logo',  [ $this, 'custom_logo'  ] );
    }

    /**
	 * Filter Custom Logo
	 * 
	 * @since  	5.0.0
	 * @version	5.2.7
	 * 
	 * @return 	string
	 */
	public function custom_logo( $html ) {
		$search 	= '/' . preg_quote( 'class="custom-logo-link', '/' ) . '/';
		$replace 	= 'class="navbar-brand wp-block-site-logo__link';
		return preg_replace( $search, $replace, $html, 1 );
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return '
		.wp-block-site-logo {
            line-height: 0;
        }
		.wp-block-site-logo.is-default-size img {
            max-width: 120px;
            height: auto;
        }
        .wp-block-site-logo.aligncenter {
            display: table;
        }
        .wp-block-site-logo.aligncenter img {
            display: block;
            margin: 0 auto;
        }
		.wp-block-site-logo:where(.alignleft,.aligncenter,.alignright) {
			margin-bottom: 0;
		}
		.wp-block-site-logo:where(.alignleft,.aligncenter,.alignright) .navbar-brand {
			margin: 0;
		}
        .wp-block-site-logo :where(a,img) {
            border-radius: inherit;
        }
        .wp-block-site-logo a {
            display: inline-block;
        }
		';
	}
}
