<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Core\Search
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		3.9.3
 * @version		5.0.0
 */ 

namespace WeCodeArt\Core;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Markup;

/**
 * Framework Search
 */
class Search {

	/**
	 * Unique ID for this search field.
	 *
	 * @var string
	 */
	protected $unique_id;

	/**
	 * Holds form strings.
	 *
	 * @var array
	 */
	protected $strings;

	/**
	 * Holds form search text.
	 *
	 * @var array
	 */
	protected $search_query; 

	/**
	 * Constructor.
	 *
	 * @since 	1.0.0
	 * @version 3.9.5
	 *
	 * @param array $strings Optional. Array of strings. Default is an empty array.
	 */
	public function __construct( array $strings = [] ) {
		$this->unique_id 	= wp_unique_id( 'search-form-' );
		$this->search_query = esc_attr( apply_filters( 'the_search_query', get_search_query() ) );
		$this->strings 		= array_merge( apply_filters( 'wecodeart/filter/search_form/i18n', [
			'button' 	=> __( 'Search', 				'wecodeart' ),
			'reader'	=> __( 'Search this website', 	'wecodeart' ),
			'input'		=> $this->search_query ?: sprintf( __( 'Enter keyword %s', 'wecodeart' ),' &#x02026;' ),
		] ), $strings );
	}

	/**
	 * Render the search form.
	 *
	 * @since 1.0.0
	 */
	public function render() {
		echo $this->get_form(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	/**
	 * Get form markup.
	 *
	 * @since 	1.0.0
	 * @version	4.1.2
	 *
	 * @return string Form markup.
	 */
	public function get_form() {

		return Markup::wrap( 'search-form', [ [
			'tag' 	=> 'form',
			'attrs' => [
				'class'		=> 'search-form needs-validation',
				'role'		=> 'search',
				'novalidate'=> 'novalidate',
				'method'	=> 'get',
				'action'	=> esc_url( home_url( '/' ) )
			]
		] ], function() {

			$html = $this->get_label() . $this->get_input();
			echo apply_filters( 'wecodeart/filter/search/get_html', $html ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

		}, [], false );

	}

	/**
	 * Get input markup.
	 *
	 * @since 1.0.0
	 *
	 * @return string Input field markup.
	 */
	protected function get_input() {

		return Markup::wrap( 'search-input-wrap', [ [
			'tag' 	=> 'div',
			'attrs' => [ 
				'class'	=> 'input-group',
			]
		] ], function() {

			$attrs = [
				'id' 	=> $this->get_input_id(),
				'class'	=> 'form-control',
				'name' 	=> 's',
				'required' 	=> true,
			];
	
			$attrs[( $this->search_query === '' ) ? 'placeholder' : 'value'] = $this->strings['input'];

			$html = '';
			$html .= wecodeart_input( 'search', [
				'attrs' => $attrs
			], false ); 
			$html .= $this->get_submit();

			echo $html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

		}, [], false );

	}

	/**
	 * Get submit button markup.
	 *
	 * @since 1.0.0
	 *
	 * @return string Submit button markup.
	 */
	protected function get_submit() {

		return wecodeart_input( 'button', [
			'label' => $this->strings['button'],
			'attrs' => [
				'class'	=> 'btn btn-outline-dark',
			]
		], false );

	}

	/**
	 * Get label markup.
	 *
	 * @since 1.0.0
	 *
	 * @return string Label markup.
	 */
	protected function get_label() {

		return Markup::wrap( 'search-label-wrap', [ [
			'tag' 	=> 'label',
			'attrs' => [ 
				'class'	=> 'screen-reader-text',
				'for'	=> $this->get_input_id()
			]
		] ], 'printf', [ $this->strings['reader'] ], false );

	}

	/**
	 * Get a unique ID for the search input.
	 *
	 * @since 1.0.0
	 *
	 * @return string Unique ID.
	 */
	protected function get_input_id() {
		return $this->unique_id;
	} 
}