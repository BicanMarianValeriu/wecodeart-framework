<?php
/**
 * WeCodeArt Framework Setup.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework.
 * @subpackage  Setup
 * @copyright   Copyright (c) 2022, WeCodeArt Framework
 * @since		3.9.5
 * @version		5.4.5
 */

use function WeCodeArt\Functions\get_prop;

/**
 * Bind JSON.
 *
 * @return  void
 */
wecodeart()->bind( 'JSON', function () {
    return \WP_Theme_JSON_Resolver::get_merged_data()->get_raw_data();
} );

/**
 * Bind Config.
 *
 * @param   array   $config     - configuration object passed earlier.
 *
 * @return  void
 */
wecodeart()->bind( 'config', function () use ( $config ) {
    return new WeCodeArt\Config( $config );
} );

/**
 * Bind Conditionals.
 *
 * @since   4.0.1
 *
 * @return  void
 */
wecodeart()->bind( 'conditionals', function () {
    return WeCodeArt\Conditional::get_instance();
} );

/**
 * Bind Integrations.
 *
 * @since   4.1.0
 *
 * @return  void
 */
wecodeart()->bind( 'integrations', function () {
    return WeCodeArt\Support::get_instance();
} );

/**
 * Bind markup.
 * 
 * @since   5.3.1
 *
 * @return  void
 */
wecodeart()->bind( 'markup', function () {
    return wecodeart( 'integrations' )->get( 'markup' )::get_instance();
} );

/**
 * Bind assets.
 * 
 * @since   5.4.5
 *
 * @return  void
 */
wecodeart()->bind( 'assets', function () {
    return wecodeart( 'integrations' )->get( 'assets' )::get_instance();
} );

/**
 * Bind styles.
 * 
 * @since   5.3.1
 *
 * @return  void
 */
wecodeart()->bind( 'styles', function () {
    return wecodeart( 'integrations' )->get( 'styles' )::get_instance();
} );

/**
 * Bind FS.
 * 
 * @since   5.3.3
 *
 * @return  void
 */
wecodeart()->bind( 'files', function () {
    return wecodeart( 'integrations' )->get( 'files' )::get_instance();
} );

/**
 * Bind ThemeName.
 *
 * @since   3.9.5
 *
 * @return string
 */
wecodeart()->bind( 'name', function () {
    static $handle;

	if ( is_null( $handle ) ) {
		if ( defined( 'CHILD_THEME_NAME' ) && CHILD_THEME_NAME ) {
			$handle = sanitize_title_with_dashes( CHILD_THEME_NAME );
		} else {
			$handle = sanitize_title_with_dashes( wp_get_theme()->get( 'Name' ) );
		}
	}

	return $handle;
} );

/**
 * Bind Version.
 *
 * @since   3.9.5
 * @version 4.0.1
 *
 * @return string
 */
wecodeart()->bind( 'version', function () {
    if ( wecodeart_if( 'is_dev_mode' ) ) {
		return (string) time();
	}

	static $version;

	if ( is_null( $version ) ) {
		if ( defined( 'CHILD_THEME_VERSION' ) && CHILD_THEME_VERSION ) {
			$version = CHILD_THEME_VERSION;
		} else {
			$version = wp_get_theme()->get( 'Version' );
		}
	}

	return $version;
} );

/**
 * Bind Layout.
 *
 * @param   array   $parameters  Array of strings/functions - accepts `header/content/footer` and callable function as keys
 *
 * @return  void
 */
wecodeart()->bind( 'layout', function ( WeCodeArt $theme, $parameters ) {
    if( empty( $parameters ) ) {
        $parameters = [ 'header', 'content', 'footer' ];
    }

    array_map( function( $partial ) {
        switch( $partial ) {
            case 'header' :
                /**
                 * @see - WeCodeArt\Core\Header::markup();
                 */
                do_action( 'wecodeart/header' );
                break;

            case 'content' :
                /**
                 * @see - WeCodeArt\Core\Content::markup();
                 */
                do_action( 'wecodeart/content' );
                break;

            case 'footer' :
                /**
                * @see - WeCodeArt\Core\Footer::markup();
                 */
                do_action( 'wecodeart/footer' );
                break;

            default: 
                return is_callable( $partial ) && call_user_func( $partial );
        }
    }, $parameters );
} );