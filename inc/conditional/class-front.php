<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Conditional\is_front_page
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		4.0
 * @version		4.0.1
 */

namespace WeCodeArt\Conditional;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Conditional\Interfaces\ConditionalInterface;

/**
 * Conditional that is only met when in the front page.
 */
class Front implements ConditionalInterface {

	/**
	 * @inheritdoc
	 */
	public function is_met() {
		return \is_front_page() && ! \is_home();
	}
}