<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Entry\Meta\Tags
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		3.9.5
 * @version		5.0.0
 */

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Markup\SVG;

/**
 * @param   int     $post_id   WP_Post ID
 * @param   string  $separator
 */
?>
<span class="entry-tags">
    <span class="d-inline-block me-1"><?php
    
        SVG::render( 'tags' );

    ?></span>
    <span class="screen-reader-text"><?php

        esc_html_e( 'Tagged with ', 'wecodeart' );

    ?></span><?php

    the_tags( 
        '<ul class="entry-tags__list list-inline d-inline-block mb-0 me-2"><li class="list-inline-item">', 
        $separator . '</li><li class="list-inline-item">', 
        '</li></ul>' 
    );

?></span>