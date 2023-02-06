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
 * @since		5.7.2
 * @version		5.7.2
 */

namespace WeCodeArt\Gutenberg\Blocks\Site;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function add_filter;
use function WeCodeArt\Functions\get_dom_element;

/**
 * Gutenberg Template Part block.
 */
class Template extends Dynamic {

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
	protected $block_name = 'template-part';

	/**
	 * Shortcircuit Register
	 */
	public function register() {
		\add_filter( 'render_block_core/' . $this->block_name, 	[ $this, 'render'	], 10, 2 );
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
		$dom   = $this->dom( $content );
		$first = get_dom_element( '*', $dom );

		if ( ! $first ) {
			return $content;
		}

		if ( $first->tagName === 'header' ) {
			$first->setAttribute( 'id', 'top' );
			$first->setAttribute( 'role', 'banner' );
			$first->setAttribute( 'itemscope', 'itemscope' );
			$first->setAttribute( 'itemtype', 'https://schema.org/WPHeader' );
		}

		if ( $first->tagName === 'footer' ) {
			$first->setAttribute( 'role', 'contentinfo' );
			$first->setAttribute( 'itemscope', 'itemscope' );
			$first->setAttribute( 'itemtype', 'https://schema.org/WPFooter' );
		}
		
		if ( $first->tagName === 'aside' ) {
			$first->setAttribute( 'role', 'complementary' );
			$first->setAttribute( 'itemscope', 'itemscope' );
			$first->setAttribute( 'itemtype', 'https://schema.org/WPSideBar' );
		}

		return $dom->saveHTML();
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return '';
	}
}