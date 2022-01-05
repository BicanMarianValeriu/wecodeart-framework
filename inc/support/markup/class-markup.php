<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage  Markup
 * @copyright   Copyright (c) 2022, WeCodeArt Framework
 * @since		3.5
 * @version		5.3.3
 */

namespace WeCodeArt\Support;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Integration;
use WeCodeArt\Conditional\Traits\No_Conditionals;

/**
 * Markup Utilities Parent Class
 */
class Markup implements Integration {

	use Singleton;
	use No_Conditionals;

	/**
	 * SVG
	 *
	 * @since  	5.0.0
	 * @var 	object
	 */
	public 	$SVG	= null;
	
	/**
	 * Inputs
	 *
	 * @since  	5.0.0
	 * @var 	object
	 */
	public 	$Inputs	= null;
	
	/**
	 * Template
	 *
	 * @since  	5.0.0
	 * @var 	object
	 */
	public 	$Template	= null;

	/**
	 * Send to Constructor
	 */
	public function init() {
		$this->SVG 		= Markup\SVG::get_instance();
		$this->Inputs 	= Markup\Inputs::get_instance();
		$this->Template	= ( new Markup\Template( wecodeart_config() ) );
	}

	/**
	 * Register hooks
	 */
	public function register_hooks() {}

	/**
	 * Merge array of attributes with defaults, and apply contextual filter on array.
	 *
	 * @since 	3.5
	 * @version	3.9.5
	 *
	 * @param 	string 	$context    The context, to build filter name.
	 * @param 	array  	$attributes Optional. Extra attributes to merge with defaults.
	 * @param 	array  	$args       Optional. Custom data to pass to filter.
	 *
	 * @return 	array 	Merged and filtered attributes.
	 */
	public static function parse_attr( $context, $attributes = [], $args = [] ) {
		$defaults = [
			'class' => sanitize_html_class( $context )
		];

		$attributes = wp_parse_args( $attributes, $defaults );

		// Contextual filter.
		return apply_filters( "wecodeart/filter/attributes/{$context}", $attributes, $args );
	}

	/**
	 * Build list of attributes into a string and apply contextual filter on string.
	 *
	 * @since 	3.5
	 * @version 3.9.5
	 *
	 * @param 	string 	$context    The context, to build filter name.
	 * @param 	array  	$attributes Optional. Extra attributes to merge with defaults.
	 * @param 	array  	$args       Optional. Custom data to pass to filter.
	 *
	 * @return 	string
	 */
	public static function generate_attr( $context, $attributes = [], $args = [] ) {
		$attributes = self::parse_attr( $context, $attributes, $args );
		$output = '';

		if( empty( $attributes ) ) return $output;

		// Cycle through attributes, build tag attribute string.
		foreach( $attributes as $key => $value ) {
			if ( ! $value ) continue;
			if ( true === $value ) $output .= esc_html( $key ) . ' ';
			else $output .= sprintf( '%s="%s" ', esc_html( $key ), esc_attr( $value ) );
		}

		$output = apply_filters( "wecodeart/filter/attributes/{$context}/output", $output, $attributes, $args );
		return trim( $output );
	}

	/**
	 * Remove attributes from a HTML element.
	 *
	 * @since	3.9.3
	 * @version	4.0.1
	 *
	 * @param 	string       	$text       A string of HTML formatted code.
	 * @param 	array|string	$elements   Elements that $attributes should be stripped from.
	 * @param 	array|string 	$attributes Attributes that should be stripped from $elements.
	 * @param 	bool         	$two_passes Whether the function should allow two passes.
	 *
	 * @return 	string			HTML markup with attributes stripped.
	 */
	public static function strip_attr( $text, $elements, $attributes, $two_passes = true ) {

		// Cache elements pattern.
		$elements_pattern = implode( '|', (array) $elements );

		// Build patterns.
		$patterns = [];
		foreach ( (array) $attributes as $attribute ) {
			$patterns[] = sprintf( 
				'~(<(?:%s(?=\s+))[^>]*)\s+%s(?:=(?:[\\\'"][^\\\'"]+[\\\'"]|(?:[^\s>\/]|\/(?!>))+))?([^>]*>)~', 
				$elements_pattern, 
				$attribute 
			);
		}

		// First pass.
		$text = preg_replace( $patterns, '$1$2', $text );

		if ( $two_passes ) { // Second pass.
			$text = preg_replace( $patterns, '$1$2', $text );
		}

		return $text;

	}

	/**
	 * Return Sortable callback functions based on input.
	 *
	 * @since	unknown
	 * @version	3.9.5
	 *
	 * @param	array  	modules	required
	 * @param 	array 	options	required
	 * @param 	boolean	echo	optional
	 *
	 * @return 	string|object 	HTML/WP_Error
	 */
	public static function sortable( array $modules, array $options, $echo = true ) { 
		$callbacks = array_map( function( $module ) {
			return ( isset( $module['callback'] ) && is_callable( $module['callback'] ) ); 
		}, $modules );

		// Only run if we have callbacks set for all of the modules.
		if( count( array_unique( $callbacks ) ) !== 1  ) {
			_doing_it_wrong(
				__CLASS__, 
				esc_html__( 'Please define a callback function for each of the modules.', 'wecodeart' ),
				'3.9.5'
			);
			return null;
		}

		$functions = [];
		
		// If key from options exists in modules array, loads it's callback functions.
		foreach( $options as $opt ) {
			if( array_key_exists( $opt, $modules ) ) {
				$functions[] = $modules[$opt]['callback'];
			}
		}

		// Bail if there are no functions to return.
		if( ! $functions ) return;

		// Return the output.
		if( $echo ) {
			foreach( $functions as $func ) call_user_func( $func );
			return;
		}

		ob_start();
		foreach( $functions as $func ) call_user_func( $func );
		return ob_get_clean();
	}

	/**
     * Wrapper method for any html
	 *
	 * @since 	unknown
	 * @version	5.3.3
	 *
	 * @param	string	context		required ( used by generate_attr's dynamic filter )
	 * @param 	mixed	function	required ( the function called to be wrapped )
	 * @param 	array	args		required ( wrappers array - must have tag/attrs key defined )
	 * @param 	array	func_args	optional ( optional params for the function called above )
	 *
	 * @return 	string/object 	HTML/WP_Error
	 */
	public static function wrap( string $context, array $wrappers, $content = '', $func_args = [], $echo = true ) {
		// Set defaults.
		$defaults = [
			[
				'tag' 	=> 'div',
				'attrs' => [
					'class' => $context
				]
			]
		];

		/**
		 * Merge and filter
		 * @since 3.7.8
		 */
		$args = apply_filters( "wecodeart/filter/wrappers/{$context}", $wrappers );

		// Wrapper must have a 'tag' defined
		$_wrappers = array_map( function( $item ) {
			return array_key_exists( 'tag', $item ) && is_string( $item['tag'] ); 
		}, $args );

		// Make sure $args are an array.
		if ( empty( $args ) || ( ! empty( $args ) && count( array_unique( $_wrappers ) ) !== 1 ) ) {
			$args = $defaults;

			new \WP_Error( 'wecodeart_markup_wrap_fallback', 
				sprintf( __( 'Invalid HTML wrappers for "%s".', 'wecodeart' ), $context )
			);
		}
		
		// Build the HTML.
		$function_html = '';

		/**
		 * Filter the wrapped content before wrapping it allowing to change the function/content string
		 * @since 4.1.5
		 */
		$content = apply_filters( "wecodeart/filter/wrap/{$context}/content", $content, $func_args );
		$content = apply_filters( "wecodeart/filter/wrappers/{$context}/content", $content, $func_args );

		if( is_callable( $content ) ) {
			ob_start();
			call_user_func_array( $content, $func_args );
			$function_html .= ob_get_clean();
		} else {
			$function_html .= (string) $content;
		}

		if( empty( $function_html ) ) return;

		$html = '';
		
		foreach( $args as $key => $elem ) {
			$attrs 		= isset( $elem['attrs'] ) ? ( array ) $elem['attrs'] : [];
			$open_tag 	= trim( implode( ' ', [ tag_escape( $elem['tag'] ), self::generate_attr( $context, $attrs, $key ) ] ) );
			$html .= '<' . $open_tag . '>';
		}

		$html .= $function_html;

		foreach( array_reverse( $args ) as $key => $elem ) {
			$html .= '</' . tag_escape( $elem['tag'] ) . '>';
		}

		/**
		 * Developer Comments
		 * @since 3.7.0
		 */
		if( wecodeart_if( 'is_dev_mode' ) ) {
			if( isset( $args[0]['attrs'] ) && isset( $args[0]['attrs']['class'] ) ) {
				$classes = explode( ' ', $args[0]['attrs']['class'] );
				$comment = ( count( $classes ) > 0 ) ? $classes[0] : $args[0]['attrs']['class'];
				$comment .= " @filter = `wecodeart/filter/wrappers/{$context}`";
				$html .= "<!-- /.{$comment} -->";
			}
		}

		/**
		 * Filter the final HTML output of the function
		 * @since 3.6.0
		 */
		$output = apply_filters( "wecodeart/filter/wrap/{$context}/output", $html, $context );
		$output = apply_filters( "wecodeart/filter/wrappers/{$context}/output", $output, $context );

		// Return the output.
		if( $echo ) {
			echo $output; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			return;
		}
		
		return $output; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}