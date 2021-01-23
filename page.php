<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Page PHP
 * @since 	    3.5
 * @version	    4.0.5
 */

use WeCodeArt\Markup;
use WeCodeArt\Core\Loops;
use WeCodeArt\Core\Content;

$modules = [ 'header', 'content', 'footer' ];

if( get_post_meta( get_the_ID(), '_wca_builder_template', true ) ) {
    remove_action( 'wecodeart/hook/loop/before',    [ Content::get_instance(), 'content_markup_open'    ] );
    remove_action( 'wecodeart/hook/loop/after',     [ Content::get_instance(), 'content_markup_close'   ] );
    $modules = [
        'header', // Header
        function() {

            // Hook Main Before
            do_action( 'wecodeart/hook/main/before' );

            // Main Content
            Markup::wrap( 'main', [ [
                'tag' => 'main',
                'attrs' => [
                    'id' 	=> 'main',
                    'class'	=> 'site-main'
                ]
            ] ], [ Loops::get_instance(), 'default' ] );

            // Hook Main After
            do_action( 'wecodeart/hook/main/after' );

        },
        'footer' // Footer
    ];
}

wecodeart( 'layout', $modules );