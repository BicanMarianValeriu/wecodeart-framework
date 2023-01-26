<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework 
 * @subpackage 	Markup\Inputs
 * @copyright   Copyright (c) 2023, WeCodeArt Framework
 * @since		3.1.2
 * @version		5.5.8
 */

namespace WeCodeArt\Support\Markup;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Config\Traits\Asset;
use WeCodeArt\Config\Interfaces\Configuration;

/**
 * Standard Inputs Markup
 */
class Inputs implements Configuration {

	use Singleton;
    use Asset;

	/**
     * All of the configuration items.
     *
     * @var array
     */
    protected $items = [];

    /**
	 * Send to Constructor
	 */
	public function init() {
		// Register Default Inputs
		$this->register( 'basic',		Inputs\Basic::class     );
		$this->register( 'button',		Inputs\Button::class 	);
		$this->register( 'select',		Inputs\Select::class 	);
		$this->register( 'textarea',	Inputs\TextArea::class 	);
		$this->register( 'toggle',		Inputs\Toggle::class 	);
		$this->register( 'radio',		Inputs\Toggle::class 	);
		$this->register( 'checkbox',	Inputs\Toggle::class 	);
        $this->register( 'fieldset',	Inputs\Fieldset::class 	);
        $this->register( 'floating',	Inputs\Floating::class 	);

        add_action( 'wp_enqueue_scripts',                           [ $this, 'assets'   ], -10 );
        add_filter( 'wecodeart/filter/gutenberg/settings/classes', 	[ $this, 'classes'  ] );
	}

	/**
	 * Render the HTML of the input
	 *
	 * @param 	string 		$type		text/number/etc
	 * @param 	array 		$args		Input Args
	 *
	 * @return	void
	 */
	public static function render( string $type = 'hidden', ...$input_args ) {
		echo self::compile( $type, ...$input_args ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	/**
	 * Get the HTML of the input
	 *
	 * @since	unknown
	 * @version	5.3.7
	 *
	 * @param 	string 		$type		text/number/etc
	 * @param 	array 		$args		Input Args
	 *
	 * @return	string
	 */
	public static function compile( string $type = 'hidden', ...$input_args ) {
		if( in_array( $type, Inputs\Basic::get_types() ) ) {
			$class_type = 'basic';
		} else {
			$class_type = $type;
		}

		$storage    = Inputs::get_instance();
		$class      = $storage->get( $class_type );

		if( $class ) {

            if( ! wp_style_is( $storage->make_handle() ) ) {
                wp_enqueue_style( $storage->make_handle() );
            }

            if( ! wp_script_is( $storage->make_handle() ) ) {
                wp_enqueue_script( $storage->make_handle() );
            }

			$input = new $class( $type, ...$input_args );
			
            return $input->get_content(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}

    /**
	 * Enqueue Front-End Assets
	 *
	 * @since	5.3.3
	 * @version	5.5.8
	 */
	public function assets() {
		wp_register_style( $this->make_handle(), $this->get_asset( 'css', 'modules/forms' ), [], wecodeart( 'version' ) );

		wp_register_script( $this->make_handle(), $this->get_asset( 'js', 'modules/forms' ), [
			'wp-hooks'
		], wecodeart( 'version' ), true );
	}

    /**
	 * Add new classes.
	 *
	 * @param 	array  	$classes
	 *
	 * @return 	array 	Returns updated editors settings.
	 */
	public function classes( $classes ) {
		return wp_parse_args( [
			'form-label',
			'form-text',
			'form-control',
			'form-control-sm',
			'form-control-lg',
			'form-select',
			'form-select-sm',
			'form-select-lg',
			'form-range',
			'form-floating',
			'input-group',
			'input-group-sm',
			'input-group-lg',
			'input-group-text',
			'valid-feedback',
			'valid-tooltip',
			'invalid-feedback',
			'invalid-tooltip',
		], $classes );
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
            $this->items[$key] = apply_filters( "wecodeart/inputs/set/{$key}", $value );
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

        return apply_filters( "wecodeart/inputs/get/{$key}", $this->items[$key] );
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