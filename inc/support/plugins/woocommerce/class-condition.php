<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Support\Plugins\WooCommerce\is_woocommerce_active
 * @copyright   Copyright (c) 2023, WeCodeArt Framework
 * @since 		4.0.2
 * @version		6.1.2
 */

namespace WeCodeArt\Support\Plugins\WooCommerce;

defined( 'ABSPATH' ) || exit(); 

use WeCodeArt\Conditional\Interfaces\ConditionalInterface;

/**
 * Conditional that is only met when in the front page.
 */
class Condition implements ConditionalInterface {

	/**
	 * @inheritdoc
	 */
	public function is_met() {
		return class_exists( 'woocommerce' );
	}
}