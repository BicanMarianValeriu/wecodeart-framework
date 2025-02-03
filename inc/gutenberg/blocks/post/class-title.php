<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg\Blocks
 * @copyright   Copyright (c) 2024, WeCodeArt Framework
 * @since		5.0.0
 * @version		6.6.0
 */

namespace WeCodeArt\Gutenberg\Blocks\Post;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Entry Title block.
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
	protected $block_name = 'post-title';

	/**
	 * Init.
	 */
	public function init() {
		\add_filter( 'render_block_' . $this->get_block_type(), [ $this, 'render' ], 20, 2 );
	}

	/**
	 * Dynamically renders the `core/post-content` block.
	 *
	 * @param 	string 	$content 	The block markup.
	 * @param 	array 	$block 		The block.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( string $content = '', $block = null ): string {
		if ( get_prop( $block, [ 'attrs', 'isLink' ] ) ) {
			$content = wecodeart( 'dom' )::processor( $content );

			if( $content->next_tag( [
				'tag_name' 	=> 'A',
			] ) ) {
				$content->add_class( 'wp-block-post-title__link' );
			}

			$content = $content->get_updated_html();
		}

		return $content;
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return <<<CSS
			.wp-block-post-title {
				word-break: break-word;
			}
			.wp-block-post-title__link {
				display: inline-block;
			}
		CSS;
	}
}
