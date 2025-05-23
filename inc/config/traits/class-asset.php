<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	WeCodeArt\Config\Traits
 * @copyright   Copyright (c) 2025, WeCodeArt Framework
 * @since 		5.4.5
 * @version		6.3.7
 */

namespace WeCodeArt\Config\Traits;

defined( 'ABSPATH' ) || exit;

/**
 * Base Trait Class for implementing make_handle()
 */
trait Asset {
	/**
	 * Make a script handle from the classname
	 *
	 * @since	5.4.5
 	 * @version	5.4.5
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
	 * @since	5.4.5
 	 * @version	6.3.7
	 *
	 * @param	string 	$type
	 * @param	string 	$name
	 * @param	string 	$url_or_path
	 *
	 * @return 	string
	 */
	protected function get_asset( string $type, string $name = __CLASS__, string $url_or_path = 'url' ): string {
		switch( strtolower( $url_or_path ) ) :
			case 'path':
			$method = 'get_path';
			break;
			default: 
			$method = 'get_uri';
			break;
		endswitch;

	 	return wecodeart_asset( $type, strtolower( str_replace( '\\', '-', $name ) ) )->{$method}();
	}
}