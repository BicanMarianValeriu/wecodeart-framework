<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since		4.0.5
 * @version		4.0.5
 */

namespace WeCodeArt\Gutenberg\Modules;

defined( 'ABSPATH' ) || exit();

/**
 * Handles Gutenberg Theme Custom Classes Functionality.
 */
class Classes {

	use \WeCodeArt\Singleton;

	/**
	 * Class Init.
	 *
	 * @return void
	 */
	public function init() {
		Classes\Columns::get_instance();
		Classes\Suggestions::get_instance();
	}
}
