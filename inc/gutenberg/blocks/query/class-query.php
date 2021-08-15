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

use WeCodeArt\Markup;
use WeCodeArt\Singleton;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Query block.
 */
class Query extends Dynamic {

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
	protected $block_name = 'query';

	/**
	 * Shortcircuit Register
	 */
	public function register_block_type() {
		add_filter( 'render_block_core/query', [ $this, 'render' ], 10, 2 );
	}

	/**
	 * Dynamically renders the `core/query` block.
	 *
	 * @param 	string 	$content 	The block markup.
	 * @param 	array 	$block 		The parsed block.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( $content = '', $block = [] ) {
		$container_regex = '/(^\s*<.+?\b[^>]*wp-block-query(\s|")[^>]*>)(\s*<div\b[^>]*container(\s|")[^>]*>)((.|\S|\s)*)/';

		if ( 1 === preg_match( $container_regex, $content ) ) {
			return $content;
		}

		$attributes = get_prop( $block, 'attrs', [] );

		// Layout
		if( $layout = get_prop( $attributes, 'layout', false ) ) {
			if ( isset( $layout['inherit'] ) && $layout['inherit'] ) {
				$default_layout = wecodeart_json( [ 'settings', 'layout' ], false );
				if ( $default_layout ) {
					$layout = $default_layout;
				}
			}

			$size_default 	= get_prop( $layout, 'contentSize', null );
			$size_wide    	= get_prop( $layout, 'wideSize', null );

			$size_default 	= $size_default ?: $size_wide;
			$size_wide 		= $size_wide ?: $size_default;

			if( $size_default || $size_wide ) {
				$replace_regex   = '/(^\s*<.+?\b[^>]*wp-block-query[^>]*>)(.*)(<\/.+?>\s*$)/ms';
				$content = preg_replace_callback( $replace_regex, function( $matches ) {
					return $matches[1] . '<div class="container">' . $matches[2] . '</div>' . $matches[3];
				}, $content );
			}
		}

		return $content;
	}
}