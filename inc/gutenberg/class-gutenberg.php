<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since		4.0.3
 * @version		4.2.0
 */

namespace WeCodeArt;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Core\Scripts;
use function WeCodeArt\Functions\get_prop;

/**
 * Handles Gutenberg Theme Functionality.
 */
class Gutenberg {

	use Singleton;
	use Scripts\Base;

	/**
	 * The Gutenberg Config.
	 *
	 * @var config[]
	 */
	protected $config = [];

	/**
	 * Class Init.
	 *
	 * @return void
	 */
	public function init() {
		// Setup Config
		$this->config = wecodeart_config( 'gutenberg', [] );

		// Editor Size.
		add_action( 'admin_init', 					[ $this, 'block_editor_size' ] );

		// Block Categories.
		add_filter( 'block_categories', 			[ $this, 'block_category' ], 10, 1 );
		
		// Editor Assets.
		add_action( 'enqueue_block_editor_assets', 	[ $this, 'block_editor_assets' ] );
		
		// Editor Settings.
		add_filter( 'block_editor_settings', 		[ $this, 'block_editor_settings' ], 10, 2 );

		// Theme Support.
		add_action( 'after_setup_theme', 			[ $this, 'theme_support' ], 100 );

		// Modules
		Gutenberg\Modules\Page::get_instance();
		Gutenberg\Modules\Title::get_instance();
		Gutenberg\Modules\Styles::get_instance();
		Gutenberg\Modules\Classes::get_instance();
	}

	/**
	 * Gurenberg WCA Category
	 *
	 * @param  array $categories - Current guttenberg cats.
	 *
	 * @return array
	 */
	public function block_category( $categories ) {
		return array_merge( $categories, [ [
			'slug' 	=> 'wca',
			'title' => __( 'WeCodeArt', 'wecodeart' ),
		] ] );
	}

	/**
	 * Add new block editor settings for custom classes.
	 *
	 * @param array  $settings 	The editor settings.
	 * @param object $post 		The post being edited.
	 *
	 * @return array Returns updated editors settings.
	 */
	public function block_editor_settings( $settings, $post ) {
		if ( ! isset( $settings[ 'wecodeart' ] ) ) {
			$settings[ 'wecodeart' ] = apply_filters( 'wecodeart/filter/gutenberg/settings', [], $post );
		}

		return $settings;
	}

	/**
	 * Editor only.
	 *
	 * @return  void
	 */
	public function block_editor_assets() {
		// Gutenberg editor assets.
		wp_enqueue_style( 	$this->make_handle(),	$this->get_asset( 'css', 'gutenberg' ),	[], wecodeart( 'version' ) );
		wp_enqueue_script( 	$this->make_handle(),	$this->get_asset( 'js', 'gutenberg' ), 	[
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-plugins',
			'wp-components',
			'wp-compose',
			'wp-edit-post',
			'wp-api',
			'wp-editor',
			'wp-hooks',
			'lodash'
		], wecodeart( 'version' ) );

		// CodeMirror assets.
		wp_enqueue_code_editor( [ 'type' => 'text/html' ] );
		wp_add_inline_script( 'wp-codemirror', 'window.CodeMirror = wp.CodeMirror;' );
		wp_enqueue_script(
			$this->make_handle( 'codemirror-fs' ), 
			$this->get_asset( 'js', 'codemirror-fs' ),
			[ 'wp-codemirror' ],
			wecodeart( 'version' )
		);

		// Inline
		$global = [
			'theme' 	=> [
				'version' => wecodeart( 'version' )
			],
			'supports'	=> [
				'colorPalette' => get_prop( $this->config, 'palette-classnames', false ),
			],
		];
		wp_add_inline_script( $this->make_handle(), 'window.wecodeartInfo = ' . wp_json_encode( $global ) . ';', 'before' );
	}

	/**
	 * Editor only.
	 *
	 * @return  void
	 */
	public function block_editor_size() {
		$options = get_prop( $this->config, 'editor-sizes', [] );
		if ( is_array( $options ) && ! empty( $options ) ) {
			add_filter( 'admin_body_class', [ $this, 'admin_body_class' ] );
			global $pagenow;
			if ( ! empty( $pagenow ) && in_array( $pagenow, [ 'post-new.php', 'post.php', 'edit.php' ] ) ) {
				add_action( 'admin_head', [ $this, 'template_width_css' ], 100 );
			}
		}
	}

	/**
	 * Support custom theme support for editorskit-template-block-sizes
	 *
	 * @access public
	 */
	public function theme_support() {
		$support = get_prop( $this->config, 'support', [] );

		// Theme Support
		foreach( array_filter( $support ) as $feature => $value ) {
			if( $value === false ) continue;
			add_theme_support( $feature, $value );
		}

		// Properly dequeue Blocks Styles - since setting support to false doesn't
		if( get_prop( $support, 'wp-block-styles', false ) === false ) {
			add_action( 'wp_print_styles', function() {
				wp_dequeue_style( 'wp-block-library' ); 		// WordPress Core
    			wp_dequeue_style( 'wp-block-library-theme' ); 	// WordPress Core
			}, 100 );
		}
	}

	/**
	 * Add custom body class.
	 *
	 * @param 	string 	$classes The body classes.
	 *
	 * @return 	mixed 	Returns update body class.
	 */
	public function admin_body_class( $classes ) {
		global $post;

		$classes .= ' is-wca-body-class-on ';

		if ( isset( $post->ID ) ) {
			$template = str_replace( [ '.', '/' ], '-', get_page_template_slug( $post->ID ) );

			if ( empty( $template ) ) {
				$template = 'default';
			}

			$classes .= $post->post_type . '-template-' . $template . ' ';
		}

		return $classes;
	}

	/**
	 * Add custom css for template width.
	 *
	 * @since	4.1.5
	 *
	 * @return	void
	 */
	public function template_width_css() {
		global $post;

		if ( ! isset( $post->ID ) ) {
			return;
		}

		$script_handle = 'editor-sizes';

		wp_register_style( $this->make_handle( $script_handle ), false, [], wecodeart( 'version' ) );
		wp_enqueue_style( $this->make_handle( $script_handle ) );

		$templates 	= get_prop( $this->config, 'editor-sizes', [] );
		$selector	= ' .editor-styles-wrapper .wp-block';
		$style		= '';

		if ( is_array( $templates ) && ! empty( $templates ) ) {
			foreach ( $templates as $template => $sizes ) {
				$block = '.' . $post->post_type . '-template-' . str_replace( [ '.', '/' ], '-', $template ) . $selector;
				
				if ( is_array( $sizes ) && ! empty( $sizes ) ) {
					foreach ( $sizes as $size => $width ) {
						if ( 'default' === $size ) {
							$style .= $block . '{ max-width: ' . $width . '; }';
						} else {
							$style .= $block . '[data-align="' . $size . '"]{ max-width: ' . $width . '; }';
						}
					}
				}
			}
		}

		wp_add_inline_style( $this->make_handle( $script_handle ), $style );
	}

	/**
	 * Parse Blocks for Gutenberg and WordPress 5.0
	 * 
	 * @since   4.0.3
	 * @access  public
	 */
	public static function parse_blocks( $content ) {
		if ( ! function_exists( 'parse_blocks' ) ) {
			return gutenberg_parse_blocks( $content );
		}

		return parse_blocks( $content );
	}
}
