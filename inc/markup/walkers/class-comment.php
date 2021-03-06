<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Comment HTML Template (Walker)
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since		1.9
 * @version		5.0.0
 */

namespace WeCodeArt\Markup\Walkers;

defined( 'ABSPATH' ) || exit();

use Walker_Comment;
use WeCodeArt\Markup;

/**
 * Comment Walker Class
 */
class Comment extends Walker_Comment {
	var $tree_type = 'comment';
	var $db_fields = [ 
		'parent' 	=> 'comment_parent',
		'id' 		=> 'comment_ID' 
	];

	/**
	 * Start Level
	 */
	function start_lvl( &$output, $depth = 0, $args = [] ) {
		$output .= '<ul class="comment__children offset-md-1 list-unstyled">' . "\n";
	}

	/**
	 * End Level
	 */
	function end_lvl( &$output, $depth = 0, $args = [] ) {
		$output .= "</ul>\n";
	}

	/**
	 * End Element
	 */
	function end_el( &$output, $comment, $depth = 0, $args = [] ) {
		$output .= "</li>\n";
	}

	/**
	 * Outputs a pingback comment.
	 *
	 * @since	2.0
	 * @version	5.0.0
	 */
	protected function ping( $comment, $depth, $args ) {
		?>
		<li class="<?php echo esc_attr( join( ' ', get_comment_class() ) ); ?>"
			id="ping-<?php echo esc_attr( $comment->comment_ID ); ?>">
			<div class="ping-body"><?php

				// Ping content.
				echo wp_kses_post( comment_author_link( $comment ) );

				// Edit link.
				edit_comment_link( '&#9998;', '<span class="badge bg-primary text-white">', '</span>' );
				
			?></div>
		<?php 
	}
	
	/**
	 * Outputs a HTML5 comment.
	 *
	 * @since	2.0
	 * @version	5.0.0
	 *
	 * @return 	void
	 */
	protected function comment( $comment, $depth, $args ) {
		?>
		<li <?php echo Markup::generate_attr( 'comment', [
			'class' 	=> implode( ' ', get_comment_class() ),
			'id'		=> 'comment-' . $comment->comment_ID,
		] ); ?>>
		<?php

			// Get what we need.
			$author_name 	= sprintf( '<strong itemprop="name">%s</strong>', $comment->comment_author );
			if ( ! empty( $comment->comment_author_url ) && 'http://' !== $comment->comment_author_url ) {
				$author_name = sprintf(
					'<a href="%1$s" rel="external nofollow" itemprop="url">%2$s</a>', 
					esc_url( $comment->comment_author_url ),
					$author_name
				);
			}

			// Comment body template.
			Markup::template( 'entry/comment', [
				'by_author' => in_array( 'bypostauthor', get_comment_class() ),
				'comment' 	=> $comment,
				'depth'		=> $depth,
				'args'		=> $args,
				'author' 	=> $author_name,
			] );
	}
}