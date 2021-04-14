<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage  Support\Schema
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since		4.2
 * @version		4.2
 */

namespace WeCodeArt\Support;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Integration;

/**
 * Class Starter
 */
class Schema implements Integration {

	use Singleton;

	/**
	 * Get Conditionals
	 *
	 * @return void
	 */
	public static function get_conditionals() {
		wecodeart( 'conditionals' )->set( [
			'with_schema' => Schema\Condition::class,
		] );
		
		return [ 'with_schema' ];
	}

	/**
	 * Send to Constructor
	 *
	 * @since 	4.2.0
	 * @version	4.2.0
	 */
	public function register_hooks() {
		// General
		\add_filter( 'wecodeart/filter/attributes/body', 	[ $this, 'body'		] );
		\add_filter( 'wecodeart/filter/attributes/header', 	[ $this, 'header' 	] );
		\add_filter( 'wecodeart/filter/attributes/footer', 	[ $this, 'footer' 	] );
		\add_filter( 'wecodeart/filter/attributes/primary-sidebar',		[ $this, 'sidebar' 	] );
		\add_filter( 'wecodeart/filter/attributes/secondary-sidebar',	[ $this, 'sidebar' 	] );
	}

	/**
	 * Generate Body Attrs
	 *
	 * @since 	3.5
	 * @version 4.2
	 *
	 * @param 	array $attrs
	 *
	 * @return 	array 
	 */
	public function body( $attrs ) {
		// Set up blog variable.
		$blog = ( is_home() || is_archive() || is_attachment() || is_tax() || is_single() ) ? true : false;
		// Set up default itemtype.
		$itemtype = 'WebPage';
		// Get itemtype for the blog.
		$itemtype = ( $blog ) ? 'Blog' : $itemtype;
		// Get itemtype for search results.
		$itemtype = ( is_search() ) ? 'SearchResultsPage' : $itemtype;

		$defaults = [
			'class'		=> implode( ' ', get_body_class() ),
			'itemscope' => true,
			'itemtype' 	=> 'https://schema.org/' . $itemtype
		];

		$attrs = wp_parse_args( $attrs, $defaults );

		return $attrs;
	}

	/**
	 * Header
	 *
	 * @since 	4.2.0
	 * @version	4.2.0
	 *
	 * @param 	array $attrs
	 *
	 * @return 	array
	 */
	public function header( $attrs ) {
		$attrs['itemscope'] = true;
		$attrs['itemtype'] 	= 'https://schema.org/WPHeader';
		return $attrs;
	}

	/**
	 * Footer
	 *
	 * @since 	4.2.0
	 * @version	4.2.0
	 *
	 * @param 	array $attrs
	 *
	 * @return 	array
	 */
	public function footer( $attrs ) {
		$attrs['itemscope'] = true;
		$attrs['itemtype'] 	= 'https://schema.org/WPFooter';
		return $attrs;
	}
	
	/**
	 * Sidebar
	 *
	 * @since 	4.2.0
	 * @version	4.2.0
	 *
	 * @param 	array $attrs
	 *
	 * @return 	array
	 */
	public function sidebar( $attrs ) {
		$attrs['itemscope'] = true;
		$attrs['itemtype'] 	= 'https://schema.org/WPSideBar';
		return $attrs;
	}
}