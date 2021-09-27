<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage  Support
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since		3.5
 * @version		5.0.6
 */

namespace WeCodeArt;

defined( 'ABSPATH' ) || exit();

use ArrayAccess;

/**
 * Support for various plugins and features.
 */
class Support implements ArrayAccess {

	use Singleton; 

	/**
	 * The registered integrations.
	 *
	 * @var Integration[]
	 */
	protected $items = [];

	/**
	 * Send to Constructor
	 */
	public function init() {
		// Theme Support
		\add_action( 'after_setup_theme', [ $this, 'after_setup_theme'	] );
		\add_action( 'after_setup_theme', [ $this, 'load_translations'	] );

		// Register Default Integrations
		$this->register( 'fse',					Support\FSE::class		);
		$this->register( 'styles',				Support\Styles::class	);
		$this->register( 'starter',				Support\Starter::class	);
		$this->register( 'plugin/anr', 			Support\Plugins\ANR::class 			);
		$this->register( 'plugin/cf7', 			Support\Plugins\CF7::class 			);
		$this->register( 'plugin/wpseo', 		Support\Plugins\WPSeo::class 		);
		$this->register( 'plugin/woocommerce', 	Support\Plugins\WooCommerce::class 	);
	}

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since 	1.0
	 * @version	5.0.6
	 */
	public function after_setup_theme() {
		// Theme Support
		foreach( array_filter( wecodeart_config( 'support', [] ) ) as $feature => $value ) {
			if( $value === false ) continue;
			add_theme_support( $feature, $value );
		}

		// Theme check required.
		add_theme_support( 'title-tag' );
		add_theme_support( 'automatic-feed-links' );

		// This theme has one menu location.
		register_nav_menus( [
			'primary' => __( 'Primary Navigation', 'wecodeart' ),
		] );
	}

	/**
	 * Load Translations
	 *
	 * @since	4.0.2
	 * @version 4.0.2
	 *
	 * @return 	void
	 */
	public function load_translations() {
		// Loads wp-content/languages/themes/wecodeart-it_IT.mo.
		load_theme_textdomain(
			'wecodeart',
			trailingslashit( WP_LANG_DIR ) . 'themes' 
		);

		// Loads wp-content/themes/child-theme-name/languages/it_IT.mo.
		load_theme_textdomain(
			'wecodeart',
			trailingslashit( wecodeart_config( 'paths' )['child'] ) . wecodeart_config( 'directories' )['languages']
		);

		// Loads wp-content/themes/wecodeart/languages/it_IT.mo.
		load_theme_textdomain(
			'wecodeart',
			trailingslashit( wecodeart_config( 'paths' )['directory'] ) . wecodeart_config( 'directories' )['languages']
		);
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

        return apply_filters( "wecodeart/integration/get/{$key}", $this->items[$key] );
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
     * Removes integration from the container.
     *
     * @param  string  $key
     *
     * @return bool
     */
    public function forget( $key ) {
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

    /**
     * Determine if the given integration option exists.
     *
     * @param  string  $key
     *
     * @return bool
     */
    public function offsetExists( $key ) {
        return $this->has( $key );
    }

    /**
     * Get a integration option.
     *
     * @param  string  $key
     *
     * @return mixed
     */
    public function offsetGet( $key ) {
        return $this->get( $key );
    }

    /**
     * Set a integration option.
     *
     * @param  string  $key
     * @param  mixed  $value
     *
     * @return void
     */
    public function offsetSet( $key, $value ) {
        $this->set( $key, $value );
    }

    /**
     * Unset a integration option.
     *
     * @param  string  $key
     *
     * @return void
     */
    public function offsetUnset( $key ) {
        $this->set( $key, null );
    }
}