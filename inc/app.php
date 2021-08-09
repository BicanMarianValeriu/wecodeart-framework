<?php
return [
    /*
    |--------------------------------------------------------------------------
    | Theme Textdomain
    |--------------------------------------------------------------------------
    |
    | Determines a textdomain for your theme. Should be used to dynamically set
    | namespace for gettext strings across theme. Remember, this value must
    | be in sync with `Text Domain:` entry inside style.css theme file.
    |
    */
    'domain' => 'wecodeart',
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
        'views'     => 'block-views',
        'assets'    => 'assets',
        'languages' => 'languages',
    ],
    /*
    |--------------------------------------------------------------------------
    | Theme Customizer
    |--------------------------------------------------------------------------
    |
    | This array of options will be used as defaults for customizer options.
    |
    */
    'customizer' => [
        // General
        'general-typography-primary'    => [
            'font-family'   => 'Abel',
            'font-weight'   => []
        ],
        'general-typography-secondary'  => [
            'font-family'   => 'Open Sans',
            'font-weight'   => [ '700' ]
        ],
        // Footer
        'footer-copyright-text'             => sprintf( __( 'Copyright %s - All rights reserved.', 'wecodeart' ), '[copy] [year]' ),
        'footer-design-attribution_bg'      => '#fafafa',
        'footer-design-attribution_color'   => '',
        'footer-design-attribution_links'   => '',
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
        'support'   => [
            'wp-block-styles'   => 'remove',
            'block-templates'   => true,
        ],
        'styles'    => true,
        'classes'   => true,
        'patterns'  => [
            'categories' => [
                [
                    'name'  => 'wecodeart',
                    'label' => 'WeCodeArt',
                ]
            ]
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
    | Theme Extensions
    |--------------------------------------------------------------------------
    |
    | This array of options will be used as defaults for extensions.
    |
    */
    'extensions' => [
        'amp'           => false,
        'fonts'         => true,
        'styles'        => true,
        'schema'        => true,
        'wpseo' => [
            'author-social' => [
                'url'		=> 'Website',
                'facebook' 	=> 'Facebook',
                'twitter' 	=> 'Twitter',
            ],
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
        'html5'                 => [ 'gallery', 'caption', 'style', 'script', 'navigation-widgets' ],
        'post-thumbnails'       => [ 'post', 'page' ],
        'custom-logo'           => [ 'width' => 100, 'height' => 50 ],
        'amp'                   => [ 'paired' => true ],
        'responsive-embeds'     => true,
        'block-nav-menus'       => true,
        'customize-selective-refresh-widgets'   => true,
    ],
];