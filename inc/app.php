<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework.
 * @subpackage  App Config
 * @copyright   Copyright (c) 2023, WeCodeArt Framework
 * @since		unknown
 * @version		unknown
 */

return [
    /*
    |--------------------------------------------------------------------------
    | Templates files extension
    |--------------------------------------------------------------------------
    |
    | Determines the theme's templates settings like an extension of the files.
    | By default, they use `.tpl.php` suffix to distinguish template files
    | from controllers, but you are free to change it however you like.
    |
    */
    'views' => [
        'extension' => '.tpl.php'
    ],
    /*
    |--------------------------------------------------------------------------
    | Theme Root Paths
    |--------------------------------------------------------------------------
    |
    | This values determines the "root" paths of your theme. By default,
    | they use WordPress `get_template_directory` functions and
    | probably you don't need make any changes in here.
    |
    */
    'paths' => [
        'directory' => get_template_directory(),
        'uri'       => get_template_directory_uri(),
        'child'     => get_stylesheet_directory(),
    ],
    /*
    |--------------------------------------------------------------------------
    | Theme Directory Structure Paths
    |--------------------------------------------------------------------------
    |
    | This array of directories will be used within core for locating
    | and loading theme files, assets and templates. They must be
    | given as relative to the `root` theme directory.
    |
    */
    'directories' => [
        'views'     => 'views',
        'patterns'  => 'patterns',
        'assets'    => 'assets',
        'languages' => 'languages',
    ],
    /*
    |--------------------------------------------------------------------------
    | Theme Gutenberg
    |--------------------------------------------------------------------------
    |
    | This array of options will be used as defaults for gutenberg options.
    |
    */
    'gutenberg' => [
        'editor'    => true, // To do - remove FSE edit screen (developer/client only)
        'styles'    => true, // Convert style attribute CSS to inline CSS
        'classes'   => true, // Add CSS utilities like margin/padding etc
        'patterns'  => true, // Patterns folder will also register plain HTML files
        'support'   => [
            'core-block-patterns'   => 'remove',
            'block-nav-menus'       => true,
            'widgets-block-editor'  => true,
        ],
    ],
    /*
    |--------------------------------------------------------------------------
    | Theme WooCommerce
    |--------------------------------------------------------------------------
    |
    | This array of options will be used as defaults for WooCommerce.
    |
    */
    'woocommerce' => [
        'support'   => [
            'woocommerce'                   => true,
            'wc-product-gallery-zoom'       => true,
            'wc-product-gallery-lightbox'   => true,
            'wc-product-gallery-slider'     => true,
        ]
    ],
    /*
    |--------------------------------------------------------------------------
    | Theme Header
    |--------------------------------------------------------------------------
    |
    | This array of options will be used as defaults for header.
    |
    */
    'header' => [
        'clean'     => false
    ],
    /*
    |--------------------------------------------------------------------------
    | Theme Footer
    |--------------------------------------------------------------------------
    |
    | This array of options will be used as defaults for footer.
    |
    */
    'footer' => [
        'jquery'    => false
    ],
    /*
    |--------------------------------------------------------------------------
    | Theme Placeholder
    |--------------------------------------------------------------------------
    |
    | This array of options will be used as defaults for placeholder.
    |
    */
    'placeholder' => [
        'text'  => __( 'Placeholder', 'wecodeart' ),
        'src'   => "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' preserveAspectRatio='xMidYMid slice'%3E%3Crect fill='%23FAFAFA' width='100%' height='100%'/%3E%3Ctext x='50%25' y='50%25' fill='%23AAA' dominant-baseline='middle' text-anchor='middle' font-family='Arial,Helvetica,Open Sans,sans-serif,monospace' font-size='var(--wp--font-size, 20)' %3E" . esc_attr__( 'Placeholder', 'wecodeart' ) . "%3C/text%3E%3C/svg%3E",
        'html'  => '<img class="%s" src="%s" alt="%s" />'
    ],
    /*
    |--------------------------------------------------------------------------
    | Theme Fonts
    |--------------------------------------------------------------------------
    |
    | This array of options will be used as defaults for placeholder.
    |
    */
    'fonts' => [
        'system' => [],
        'google' => [
            [
                'family' 	=> 'Open Sans',
                'variants' 	=> [ 300, 'regular', 500 ]
            ],
            [
                'family' 	=> 'Shadows Into Light',
                'variants' 	=> [ 'regular' ]
            ]
        ]
    ],
    /*
    |--------------------------------------------------------------------------
    | Theme Support
    |--------------------------------------------------------------------------
    |
    | This array of options will be used as defaults for theme support.
    |
    */
    'support' => [
        'title-tag'         => true,
        'responsive-embeds' => true,
    ],
];