<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Styles\Components
 * @copyright   Copyright (c) 2023, WeCodeArt Framework
 * @since		6.1.7
 * @version		6.1.7
 */

namespace WeCodeArt\Support\Styles;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Config\Traits\Asset;
use WeCodeArt\Config\Interfaces\Configuration;
use function WeCodeArt\Functions\get_prop;
 
/**
 * Handles Components.
 */
class Components implements Configuration {

	use Singleton;
    use Asset;

	/**
     * All of the configuration items.
     *
     * @var array
     */
    protected $items 	= [];

    /**
	 * The components to load
	 *
	 * @access 	public
	 * @var 	array
	 */
	protected $loaded  = [];

    /**
	 * Send to Constructor
	 */
	public function init() {
        // Modules
		$this->register( 'close',       Components\Close::class     );
		$this->register( 'modal',       Components\Modal::class     );
		$this->register( 'toast',       Components\Toast::class     );
		$this->register( 'toggler',     Components\Toggler::class   );
		$this->register( 'lightbox',    Components\Lightbox::class  );
		$this->register( 'dropdown',    Components\Dropdown::class  );
		$this->register( 'offcanvas',   Components\OffCanvas::class );
		$this->register( 'transition',  Components\Transition::class);

        add_action( 'wp_print_styles',  [ $this, 'assets' ], 20, 1 );
	}

    /**
     * Load.
     *
     * @param  string|array
     *
     * @return void
     */
    public function load( $key ) {
        return $this->loaded = wp_parse_args( (array) $key, $this->loaded );
	}
    
    /**
	 * Enqueue Assets
     *
     * @return void
	 */
	public function assets() {
        if( empty( $this->loaded ) ) return;

		$inline_css = '';

        $queue = [];

		foreach( array_unique( $this->loaded ) as $component ) {
            // If we dont have component, move on.
            if( ! $this->has( $component ) ) continue;

            $queue[] = $component;

            // Merge deps.
            if( ! empty( $deps = $this->get( $component )::$deps ) ) {
				foreach( $deps as $dep ) {
					// Skip already loaded.
					if( in_array( $dep, $queue  ) ) {
						continue;
					}

                    array_unshift( $queue, $dep );
				}
			}
        }
        
        if( empty( $queue ) ) return;
           
        foreach( $queue as $component ) {
            $inline_css .= $this->get( $component )::styles();
        }

		if( empty( $inline_css ) ) return;

        $inline_css = wecodeart( 'styles' )::compress( $inline_css );

		wp_register_style( $this->make_handle(), false, [], true, true );
		wp_add_inline_style( $this->make_handle(), $inline_css );
		wp_enqueue_style( $this->make_handle() );
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
     * Set a given configuration value.
     *
     * @param  array|string  $key
     * @param  mixed   $value
     *
     * @return void
     */
    public function set( $key, $value = null ) {
        $keys = is_array( $key ) ? $key : [ $key => $value ];

        foreach ( $keys as $key => $value ) {
            $this->items[$key] = $value;
        }
    }

	/**
     * Determine if the given configuration value exists.
     *
     * @param  string  $key
     *
     * @return bool
     */
    public function has( $key ) {
        return isset( $this->items[$key] );
    }

    /**
     * Get the specified configuration value.
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

        return $this->items[$key];
	}

    /**
     * Forget a given configuration value.
     *
     * @param string  $key
     *
     * @return void
     */
    public function forget( $key ) {
        unset( $this->items[$key] );
    }

    /**
     * Get all of the configuration items for the application.
     *
     * @return array
     */
    public function all() {
        return $this->items;
    }
}
