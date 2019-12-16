<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Support\WooCommerce\Customizer
 * @copyright   Copyright (c) 2019, WeCodeArt Framework
 * @since 		3.5
 * @version		4.0.7
 */

namespace WeCodeArt\Support\WooCommerce;

defined( 'ABSPATH' ) || exit;

use function WeCodeArt\Functions\get_prop;

/**
 * Handles Customizer Settings for WooCommerce
 */
class Customizer {

	use \WeCodeArt\Singleton; 

	/**
	 * Send to Constructor
	 * @since 3.6.2
	 */
	public function init() {
		add_filter( 'wecodeart/filter/customizer/defaults', [ $this, 'extend_defaults' ] );

		new Customizer\Content();
	}

	/**
	 * Extend Customizer default options
	 *
	 * @since 3.6.0
	 * @since 4.0.7
	 */
	public function extend_defaults( $defaults ) {
		$woo_config = get_prop( wecodeart_config( 'woocommerce' ), 'customizer', [] );

		return wp_parse_args( $woo_config, $defaults );
	}
}