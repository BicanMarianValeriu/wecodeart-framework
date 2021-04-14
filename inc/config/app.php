<?php
$required_wp_version   = '5.5';
$required_php_version  = '7.0';

return [
    /*
    |--------------------------------------------------------------------------
    | Theme Requirements
    |--------------------------------------------------------------------------
    |
    | Determines minimum software requirements to run the theme.
    |
    */
    'requirements'  => [
        'wordpress' => [
            'required'  => $required_wp_version,
            'installed' => $GLOBALS['wp_version'],
            'i18n'      => sprintf(
                __( 'WeCodeArt Framework requires WordPress version %1$s or higher. You are using version %2$s. Please upgrade WordPress to use WeCodeArt Framework.', 'wecodeart' ),
                $required_wp_version, $GLOBALS['wp_version']
            ),
        ],
        'php'       => [
            'required'  => $required_php_version,
            'installed' => PHP_VERSION,
            'i18n'      => sprintf(
                __( 'WeCodeArt Framework requires PHP version %1$s or higher. You are using version %2$s. Please <a href="%3$s">upgrade PHP</a> to use WeCodeArt Framework.', 'wecodeart' ), 
                $required_php_version, PHP_VERSION, 'https://wordpress.org/support/upgrade-php/'
            ),
        ],
    ],
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
        'views'     => 'views',
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
        // Header
        'header-bar-position'       => '',
        'header-bar-toggle'         => 'collapse',
        'header-bar-container'      => 'container',
        'header-bar-modules'        => [ 'branding', 'collapse' ],
        'header-design-bg'          => '',
        'header-design-color'       => '',
        'header-design-links'       => '',
        // Content
        'content-layout-container'  => 'container',
        'content-layout-modules'    => [ 'content', 'primary' ],
        // Footer
        'footer-layout-container'   => 'container',
        'footer-layout-modules'     => [ 'footer-1', 'footer-2', 'footer-3' ],
        'footer-copyright-text'     => sprintf( __( 'Copyright %s - All rights reserved.', 'wecodeart' ), '[copy] [year]' ),
        'footer-design-bg'          => '',
        'footer-design-color'       => '',
        'footer-design-links'       => '',
        'footer-design-attribution_bg'      => '',
        'footer-design-attribution_color'   => '',
        // General
        'general-typography-primary'    => [
            'font-family'   => 'Abel',
            'font-weight'   => []
        ],
        'general-typography-headings'   => [
            'font-family'   => 'Open Sans',
            'font-weight'  => [ '700' ]
        ],
        // Colors - they have default set
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
        'editor-sizes' => [
            'default' => [
                'default'   => '991px',
                'wide'      => '1200px',
                'full'      => 'initial',
            ]
        ],
        'support'   => [
            'editor-font-sizes' => [
                [
                    'name'      => esc_html__( 'Small', 'wecodeart' ),
                    'shortName' => esc_html__( 'S', 'wecodeart' ),
                    'size'      => 13,
                    'slug'      => 'small',
                ],
                [
                    'name'      => esc_html__( 'Normal', 'wecodeart' ),
                    'shortName' => esc_html__( 'M', 'wecodeart' ),
                    'size'      => 16,
                    'slug'      => 'normal',
                ],
                [
                    'name'      => esc_html__( 'Large', 'wecodeart' ),
                    'shortName' => esc_html__( 'L', 'wecodeart' ),
                    'size'      => 36,
                    'slug'      => 'large',
                ],
                [
                    'name'      => esc_html__( 'Huge', 'wecodeart' ),
                    'shortName' => esc_html__( 'XL', 'wecodeart' ),
                    'size'      => 42,
                    'slug'      => 'huge',
                ],
            ],
            'editor-color-palette' => [
                [
                    'name' 	=> esc_html__( 'Primary', 'wecodeart' ) ,
                    'slug'	=> 'primary',
                    'color'	=> '#2388ed',
                ],
                [
                    'name' 	=> esc_html__( 'Secondary', 'wecodeart' ) ,
                    'slug'	=> 'secondary',
                    'color'	=> '#6c757d',
                ],
                [
                    'name' 	=> esc_html__( 'Danger', 'wecodeart' ) ,
                    'slug'	=> 'danger',
                    'color'	=> '#dc3545',
                ],
                [
                    'name' 	=> esc_html__( 'Success', 'wecodeart' ) ,
                    'slug'	=> 'success',
                    'color'	=> '#7dc855',
                ],
                [
                    'name' 	=> esc_html__( 'Info', 'wecodeart' ) ,
                    'slug'	=> 'info',
                    'color'	=> '#17a2b8',
                ],
                [
                    'name' 	=> esc_html__( 'Warning', 'wecodeart' ) ,
                    'slug'	=> 'warning',
                    'color'	=> '#ffc107',
                ],
                [
                    'name' 	=> esc_html__( 'Dark', 'wecodeart' ) ,
                    'slug'	=> 'dark',
                    'color'	=> '#343a40',
                ],
                [
                    'name' 	=> esc_html__( 'Light', 'wecodeart' ) ,
                    'slug'	=> 'light',
                    'color'	=> '#f1f3f7',
                ],
                [
                    'name' 	=> esc_html__( 'White', 'wecodeart' ) ,
                    'slug'	=> 'white',
                    'color'	=> '#ffffff',
                ],
            ],
            'editor-gradient-presets' => [
                [
                    'name'     => __( 'Vivid cyan blue to vivid purple', 'wecodeart' ),
                    'gradient' => 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
                    'slug'     => 'vivid-cyan-blue-to-vivid-purple'
                ],
                [
                    'name'     => __( 'Vivid green cyan to vivid cyan blue', 'wecodeart' ),
                    'gradient' => 'linear-gradient(135deg,rgba(0,208,132,1) 0%,rgba(6,147,227,1) 100%)',
                    'slug'     => 'vivid-green-cyan-to-vivid-cyan-blue',
                ],
                [
                    'name'     => __( 'Light green cyan to vivid green cyan', 'wecodeart' ),
                    'gradient' => 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
                    'slug'     => 'light-green-cyan-to-vivid-green-cyan',
                ],
                [
                    'name'     => __( 'Luminous vivid amber to luminous vivid orange', 'wecodeart' ),
                    'gradient' => 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
                    'slug'     => 'luminous-vivid-amber-to-luminous-vivid-orange',
                ],
                [
                    'name'     => __( 'Luminous vivid orange to vivid red', 'wecodeart' ),
                    'gradient' => 'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
                    'slug'     => 'luminous-vivid-orange-to-vivid-red',
                ],
            ],
            'wp-block-styles'           => 'remove',
            'core-block-patterns'       => 'remove',
            'align-wide'                => true,
            'palette-classnames'        => true,
            'custom-units'              => true,
            'custom-spacing'            => true,
            'custom-line-height'        => true,
            'experimental-link-color'   => true,
        ],
        'styles'    => true,
        'classes'   => true,
        'patterns'  => true,
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
        'customizer' => [
            'content-layout-container-product-archive'  => 'container',
            'content-layout-modules-product-archive'    => [ 'content', 'primary' ],
            'content-layout-container-product-singular' => 'container',
            'content-layout-modules-product-singular'   => [ 'content', 'primary' ],
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
        'fonts'         => true,
        'styles'        => true,
        'author-box'    => [
            'archive'   => true,
            'single'    => true,
        ],
        'wpseo' => [
            'author-social' => [
                'facebook' 	=> 'Facebook',
                'twitter' 	=> 'Twitter',
                'url'		=> 'Website'
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
        'customize-selective-refresh-widgets'   => true,
        'automatic-feed-links'  => true,
        'title-tag'             => true,
        'editor-style'          => true,
        'responsive-embeds'     => true,
        'post-thumbnails'       => [ 'post', 'page' ],
        'amp'                   => [ 'paired' => true ],
        'custom-logo'           => [ 'width' => 100, 'height' => 50 ],
        'html5'                 => [ 'gallery', 'caption', 'style', 'script', 'navigation-widgets' ],
        'meta-modules'          => [ 'author', 'date', 'categories', 'tags', 'comments', 'edit' ],
    ],
];