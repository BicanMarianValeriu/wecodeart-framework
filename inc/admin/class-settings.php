<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Admin\Settings
 * @copyright   Copyright (c) 2023, WeCodeArt Framework
 * @since 		6.1.2
 * @version		6.1.2
 */

namespace WeCodeArt\Admin;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Singleton;
use function WeCodeArt\Functions\get_prop;

/**
 * Settings
 */
class Settings {

	use Singleton;

	const KEY = 'wecodeart-settings';

	/**
	 * Send to Constructor
	 */
	public function init() {
		\add_action( 'rest_api_init', 			[ $this, 'register' ] );
		\add_action( 'admin_init',				[ $this, 'register' ] );
		\add_action( 'after_switch_theme', 		[ $this, 'defaults' ] );
	}

	/**
	 * Register the default WeCodeArt settings.
	 *
	 * @since 	6.1.2
	 *
	 * @return 	bool True of setting added, false otherwise.
	 */
	public function register() {
		return register_setting( 'wecodeart', self::KEY );
	}

	/**
	 * Inserts the default WeCodeArt settings values into the options table, if they don't already exist.
	 *
	 * @since 	6.1.2
	 *
	 * @return bool True of setting added, false otherwise.
	 */
	public function defaults() {
		return add_option( self::KEY, [
			'theme_api_key'			=> 'FREEMIUM',
			'theme_version'			=> wecodeart( 'version' ),
			'theme_install_time' 	=> time(),
		] );
	}

	/**
	 * Takes an array of new settings, merges them with the old settings, and pushes them into the database.
	 *
	 * @since 	6.1.2
	 *
	 * @param 	string|array 	$new		New settings. Can be a string, or an array.
	 * @param 	string       	$setting	Optional. Settings field name. Default is 'wecodeart-settings'.
	 *
	 * @return 	bool 						`true` if option was updated, `false` otherwise.
	 */
	public static function set( $new = '', $setting = null ) {
		$setting = $setting ?: Settings::KEY;

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
	 * Applies `wecodeart/options/$key` and `wecodeart/options` filters.
	 *
	 * Values pulled from the database are cached on each request, so a second request for the same value won't cause a
	 * second DB interaction.
	 *
	 * @since 	6.1.2
	 *
	 * @param   string  $key       	Option name.
	 * @param   string  $setting   	Optional. Settings field name. Eventually defaults to `wecodeart-settings` if not
	 *                          	passed as an argument.
	 * @param   bool    $use_cache 	Optional. Whether to use the Genesis cache value or not. Default is true.
	 *
	 * @return  mixed   			The value of the `$key` in the database/filter.
	 */
	public static function get( $key, $default = false, $setting = null, $use_cache = true ) {
		$setting = $setting ?: Settings::KEY;

		// Allow child theme to short circuit this function.
		$pre = apply_filters( "wecodeart/options/{$key}", null, $setting );
		if ( null !== $pre ) {
			return $pre;
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
	 * Return all options.
	 *
	 * @since 	6.1.2
	 *
	 * @param   string  $setting   	Optional. Settings field name. Eventually defaults to `wecodeart-settings` if not
	 * 
	 * @return  mixed				The value of the in the database
	 */
	public static function all( $setting = Settings::KEY ) {
		return get_option( $setting );
	}
}