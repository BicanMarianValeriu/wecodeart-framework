<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Entry\Meta\Comments
 * @since 		3.9.5
 * @version		6.4.5
 */

defined( 'ABSPATH' ) || exit;

use function WeCodeArt\Functions\get_prop;

/**
 * @param   int     $post_id    Contains the post id
 * @param   int     $number     Contains the comments number
 * @param   array   $attributes Contains the Block attributes
 */

$attributes = isset( $attributes ) ? $attributes : [];
$classnames = [];

if( 0 === $number ) {
    $classnames[] = 'wp-block-post-comments-link--none';
} elseif ( 1 === $number ) {
    $classnames[] = 'wp-block-post-comments-link--one';
} elseif ( 1 < $number ) {
    $classnames[] = 'wp-block-post-comments-link--multiple';
}

if( post_password_required() ) {
    $classnames[] = 'wp-block-post-comments-link--protected';
}

if( $value = get_prop( $attributes, 'textAlign' ) ) {
    $classnames[] = 'has-text-align-' . $value;
}

?>
<div <?php echo get_block_wrapper_attributes( [ 'class' => implode( ' ', $classnames ) ] ); ?>><?php
    
    wecodeart( 'dom' )->SVG::render( 'comments', [
        'class' => 'wp-block-post-comments-link__icon fa-fw'
    ] );

    comments_popup_link( 
        esc_html__( 'Leave a Comment',  'wecodeart' ), 
        esc_html__( '1 Comment',        'wecodeart' ), 
        esc_html__( '% Comments',       'wecodeart' ), 
        '', 
        esc_html__( 'Comments are Closed', 	'wecodeart' )
    );

    ?>
    <span class="screen-reader-text"><?php
    
        printf( esc_html__( ' on %s', 'wecodeart' ), get_the_title( $post_id ) );

    ?></span>
</div>