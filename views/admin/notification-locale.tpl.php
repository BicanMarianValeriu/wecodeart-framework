<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Notification Locale Template
 * @since 		5.5.5
 * @version		6.1.3
 */

defined( 'ABSPATH' ) || exit;

/**
 * @param   object	$language 	Current Blog Language
 * @param   string	$wp_link	WP.org translation URL
 */

?>
<h3 style="margin-bottom:.5rem;"><?php printf( esc_html__( 'It looks like WeCodeArt Framework is not translated in %s. ', 'wecodeart' ), strtolower( $language->name ) ); ?></h3>
<p><?php

	esc_html_e( 'Would you be interested in making contributions by providing suggestions for translations? As a token of my appreciation, your name will be included on the "Getting Started" page.', 'wecodeart' );

?>
</p>
<p>
	<a href="<?php echo esc_url( $wp_link ); ?>" class="button button-primary is-primary" target="_blank"><?php
	
		esc_html_e( 'Yes, I would love to!', 'wecodeart' );
		
	?> 😊</a><a class="button" data-dismiss style="margin-left:1rem;"><?php
	
		esc_html_e( 'No, I don`t care.', 'wecodeart' );
	
	?> 😔</a>
</p>