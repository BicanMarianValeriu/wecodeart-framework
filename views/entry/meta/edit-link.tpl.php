<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Entry\Meta\Edit
 * @copyright   Copyright (c) 2019, WeCodeArt Framework
 * @since 		3.9.5
 * @version		3.9.6
 */

defined( 'ABSPATH' ) || exit();

/**
 * @param   int     $post_id   Post ID
 * @param   array   $i18n   Array of translated strings
 */
?>
<span class="entry-edit float-right" title="<?php
    echo esc_attr( sprintf( 
        __( 'Click to edit "%s"!', wecodeart_config( 'textdomain' ) ), 
        get_the_title( $post_id ) 
    ) ); ?>"><?php

    edit_post_link( esc_html__( 'Edit', wecodeart_config( 'textdomain' ) ), '', '', $post_id ?: 0, 'entry-edit__link' );
    
?></span>