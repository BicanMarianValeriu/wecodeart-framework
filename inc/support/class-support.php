<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage  Support
 * @copyright   Copyright (c) 2025, WeCodeArt Framework
 * @since		3.5
 * @version		6.4.1
 */

namespace WeCodeArt;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Admin\Installer\Module;
use WeCodeArt\Config\Interfaces\Configuration;
use function WeCodeArt\Functions\get_prop;

/**
 * Support for various plugins and features.
 */
class Support implements Configuration {

	use Singleton;

    /**
	 * The protected integrations.
     * 
     * @todo    When "modular" functionality is developed, this wont be allowed to be deleted.
	 *
	 * @var     array[]
	 */
    const PROTECTED = [
        'assets',
        'dom',
        'files',
		'ifso',
        'locale',
        'plugins',
        'modules',
        'starter',
        'styles',
        'themes'
    ];

	/**
	 * The registered integrations.
	 *
	 * @var     Integration[]
	 */
	protected $items = [];

	/**
	 * Send to Constructor
	 */
	public function init() {
		// Theme Support
		\add_action( 'after_setup_theme', [ $this, 'after_setup_theme' ] );

		// Register Default/Core integrations
		foreach ( glob( dirname( __FILE__ ) . '/*', GLOB_ONLYDIR ) as $directory ) {
			$directory 	= basename( $directory );
			$namespace	= 'WeCodeArt\\Support\\' . ucfirst( $directory );
			
			if( ! class_exists( $namespace ) ) {
				continue;
			}

			$this->register( $directory, $namespace );
		}

        // Register plugin integrations
        foreach ( glob( dirname( __FILE__ ) . '/plugins/*', GLOB_ONLYDIR ) as $directory ) {
			$directory = basename( $directory );
			$namespace	= 'WeCodeArt\\Support\\Plugins\\' . ucfirst( $directory );
			
			if( ! class_exists( $namespace ) ) {
				continue;
			}

			$this->register( 'plugins/' . $directory, $namespace );
		}

        // Register module integrations
        foreach ( glob( dirname( __FILE__ ) . '/modules/*', GLOB_ONLYDIR ) as $directory ) {
			$directory = basename( $directory );
			$namespace	= 'WeCodeArt\\Support\\Modules\\' . ucfirst( $directory );
			
			if( ! class_exists( $namespace ) ) {
				continue;
			}

			$this->register( 'modules/' . $directory, $namespace );
		}
	}

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since 	1.0
	 * @version	5.3.8
	 *
	 * @return 	void
	 */
	public function after_setup_theme() {
		// Theme Support
		foreach( array_filter( wecodeart_config( 'support', [] ) ) as $feature => $value ) {
			if( $value === 'remove' ) {
                remove_theme_support( $feature );
                continue;
            }
			add_theme_support( $feature, $value );
		}
	}

	/**
	 * Loads all registered integrations if their conditionals are met.
	 *
	 * @return void
	 */
	public function load() {
		foreach ( $this->items as $class ) {
			if ( ! $this->conditionals_are_met( $class ) ) {
				continue;
			}
	
			$class::get_instance()->register_hooks();
		}
	}

	/**
	 * Checks if all conditionals of a given integration are met.
	 *
	 * @param 	Integration $class The class name of the integration.
	 *
	 * @return 	bool Whether or not all conditionals of the integration are met.
	 */
	protected function conditionals_are_met( $class ) {
		$conditionals = $class::get_conditionals();

		return wecodeart_if( $conditionals );
	}

	/**
     * Set a given integration value.
     *
     * @param  array|string  $key
     * @param  mixed   $value
     *
     * @return void
     */
    public function register( $key, $value = null ) {
        $this->set( $key, $value );
	}
	
    /**
     * Set a given integration value.
     *
     * @param  array|string  $key
     * @param  mixed   $value
     *
     * @return void
     */
    public function set( $key, $value = null ) {
        $keys = is_array( $key ) ? $key : [ $key => $value ];

        foreach ( $keys as $key => $value ) {
            $this->items[$key] = apply_filters( "wecodeart/integration/set/{$key}", $value );
        }
	}

	/**
     * Determine if the given integration value exists.
     *
     * @param  string  $key
     *
     * @return bool
     */
    public function has( $key ) {
        return isset( $this->items[$key] );
    }

    /**
     * Get the specified integration value.
     *
     * @param  string  $key
     * @param  mixed   $default
     *
     * @return mixed
     */
    public function get( $key, $default = null ) {
        if ( ! isset( $this->items[$key] ) ) {
            return $default;
        }

		if( in_array( $key, self::PROTECTED, true ) ) {
			return $this->items[$key];
		}

        return apply_filters( "wecodeart/integration/get/{$key}", $this->items[$key] );
    }
	
	/**
     * Removes integration from the container.
     *
     * @param  string  $key
     *
     * @return bool
     */
    public function forget( $key ) {
		if( in_array( strtolower( $key ), self::PROTECTED, true ) ) {
			return _doing_it_wrong( __FUNCTION__, esc_html__( 'Module is protected and cannot be removed.', 'wecodeart' ), wecodeart( 'version' ) );
		}

		unset( $this->items[$key] );
    }

    /**
     * Get all of the integration items for the application.
     *
     * @return array
     */
    public function all() {
        return $this->items;
    }
}