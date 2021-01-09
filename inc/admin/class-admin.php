<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Admin
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		3.8.1
 * @version		4.2.0
 */

namespace WeCodeArt;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Singleton;
use WeCodeArt\Core\Scripts;
use WeCodeArt\Admin\Customizer;
use WeCodeArt\Admin\Notifications;

/**
 * Admin Side Functionality
 */
class Admin {

	use Singleton;
	use Scripts\Base;

	/**
	 * Send to Constructor
	 */
	public function init() {
		\add_action( 'rest_api_init', 		[ $this, 'register_routes' ] );
		\add_action( 'rest_api_init', 		[ $this, 'register_settings' ] );
		\add_action( 'admin_init',			[ $this, 'register_settings' ] );
		\add_action( 'admin_menu',			[ $this, 'register_menu_page' ] );
		\add_action( 'after_switch_theme', 	[ $this, 'insert_default_settings' ] );
		\add_filter( 'wecodeart/filter/gutenberg/settings', [ $this, 'block_editor_settings' ], 10, 2 );
		
		Notifications::get_instance();
		Customizer::get_instance();
	}

	/**
	 * Takes an array of new settings, merges them with the old settings, and pushes them into the database.
	 *
	 * @since 	4.2.0
	 *
	 * @param 	string|array 	$new		New settings. Can be a string, or an array.
	 * @param 	string       	$setting	Optional. Settings field name. Default is 'wecodeart-settings'.
	 * @return 	bool 						`true` if option was updated, `false` otherwise.
	 */
	public static function update_settings( $new = '', $setting = 'wecodeart-settings' ) {

		$old = get_option( $setting );

		$settings = wp_parse_args( $new, $old );

		// Allow settings to be deleted.
		foreach ( $settings as $key => $value ) {
			if ( 'unset' === $value ) {
				unset( $settings[ $key ] );
			}
		}

		return update_option( $setting, $settings );
	}

	/**
	 * Return option from the options table and cache result.
	 *
	 * Applies `wecodeart/get_option/$key` and `wecodeart_options` filters.
	 *
	 * Values pulled from the database are cached on each request, so a second request for the same value won't cause a
	 * second DB interaction.
	 *
	 * @since 4.2.0
	 *
	 * @param   string  $key       	Option name.
	 * @param   string  $setting   	Optional. Settings field name. Eventually defaults to `wecodeart` if not
	 *                          	passed as an argument.
	 * @param   bool    $use_cache 	Optional. Whether to use the Genesis cache value or not. Default is true.
	 * @return  mixed   			The value of the `$key` in the database, or the return from
	 * `wecodeart/get_option/{$key}` short circuit filter if not `null`.
	 */
	public static function get_option( $key, $default = false, $setting = null, $use_cache = true ) {
		// The default is set here, so it doesn't have to be repeated in the function arguments for option_value() too.
		$setting = $setting ?: 'wecodeart-settings';

		// Allow child theme to short circuit this function.
		$pre = apply_filters( "wecodeart/get_options/{$key}", null, $setting );
		if ( null !== $pre ) {
			return $pre;
		}

		// Bypass cache if viewing site in Customizer.
		if ( wecodeart_if( 'is_customizer' ) ) {
			$use_cache = false;
		}

		// If we need to bypass the cache.
		if ( ! $use_cache ) {
			$options = get_option( $setting );

			if ( ! is_array( $options ) || ! array_key_exists( $key, $options ) ) {
				return $default;
			}

			return is_array( $options[ $key ] ) ? $options[ $key ] : wp_kses_decode_entities( $options[ $key ] );
		}

		// Setup caches.
		static $settings_cache = [];
		static $options_cache  = [];

		// Check options cache.
		if ( isset( $options_cache[ $setting ][ $key ] ) ) {
			// Option has been cached.
			return $options_cache[ $setting ][ $key ];
		}

		// Check settings cache.
		if ( isset( $settings_cache[ $setting ] ) ) {
			// Setting has been cached.
			$options = apply_filters( 'wecodeart/options', $settings_cache[ $setting ], $setting );
		} else {
			// Set value and cache setting.
			$settings_cache[ $setting ] = apply_filters( 'wecodeart/options', get_option( $setting ), $setting );
			$options                    = $settings_cache[ $setting ];
		}

		// Check for non-existent option.
		if ( ! is_array( $options ) || ! array_key_exists( $key, (array) $options ) ) {
			// Cache non-existent option.
			$options_cache[ $setting ][ $key ] = $default;
		} else {
			// Option has not previously been cached, so cache now.
			$options_cache[ $setting ][ $key ] = is_array( $options[ $key ] ) ? $options[ $key ] : wp_kses_decode_entities( $options[ $key ] );
		}

		return $options_cache[ $setting ][ $key ];
	}

	/**
	 * Inserts the default WeCodeArt settings values into the options table, if they don't already exist.
	 *
	 * @since 4.2.0
	 *
	 * @return bool True of setting added, false otherwise.
	 */
	public function insert_default_settings() {
		return add_option( 'wecodeart-settings', [
			'theme_api_key'	=> 'FREEMIUM',
			'theme_version'	=> wecodeart( 'version' ),
		], '', true );
	}

	/**
	 * Register the default WeCodeArt settings.
	 *
	 * @since 4.2.0
	 *
	 * @return bool True of setting added, false otherwise.
	 */
	public function register_settings() {
		return register_setting( 'wecodeart-settings', 'wecodeart-settings' );
	}

	/**
	 * Register Rest Routes
	 *
	 * @since   4.2.0
	 * @access  public
	 */
	public function register_routes() {
		register_rest_route( 'wecodeart/v1', '/settings', [
			'methods'  => \WP_REST_Server::ALLMETHODS,
			'callback' => function( $request ) {
				// Unset Default Params
				$is_mod = $request->get_param( '_mod' );
				$params = array_filter( $request->get_params(), function( $key ) {
					return( ! in_array( $key, [ 'context', '_locale', '_mod', '_filter' ] ) );
				}, ARRAY_FILTER_USE_KEY );
			
				// Update if params with values
				$update = array_filter( $params );

				foreach( $update as $option => $value ) {
					if( $option === 'custom_css' ) {
						wp_update_custom_css_post( $value );
					} elseif ( $is_mod ) {
						set_theme_mod( $option, $value );
					} else {
						self::update_settings( [
							"$option" => $value
						] );
					}
				}

				// Get values, updated above
				$data 	= wp_parse_args(
					array_merge( [ 'custom_css'=> wp_get_custom_css() ], get_option( 'wecodeart-settings' ) ),
					Customizer::get_instance()->get_theme_mods()
				);

				// If params provided, return only their values
				if( ! empty( $params ) && $request->get_param( '_filter' )) {
					$data = array_intersect_key( $data, $params );
				}

				return rest_ensure_response( $data );
			},
			'permission_callback' => function() {
				return current_user_can( 'manage_options' );
			},
		] );
	}

	/**
	 * Register Admin Page
	 *
	 * @since   4.2.0
	 * @access  public
	 */
	public function register_menu_page() {
		$page_hook_suffix = add_theme_page(
			__( 'Theme Options', 'wecodeart' ),
			__( 'Theme Options', 'wecodeart' ),
			'manage_options',
			'wecodeart',
			[ $this, 'menu_callback' ]
		);

		add_action( "admin_print_scripts-{$page_hook_suffix}", [ $this, 'enqueue_assets' ] );
	}

	/**
	 * Register Admin Page
	 *
	 * @since   4.2.0
	 * @access  public
	 */
	public function menu_callback() {
		echo '<div id="wecodeart" class="wecodeart-admin"></div>';
	}

	/**
	 * Load assets for option page.
	 *
	 * @since   1.2.0
	 * @access  public
	 */
	public function enqueue_assets() {
		$version = wecodeart( 'version' );
		
		wp_enqueue_code_editor( [ 'type' => 'text/html' ] );
		wp_add_inline_script( 'wp-codemirror', 'window.CodeMirror = wp.CodeMirror;' );

		wp_enqueue_style(
			$this->make_handle(),
			$this->get_asset( 'css', 'admin' ),
			[ 'wp-components' ],
			$version
		);

		wp_enqueue_script(
			$this->make_handle(),
			$this->get_asset( 'js', 'admin' ),
			[ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-plugins', 'wp-components', 'wp-edit-post', 'wp-api', 'wp-editor', 'wp-hooks', 'lodash' ],
			$version,
			true
		);

		wp_localize_script( $this->make_handle(), 'wecodeart', [
			'currentUser'		=> wp_get_current_user()->display_name,
			'editorSettings' 	=> wp_json_encode( $this->block_editor_settings( [], 'wecodeart' ) ),
			'version' 			=> wecodeart_if( 'is_dev_mode' ) ? esc_html__( 'Developer Mode', 'wecodeart' ) : $version,
		] );
	}

	/**
	 * Filters the settings to pass to the block editor.
	 *
	 * @param 	array  	$editor_settings The editor settings.
	 * @param 	object 	$post The post being edited.
	 *
	 * @return 	array 	Returns updated editors settings.
	 */
	public function block_editor_settings( $settings, $post ) { 
		$settings['settings'] = array(
			'options'	=> array(
				'name'  => 'block-options',
				'label' => __( 'Block Options', 'wecodeart' ),
				'items' => array(
					'lorem'  => array(
						'name'  => 'lorem',
						'label' => __( 'Lorem Ipsum Generator', 'wecodeart' ),
						'value' => true,
					),
				),
			), 
		); 

		return $settings;
	}
}