<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Conditional\Interfaces
 * @copyright   Copyright (c) 2023, WeCodeArt Framework
 * @since 		4.0
 * @version		4.0
 */

namespace WeCodeArt\Conditional\Interfaces;

defined( 'ABSPATH' ) || exit(); 

/**
 * Conditional interface, used to prevent integrations from loading.
 *
 * @package WeCodeArt\Conditional\ConditionalInterface
 */
interface ConditionalInterface {

	/**
	 * Returns whether or not this conditional is met.
	 *
	 * @return boolean Whether or not the conditional is met.
	 */
	public function is_met();
}