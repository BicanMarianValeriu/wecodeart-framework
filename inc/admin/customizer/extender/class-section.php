<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Customizer/Extends
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		v3.5
 * @version		4.2.0
 */

namespace WeCodeArt\Admin\Customizer\Extender;

defined( 'ABSPATH' ) || exit();

/**
 * Custom Section
 */
class Section extends \WP_Customize_Section {
	/**
	 * Panel
	 *
	 * @since 3.5
	 * @var string
	 */
	public $section;

	/**
	 * Control type
	 *
	 * @since  	3.5
	 * @var 	string
	 */
	public $type = 'wecodeart-section';

	/**
	 * Get section parameters for JS
	 *
	 * @since 	3.5
	 *
	 * @return 	array Exported parameters.
	 */
	public function json() {
		$array                   = wp_array_slice_assoc( (array) $this, [ 'id', 'description', 'priority', 'panel', 'type', 'description_hidden', 'section' ] );
		$array['title']          = html_entity_decode( $this->title, ENT_QUOTES, get_bloginfo( 'charset' ) );
		$array['content']        = $this->get_content();
		$array['active']         = $this->active();
		$array['instanceNumber'] = $this->instance_number;

		if ( $this->panel ) {
			$array['customizeAction'] = sprintf( 'Customizing &#9656; %s', esc_html( $this->manager->get_panel( $this->panel )->title ) );
		} else {
			$array['customizeAction'] = 'Customizing';
		}

		return $array;
	}
}