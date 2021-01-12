<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg CSS Frontend
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since		4.2.0
 * @version		4.2.0
 */

namespace WeCodeArt\Gutenberg\Modules\Styles;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Support\Styles\Processor;
use function WeCodeArt\Functions\get_prop;

/**
 * Block CSS Processor
 */
class Blocks extends Processor {

	/**
	 * Block Name.
	 *
	 * @var 	string
	 */
	protected 	$name = '';

	/**
	 * Block Attrs.
	 *
	 * @var 	array
	 */
	protected 	$attrs = [];

	/**
	 * The class constructor.
	 *
	 * @access 	public
	 * @param 	array 	$args The block args.
	 */
	public function __construct( $args ) {
		$this->name 	= get_prop( $args, 'blockName' );
		$this->attrs 	= get_prop( $args, 'attrs', [] );

		$this->process_attributes();
		$this->parse_output();
		$this->process_custom_css();
	}

	/**
	 * Parses an output and creates the styles array for it.
	 *
	 * @return 	null
	 */
	protected function process_attributes() {
		$block_class 	= explode( ' ', get_prop( $this->attrs, 'className' ) );
		$block_class 	= array_filter( $block_class, function( $key ) {
			return strpos( $key, 'wcacss-' ) === 0;
		} );
		
		// Bail if no custom class
		if( count( $block_class ) === 0 ) return;
		
		$this->output = [];

		$block_class 		= '.' . end( $block_class );
		$output 			= [];
		$output['element'] 	= $block_class;

		// Background
		if ( $value = get_prop( $this->attrs, 'backgroundUrl', false ) ) {
			$this->output[] = wp_parse_args( [
				'property' 	=> 'background-image',
				'value'	  	=> $value
			], $output );
		}

		// Focal Point
		if ( $value = get_prop( $this->attrs, 'focalPoint', false ) ) {
			$this->output[] = wp_parse_args( [
				'property' 	=> 'background-position',
				'value'	  	=> $value
			], $output );
		}
		
		// Inline Style
		if( $css_style = get_prop( $this->attrs, 'style', false ) ) {
			// Typography
			if ( $typography = get_prop( $css_style, 'typography', false ) ) {
				if ( $value = get_prop( $typography, 'fontSize', false ) ) {
					$this->output[] = wp_parse_args( [
						'property' 	=> 'font-size',
						'value'	  	=> $value
					], $output );
				}
			}
			// Colors
			if ( $color = get_prop( $css_style, 'color', false ) ) {
				if ( $value = get_prop( $color, 'text', false ) ) {
					$this->output[] = wp_parse_args( [
						'property' 	=> 'color',
						'value'	  	=> $value
					], $output );
				}
				if ( $value = get_prop( $color, 'background', false ) ) {
					$this->output[] = wp_parse_args( [
						'property' 	=> 'background-color',
						'value'	  	=> $value
					], $output );
				}
			}
		}
	}
	
	/**
	 * Process Custom CSS
	 *
	 * @return 	null
	 */
	protected function process_custom_css() {
		if ( $css_custom = get_prop( $this->attrs, 'customCSS', false ) ) {
			$custom_style 	= wp_strip_all_tags( $css_custom );
			$custom_style 	= wecodeart( 'integrations' )->get( 'styles' )::break_queries( $custom_style );
			$this->styles 	= array_replace_recursive( $this->styles, $custom_style );
		}
	}
}