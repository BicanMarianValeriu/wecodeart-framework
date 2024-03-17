<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Styles Utilities
 * @copyright   Copyright (c) 2024, WeCodeArt Framework
 * @since		5.2.4
 * @version		6.3.7
 */

namespace WeCodeArt\Support\Styles;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Config\Traits\Asset;
use WeCodeArt\Config\Traits\Singleton; 
use WeCodeArt\Config\Interfaces\Configuration;
use function WeCodeArt\Functions\get_prop;

/**
 * Handles Utilities.
 */
class Utilities implements Configuration {

    use Singleton;
    use Asset;

	/**
	 * The registered utilities.
	 *
	 * @var Utilities[]
	 */
	protected $items    = [];

    /**
	 * The utilities classes to load
	 *
	 * @access 	public
	 * @var 	array
	 */
	protected $classes  = [];

    /**
	 * The CSS cache file.
	 *
	 * @var string
	 */
    const CACHE_FILE    = 'wp-utilities.css';
    const CACHE_KEY     = 'wecodeart/support/styles/utilities';

    /**
	 * Send to Constructor
	 */
	public function init() {
        // Require, cache and load CSS
		require_once( __DIR__ . '/utilities.php' );

        add_action( 'init', [ $this, 'cache' ], 95   );

        // Admin
		add_action( 'enqueue_block_editor_assets', 					[ $this, 'block_editor_assets'	] );
        add_action( 'after_setup_theme',                            [ $this, 'editor_css'       ], 20, 1 );
		add_filter( 'wecodeart/filter/gutenberg/settings', 			[ $this, 'set_suggestions' 	], 10, 2 );
		add_filter( 'wecodeart/filter/gutenberg/settings/classes', 	[ $this, 'add_suggestions'  ], 10, 1 );

		// Front
		add_filter( 'pre_render_block',     [ $this, 'get_block_utilities'      ], 20, 2 );
		add_action( 'wp_enqueue_scripts',   [ $this, 'get_template_utilities'   ], 20, 1 );
        add_action( 'wp_print_styles',      [ $this, 'frontend_css'             ], PHP_INT_MAX, 1 );
	}

    /**
     * Load.
     *
     * @param  string|array
     *
     * @return void
     */
    public function load( $key ) {
        return $this->classes = array_merge( $this->classes, (array) $key );
	}

    /**
	 * Generate Utilities CSS on admin.
	 *
	 * @return  void
	 */
	public function cache() {
		// Stylesheet
		$inline_css = '';
		$array_css 	= [];

		foreach( $this->all() as $utility ) {
			$array_css = array_merge_recursive( $array_css, $utility );
		}

		if( ! empty( $array_css ) ) {
            $array_css  = wecodeart( 'styles' )::sort_breakpoints( $array_css );
			$processed 	= wecodeart( 'styles' )::parse( wecodeart( 'styles' )::add_prefixes( $array_css ) );
			$inline_css .= wecodeart( 'styles' )::compress( $processed );
		}

		if( empty( $inline_css ) ) return;
		
		$filesystem = wecodeart( 'files' );
		$filesystem->set_folder( 'cache' );

		if( ! $filesystem->has_file( self::CACHE_FILE ) || false === get_transient( self::CACHE_KEY ) ) {
			$filesystem->create_file( self::CACHE_FILE, $inline_css );
			set_transient( self::CACHE_KEY, true, 5 * MINUTE_IN_SECONDS );
		}

		$filesystem->set_folder( '' );
	}

    /**
	 * Editor only.
	 *
	 * @return  void
	 */
	public function block_editor_assets() {
		wp_enqueue_script( $this->make_handle(), $this->get_asset( 'js', 'gutenberg/ext-classes' ), [
			'wecodeart-gutenberg'
		], wecodeart( 'version' ) );
	}

    /**
	 * Load Utilities CSS on admin.
	 *
	 * @return  void
	 */
	public function editor_css() {
		$filesystem = wecodeart( 'files' );
		$filesystem->set_folder( 'cache' );

		add_editor_style( $filesystem->get_file_url( self::CACHE_FILE, true ) );
		
		$filesystem->set_folder( '' );
	}

    /**
	 * Output frontend styles.
	 *
	 * @return 	string
	 */
	public function frontend_css() {
        if( empty( $this->classes ) ) {
            return;
        }

		$inline_css = '';
		$array_css	= [];

		foreach( array_unique( $this->classes ) as $utility ) {
            // If we dont have utility, move on.
            if( ! $this->has( $utility ) ) {
                continue;
            }

            // Merge breakpoints.
            $array_css = array_merge_recursive( $array_css, $this->get( $utility ) );
        }
        
        if( ! empty( $array_css ) ) {
            $array_css  = wecodeart( 'styles' )::sort_breakpoints( $array_css );
            $processed  = wecodeart( 'styles' )::parse( wecodeart( 'styles' )::add_prefixes( $array_css ) );
            $inline_css .= wecodeart( 'styles' )::compress( $processed );
        }

		if( empty( $inline_css ) ) {
            return;
        }

		wp_register_style( $this->make_handle(), false, [], true, true );
		wp_add_inline_style( $this->make_handle(), $inline_css );
		wp_enqueue_style( $this->make_handle() );
	}

    /**
	 * Get block classes.
	 *
	 * @param	string 	$content
	 * @param	array 	$block
	 *
	 * @return  void
	 */
	public function get_block_utilities( $content, $block = [] ): void {
		$classes = array_filter( explode( ' ', get_prop( $block, [ 'attrs', 'className' ], '' ) ) );

		if( $classes ) {
			$this->classes = array_merge( $this->classes, $classes );
		}
	}

	/**
	 * Output styles.
	 *
	 * @return 	string
	 */
	public function get_template_utilities() {
		global $_wp_current_template_content;
        
		$blocks		= parse_blocks( $_wp_current_template_content );
		$classes	= $this->collect_classes( _flatten_blocks( $blocks ) );

        if( $classes ) {
            $this->classes = array_merge( $this->classes, $classes );
        }
	}

    /**
	 * Get classNames.
	 *
	 * @param	array	$blocks  List with all blocks
	 *
	 * @return 	array
	 */
	public function collect_classes( array $blocks = [] ): array {
		$return = [];

		foreach( $blocks as $block ) {
			// Dont bother with empty blocks from parse_blocks
			if( ! get_prop( $block, [ 'blockName' ] ) ) continue;

			$classes	= get_prop( $block, [ 'attrs', 'className' ], '' );
			$classes 	= array_filter( explode( ' ', $classes ) );

			if( ! empty( $classes ) ) {
				$return = array_merge( $return, $classes );
			}
		}

		return array_unique( $return );
	}

    /**
	 * Add new block editor settings for custom classes.
	 *
	 * @param   array  $settings 	The editor settings.
	 * @param   object $post 		The post being edited.
	 *
	 * @return array Returns updated editors classes suggestions.
	 */
	public function set_suggestions( array $settings, $post ): array {
		if ( ! isset( $settings[ 'customClasses' ] ) ) {
			$classes = apply_filters( 'wecodeart/filter/gutenberg/settings/classes', [], $post );
			$classes = array_map( 'sanitize_text_field', array_values( array_unique( $classes ) ) ); // Unique sanitized values.
			$settings['customClasses'] = $classes;
		}

		return $settings;
	}

	/**
	 * Add helper classes.
	 *
	 * @param 	array  	$args
	 *
	 * @return 	array 	Returns updated editors settings.
	 */
	public function add_suggestions( array $args ): array {
		$breakpoints	= wecodeart_json( [ 'settings', 'custom', 'breakpoints' ], [] );
		$displays		= wecodeart_json( [ 'settings', 'custom', 'display' ], [] );

		foreach( range( 1, 12 ) as $number ) {
			$args[] = 'col-' . $number;
			$args[] = 'span-' . $number;
			$args[] = 'start-' . $number;
			$args[] = 'offset-' . $number;
		}

		foreach( array_keys( $breakpoints ) as $breakpoint ) {
			$args[] = 'col-' . $breakpoint;
			$args[] = 'span-' . $breakpoint;
			$args[] = 'col-' . $breakpoint . '-auto';
			$args[] = 'sticky-' . $breakpoint . '-top';
			$args[] = $breakpoint . ':sticky-top';
			
			foreach( range( 1, 12 ) as $number ) {
				$args[] = 'col-' . $breakpoint . '-' . $number;
				$args[] = 'span-' . $breakpoint . '-' . $number;
				$args[] = $breakpoint . ':span-' . $number;
				$args[] = 'start-' . $breakpoint . '-' . $number;
				$args[] = $breakpoint . ':start-' . $number;
				$args[] = 'offset-' . $breakpoint . '-' . $number;
			}
		}
		
		foreach( array_keys( $displays ) as $d ) {
			$args[] = 'display-' . $d;
		}

		return array_merge( [
			'vr',
			'small',
			'mark',
			'initialism',
			'disabled',
			'clearfix',
			'text-truncate',
			'list-unstyled',
			'has-underline',
			'visually-hidden',
			'visually-hidden-focusable',
			'screen-reader-text',
			'sticky-top',
			'fixed-top',
			'fixed-bottom',
			'grid',
			'col-auto',
		], array_keys( $this->all() ), $args );
	}
	
    /**
     * Set a given module value.
     *
     * @param  array|string  $key
     * @param  mixed   $value
     *
     * @return void
     */
    public function set( $key, $value = null ) {
        $keys = is_array( $key ) ? $key : [ $key => $value ];

        foreach ( $keys as $key => $value ) {
            $this->items[$key] = apply_filters( "wecodeart/styles/utilities/set/{$key}", $value );
        }
	}

	/**
     * Determine if the given module value exists.
     *
     * @param  string  $key
     *
     * @return bool
     */
    public function has( $key ) {
        return isset( $this->items[$key] );
    }

    /**
     * Get the specified module value.
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

        return apply_filters( "wecodeart/styles/utilities/get/{$key}", $this->items[$key] );
    }
	
	/**
     * Removes module from the container.
     *
     * @param  string  $key
     *
     * @return bool
     */
    public function forget( $key ) {
		unset( $this->items[$key] );
    }

    /**
     * Get all of the module items for the application.
     *
     * @return array
     */
    public function all() {
        return $this->items;
    }
}