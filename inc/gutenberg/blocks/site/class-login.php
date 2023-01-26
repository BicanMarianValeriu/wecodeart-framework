<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg\Blocks
 * @copyright   Copyright (c) 2023, WeCodeArt Framework
 * @since		5.1.8
 * @version		5.5.8
 */

namespace WeCodeArt\Gutenberg\Blocks\Site;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Login block.
 */
class Login extends Dynamic {

	use Singleton;

	/**
	 * Block namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'core';

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'loginout';

	/**
	 * Shortcircuit Register
	 */
	public function register() {
		\add_filter( 'block_type_metadata_settings', [ $this, 'filter_render' ], 10, 2 );
	}

	/**
	 * Filter Render
	 *
	 * @param	array 	$settings
	 * @param	array 	$data
	 */
	public function filter_render( $settings, $data ) {
		if ( $this->get_block_type() === $data['name'] ) {
			$settings = wp_parse_args( [
				'render_callback' => [ $this, 'render' ]
			], $settings );
		}
		
		return $settings;
	}

	/**
	 * Dynamically renders the `core/search` block.
	 *
	 * @param 	array 	$attributes The block attributes.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( $attributes = [], $content = '', $block = null ) {
		// Build the redirect URL.
		$current_url 	= ( is_ssl() ? 'https://' : 'http://' ) . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
		$contents 		= wp_loginout( get_prop( $attributes, [ 'redirectToCurrent' ] ) ? $current_url : '', false );
		$classnames 	= [];

		// If logged-out and displayLoginAsForm is true, show the login form.
		if ( ! is_user_logged_in() && get_prop( $attributes, [ 'displayLoginAsForm' ] ) ) {
			// Add a class.
			$classnames[] 	= 'has-form';
			// Get the form.
			$contents 		= $this->render_form( [], false );
		}

		return wecodeart( 'markup' )::wrap( 'wp-block-' . $this->block_name, [
			[
				'tag' 	=> 'div',
				'attrs'	=> $this->get_block_wrapper_attributes( [
					'class' => join( ' ', array_filter( $classnames ) )
				] )
			]
		], $contents, [], false );
	}

	/**
	 * Dynamically renders the `core/loginout` form.
	 *
	 * @param 	array 	$args	The form args.
	 * @param 	bool 	$echo	Echo or return the HTML.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render_form( $args = [], $echo = true ) {
		// Default args from wp_login_form();
		$defaults = [
			'redirect'       => ( is_ssl() ? 'https://' : 'http://' ) . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'],
			'label_username' => __( 'Username or Email Address', 'wecodeart' ),
			'label_password' => __( 'Password', 'wecodeart'  ),
			'label_remember' => __( 'Remember Me', 'wecodeart'  ),
			'label_log_in'   => __( 'Log In', 'wecodeart'  ),
			'id_username'    => 'user_login',
			'id_password'    => 'user_pass',
			'id_remember'    => 'rememberme',
			'id_submit'      => 'wp-submit',
			'remember'       => true,
			'value_username' => '',
			'value_remember' => false,
		];

		// We use same filters as WP - plugins will hook into those.
		return wecodeart_template( 'general/login', [
			'action' 	=> home_url( 'wp-login.php', 'login_post' ),
			'args'		=> wp_parse_args( $args, apply_filters( 'login_form_defaults', $defaults ) )
		], $echo );
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return '
		.wp-block-login {
            margin-bottom: 2rem;
        }
		';
	}
}
