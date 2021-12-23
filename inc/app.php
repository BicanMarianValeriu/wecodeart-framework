<?php
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
        'editor'    => true,
        'styles'    => true,
        'classes'   => true,
        'patterns'  => true,
        'support'   => [
            'block-nav-menus'   => true,
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
    | Theme Header/Footer
    |--------------------------------------------------------------------------
    |
    | This array of options will be used as defaults for header/footer.
    |
    */
    'header' => [
        'clean'     => false
    ],
    'footer' => [
        'jquery'    => false
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
        'custom-logo' => [
            'height'        => 60,
            'width'         => 60,
            'flex-height'   => true,
        ],
        'customize-selective-refresh-widgets' => true,
    ],
];