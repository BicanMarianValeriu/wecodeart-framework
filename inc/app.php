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
        'scripts' => true
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
    | This array of options will be used as defaults for fonts.
    |
    */
    'fonts' => [
        'system' => [],
        'google' => [
            'open-sans' => [
                'family' 	=> 'Open Sans',
                'variants' 	=> [ 300, 'regular', 500, 700 ]
            ],
            'shadows'   => [
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
        'custom-logo'       => [
            'width'         => 65,
            'height'        => 65,
            'flex-height'   => true,
        ],
        'title-tag'             => true,
        'responsive-embeds'     => true,
        'block-nav-menus'       => true,
        'widgets-block-editor'  => true,
        'core-block-patterns'   => 'remove',
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
    | Theme Installers
    |--------------------------------------------------------------------------
    |
    | This array of options will be used as defaults for theme installers.
    |
    */
    'installers' => [
        'modules' => [
            [
                'slug'          => 'BicanMarianValeriu/wca-formatting',
                'title'         => esc_html__( 'WCA: Formatting', 'wecodeart' ),
                'description'   => esc_html__( 'Extends Gutenberg editor with extra formatting options like: justify, abbreviation, text decorations, tooltips and popovers.', 'wecodeart' ),
                'more'          => 'https://www.wecodeart.com/integrations/formatting-options/',
                'source'        => 'github',
                'destination'   => 'formatting',
                'type'          => 'module',
            ],
            [
                'slug'          => 'BicanMarianValeriu/wca-lorem-ipsum',
                'title'         => esc_html__( 'WCA: Lorem Ipsum', 'wecodeart' ),
                'description'   => esc_html__( 'Extends Gutenberg editor with lorem ipsum dummy content generator for headings, paragraphs and lists.', 'wecodeart' ),
                'more'          => 'https://github.com/BicanMarianValeriu/wca-lorem-ipsum/',
                'source'        => 'github',
                'destination'   => 'lorem',
                'type'          => 'module',
            ],
        ],
        'plugins' => [
            [
                'slug'          => 'BicanMarianValeriu/wca-scrolltop',
                'title'         => esc_html__( 'WCA: Scroll Top', 'wecodeart' ),
                'description'   => esc_html__( 'Lightweight extension for adding a scroll to top button on your site. Super flexible and customizable.', 'wecodeart' ),
                'source'        => 'github',
                'more'          => 'https://github.com/BicanMarianValeriu/wca-scrolltop/',
                'recommended'   => true,
            ],
        ],
        'themes' => [
            [
                'slug'          => 'BicanMarianValeriu/wecodeart-developer',
                'title'         => esc_html__( 'WeCodeArt Developer', 'wecodeart' ),
                'description'   => esc_html__( 'A simple starter theme with webpack configuration. Ideal for developers seeking a streamlined starting point.', 'wecodeart' ),
                'source'        => 'github',
                'more'          => 'https://github.com/BicanMarianValeriu/wecodeart-developer/',
            ],
            [
                'slug'          => 'BicanMarianValeriu/wecodeart-honey',
                'title'         => esc_html__( 'WeCodeArt Honey', 'wecodeart' ),
                'description'   => esc_html__( 'A sleek WooCommerce block theme with webpack configuration. No bloat - perfect starting point for your store.', 'wecodeart' ),
                'source'        => 'github',
                'more'          => 'https://github.com/BicanMarianValeriu/wecodeart-honey/',
            ],
        ]
    ],
];