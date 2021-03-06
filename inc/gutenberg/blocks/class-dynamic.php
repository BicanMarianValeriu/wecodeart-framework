<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg\Blocks
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since		5.0.0
 * @version		5.0.0
 */

namespace WeCodeArt\Gutenberg\Blocks;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Core\Scripts;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Abstract Dynamic block.
 */
abstract class Dynamic {

    use Scripts\Base;

	/**
	 * Block namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wca';

	/**
	 * Block namespace.
	 *
	 * @var string
	 */
	protected $block_name = '';

	/**
	 * Registers the block type with WordPress.
	 */
	public function register_block_type() {
		// Like this to pass theme check - however, in the theme, this acts as an abstract method
		// and its overwritten to add_filter for the blocks that we change the markup
		call_user_func_array( 'register_block_type', [
			$this->namespace . '/' . $this->block_name,
			[
				'render_callback' => [ $this, 'render' ],
				'attributes'      => $this->get_attributes(),
				'supports'        => [],
			]
		] );
	}

	/**
	 * Include and render a dynamic block.
	 *
	 * @param 	array  $attributes Block attributes. 	Default empty array.
	 * @param 	string $content    Block content. 		Default empty string.
	 * @return 	string Rendered block type output.
	 */
	abstract public function render( $attributes = [], $content = '' );

	/**
	 * Load and manipulate HTML with DOMDocument.
	 *
	 * @param 	string $content    Block content. 		Default empty string.
	 * 
	 * @return 	object $doc.
	 */
	protected function load_html( $content = '' ) {
		$doc = new \DOMDocument();
		// See https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/table-of-contents/index.php
		libxml_use_internal_errors( true );
		$doc->loadHTML( htmlspecialchars_decode(
			utf8_decode( htmlentities( '<html><body>' . $content . '</body></html>', ENT_COMPAT, 'UTF-8', false ) ),
			ENT_COMPAT
		) );
		libxml_use_internal_errors( false );

		return $doc;
	}

	/**
	 * Get block attributes.
	 *
	 * @return array
	 */
	protected function get_attributes() {
		return [];
	}

	/**
	 * Get the schema for the alignment property.
	 *
	 * @return array Property definition for align.
	 */
	protected function get_schema_align() {
		return [
			'type' => 'string',
			'enum' => [ 'left', 'center', 'right', 'wide', 'full' ],
		];
	}

	/**
	 * Get the schema for a list of IDs.
	 *
	 * @return array Property definition for a list of numeric ids.
	 */
	protected function get_schema_list_ids() {
		return [
			'type'    => 'array',
			'items'   => [
				'type' => 'number',
			],
			'default' => [],
		];
	}

	/**
	 * Get the schema for a boolean value.
	 *
	 * @param  string	$default  The default value.
	 * @return array 	Property definition.
	 */
	protected function get_schema_boolean( $default = true ) {
		return [
			'type'    => 'boolean',
			'default' => $default,
		];
	}

	/**
	 * Get the schema for a numeric value.
	 *
	 * @param  string 	$default  The default value.
	 * @return array 	Property definition.
	 */
	protected function get_schema_number( $default ) {
		return [
			'type'    => 'number',
			'default' => $default,
		];
	}

	/**
	 * Get the schema for a string value.
	 *
	 * @param  string 	$default  The default value.
	 * @return array 	Property definition.
	 */
	protected function get_schema_string( $default = '' ) {
		return [
			'type'    => 'string',
			'default' => $default,
		];
	}
}
