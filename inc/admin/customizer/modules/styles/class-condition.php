<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Admin\Customizer\Modules\Styles
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		5.0.0
 * @version		5.0.0
 */

namespace WeCodeArt\Admin\Customizer\Modules\Styles;

defined( 'ABSPATH' ) || exit(); 

use WeCodeArt\Conditional\Interfaces\ConditionalInterface;
use function WeCodeArt\Functions\get_prop;

/**
 * Conditional that is only met when Styles extension is enabled.
 */
class Condition implements ConditionalInterface {

	/**
	 * @inheritdoc
	 */
	public function is_met() {
		return wecodeart_if( 'with_styles' );
	}
}