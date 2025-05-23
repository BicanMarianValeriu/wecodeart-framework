<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Yoast\Blocks
 * @copyright   Copyright (c) 2025, WeCodeArt Framework
 * @since		6.0.0
 * @version		6.5.7
 */

namespace WeCodeArt\Support\Plugins\WPSeo\Blocks;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Config\Traits\Singleton;
use WeCodeArt\Config\Interfaces\Integration;
use WeCodeArt\Gutenberg\Blocks\Dynamic;

/**
 * Gutenberg Yoast FAQ block.
 */
class Faq extends Dynamic {

	use Singleton;

	/**
	 * Block namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'yoast';

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'faq-block';

	/**
	 * Block args.
	 *
	 * @return 	array
	 */
	public function block_type_args(): array {
		return [
			'render_callback' 	=> [ $this, 'render' ],
			'style'				=> [ $this->get_asset_handle(), 'wp-block-details' ]
		];
	}

	/**
	 * Get block asset handle.
	 *
	 * @return string
	 */
	public function get_asset_handle(): string {
		return $this->namespace . '-' . $this->block_name;
	}

    /**
	 * Filter FAQ
	 * 
	 * @param 	string 	$attributes
	 * @param 	array 	$content
	 * 
	 * @return 	string
	 */
	public function render( array $attributes = [], string $content = '' ): string {
		$dom		= wecodeart( 'dom' )::create( $content );
		$sections	= wecodeart( 'dom' )::get_elements_by_class( $dom, 'schema-faq-section' );

		if( count( $sections ) ) {
			foreach( $sections as $section ) {
				$section = wecodeart( 'dom' )::change_tag( $section, 'details' );
				$summary = wecodeart( 'dom' )::change_tag( wecodeart( 'dom' )::get_element( 'strong', $section, 0 ), 'summary' );
			}
		}

		$content	= wecodeart( 'dom' )::processor( $dom->saveHtml() );
		$content->next_tag();
		$content->add_class( 'wp-block-details' );

		return (string) $content;
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return <<<CSS
			.wp-block-yoast-faq-block details[open] {
				padding-bottom: 0;
			}
		CSS;
	}
}
