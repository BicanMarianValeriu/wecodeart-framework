<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg CSS Frontend
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since		5.0.0
 * @version		5.0.0
 */

namespace WeCodeArt\Gutenberg\Modules\Styles;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg;
use WeCodeArt\Core\Scripts;
use WeCodeArt\Gutenberg\Modules\Styles;

/**
 * Class Embed
 *
 * Collects and enqueues the Styles
 */
class Embed {

	use Singleton;
	use Scripts\Base;

	/**
	 * The namespace to check if excerpt exists.
	 *
	 * @var bool
	 */
	private $has_excerpt = false;

	/**
	 * Initialize the class
	 */
	public function init() {
		add_filter( 'get_the_excerpt',	[ $this, 'get_excerpt_start'	], 1 );
		add_action( 'wp',				[ $this, 'render_post_css'		], 10 );
		add_filter( 'get_the_excerpt',	[ $this, 'get_excerpt_end'		], 20 );
	}

	/**
	 * Method to start checking if excerpt exists.
	 *
	 * @since   5.0.0
	 * @param 	string 	$excerpt Excerpt.
	 *
	 * @return 	string
	 */
	public function get_excerpt_start( $excerpt ) {
		$this->has_excerpt = true;

		return $excerpt;
	}

	/**
	 * Method to stop checking if excerpt exists.
	 *
	 * @since   5.0.0
	 * @param 	string 	$excerpt Excerpt.
	 *
	 * @return 	string
	 */
	public function get_excerpt_end( $excerpt ) {
		$this->has_excerpt = false;

		return $excerpt;
	}

	/**
	 * Render server-side CSS
	 *
	 * @since   5.0.0
	 */
	public function render_post_css() {
		$id = 0;

		if ( is_singular() ) {
			// Enqueue main post attached style.
			$id = get_the_ID();
			$this->enqueue_styles();
		}

		if( is_home() ) {
			$id = get_option( 'page_for_posts' );
			$this->enqueue_styles( $id );
		}

		// Enqueue styles for other posts that display the_content, if any.
		add_filter( 'the_content', function ( $content ) use ( $id ) {
			$post_id = get_the_ID();

			if ( $this->has_excerpt || $id === $post_id ) {
				return $content;
			}

			$this->enqueue_styles( $post_id, true );

			return $content;
		} );
	}

	/**
	 * Enqueue CSS file
	 *
	 * @since   5.0.0
	 * @param 	int  	$post_id Post id.
	 * @param 	bool 	$footer IN footer.
	 *
	 * @return 	void
	 */
	public function enqueue_styles( $post_id = '', $footer = false ) {
		$post_id  = (int) $post_id ?: get_the_ID();
		$location = 'wp_head';

		if ( ! has_blocks( $post_id ) ) {
			return;
		}

		if ( $footer ) {
			$location = 'wp_footer';
		}

		// If is Admin preview, just enqueue inline and bail
		if ( is_preview() ) {
			add_action( $location, function () use ( $post_id ) {
				return $this->get_post_css( $post_id );
			} );

			return;
		}

		// If we have styles and we dont have a file, please generate one!
		// Until then, enqueue meta and return, and next time move bellow!
		if ( ! Handler::get_instance()->has_css_file( $post_id ) ) {
			// Generate the file for the next time!
			Handler::get_instance()->generate_css_file( $post_id );

			add_action( $location, function () use ( $post_id ) {
				return $this->get_post_css( $post_id );
			} );

			return;
		}

		// Get Filename and URL and enqueue in footer or as usual!
		$file_url 	= Handler::get_instance()->get_css_url( $post_id );
		$file_name 	= str_replace( 'css', '', basename( $file_url ) );

		// Handle reusables
		$blocks 	= Gutenberg::parse_blocks( get_post_field( 'post_content', $post_id ) );
		if ( is_array( $blocks ) || ! empty( $blocks ) ) {
			$this->enqueue_reusable_styles( $blocks, $footer );
		}

		if ( $footer ) {
			add_action( 'wp_footer', function () use ( $post_id, $file_name, $file_url ) {
				return wp_enqueue_style(
					$this->make_handle( $file_name, 'wecodeart-gutenberg' ), 
					$file_url, 
					[], 
					get_the_modified_time( 'U', $post_id )
				);
			} );

			return;
		}

		add_action( 'wp_enqueue_scripts', function () use ( $post_id, $file_name, $file_url ) {
			return wp_enqueue_style( 
				$this->make_handle( $file_name, 'wecodeart-gutenberg' ), 
				$file_url, 
				[], 
				get_the_modified_time( 'U', $post_id ) 
			);
		} );
	}

	/**
	 * Enqueue CSS file for Reusable Blocks
	 *
	 * @since   5.0.0
	 * @param 	array $blocks List of blocks.
	 * @param 	bool  $footer Should we load on footer.
	 *
	 * @return 	void
	 */
	public function enqueue_reusable_styles( $blocks, $footer = false ) {
		foreach ( $blocks as $block ) {
			if ( 'core/block' === $block['blockName'] && ! empty( $block['attrs']['ref'] ) ) {
				$this->enqueue_styles( $block['attrs']['ref'], $footer );
			}

			if ( isset( $block['innerBlocks'] ) && ! empty( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) ) {
				$this->enqueue_reusable_styles( $block['innerBlocks'], $footer );
			}
		}
	}

	/**
	 * Get Post CSS
	 *
	 * @since   5.0.0
	 * @param 	string $post_id Post id.
	 *
	 * @return 	void
	 */
	public function get_post_css( $post_id ) {
		$post_id = $post_id ? $post_id : get_the_ID();
		if ( has_blocks( $post_id ) ) {
			$css = $this->get_page_css_meta( $post_id );

			if ( empty( $css ) || is_preview() ) {
				$css = $this->get_page_css_inline( $post_id );
			}

			if ( empty( $css ) ) {
				return;
			}

			$style  = "\n" . '<style type="text/css" media="all">' . "\n";
			$style .= $css;
			$style .= "\n" . '</style>' . "\n";

			// CSS is escaped before anyway before this step!
			echo wp_strip_all_tags( $style );
		}
	}

	/**
	 * Get Blocks CSS from Meta
	 *
	 * @since   5.0.0
	 * @param 	int 	$post_id Post id.
	 *
	 * @return 	string
	 */
	public function get_page_css_meta( $post_id ) {
		$style = '';
		if ( has_blocks( $post_id ) ) {
			$style .= get_post_meta( $post_id, '_wca_blocks_styles', true );
			
			$blocks = Gutenberg::parse_blocks( get_post_field( 'post_content', $post_id ) );

			if ( ! is_array( $blocks ) || empty( $blocks ) ) {
				return $style;
			}

			$style .= $this->get_reusable_block_meta( $blocks );
		}

		return $style;
	}

	/**
	 * Get Blocks CSS Inline
	 *
	 * @since   5.0.0
	 * @param 	int 	$post_id Post id.
	 *
	 * @return 	string
	 */
	public function get_page_css_inline( $post_id ) {
		global $post;

		if ( has_blocks( $post_id ) ) {
			if ( is_preview() && ( $post_id === $post->ID ) ) {
				$content = $post->post_content;
			} else {
				$content = get_post_field( 'post_content', $post_id );
			}

			$blocks = Gutenberg::parse_blocks( $content );

			if ( ! is_array( $blocks ) || empty( $blocks ) ) {
				return '';
			}

			$css = $this->collect_css( $blocks );
		}

		return $css;
	}

	/**
	 * Get Reusable Block Meta
	 *
	 * @since   5.0.0
	 * @param 	array 	$blocks List of blocks.
	 *
	 * @return 	string
	 */
	public function get_reusable_block_meta( $blocks ) {
		$style = '';
		foreach ( $blocks as $block ) {
			if ( 'core/block' === $block['blockName'] && ! empty( $block['attrs']['ref'] ) ) {
				$style .= get_post_meta( $block['attrs']['ref'], '_wca_blocks_styles', true );
			}

			if ( isset( $block['innerBlocks'] ) && ! empty( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) ) {
				$style .= $this->get_reusable_block_meta( $block['innerBlocks'] );
			}
		}

		return $style;
	}

	/**
	 * Cycle thorugh Blocks and collect CSS
	 *
	 * @since   5.0.0
	 * @param 	array 	$blocks List of blocks.
	 *
	 * @return 	string 	Block styles.
	 */
	public function collect_css( $blocks ) {
		$style  = '';
		$style .= Styles::get_instance()->cycle_through_static_blocks( $blocks );
		$style .= Styles::get_instance()->cycle_through_reusable_blocks( $blocks );

		return $style;
	}
}