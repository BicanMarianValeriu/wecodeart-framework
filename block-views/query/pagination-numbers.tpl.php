<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Query Pagination Template
 * @since 		5.0.0
 * @version		5.0.0
 */

defined( 'ABSPATH' ) || exit();

?>
<ul class="pagination pagination-sm justify-content-center mb-0" aria-label="<?php esc_html_e( 'Pagination', 'wecodeart' ); ?>"><?php

    foreach( $links as $key => $link ) :
        $class = [ 'page-item', 'pagination__item' ];
        if( strpos( $link, 'current' ) !== false ) $class[] = 'pagination__item--current active';
    ?>
    <li class="<?php echo esc_attr( trim( implode( ' ', $class ) ) ); ?>">
        <?php echo str_replace( 'page-numbers', 'page-link', $link ); ?>
    </li> 				
    <?php 
    endforeach; 

?>
</ul>