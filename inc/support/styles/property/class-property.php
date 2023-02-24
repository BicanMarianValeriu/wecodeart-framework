<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Support\Styles\Property
 * @copyright   Copyright (c) 2023, WeCodeArt Framework
 * @since 		5.0.0
 * @version		5.1.5
 */

namespace WeCodeArt\Support\Styles;

defined( 'ABSPATH' ) || exit();

/**
 * Output for CSS properties.
 */
abstract class Property {
	/**
	 * The value
	 *
	 * @access 	protected
	 * @var 	string|array
	 */
	protected $value;

	/**
	 * Constructor.
	 *
	 * @access 	public
	 * @param 	mixed  $value    The value.
	 */
	public function __construct( $value ) {
		$this->value    = $value;
		$this->process_value();
	}

	/**
	 * Modifies the value.
	 *
	 * @access protected
	 */
	abstract protected function process_value();

	/**
	 * Gets the value.
	 *
	 * @access protected
	 */
	public function get_value() {
		return $this->value;
	}
}