<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Support\WooCommerce
 * @copyright   Copyright (c) 2022, WeCodeArt Framework
 * @since 		1.9
 * @version		5.6.3
 */

namespace WeCodeArt\Support\Plugins;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Singleton;
use WeCodeArt\Integration;
use function WeCodeArt\Functions\get_prop;

/**
 * The Class: Handles all necesary functions and requirements 
 * to ensure proper support for WooCommerce
 */
class WooCommerce implements Integration {

	use Singleton;
	
	/**
	 * Get Conditionals
	 *
	 * @return void
	 */
	public static function get_conditionals() {
		wecodeart( 'conditionals' )->set( [
			'is_woocommerce_active'		=> WooCommerce\Conditional\Plugin::class,
			'is_woocommerce_page'		=> WooCommerce\Conditional\Page::class,
			'is_woocommerce_archive'	=> WooCommerce\Conditional\Archive::class,
		] );

		return [ 'is_woocommerce_active' ];
	}

	/**
	 * Register Hooks
	 *
	 * @return void
	 */
	public function register_hooks() {
		// Add support for WooCommerce 
		add_action( 'after_setup_theme', 						[ $this, 'after_setup_theme' 	] );

		// Filters
		add_filter( 'register_block_type_args', 				[ $this, 'block_type_args' 		], 20, 2 );
		add_filter( 'wecodeart/filter/gutenberg/styles/core', 	[ $this, 'block_inline_styles' 	], 20, 1 );
		add_filter( 'wecodeart/filter/gutenberg/restricted',	[ $this, 'restricted_blocks' 	] );
		add_filter( 'woocommerce_breadcrumb_defaults',			[ $this, 'breadcrumb_defaults'	] );
	}

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since	unknown
	 */
	public function after_setup_theme() {
		$support = get_prop( wecodeart_config( 'woocommerce' ), 'support', [] );
		// Theme Support
		foreach( $support as $feature => $value ) {
			if( $value === 'remove' ) {
                remove_theme_support( $feature );
                continue;
            }
			add_theme_support( $feature, $value );
		}
	}

	/**
	 * Block args
	 *
	 * @since	5.6.3
	 * @version	5.6.3
	 *
	 * @return 	array
	 */
	public function block_type_args( $args, $block_name ) {
		if ( $block_name === 'core/button' && get_prop( $args, [ 'supports', '__experimentalSelector' ] ) ) {
			$woocommerce = [
				'.wc-block-components-button',
			];

			$selectors = array_merge( (array) get_prop( $args, [ 'supports', '__experimentalSelector' ], [] ), $woocommerce );
			$args['supports']['__experimentalSelector'] = implode( ',', array_filter( $selectors ) );
		}

		return $args;
	}

	/**
	 * Block CSS process
	 *
	 * @since	5.6.3
	 * @version	5.6.3
	 *
	 * @return 	array
	 */
	public function block_inline_styles( $args ) {
		return array_merge( $args, [
			'woocommerce/featured-category',
			'woocommerce/featured-product',
		] );
	}

	/**
	 * Filter - Restricted WooCommerce Blocks from theme code
	 *
	 * @since	5.0.0
	 * @version	5.5.5
	 *
	 * @return 	array
	 */
	public function restricted_blocks( $blocks ) {
		return wp_parse_args( [
			'woocommerce/handpicked-products',
			'woocommerce/products-by-attribute',
			'woocommerce/products-by-tag',
			'woocommerce/product-categories',
			'woocommerce/product-best-sellers',
			'woocommerce/product-top-rated',
			'woocommerce/product-on-sale',
			'woocommerce/product-category',
			'woocommerce/product-new',
			'woocommerce/product-tag',
		], $blocks );
	}

	/**
	 * Breadcrumbs
	 *
	 * @since	5.6.3
	 * @version	5.6.3
	 *
	 * @return 	array
	 */
	public function breadcrumb_defaults( $args ) {
		$args['delimiter'] = ' » ';

		return $args;
	}
}