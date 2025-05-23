<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework 
 * @subpackage 	Markup\Template
 * @copyright   Copyright (c) 2025, WeCodeArt Framework
 * @since		3.7.3
 * @version     6.4.1
 */

namespace WeCodeArt\Support\DOM;

defined( 'ABSPATH' ) || exit; 

use WeCodeArt\Config\Interfaces\Configuration;
use WeCodeArt\Config\Exceptions\FileNotFoundException;

/**
 * Template
 */
class Template {
    /**
     * Theme config instance.
     *
     * @var array
     */
    protected $config;

    /**
     * File path to the template.
     *
     * @var string
     */
    protected $file;

    /**
     * Construct template.
     *
     * @param $config
     */
    public function __construct( Configuration $config ) {
        $this->config = $config;
    }

    /**
     * Compile template.
     *
     * @param  array $context
     * @throws Exception
     *
     * @return void
     */
    public function compile( array $context = [] ) {
        ob_start();
        $this->render( $context );
        return ob_get_clean();
    }

    /**
     * Render template.
     *
     * @param  array $context
     * @throws Exception
     *
     * @return void
     */
    public function render( array $context = [] ) {
        if ( $template = $this->locate_template( $this->get_relative_path(), false, false ) ) {
            $this->do_actions();

            extract( apply_filters( "wecodeart/filter/template/context", $context, $this->get_file_name() ) );

            require $template;

            return;
        }

        throw new FileNotFoundException(
            sprintf( 'Template file [%s] cannot be located.', $this->get_relative_path() )
        );
    }

    /**
     * Calls before including template actions.
     *
     * @return void
     */
    public function do_actions() {
        if ( $this->is_named() ) {
            list( $slug, $name ) = $this->file;

            do_action( "get_template_part_{$slug}", $slug, $name );

            return;
		}
		
        if ( is_array( $this->file ) && isset( $this->file[0] ) ) {
            return do_action( "get_template_part_{$this->file[0]}", $this->file[0], null );
        }

        do_action( "get_template_part_{$this->file}", $this->file, null );
    }

    /**
     * Gets absolute path to the template.
     *
     * @return string
     */
    public function get_path() {
        $directory = $this->config['paths']['directory'];
        return $directory . '/' . $this->get_relative_path();
    }

    /**
     * Gets template path within `views` directory.
     *
     * @return string
     */
    public function get_relative_path() {
        return $this->config['directories']['views'] . '/' . $this->get_file_name( $this->config['views']['extension'] );
    }

    /**
     * Gets template name.
     *
     * @return string
     */
    public function get_file_name( $extension = '.php' ) {
        if ( $this->is_named() ) {
            $file_name = join( '-', $this->file ) . $extension;
		} elseif ( is_array( $this->file ) && isset( $this->file[0] ) ) {
            $file_name = "{$this->file[0]}{$extension}";
        } else {
            $file_name = $this->file . $extension;
        }

        return apply_filters( 'wecodeart/filter/template/filename', $file_name, $this->file );
    }

    /**
     * Checks if temlate has variant name.
     *
     * @return boolean
     */
    public function is_named() {
        if ( ! is_array( $this->file ) ) {
            return false;
		}
		
        if ( isset( $this->file[1] ) && is_bool( $this->file[1] ) || null === $this->file[1] || empty( $this->file[1] ) ) {
            return false;
        }

        return true;
    }

    /**
     * Sets the file path to the template.
     *
     * @param string $file
     *
     * @return self
     */
    public function set_file( $file ) {
        $this->file = $file;

        return $this;
    }

    /**
     * Gets the File path to the template.
     *
     * @return string
     */
    public function get_file() {
        return $this->file;
    }

    /**
     * Locate the template.
     *
     * @return string
     */
    public function locate_template( $template_names, $load = false, $require_once = true ) {
        $located = '';
        foreach ( (array) $template_names as $template_name ) {
            if ( ! $template_name ) {
                continue;
            }
            // In the child theme
            if ( file_exists( get_stylesheet_directory() . '/' . $template_name ) ) {
                $located = get_stylesheet_directory() . '/' . $template_name;
                break;
            // In the main theme
            } elseif ( file_exists( get_template_directory() . '/' . $template_name ) ) {
                $located = get_template_directory() . '/' . $template_name;
                break;
            // In the plugin, if set
            } elseif ( file_exists( $this->config['paths']['directory'] . '/' . $template_name ) ) {
                $located = $this->config['paths']['directory'] . '/' . $template_name;
                break;
            // Or in theme compat if any
            } elseif ( file_exists( ABSPATH . WPINC . '/theme-compat/' . $template_name ) ) {
                $located = ABSPATH . WPINC . '/theme-compat/' . $template_name;
                break;
            }
        }
     
        if ( $load && '' !== $located ) {
            load_template( $located, $require_once );
        }
     
        return $located;
    }
}