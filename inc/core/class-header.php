<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Header Class
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since		3.5
 * @version		5.0.0
 */

namespace WeCodeArt\Core;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Markup;
use WeCodeArt\Singleton;
use WeCodeArt\Support\Styles;
use function WeCodeArt\Functions\get_prop;

/**
 * Framework Header
 */
class Header {

	use Singleton;

	/**
	 * Send to Constructor
	 */
	public function init() {
		add_action( 'wecodeart/header',	[ __CLASS__, 'markup' ] );
	}
	
	/**
	 * Output HEADER markup function
	 * Plugin PHP fallback
	 *
	 * @uses	WeCodeArt\Markup::wrap()
	 * @since 	unknown
	 * @version	5.0.0
	 *
	 * @return 	void 
	 */
	public static function markup( $args = [] ) {
		$args 	= wp_parse_args( $args, [
			'theme' 	=> wecodeart( 'name' ),
			'slug' 		=> 'header',
			'tagName' 	=> 'header',
		] );

		Markup::wrap( 'header', [
			[
				'tag' 	=> $args['tagName'],
				'attrs' => [
					'id'	=> $args['slug'],
					'class'	=> 'has-background has-white-background-color site-header wp-block-template-part sticky-top',
				]
			], 
			[ 
				'tag' 	=> 'div',
				'attrs' => [
					'class'	=> 'container',
				] 
			]
		], 'gutenberg_block_header_area' );
	}
}