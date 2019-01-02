<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Comments Template
 * @since 		v1.0
 * @version		v3.5
 */
if ( ! empty( $_SERVER['SCRIPT_FILENAME'] ) && 'comments.php' === basename( $_SERVER['SCRIPT_FILENAME'] ) )
	die ( 'Please do not load this page directly!' );

if ( post_password_required() ) {
	printf( '<p class="callout">%s</p>', __( 'This post is password protected. Enter the password to view comments.', 'wecodeart' ) );
	return;
}

if ( ! comments_open( get_the_ID() ) && ! have_comments() ) return;

echo '<div id="comments" class="comments">';
	// Comments List
	do_action( 'wecodeart/hook/comments/before' ); // Hook
	do_action( 'wecodeart_comments_list' 		); // Print comments list 
	do_action( 'wecodeart/hook/comments/after'  ); // Hook
	// Pings List
	do_action( 'wecodeart/hook/pings/before' ); // Hook
	do_action( 'wecodeart_pings_list' 		 ); // Print pings list 
	do_action( 'wecodeart/hook/pings/after'  ); // Hook
	// Comments Respond
	do_action( 'wecodeart/hook/respond/form/before' ); // Hook
	do_action( 'wecodeart_comment_form' 			); // Print respond form
	do_action( 'wecodeart/hook/respond/form/after' 	); // Hook
echo '</div>';		