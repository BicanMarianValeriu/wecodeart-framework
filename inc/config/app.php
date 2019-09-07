<?php
$wecodeart_wp_version   = '5.0';
$wecodeart_php_version  = '5.6.2';

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
            'required'  => $wecodeart_wp_version,
            'installed' => $GLOBALS['wp_version'],
            'i18n'      => sprintf(
                __( 'WeCodeArt Framework requires WordPress version %1$s or higher. You are using version %2$s. Please upgrade WordPress to use WeCodeArt Framework.', 'wecodeart' ),
                $wecodeart_wp_version, $GLOBALS['wp_version']
            ),
        ],
        'php'       => [
            'required'  => $wecodeart_php_version,
            'installed' => PHP_VERSION,
            'i18n'      => sprintf(
                __( 'WeCodeArt Framework requires PHP version %1$s or higher. You are using version %2$s. Please <a href="%3$s">upgrade PHP</a> to use WeCodeArt Framework.', 'wecodeart' ), 
                $wecodeart_php_version, PHP_VERSION, 'https://wordpress.org/support/upgrade-php/'
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
    'textdomain' => wp_get_theme()->get( 'TextDomain' ),
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
];