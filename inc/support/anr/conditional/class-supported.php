<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Support\ANR\Conditional\is_anr_support
 * @copyright   Copyright (c) 2019, WeCodeArt Framework
 * @since 		4.0.2
 * @version		4.0.8
 */

namespace WeCodeArt\Support\ANR\Conditional;

defined( 'ABSPATH' ) || exit(); 

use WeCodeArt\Conditional\Interfaces\ConditionalInterface;

/**
 * Conditional that is only met when plugin is supported.
 */
class Supported implements ConditionalInterface {

	/**
	 * @inheritdoc
	 */
	public function is_met() {
		return \apply_filters( 'wecodeart/filter/support/anr', true );
	}
}