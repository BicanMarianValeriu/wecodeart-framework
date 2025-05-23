<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Styles\Components
 * @copyright   Copyright (c) 2025, WeCodeArt Framework
 * @since		6.1.5
 * @version		6.1.5
 */

namespace WeCodeArt\Support\Styles\Components;

defined( 'ABSPATH' ) || exit;

/**
 * Components Styles
 */
abstract class Base {
    /**
     * Component's Style Deps.
     *
     * @var     array
     */
    static $deps = [];

    /**
	 * Component styles.
	 *
	 * @return 	string
	 */
	abstract public static function styles(): string;
}
