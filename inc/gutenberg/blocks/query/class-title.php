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

namespace WeCodeArt\Gutenberg\Blocks\Query;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Markup;
use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Query Title block.
 */
class Title extends Dynamic {

	use Singleton;

    /**
	 * Block namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'core';

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'query-title';

	/**
	 * Shortcircuit Register
	 */
	public function register() {
		add_filter( 'block_type_metadata_settings', [ $this, 'filter_render' ], 10, 2 );
	}

	/**
	 * Filter table markup
	 *
	 * @param	array 	$settings
	 * @param	array 	$data
	 */
	public function filter_render( $settings, $data ) {
        if ( $this->get_block_type() === $data['name'] ) {
			$settings = wp_parse_args( [
				'render_callback' => [ $this, 'render' ]
			], $settings );
		}
		
		return $settings;
	}

	/**
	 * Dynamically renders the `core/query-title` block.
	 *
	 * @param 	array 	$attributes The block attributes.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( $attributes = [], $content = '', $block = null ) {
        $type       = get_prop( $attributes, 'type' );
        $is_archive = is_archive() || is_search();

        if ( ! $type || ( 'archive' === $type && ! $is_archive ) ) {
            return '';
        }

        $title = '';

        if ( $is_archive ) {
            $title = get_the_archive_title();
        }

        $classes = [ 'wp-block-query-title' ];

        if( $align = get_prop( $attributes, 'textAlign' ) ) {
            $classes[] = 'text-' . $align;
        }

		if( $classname = get_prop( $attributes, 'className' ) ) {
			$classes = array_merge( $classes, explode( ' ', $classname ) );
		}

        return Markup::wrap( 'wp-block-query-title', [
            [
                'tag' 	=> 'h' . get_prop( $attributes, 'level', '1' ),
                'attrs'	=> [
                    'class' => join( ' ', $classes )
                ]
            ]
        ], $title, [], false );
	}
}