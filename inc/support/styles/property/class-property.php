<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Support\Styles\Property
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		5.0.0
 * @version		5.0.0
 */

namespace WeCodeArt\Support\Styles;

defined( 'ABSPATH' ) || exit();

/**
 * Output for CSS properties.
 */
abstract class Property {
	/**
	 * The property we're modifying.
	 *
	 * @access 	protected
	 * @var 	string
	 */
	protected $property;

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
	 * @param 	string $property The CSS property we're modifying.
	 * @param 	mixed  $value    The value.
	 */
	public function __construct( $property, $value ) {
		$this->property = $property;
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
	 * Get CSS value
	 *
	 * @since   5.0.0
	 * @param  	string $property	CSS property.
	 * @param  	string $value		CSS unit.
	 *
	 * @return 	mixed				CSS value depends on property
	 */
	public static function get_property_value( $property, $value ) {
		$properties = apply_filters( 'wecodeart/filter/styles/process/properties', [
			'--wca-font-sans-serif'	=> Property\Font::class,
			'--wca-font-secondary'	=> Property\Font::class,
			'font-family' 			=> Property\Font::class,
			'background' 			=> Property\Background::class,
			'background-image'		=> Property\Background::class,
			'background-position' 	=> Property\Focal::class,
		] );

		if ( array_key_exists( $property, $properties ) ) {
			$classname = $properties[ $property ];
			$obj = new $classname( $property, $value );
			return $obj->get_value();
		}

		return esc_attr( $value );
	}

	/**
	 * Gets the value.
	 *
	 * @access protected
	 */
	public function get_value() {
		return $this->value;
	}
}