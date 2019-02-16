<?php namespace WeCodeArt\Core;
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit();
// Use
use WeCodeArt\Utilities\Form\Input as Inputs;
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	General Hooks
 * @copyright   Copyright (c) 2019, WeCodeArt Framework
 * @since 		v3.0
 * @version		v3.6
 */

class Hooks {
	/**
	 * Instance
	 *
	 * @var $_instance
	 */
	private static $_instance = NULL;

	/**
	 * Initiator
	 *
	 * @since 	v3.3
	 * @return 	object
	 */
	public static function get_instance() {
		if( self::$_instance == NULL ) self::$_instance = new self;
		return self::$_instance;
	}

	/**
	 * Class Constructor.
	 */
	public function __construct() {
		add_filter( 'body_class',               array( $this, 'body_classes' ) );
		add_filter( 'post_class', 			  	array( $this, 'post_classes' ) );
		add_filter( 'comment_form_defaults',	array( $this, 'comment_form_defaults' ) );
		add_filter( 'get_custom_logo', 		 	array( $this, 'custom_logo' ) );
		add_action( 'get_search_form',          array( $this, 'search_form' ) );
	}
	
	/**
	 * Adds custom classes to the array of body classes.
	 *
	 * @param array $classes Classes for the body element.
	 * @return array
	 */
	public function body_classes( $classes ) {
		$get_post_types = get_post_types( [ 'public' => true, 'publicly_queryable' => true ] );
		$has_sidebar 	= get_theme_mod( 'content-layout-modules' );
		$all_pages		= get_pages();

		// Add a class of hfeed to non-singular pages.
		if ( ! is_singular() ) $classes[] = 'hfeed';
		
		// Adds a class of group-blog to blogs with more than 1 published author.
		if ( is_multi_author() ) $classes[] = 'group-blog';
		
		// Page Has Sidebar
		foreach( $all_pages as $page ) { 
			if( is_page( $page->ID ) ) $has_sidebar = get_theme_mod( 'content-layout-modules-page-' . $page->ID );
		}
		
		// Blog Has Sidebar
		if( is_home() ) $has_sidebar = get_theme_mod( 'content-layout-modules-blog' );
		
		// CPTS Archive/Single 
		foreach( $get_post_types as $type ) { 
			if( is_post_type_archive( $type ) ) $has_sidebar = get_theme_mod( 'content-layout-modules-' . $type . '-archive' );
			if( is_singular( $type ) ) $has_sidebar = get_theme_mod( 'content-layout-modules-' . $type . '-singular' );
		}

		// Add sidebar class
		if( in_array( 'primary', $has_sidebar ) || in_array( 'secondary', $has_sidebar ) ) $classes[] = 'has-sidebar';
		else $classes[] = 'no-sidebar';
		
		// Singular sidebar class if gutenberg wide/full layout 
		if( wecodeart_gutenberg_wide_or_full_content() ) { 
			$classes = array_diff( $classes, [ 'has-sidebar' ] );
			$classes[] = 'gutenberg-disabled-sidebar'; 
			$classes[] = 'no-sidebar'; 
		} 

		// Return Classes
		$classes = array_map( 'sanitize_html_class', $classes );
		return $classes;
	}
	
	/**
	 * Filter the Custom Logo markup.
	 *
	 * @return html
	 */
	public function custom_logo() {
		$custom_logo_id = get_theme_mod( 'custom_logo' );
		$html = sprintf( '<a href="%1$s" class="custom-logo-link" rel="home" itemprop="url">%2$s</a>',
            esc_url( home_url( '/' ) ),
            wp_get_attachment_image( $custom_logo_id, 'full', false, array(
                'class'	=> 'custom-logo',
				'alt'	=> get_bloginfo( 'name' )
            ) )
        );
		
		return $html;	
	}
	
	/**
	 * Filter classes to the array of post classes.
	 *
	 * @param 	array $classes Classes for the post.
	 * @return 	array
	 */
	public function post_classes( $classes ) {
		if ( is_admin() ) return $classes;
		
		// Add "entry" to the post class array
		$classes[] = 'entry';
		// Remove "hentry" from post class array
		$classes = array_diff( $classes, array( 'hentry' ) );
		
		return $classes;
	}
	
	/**
	 * Filter Search form HTML Markup.
	 * @since 	unknown
	 * @version v3.6
	 * @return 	string $form
	 */
	public function search_form( $args = array() ) {
		// Set the Defaults
		$defaults = array(
			'sr_text'	=> __( 'Search this website', 'wecodeart' ),
			'input' => [
				'id'		=> uniqid( 'searchform-' ),
				'placeholder'	=> get_search_query() ? apply_filters( 'the_search_query', get_search_query() ) : __( 'Enter keyword', 'wecodeart' ) . ' &#x02026;',
				'v_or_h'		=> ( get_search_query() == '' ) ? 'placeholder' : 'value',
			],
			'button' 	=> [
				'label' => __( 'Search', 'wecodeart' ),
				'class' => 'button'
			]
		);
		
		$args = wp_parse_args( $args, apply_filters( 'wecodeart/filter/search_form/defaults', $defaults ) );
		
		$form  = sprintf( '<form class="search-form" role="search" method="get" action="%s">', esc_url( home_url( '/' ) ) );
		$form .= sprintf( '<label class="screen-reader-text" for="%1s">%2s</label>', $args['input']['id'], esc_html( $args['sr_text']  ) );	
		$form .= sprintf( '<div class="input-group">');		
		$form .= sprintf( '<input class="form-control" type="search" name="s" id="%1s" %s="%2s" required="" />', 
			$args['input']['id'], 
			$args['input']['v_or_h'], 
			$args['input']['placeholder'] 
		);  
		$form .= sprintf( '<div class="input-group-append"><button class="btn btn-primary" type="submit" class="%s">%s</button></div>', 
			esc_attr( $args['button']['class'] ),
			$args['button']['label']
		);
		$form .= sprintf( '</div>');
		$form .= sprintf( '</form>');
		
		// Return The Form with everything in it
		return apply_filters( 'wecodeart/filter/search_form/html', $form );
	}
	
	/**
	 * Filter Comment Respond Args.
	 *
	 * @since	unknown
	 * @version	3.6.0
	 * @return 	array
	 */
	public function comment_form_defaults( array $defaults ) {
		// Fields escapes all the data for us. 	
		$commenter = wp_get_current_commenter();
		$req       = get_option( 'require_name_email' );
		
		$author_name	= '<div class="comment-form-author col col-md-7">' .
			Inputs::compile( 'text', __( 'Name *', 'wecodeart' ), array( 
				'id' 	=> 'author',
				'class'	=> 'form-control',
				'name' 	=> 'author', 
				'required' 	=> ( $req ) ? 'required' : NULL, 
				'size' 		=> absint( 30 ), 
				'maxlength' => absint( 245 ),
				'value' 	=> $commenter['comment_author'] 
				) 
			)
		. '</div>';
		
		$author_email	= '<div class="comment-form-email col col-md-7">' .
			Inputs::compile( 'email', __( 'Email *', 'wecodeart' ), array( 			
				'id' 	=> 'email',
				'class'	=> 'form-control',
				'name' 	=> 'email',
				'required' 	=> ( $req ) ? 'required' : NULL, 
				'size' 		=> absint( 30 ), 
				'maxlength' => absint( 100 ),
				'value' 	=> $commenter['comment_author_email'] 
				)
			) 
		. '</div>';
		
		$author_url		= '<div class="comment-form-url col col-md-7">' .
			Inputs::compile( 'url', __( 'Website', 'wecodeart' ), array( 
				'id' 	=> 'url',
				'class'	=> 'form-control',
				'name' 	=> 'url',
				'size' 		 => absint( 30 ), 
				'maxlength'  => absint( 200 ),
				'value' 	 => $commenter['comment_author_url'] 
				)
			) 
		. '</div>';

		$author_comment		= '<div class="comment-form-comment col-12">' .
			Inputs::compile( 'textarea', __( 'Comment*', 'wecodeart' ), array( 
				'id' 	=> 'comment',
				'class'	=> 'form-control',
				'name' 	=> 'comment',
				'rows'	=> absint( 8 ), 
				'cols'  => absint( 45 ),
				'required' 		 => 'true', 
				'aria-required'  => 'true' 
				)
			) 
		. '</div>';
		
		$required_text = sprintf( ' ' . __( 'Required fiels are marked %s', 'wecodeart' ), '<span class="required">*</span>' );
		$notes_before 	= '<div class="comment-notes col-12 mb-3">' . __( 'Your email address will not be published.', 'wecodeart' ) . ( $req ? $required_text : '' ) . '</div>';
		$notes_after 	= '<div class="form-allowed-tags col-12 mb-3">' . sprintf( __( 'You may use these <abbr title="HyperText Markup Language">HTML</abbr> tags and attributes: %s', 'wecodeart' ), ' <code>' . allowed_tags() . '</code>' ) . '</div>';

		$args = array(
			'title_reply' 	=> __( 'Speak Your Mind', 'wecodeart' ),
			'comment_field' => $author_comment,
			'comment_notes_before' 	=> $notes_before,
			'comment_notes_after' 	=> $notes_after,
			'submit_field'         	=> '<div class="form-submit col-12 mb-3">%1$s %2$s</div>',
			'class_submit'         	=> 'btn btn-primary',
			'fields' 		=> array(
				'author' => $author_name,
				'email'  => $author_email,
				'url'    => $author_url,
			)
		);

		// Merge $args with $defaults
		$args = wp_parse_args( $args, $defaults );

		// Return filterable array of $args, along with other optional variables
		return apply_filters( 'wecodeart/filter/comment_form_args', $args, $commenter, $req );

	}
}