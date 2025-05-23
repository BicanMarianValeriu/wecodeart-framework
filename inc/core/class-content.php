<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Core\Content
 * @copyright   Copyright (c) 2025, WeCodeArt Framework
 * @since 		3.5
 * @version		6.4.5
 */

namespace WeCodeArt\Core;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Config\Traits\Singleton;
use function WeCodeArt\Functions\get_prop;

/**
 * Handles PHP Fallback
 */
class Content {

	use Singleton;

	/**
	 * Send to Constructor
	 * @since 3.6.2
	 */
	public function init() {
		add_action( 'wecodeart/content', [ $this, 'markup' ] );
	}

	/**
	 * Returns the inner markp with wrapper based on user options
	 *
	 * @since 	unknown
	 * @version	6.4.5
	 *
	 * @return 	string
	 */
	public static function markup( string $file = '' ) {
		if( empty( $file ) ) {
			$file = get_parent_theme_file_path( 'templates/content-only.html' );
		}

		if( file_exists( $file ) === false ) {
			return;
		}
			
		echo do_blocks( file_get_contents( $file ) );
	}
}