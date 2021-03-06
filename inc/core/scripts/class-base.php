<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Core\Scripts\Base
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		1.9
 * @version		5.0.0
 */

namespace WeCodeArt\Core\Scripts;

defined( 'ABSPATH' ) || exit();

/**
 * Base Trait Class for implementing make_handle()
 */
trait Base {
	/**
	 * Make a script handle from the classname
	 *
	 * @since	3.9.5
	 * @version	4.1.6
	 *
	 * @param	string 	$name
	 *
	 * @return 	string
	 */
	protected function make_handle( $name = '', $namespace = __CLASS__ ) {
		$handle = strtolower( str_replace( '\\', '-', $namespace ) );
		$handle = $name ? $handle . '-' . $name : $handle;
		return sanitize_html_class( $handle );
	}

	/**
	 * Retrieve an asset if path structure is the same as class
	 *
	 * @since	3.9.5
	 * @version	5.0.0
	 *
	 * @param	string 	$type
	 * @param	string 	$name
	 *
	 * @return 	string
	 */
	protected function get_asset( string $type, string $name = __CLASS__ ) {
	 	return wecodeart_get_asset( $type, strtolower( str_replace( '\\', '-', $name ) ) );
	}
}