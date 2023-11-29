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
 * @since		6.0.0
 * @version		6.2.8
 */

namespace WeCodeArt\Gutenberg\Blocks\Text;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;
use function WeCodeArt\Functions\encode_svg_data;

/**
 * Gutenberg Code block.
 */
class Lists extends Dynamic {

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
	protected $block_name = 'list';

	/**
	 * Block SVG styles.
	 *
	 * @var string
	 */
	protected static $styles = [];

	/**
	 * Init.
	 */
	public function init() {
		// Collect SVG files.
		$this->collect_svg_styles();
		
		// We only load them in admin for preview, in frontend we load conditionaly.
		if( ! is_admin() ) return;

		// Register collected SVG styles.
		foreach( self::$styles as $data ) {
			$name	= get_prop( $data, [ 'name' ] );
			$label	= ucwords( join( ' ', explode( '-', $name ) ) );

			\register_block_style( $this->get_block_type(), [
				'name' 			=> 'icon--' . $name,
				'label'			=> sprintf( esc_html__( '%s', 'wecodeart' ), $label ),
				'inline_style' 	=> self::get_style( $data )
			] );
		}
	}

	/**
	 * Block args.
	 *
	 * @param	array $current	Existing register args
	 *
	 * @return 	array
	 */
	public function block_type_args( array $current ): array {
		$supports 	= get_prop( $current, [ 'supports' ], [] );

		return [
			'render_callback' 	=> [ $this, 'render' ],
			'supports'			=> wp_parse_args( [
				'__experimentalLayout'	=> [
					'allowSwitching'  => false,
					'allowInheriting' => false,
					'default'         => [
						'type'        => 'flex',
						'orientation' => 'vertical',
					],
				],
				'spacing'	=> [
					'margin'  	=> true,
					'padding' 	=> true,
					'blockGap' 	=> true,
				]
			], $supports )
		];
	}

	/**
	 * Dynamically renders the `core/separator` block.
	 *
	 * @param 	array 	$attributes	The attributes.
	 * @param 	string 	$content 	The block markup.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( array $attributes = [], string $content = '' ): string {
		$handle 	= $this->get_asset_handle();
		$classes 	= array_filter( explode( ' ', get_prop( $attributes, [ 'className' ], '' ) ) );

		// SVG Styles
		static $styles = [];

		// Load specific style if not already loaded.
		foreach( $classes as $class ) {
			// This is SVG, handled it bellow.
			if( str_starts_with( $class, 'is-style-icon--' ) && ! in_array( $class, $styles ) ) {
				\wp_add_inline_style( $handle, self::get_style( current( wp_list_filter( self::$styles, [
					'class' => $class
				] ) ) ) );

				$styles[] = $class;
				
				continue;
			}
		}

		$content 	= new \WP_HTML_Tag_Processor( $content );
		
		if( $content->next_tag() ) {
			$content->add_class( 'wp-block-list' );
		}
	
		return (string) $content;
	}

	/**
	 * Collects SVG for creating styles
	 *
	 * @return 	void.
	 */
	private function collect_svg_styles(): void {
		$themes     = [];
		$stylesheet = get_stylesheet();
		$template   = get_template();

		if ( $stylesheet !== $template ) {
			$themes[] = wp_get_theme( $stylesheet );
		}

		$themes[] = wp_get_theme( $template );

		foreach ( $themes as $theme ) {
			$dirpath = $theme->get_stylesheet_directory() . '/views/blocks/list/';
			if ( ! is_dir( $dirpath ) || ! is_readable( $dirpath ) ) {
				continue;
			}
			if ( file_exists( $dirpath ) ) {
				$files = glob( $dirpath . '*.svg' );
				if ( $files ) {
					foreach ( $files as $file ) {
						$pathinfo 	= pathinfo( $file );
						self::$styles[] = [
							'name'	=> get_prop( $pathinfo, [ 'filename' ], '' ),
							'class'	=> 'is-style-icon--' . get_prop( $pathinfo, [ 'filename' ], '' ),
							'file'	=> $file,
						];
					}
				}
			}
		}
	}

	/**
	 * Get Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public static function get_style( $data = null ): string {
		$inline = '';

		if( is_array( $data ) ) {
			$class	= get_prop( $data, [ 'class' ] );

			// Bail early if no class.
			if( ! $class ) {
				return $inline;
			}

			$svg_string	= \file_get_contents( get_prop( $data, [ 'file' ] ) );
			// Clean SVG and covert to data URL.
			$encodedSVG = encode_svg_data( $svg_string );

			$inline = "
				.wp-block-list.{$class} {
					--wp--marker: url('{$encodedSVG}');
				}
			";
		}

		return wecodeart( 'styles' )::compress( $inline );
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return "
			/* Reset */
			ol,
			ul {
				padding-left: 1.1em;
			}
			ol ol,
			ul ul,
			ol ul,
			ul ol {
				margin-bottom: 0;
			}
			dt {
				font-weight: 700;
			}
			dd {
				margin-bottom: .5rem;
				margin-left: 0;
			}
			/* Styles */
			.wp-block-list[class*='is-style-icon--'] {
				list-style: none;
				padding-left: 1.5em;
			}
			.wp-block-list[class*='is-style-icon--'] li::before {
				content: '';
				mask: var(--wp--marker) no-repeat center;
				-webkit-mask: var(--wp--marker) no-repeat center;
				position: absolute;
				display: inline-block;
				width: 1.5em;
				height: 1.5em;
				margin-left: -1.75em;
				background: var(--wp--marker--color, currentColor);
			}
		";
	}
}
