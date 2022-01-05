<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Core\Footer
 * @copyright   Copyright (c) 2022, WeCodeArt Framework
 * @since 		3.5
 * @version		5.3.8
 */

namespace WeCodeArt\Core;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Admin\Customizer;

/**
 * This file serves as fallback for old PHP of way of building themes
 * and plugins who calls footer.php template. Uses WP_Query to render a
 * PHP version of the template from the /block-template-parts/ into footer
 */
class Footer {

	use Singleton;

	/**
	 * Send to Constructor
	 */
	public function init() {
		add_action( 'wecodeart/footer',	[ $this, 'markup' ] );
		add_action( 'wp_footer',		[ $this, 'markup_credits' ], 0 );
	}
	
	/**
	 * Output FOOTER markup function Plugin PHP fallback
	 * 
	 * @since 	1.0
	 * @version	5.3.9
	 *
	 * @return 	HTML 
	 */
	public function markup( $args = [] ) {
		$args 	= wp_parse_args( $args, [
			'theme' 	=> wecodeart( 'name' ),
			'slug' 		=> 'footer',
			'tagName' 	=> 'footer',
		] );

		wecodeart( 'markup' )::wrap( 'footer', [
			[
				'tag' 	=> $args['tagName'],
				'attrs' => [
					'id'	=> $args['slug'],
					'class'	=> 'site-footer wp-block-template-part',
				]
			]
		], 'block_footer_area' ); 
	}

	/**
	 * Footer Credits
	 *
	 * @since 	1.0
	 * @version 5.1.2
	 *
	 * @return 	void
	 */
	public function markup_credits() {
		wecodeart_template( 'general/credits' );
	}
}