<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	WP-Customizer Output
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		5.0.0
 * @version		5.0.0
 */

namespace WeCodeArt\Admin\Customizer\Modules;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Integration;
use WeCodeArt\Core\Scripts;
use WeCodeArt\Support\Fonts;
use WeCodeArt\Admin\Customizer;
use WeCodeArt\Support\FileSystem;

class Styles {

	use Singleton;
	use Scripts\Base;

	/**
	 * The Styles Processor
	 *
	 * @var 	null|object
	 */
	public $styles = null;
	
	/**
	 * WCA FileSystem
	 *
	 * @since 	5.0.0
	 * @var 	mixed
	 */
	protected 	$FS		= null;
	const 		FILE	= 'customizer.css';

	/**
	 * Get Conditionals
	 *
	 * @return void
	 */
	public static function get_conditionals() {
		wecodeart( 'conditionals' )->set( [
			'with_customizer_styles' => Styles\Condition::class,
		] );

		return [ 'with_customizer_styles' ];
	}

	/**
	 * Register Hooks - into styles processor action if enabled
	 *
	 * @since 	5.0.0
	 *
	 * @return 	void
	 */
	public function register_hooks() {
		$this->FS 		= FileSystem::get_instance()->set_folder( 'css' );
		$this->styles 	= wecodeart( 'integrations' )->get( 'styles' );
		
		// Generate styles and enqueue
		add_action( 'customize_save_after',			[ $this, 'generate_styles' 	], 100 );
		add_action( 'enqueue_block_editor_assets', 	[ $this, 'enqueue_styles' 	], 100 );
		add_action( 'wp_enqueue_scripts',			[ $this, 'enqueue_styles'	], 999 );
		
		if( is_admin() || is_customize_preview() ) return;

		// Remove Customizer inline styles - we add them in our way, optimized and compressed!
		remove_action( 'wp_head', 'wp_custom_css_cb', 101 );
		
		// Generate Fonts/Styles on frontend load
		if( $this->has_css_file() === false ) {
			add_action( 'wp', [ $this, 'generate_styles' ] );
		}
	}

	/**
	 * Enqueue the styles.
	 *
	 * @since 	5.0.0
	 * @return 	void
	 */
	public function enqueue_styles() {
		if( $this->has_css_file() === false ) return;

		// Enqueue the dynamic stylesheet.
		wp_enqueue_style(
			$this->make_handle( null, 'wecodeart-dynamic' ),
			$this->get_css_url(),
			[],
			wecodeart( 'version' )
		);
	}

	/**
	 * Loop through all fields and create an array of style definitions.
	 *
	 * @access 	public
	 */
	public function generate_styles( $wp_customize ) {
		$css    = [];
		
		// Controls CSS
		$fields = Customizer::get_instance()->get_configurations( $wp_customize );
		foreach( $fields as $control ) {
			// Only continue if $control['output'] is set.
			if ( isset( $control['output'] ) && ! empty( $control['output'] ) ) {
				$css = array_replace_recursive( $css, self::process_control( $control ) );
			}
		}

		// Custom CSS
		$css = array_replace_recursive( $css, $this->styles::break_queries( wp_get_custom_css() ) );

		// Covert CSS to string
		if ( is_array( $css ) ) {
			$css = $this->styles::parse( $this->styles::add_prefixes( $css ) );
		}

		// Google Font CSS
		$fonts = '';
		if( wecodeart_if( 'with_fonts' ) ) {
			$gfonts = wecodeart( 'integrations' )->get( 'fonts' )::get_instance()->google;
			foreach( $gfonts->process_fonts() as $font ) $fonts .= $gfonts->get_styles( $font );
		}

		// Combine with fonts CSS
		$css = $fonts . $css;

		// Create file if we have CSS
		if( $css ) {
			return $this->create_css_file( $css );
		}

		return $this->delete_css_file();
	}

	/**
	 * Get the CSS for a field.
	 *
	 * @param 	array 	$args The field.
	 *
	 * @return 	array
	 */
	public static function process_control( $args ) {
		// Find the class that will handle the outpout for this field.
		$classname            = Styles\Controls::class;
		$default_classnames   = [
			'wecodeart-fonts' 	=> Styles\Controls\Font::class,
			'wecodeart-palette' => Styles\Controls\Palette::class,
		];

		$field_output_classes = apply_filters( 'wecodeart/filter/customizer/styles/controls', $default_classnames );

		if ( array_key_exists( $args['control'], $field_output_classes ) ) {
			$classname = $field_output_classes[ $args['control'] ];
		}

		$obj = new $classname( $args );

		return $obj->get_styles();
	}

	/**
	 * Get CSS url for post.
	 *
	 * @return  string File url.
	 */
	public function get_css_url() {
		return $this->FS->get_file_url( self::FILE, true );
	}

	/**
	 * Check if we have a CSS file for this post.
	 *
	 * @since   5.0.0
	 *
	 * @return  bool
	 */
	public function has_css_file() {
		return $this->FS->has_file( self::FILE );
	}

	/**
	 * Function to save CSS into WeCodeArt Folder.
	 *
	 * @since   5.0.0
	 * @param   string $css CSS string.
	 *
	 * @return  bool
	 */
	public function create_css_file( $css ) {
		return $this->FS->create_file( self::FILE, $this->styles::compress( $css ) );
	}

	/**
	 * Function to save CSS into WeCodeArt Folder.
	 *
	 * @since   5.0.0
	 *
	 * @return  bool
	 */
	public function delete_css_file() {
		return $this->FS->delete_file( self::FILE );
	}
}