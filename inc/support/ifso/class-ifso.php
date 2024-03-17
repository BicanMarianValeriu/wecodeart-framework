<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Conditional
 * @copyright   Copyright (c) 2024, WeCodeArt Framework
 * @since 		4.0
 * @version		6.3.7
 */

namespace WeCodeArt\Support;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Config\Interfaces\Integration;
use WeCodeArt\Config\Interfaces\Configuration;
use WeCodeArt\Config\Traits\Singleton;
use WeCodeArt\Config\Traits\No_Conditionals;

/**
 * Conditional.
 *
 * @author     Bican Marian Valeriu <marianvaleriubican@gmail.com>
 */
class IfSo implements Configuration, Integration {

    use Singleton;
    use No_Conditionals;

    /**
     * All of the conditional items.
     *
     * @var array
     */
    protected $items = [];

    /**
	 * Hooks
	 *
	 * @return  void
	 */
	public function register_hooks() {
        $this->register( 'is_theme_admin',  IfSo\Settings::class );
        $this->register( 'is_front_page',   IfSo\Front::class );
        $this->register( 'is_debug_mode',   IfSo\Debug::class );
        $this->register( 'is_dev_mode',     IfSo\Debug::class );
    }
	
    /**
     * Set a given conditional value.
     *
     * @param  array|string  $key
     * @param  mixed   $value
     *
     * @return void
     */
    public function register( $key, $value = null ) {
        return $this->set( $key, $value );
    }

    /**
     * Set a given conditional value.
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
     * Determine if the given conditional value exists.
     *
     * @param  string  $key
     *
     * @return bool
     */
    public function has( $key ) {
        return isset( $this->items[$key] );
    }

    /**
     * Get the specified conditional value.
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
     * Get all of the conditional items for the application.
     *
     * @return array
     */
    public function all() {
        return $this->items;
    }
}