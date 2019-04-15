<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Core\Entry\Meta
 * @copyright   Copyright (c) 2019, WeCodeArt Framework
 * @since 		3.6
 * @version		3.7.1
 */

namespace WeCodeArt\Core\Entry;

if ( ! defined( 'ABSPATH' ) ) exit();

use WeCodeArt\Core\Callbacks;
use WeCodeArt\Utilities\Markup;
use WeCodeArt\Utilities\Markup\SVG;

/**
 * Handles Entry Meta output
 */
class Meta {

	use \WeCodeArt\Singleton;

	/**
	 * Send to Constructor
	 * @since 3.6.4
	 */
	public function init() {
		add_action( 'wecodeart/hook/entry/header', [ $this, 'render' ], 20 ); 
	}
	
	/**
	 * Entry Meta Author Template
	 *
	 * @since	1.0
	 * @version	3.6.0
	 *
	 * @param 	array	$args
	 * @param 	bool	$echo
	 *
	 * @return 	string
	 */
	public static function author( $args = array(), $echo = true ) {
		
		$author_id 	= get_the_author_meta( 'ID' );
		$author		= get_the_author_meta( 'display_name', $author_id );
		$url    	= get_author_posts_url( $author_id );

		// In order to render something when ajax refreshed in customizer.
		$author = $author ? $author : __( 'Author Name', 'wecodeart' );
		
		$defaults = array(
			'before'	=> SVG::compile( 'icon--user' ),
			'after'  	=> '&nbsp;',
			'sr_text'  	=>  __( 'Posted by ', 'wecodeart' ),
		);

		$args = wp_parse_args( $args, apply_filters( 'wecodeart/filter/entry/meta/author/defaults', $defaults ) );

		// The HTML
		$output = apply_filters( 'wecodeart/filter/entry/meta/author/html', sprintf(
			/* translators: %s: post author */
			__( '<span class="entry-author">%1$s %2$s %3$s %4$s %5$s</span>', 'wecodeart' ),
			$args[ 'before' ],
			'<span class="screen-reader-text">' . esc_html( $args['sr_text'] ) . '</span>',
			sprintf( '<a href="%s" class="entry-author-link" rel="author">', esc_url( $url ) ),
			sprintf( '<span class="entry-author-name">%s</span></a>', esc_html( $author ) ),
			$args[ 'after' ] ) 
		);

		if ( $echo ) echo $output;
		else return $output;
	}

	/**
	 * Entry Meta Date Template
	 *
	 * @since	1.0
	 * @version	3.6
	 *
	 * @param 	array	$args
	 * @param 	bool	$echo
	 *
	 * @return 	string
	 */
	public static function date( $args = array(), $echo = true ) {
		// Set the Defaults
		$defaults = array(
			'before'	=> SVG::compile( 'icon--clock' ),
			'after'  	=> '&nbsp;',
			'sr_text'  	=> __( 'Posted on ', 'wecodeart' ),
		);

		$args = wp_parse_args( $args, apply_filters( 'wecodeart/filter/entry/meta/date/defaults', $defaults ) );

		$output = '<time class="published" datetime="%1$s">%2$s</time>';
		if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
			$output .= '<time class="updated d-none" datetime="%3$s">%4$s</time>';
		}

		$html = sprintf( $output,
			get_the_date( DATE_W3C ),
			get_the_date(),
			get_the_modified_date( DATE_W3C ),
			get_the_modified_date()
		);

		// Wrap the time string in a link, add scren-reader-text and FontIcon.
		$output = apply_filters( 'wecodeart/filter/entry/meta/date/html', sprintf(
			/* translators: %s: post date */
			__( '<span class="entry-date">%1$s %2$s %3$s %4$s</span>', 'wecodeart' ),
			$args[ 'before' ],
			'<span class="screen-reader-text">' . esc_html( $args['sr_text'] ) . '</span>',
			'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $html . '</a>',
			$args[ 'after' ] ) 
		);

		if ( $echo ) echo $output;
		else return $output;
	} 

	/**
	 * Entry Meta Categories Template
	 *
	 * @since	1.0
	 * @version	3.6
	 * 
	 * @param 	array	$args
	 * @param 	bool	$echo
	 *
	 * @return 	string
	 */
	public static function categories( $args = [], $echo = true ) {
		// Set the defaults
		$defaults = [
			'before' 	=> SVG::compile( 'icon--folder' ),
			'after'  	=> '&nbsp;',
			'sr_text'	=> __( 'Posted in ', 'wecodeart' ),
			'sep'    	=> ', ',
		];

		$args = wp_parse_args( $args, apply_filters( 'wecodeart/filter/entry/meta/cats/defaults', $defaults ) );

		// Get what we need
		$cats = get_the_category_list( $args['sep'] );

		// Do nothing if no cats
		if ( ! $cats ) return;

		// The HTML
		$output = apply_filters( 'wecodeart/filter/entry/meta/cats/html', sprintf( 
			/* translators: %s: post cats */
			__( '<span class="entry-cats">%1$s %2$s %3$s %4$s</span>', 'wecodeart' ), 
			$args[ 'before' ], 
			'<span class="screen-reader-text">' . esc_html( $args['sr_text'] ) . '</span>',
			$cats, 
			$args[ 'after' ] 
		) );

		if ( $echo ) echo $output;
		else return $output;
	}

	/**
	 * Entry Meta Tags Template
	 *
	 * @since	1.0
	 * @version	3.6
	 *
	 * @param 	array	$args
	 * @param 	bool	$echo
	 *
	 * @return 	string
	 */
	public static function tags( $args = array(), $echo = true ) {
		// Set the Defaults
		$defaults = array(
			'before'  	=> SVG::compile( 'icon--tag' ),
			'after'  	=> '&nbsp;',
			'sr_text'	=> __( 'Tagged with ', 'wecodeart' ),
			'sep'  		=> ', ',
		);

		$args = wp_parse_args( $args, apply_filters( 'wecodeart/filter/entry/meta/tags/defaults', $defaults ) );

		// Get what we need
		$tags = get_the_tag_list( '', trim( $args['sep'] ), '' );

		// Do nothing if no tags
		if ( ! $tags ) return;

		// The HTML
		$output = apply_filters( 'wecodeart/filter/entry/meta/tags/html', sprintf( 
			/* translators: %s: post tags */
			__( '<span class="entry-tags">%1$s %2$s %3$s %4$s</span>', 'wecodeart' ),
			$args['before'],
			'<span class="screen-reader-text">' . esc_html( $args['sr_text'] ) . '</span>',
			$tags,
			$args['after']
			) 
		);

		if ( $echo ) echo $output;
		else return $output;
	} 

	/**
	 * Entry Meta Comments Template
	 *
	 * @since	1.0
	 * @version	3.6
	 * 
	 * @param 	array	$args
	 * @param 	bool	$echo
	 *
	 * @return 	string
	 */
	public static function comments( $args = array(), $echo = true ) {
		// Only if post type supports
		if ( ! post_type_supports( get_post_type(), 'comments' ) ) return;

		// Set the Defaults
		$defaults = array(
			'before'       	=> SVG::compile( 'icon--comments' ),
			'after'      	=> '&nbsp;',
			'hide_if_off' 	=> true,
			'more'        	=> __( '% Comments', 'wecodeart' ),
			'one'         	=> __( '1 Comment', 'wecodeart' ),
			'zero'        	=> __( 'Leave a Comment', 'wecodeart' ),
		);

		$args = wp_parse_args( $args, apply_filters( 'wecodeart/filter/entry/meta/comments/defaults', $defaults ) );

		// Show only where comments are enabled or have comments (even if disabled)
		if ( ( ! comments_open() && 0 === get_comments_number() ) && true === $args['hide_if_off'] ) { 
			return;
		} elseif ( comments_open() && ! have_comments() || ! comments_open() && 0 < get_comments_number() ) {
			// Get what we need
			ob_start();
			comments_number( $args['zero'], $args['one'], $args['more'] );
			$comments = ob_get_clean();	
			$comments = '<a href="' . esc_url( get_comments_link() ) . '" rel="nofollow">' . esc_html( $comments ) . '</a>';

			// The HTML
			$output = apply_filters( 'wecodeart/filter/entry/meta/comments/html', sprintf( 
				/* translators: %s: post comments */
				__( '<span class="entry-comments">%1$s %2$s %3$s</span>', 'wecodeart' ),
				$args['before'],
				$comments,
				$args['after']
				) 
			);

			if ( $echo ) echo $output;
			else return $output;
		}
	}

	/**
	 * Entry Meta Edit Template
	 *
	 * @since	1.0
	 * @version	3.6
	 *
	 * @param 	array	$args
	 * @param 	bool	$echo
	 *
	 * @return 	string
	 */
	public static function edit_link( $args = array(), $echo = true ) {
		if( ! is_user_logged_in() ) return;
		// Set the defaults
		$defaults = array(
			'before' 	=> '&nbsp;',
			'after'  	=> '',
			'text'   	=> '&#9998;',
			'class'  	=> 'entry-edit-link',
		);
		$args = wp_parse_args( $args, apply_filters( 'wecodeart/filter/entry/meta/edit/defaults', $defaults ) );

		// Get what we need
		ob_start();
		edit_post_link( esc_html( $args['text'] ), esc_html( $args['before'] ), esc_html( $args['after'] ), '', esc_attr( $args['class'] )  );
		$html = ob_get_clean();

		// The HTML	
		$output = apply_filters( 
			'wecodeart/filter/entry/meta/edit/html', 
			sprintf( __( '<span class="entry-edit float-right">%1s</span>', 'wecodeart' ), $html )
		);

		if ( $echo ) echo $output;
		else return $output;
	}

	/**
	 * Entry Meta Read More Template
	 *
	 * @since	1.0
	 * @version	3.6.0.7
	 *
	 * @param 	array	$args
	 * @param 	bool	$echo
	 *
	 * @return 	string
	 */
	public static function read_more( $args = array(), $echo = true ) {
		// Set the Defaults
		$defaults = array(
			'before'	=> '',
			'after' 	=> '<span aria-hidden="true">&#xbb;</span><span class="screen-reader-text">' . get_the_title() . '</span>',
			'text' 		=> __( 'Read More', 'wecodeart' ),
			'class' 	=> 'entry-more btn btn-primary',
		);

		$args = wp_parse_args( $args, apply_filters( 'wecodeart/filter/entry/more/defaults', $defaults ) );

		// The HTML
		$output = apply_filters( 'wecodeart/filter/entry/more/html', sprintf( 
			'<a href="%1$s" class="%2$s">%3$s %4$s %5$s</a>', 
			get_permalink(), 
			esc_attr( $args['class'] ), 
			$args['before'], 
			esc_html( $args['text'] ), 
			$args['after'] ) 
		);

		if ( $echo ) echo $output;
		else return $output;
	} 

	/**
	 * Get Contextual options
	 *
	 * @since 	3.6
	 * @version 3.6.1.2
	 *
	 * @return 	array
	 */
	public static function get_options() {
		$get_post_types = get_post_types( array( 'public' => true, 'publicly_queryable' => true ) );

		// Default empty
		$options = [];

		foreach( $get_post_types as $type ) { 
			// Post option preffix
			$theme_mod =  'content-entry-meta-' . $type;  

			if( is_singular( $type ) ) $options = get_theme_mod( $theme_mod . '-singular' ); 
			if( is_post_type_archive( $type ) ) $options = get_theme_mod( $theme_mod . '-archive' ); 
			if( $type === 'post' && Callbacks::_is_post_archive() ) $options = get_theme_mod( $theme_mod . '-archive' ); 
		}

		return $options;  
	}

	/**
	 * This function holds our Meta Modules
	 *
	 * @since	3.6
	 * @version	3.6
	 *
	 * @return 	array
	 */
	public static function modules() {
		$defaults = array();
		$defaults['author'] = array(
			'label'    => __( 'Author', 'wecodeart' ),
			'callback' => [ __CLASS__, 'author' ]
		);
		$defaults['date'] = array(
			'label'    => __( 'Date', 'wecodeart' ),
			'callback' => [ __CLASS__, 'date' ]
		);
		$defaults['categories'] = array(
			'label'    => __( 'Categories', 'wecodeart' ),
			'callback' => [ __CLASS__, 'categories' ]
		);
		$defaults['tags'] = array(
			'label'    => __( 'Tags', 'wecodeart' ),
			'callback' => [ __CLASS__, 'tags' ]
		);
		$defaults['comments'] = array(
			'label'    => __( 'Comments', 'wecodeart' ),
			'callback' => [ __CLASS__, 'comments' ]
		);
		$defaults['edit'] = array(
			'label'    => __( 'Edit Link', 'wecodeart' ),
			'callback' => [ __CLASS__, 'edit_link' ]
		);
		
		// Return Modules
		return apply_filters( 'wecodeart/filter/entry/meta/modules', $defaults ); 
	}

	/**
	 * Return the Inner final HTML with modules selected by user for each entry type.
	 *
	 * @uses	Markup::sortable()
	 * @since 	3.6
	 * @version	3.6
	 *
	 * @return 	void
	 */
	public static function sort_modules() {
		Markup::sortable( self::modules(), self::get_options() );
	}

	/**
	 * Return the Entry Meta HTML with modules selected by user
	 * 
	 * @uses	Markup::wrap()
	 *
	 * @since	3.6
	 * @version	3.6
	 *
	 * @return 	void
	 */
	public static function render() {
		// Do dont return on CPT Without Support
		if( ! post_type_supports( get_post_type(), 'wecodeart-post-info' ) ) return; 

		$wrappers = array( [ 'tag' => 'div', 'attrs' => [ 'class' => 'entry-meta' ] ] );

		Markup::wrap( 'entry-meta', $wrappers, [ __CLASS__, 'sort_modules' ] ); 
	}
}