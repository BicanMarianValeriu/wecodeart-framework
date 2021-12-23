<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Core\Scripts
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		1.9
 * @version		5.3.8
 */

namespace WeCodeArt\Core;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Core\Scripts;
use function WeCodeArt\Functions\get_prop;

/**
 * Framework Assets
 */
class Scripts {

	use Singleton;
	use Scripts\Base;

	/**
	 * Send to Constructor
	 *
	 * @since 3.6.2
	 */
	public function init() {
		// All starts here
		add_action( 'wp_enqueue_scripts', 	[ $this, 'front_scripts'		], 0 );
		add_action( 'wp_enqueue_scripts', 	[ $this, 'localize_js' 			], 90 );
		add_action( 'wp_enqueue_scripts', 	[ $this, 'inline_js' 			], 95 );
		add_action( 'wp_default_scripts', 	[ $this, 'jquery_to_footer' 	] ); 
	}

	/**
	 * Enqueue Front-End Styles
	 *
	 * @since	1.0
	 * @version	5.3.3
	 */
	public function front_scripts() {
		// Styles
		// --Core
		wp_enqueue_style( $this->make_handle(), $this->get_asset( 'css', 'frontend' ), [], wecodeart( 'version' ) );

		// Scripts
		// -- Core
		wp_enqueue_script( $this->make_handle(), $this->get_asset( 'js', 'frontend' ), [ 'wp-hooks' ], wecodeart( 'version' ), true );
		// --LiveReload - only in developer enviroment
		if ( wecodeart_if( 'is_dev_mode' ) ) {
			$lr_url = 'http://localhost:35729/livereload.js';
			$lr_url = set_url_scheme( $lr_url );

			$response = wp_remote_get( $lr_url );

			if ( wp_remote_retrieve_response_code( $response ) === 200 ) {
				wp_enqueue_script( $this->make_handle( 'livereload' ), $lr_url, [], wecodeart( 'version' ) );
			}
		}
	}

	/**
	 * WeCodeArt JS Object
	 *
	 * @since	3.2
	 * @version	5.3.5
	 *
	 * @return 	void
	 */
	public function localize_js() {
		global $wp_scripts;

		$wecodeart = [
			'assetsEnqueue' 	=> $wp_scripts->queue, 
			'templateDirectory' => get_template_directory_uri(),
			'isDevMode'			=> wecodeart_if( 'is_dev_mode' ),
		];

		if( is_child_theme() ) {
			$wecodeart['styleDirectory'] = get_stylesheet_directory_uri();
		}

		$wecodeart = apply_filters( 'wecodeart/filter/scripts/localize', $wecodeart );
		
		wp_localize_script( $this->make_handle(), 'wecodeart', $wecodeart );
	}

	/**
	 * WeCodeArt JS Inline
	 *
	 * @since	4.1.5
	 * @version	4.1.8
	 *
	 * @return 	void
	 */
	public function inline_js() {
		global $wp_scripts;
		$data = 'document.addEventListener("DOMContentLoaded",function(){';
		$data .= 'var _wjs = new wecodeart.JSM(wecodeart);_wjs.loadEvents();';
		$data .= '});';
		wp_add_inline_script( $wp_scripts->queue[ count( $wp_scripts->queue ) - 1 ], $data );
	}

	/**
	 * jQuery to Footer
	 *
	 * @since	3.1.2
	 * @version	5.3.8
	 */
	public function jquery_to_footer( $wp_scripts ) {
		$config = wecodeart_config( 'footer' );

		if ( is_admin() && get_prop( $config, 'jquery' ) !== false ) return;

		$wp_scripts->add_data( 'jquery', 			'group', 1 );
		$wp_scripts->add_data( 'jquery-core', 		'group', 1 );
		$wp_scripts->add_data( 'jquery-migrate', 	'group', 1 );
	}
}