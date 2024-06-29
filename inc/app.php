<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework.
 * @subpackage  App Config
 * @copyright   Copyright (c) 2024, WeCodeArt Framework
 * @since		unknown
 * @version		unknown
 */

use WeCodeArt\Support\Plugins;

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
    'header' => [ /* Deprecated */ ],
    /*
    |--------------------------------------------------------------------------
    | Theme Footer
    |--------------------------------------------------------------------------
    |
    | This array of options will be used as defaults for footer.
    |
    */
    'footer' => [ /* Deprecated */ ],
    /*
    |--------------------------------------------------------------------------
    | Theme Gutenberg
    |--------------------------------------------------------------------------
    |
    | This array of options will be used as defaults for gutenberg options.
    |
    */
    'gutenberg'     => [
        'editor'    => true, // Disable FSE Editor for non-admins
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
    'fonts' => [ /* Deprecated */ ],
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
                'slug'          => 'BicanMarianValeriu/wca-accordion',
                'title'         => esc_html__( 'WCA: Accordion', 'wecodeart' ),
                'description'   => esc_html__( 'Extends Gutenberg editor with an accordion block built on WP Interactivity API.', 'wecodeart' ),
                'more'          => 'https://github.com/BicanMarianValeriu/wca-accordion/',
                'source'        => 'github',
                'version'       => '1.0.3',
                'destination'   => 'accordion',
                'type'          => 'module',
            ],
            [
                'slug'          => 'BicanMarianValeriu/wca-contact-form',
                'title'         => esc_html__( 'WCA: Contact Form 7', 'wecodeart' ),
                'description'   => Plugins::get_default_description( 'Contact Form 7', 'external' ),
                'more'          => 'https://github.com/BicanMarianValeriu/wca-contact-form/',
                'source'        => 'github',
                'version'       => '1.0.0',
                'destination'   => 'contactform',
                'type'          => 'module',
            ],
            [
                'slug'          => 'BicanMarianValeriu/wca-formatting',
                'title'         => esc_html__( 'WCA: Formatting', 'wecodeart' ),
                'description'   => esc_html__( 'Extends Gutenberg editor with extra formatting options like: justify, abbreviation, text decorations, tooltips and popovers.', 'wecodeart' ),
                'more'          => 'https://www.wecodeart.com/integrations/formatting-options/',
                'source'        => 'github',
                'version'       => '1.0.7',
                'destination'   => 'formatting',
                'type'          => 'module',
            ],
            [
                'slug'          => 'BicanMarianValeriu/wca-lorem-ipsum',
                'title'         => esc_html__( 'WCA: Lorem Ipsum', 'wecodeart' ),
                'description'   => esc_html__( 'Extends Gutenberg editor with lorem ipsum dummy content generator for headings, paragraphs and lists.', 'wecodeart' ),
                'more'          => 'https://github.com/BicanMarianValeriu/wca-lorem-ipsum/',
                'source'        => 'github',
                'version'       => '1.0.1',
                'destination'   => 'lorem',
                'type'          => 'module',
            ],
            [
                'slug'          => 'BicanMarianValeriu/wca-scrolltop',
                'title'         => esc_html__( 'WCA: Scroll Top', 'wecodeart' ),
                'description'   => esc_html__( 'Lightweight extension for adding a scroll to top button on your site. Super flexible and customizable.', 'wecodeart' ),
                'more'          => 'https://www.wecodeart.com/integrations/scrolltop/',
                'source'        => 'github',
                'version'       => '1.0.4',
                'destination'   => 'scrolltop',
                'type'          => 'module',
            ],
            [
                'slug'          => 'BicanMarianValeriu/wca-optimization',
                'title'         => esc_html__( 'WCA: Optimization', 'wecodeart' ),
                'description'   => esc_html__( 'Lightweight extension for enhancing our theme with options for cleaning wp_head of unnecesary stuff.', 'wecodeart' ),
                'more'          => 'https://github.com/BicanMarianValeriu/wca-optimization/',
                'source'        => 'github',
                'version'       => '1.0.5',
                'destination'   => 'optimization',
                'type'          => 'module',
            ],
            // [
            //     'slug'          => 'BicanMarianValeriu/wca-cookies',
            //     'title'         => esc_html__( 'WCA: Cookies', 'wecodeart' ),
            //     'description'   => esc_html__( 'Cookie banner and management interface built with theme APIs.', 'wecodeart' ),
            //     'more'          => 'https://github.com/BicanMarianValeriu/wca-cookies/',
            //     'source'        => 'github',
            //     'version'       => '1.0.0',
            //     'destination'   => 'cookies',
            //     'type'          => 'module',
            // ],
        ],
        'themes' => [
            [
                'slug'          => 'BicanMarianValeriu/wecodeart-developer',
                'title'         => esc_html__( 'WeCodeArt Developer', 'wecodeart' ),
                'description'   => esc_html__( 'A simple starter theme with webpack configuration. Ideal for developers seeking a streamlined starting point.', 'wecodeart' ),
                'source'        => 'github',
                'more'          => 'https://github.com/BicanMarianValeriu/wecodeart-developer/',
            ]
        ],
        'plugins' => [],
    ],
];