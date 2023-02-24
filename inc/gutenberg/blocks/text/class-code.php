<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg\Blocks
 * @copyright   Copyright (c) 2023, WeCodeArt Framework
 * @since		5.0.0
 * @version		5.7.2
 */

namespace WeCodeArt\Gutenberg\Blocks\Text;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;

/**
 * Gutenberg Code block.
 */
class Code extends Dynamic {

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
	protected $block_name = 'code';

	/**
	 * Block args.
	 *
	 * @return 	array
	 */
	// public function block_type_args(): array {
	// 	return [
	// 		'render_callback' => [ $this, 'render' ]
	// 	];
	// }

	/**
	 * Dynamically renders the `core/code` block.
	 *
	 * @param 	array 	$attributes	The attributes.
	 * @param 	string 	$content 	The block markup.
	 *
	 * @return 	string 	The block markup.
	 */
	// public function render( array $attributes = [], string $content = '' ): string {
	// 	$block_id = uniqid( 'wp-code-' );
	// 	$content = new \WP_HTML_Tag_Processor( $content );
	// 	$content->next_tag( [ 'tag_name' => 'code' ] );
	// 	$content->set_attribute( 'id', $block_id );
		
	// 	return $content;
	// }

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return "
		/* Reset */
		pre {
			overflow: auto;
			color: var(--wp--pink);
		}
		pre code {
			font-size: inherit;
			color: inherit;
			word-break: normal;
		}
		code {
			font-size: var(--wp--preset--font-size--small);
			color: var(--wp--pink);
			word-wrap: break-word;
		}
		a > code {
			color: inherit;
		}

		/* Block */
		.wp-block-code code {
			display: block;
			overflow-wrap: break-word;
    		white-space: pre-wrap;
		}
		";
	}
}
