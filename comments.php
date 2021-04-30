<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Comments Template
 * @since 		1.0
 * @version		5.0.0
 */

use WeCodeArt\Markup;

do_action( 'wecodeart/hook/comments/before' );

/**
 * @see 	WeCodeArt\Markup::wrap()
 * @hook	'wecodeart_comments'
 * @hooked 	{
 * - WeCodeArt\Core\Entry\Comments	->render_meta()		- 10	comments intro text
 * - WeCodeArt\Core\Entry\Pagination->comments() 		- 15	comments navigation
 * - WeCodeArt\Core\Entry\Comments	->render_comments()	- 20	comments list
 * - WeCodeArt\Core\Entry\Comments	->render_protected()- 20	comments protected (if password protected)
 * - WeCodeArt\Core\Entry\Comments	->render_pings()	- 30	comments pings list
 * - WeCodeArt\Core\Entry\Pagination->comments() 		- 35	comments navigation
 * - WeCodeArt\Core\Entry\Comments	->render_respond() 	- 40	comments reply form
 * }
 */
Markup::wrap( 'comments', [ [
	'tag' 	=> 'div',
	'attrs' => [
		'id' 	=> 'comments',
		'class' => 'comments'
	]
] ], 'do_action', [ 'wecodeart/entry/comments', get_post_type() ] );

do_action( 'wecodeart/hook/comments/after' );