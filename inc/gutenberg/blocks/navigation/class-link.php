<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg\Blocks
 * @copyright   Copyright (c) 2022, WeCodeArt Framework
 * @since		5.0.0
 * @version		5.6.8
 */

namespace WeCodeArt\Gutenberg\Blocks\Navigation;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Config\Traits\Asset;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use WeCodeArt\Gutenberg\Blocks\Navigation;
use function WeCodeArt\Functions\get_prop;
use function WeCodeArt\Functions\flatten;

/**
 * Gutenberg Navigation Link block.
 */
class Link extends Dynamic {

	use Asset;
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
	protected $block_name = 'navigation-link';

	/**
	 * Shortcircuit Register
	 */
	public function register() {
		\add_filter( 'block_type_metadata_settings', [ $this, 'filter_render' ], 10, 2 );
	}

	/**
	 * Filter navigation link markup
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
	 * Dynamically renders the `core/navigation-link` block.
	 *
	 * @param 	array 	$attributes The block attributes.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( $attributes = [], $content = '', $block = null ) {
		global $wp;

		$link_has_id 	= isset( $attributes['id'] ) && is_numeric( $attributes['id'] );
		$is_post_type	= isset( $attributes['kind'] ) && 'post-type' === $attributes['kind'];
		$is_post_type	= $is_post_type || isset( $attributes['type'] ) && ( 'post' === $attributes['type'] || 'page' === $attributes['type'] );
		
		// Don't render the block's subtree if it is a draft.
		if ( $is_post_type && $link_has_id ) {
			$post = get_post( $attributes['id'] );
			if ( 'publish' !== $post->post_status ) {
				return '';
			}
		}

		// Don't render the block's subtree if it has no label.
		if ( empty( $attributes['label'] ) ) {
			return '';
		}

		// Extra classes
		$extras = [
			'mod' 	=> [],
			'icon' 	=> [],
		];

		$attrs 	= $this->get_wrapper_attributes( $attributes, $block, $extras );

		return wecodeart( 'markup' )::wrap( 'nav-item', [ [
			'tag' 	=> 'li',
			'attrs'	=> $attrs,
		] ], function( $attributes, $block, $extras ) {

			// Nav Link
			$this->render_link( $attributes, $block, $extras );

			// Nav Submenu
			$this->render_submenu( $block );

		}, [ $attributes, $block, $extras ], false );
	}

	/**
	 * Renders the link
	 *
	 * @param	array 	$attributes
	 * @param	array 	$extras
	 *
	 * @return	string 	HTML
	 */
	public function render_link( $attributes, $block, $extras ) {
		wecodeart( 'markup' )::wrap( 'nav-link', [ [
			'tag' 	=> $this->get_link_tag( $this->get_link_type( get_prop( $extras, 'mod', [] ) ) ),
			'attrs'	=> $this->get_link_attributes( $attributes, $block, $extras ),
		] ], function( $attributes, $extras ) {
			if( in_array( 'dropdown-divider', get_prop( $extras, 'mod', [] ) ) ) {
				echo '&nbsp';
				return;
			}
	
			// Icon
			if( ! empty( $icon = get_prop( $extras, 'icon', [] ) ) ) {
				printf( '<i class="wp-block-navigation-link__icon %s"></i>', esc_attr( join( ' ', $icon ) ) );
			}
	
			// Label
			wecodeart( 'markup' )::wrap( 'nav-label', [ [
				'tag' 	=> 'span',
				'attrs'	=> [
					'class' => 'wp-block-navigation-link__label'
				]
			] ], function( $attributes ) { 
					echo wp_kses_post( $attributes['label'] );
			}, [ $attributes ] );
		}, [ $attributes, $extras ] );
	}

	/**
	 * Renders dropdown
	 *
	 * @param 	array 	$block
	 *
	 * @return 	string	HTML
	 */
	public function render_submenu( $block ) {
		if( count( $block->inner_blocks ) === 0 ) return;

		// Styles
		if( ! wp_style_is( 'wp-block-navigation-submenu' ) ) {
			wp_enqueue_style( 'wp-block-navigation-submenu' );
		}

		// Scripts
		if( get_prop( $block->context, [ 'openSubmenusOnClick' ] ) && ! wp_script_is( $this->make_handle() ) ) {
			wp_enqueue_script( $this->make_handle(), $this->get_asset( 'js', 'modules/dropdown' ), [], wecodeart( 'version' ), true );
		}

		$inner_html = '';
		foreach ( $block->inner_blocks as $inner_block ) $inner_html .= $inner_block->render();
		
		// Use overlay first, fallback to nav background (or body).
		$color_type = get_prop( $block->context, 'overlayBackgroundColor' );
		$key_name 	= $color_type ? 'overlay-background' : 'background';
		$background = Navigation::get_class_color( $block->context, $key_name );
		
		$classes 	= [ 'wp-block-navigation-link__dropdown', 'dropdown-menu' ];

		if( ( wecodeart( 'styles' )::color_lightness( $background ) < 380 ) ) {
			$classes[] = 'dropdown-menu-dark';
		}

		wecodeart( 'markup' )::wrap( 'nav-dropdown', [ [
			'tag' 	=> 'ul',
			'attrs'	=> [
				'class' => join( ' ', $classes ),
			]
		] ], $inner_html );
	}

	/**
	 * Return a string containing a linkmod type and update $atts array
	 * 
	 * @return 	string
	 */
	public function get_link_type( $classes = [] ) {
		$mod = '';
		// Loop through array of linkmod classes to handle their $atts.
		if ( empty( $classes ) ) return $mod;

		foreach ( $classes as $class ) {
			if ( empty( $class ) ) continue;

			if ( 'dropdown-header' === $class ) {
				$mod = 'dropdown-header';
			} elseif ( 'dropdown-divider' === $class ) {
				$mod = 'dropdown-divider';
			} elseif ( 'dropdown-item-text' === $class ) {
				$mod = 'dropdown-item-text';
			}
		}

		return $mod;
	}

	/**
	 * Return a string containing a linkmod span.
	 * 
	 * @return 	string
	 */
	public function get_link_tag( $type ) {
		$output = 'a';
		if ( 'dropdown-header' === $type || 'dropdown-item-text' === $type ) $output = 'span';
		elseif ( 'dropdown-divider' === $type ) $output = 'div';
		return $output;
	}

	/**
	 * Return an array of link attributes.
	 * 
	 * @return 	array
	 */
	public function get_link_attributes( $attributes, $block, $extras ) {
		global $wp;

		$current_id 	= is_home() ? get_option( 'page_for_posts' ) : get_the_ID();
		$is_active   	= ! empty( $attributes['id'] ) && ( (int) $current_id === (int) $attributes['id'] );
		$has_submenu 	= count( $block->inner_blocks ) > 0;
		$is_sub_menu 	= isset( $attributes['isTopLevelLink'] ) ? ( ! $attributes['isTopLevelLink'] ) : false;

		$classes = [ 'wp-block-navigation-link__content' ];
		$classes[] =  $is_sub_menu ? 'dropdown-item' : 'nav-link' ;
			
		if( $is_active ) {
			$classes[] = 'active';
		}

		if( $has_submenu ) {
			$classes[] = 'dropdown-toggle';
		}

		$attrs 			= [
			'class' 	=> join( ' ', array_filter( $classes )),
			'href'		=> get_prop( $attributes, 'url', '#' ),
			'target' 	=> get_prop( $attributes, 'opensInNewTab' ) === true ? '_blank' : null,
			'rel'		=> get_prop( $attributes, 'rel', get_prop( $attributes, 'nofollow', null ) === 'nofollow' ? 'nofollow' : null ),
			'title'		=> get_prop( $attributes, 'title', null ),
			'aria-current'	=> $is_active ? 'page' : null,
		];

		if( $has_submenu ) {
			$attrs = wp_parse_args( [
				'href'				=> '#',
				'data-bs-toggle' 	=> 'dropdown',
				'data-bs-auto-close'=> 'outside',
				'aria-haspopup' 	=> 'true',
				'aria-expanded' 	=> 'false',
			], $attrs );
		}

		$extras = flatten( $extras );

		foreach ( $extras as $class ) {
			if ( empty( $class ) ) continue;

			if ( 'disabled' === $class ) {
				$attrs['href'] = '#';
				$attrs['tabindex'] = '-1';
				$attrs['aria-disabled'] = 'true';
				unset( $attrs['target'] );
			}

			// This applies only for submenus
			if( $is_sub_menu === false ) continue;
			
			if ( in_array( $class, [ 'dropdown-header', 'dropdown-divider', 'dropdown-item-text' ] ) ) {
				$attrs['class'] = str_replace( 'dropdown-item', $class, $attrs['class'] );
				unset( $attrs['href'] );
				unset( $attrs['target'] );
			}
		}

		return $attrs;
	}

	/**
	 * Return an array of wrapper attributes.
	 * 
	 * @return 	array
	 */
	public function get_wrapper_attributes( $attributes, $block, &$extras ) {
		$is_sub_menu 	= isset( $attributes['isTopLevelLink'] ) ? ( ! $attributes['isTopLevelLink'] ) : false;
		$classes		= [ 'wp-block-navigation-link' ];
		$class_names	= ! empty( $attributes['className'] ) ? explode( ' ', $attributes['className'] ) : false;

		// Fallback - to do, if styles extension is disabled.
		$inline_style 	= '';

		if( $is_sub_menu === false ) {
			$classes[] = 'nav-item';
		}

		if ( ! empty( $class_names ) ) {
			$classes = array_merge( $classes, $class_names );
		}

		if( count( $block->inner_blocks ) > 0 ) {
			$classes[] = 'dropdown';
		}
		
		$classes = $this->pluck_special_classes( $classes, $is_sub_menu, $extras );

		return [
			'class'	=> join( ' ', array_filter( $classes ) ),
			'style'	=> $inline_style,
		];
	}

	/**
	 * Find any custom linkmod or icon classes and store in their holder
	 *
	 * Supported linkmods: .disabled, .dropdown-header, .dropdown-divider
	 * Supported iconsets: Font Awesome 4/5/6, Glypicons
	 *
	 * @param 	array   $classes		an array of classes currently assigned to the item.
	 * @param 	bool   	$is_sub_menu	is dropdown link.
	 * @param 	array   $extras			an array to hold linkmod classes.
	 *
	 * @return 	array  $classes	a maybe modified array of classnames.
	 */
	private static function pluck_special_classes( $classes, $is_sub_menu, &$extras ) {
		foreach ( $classes as $key => $class ) {
			// If any special classes are found, store the class in it's
			// holder array and and unset the item from $classes.
			if ( preg_match( '/^disabled|^sr-only|^screen-reader-text/i', $class ) ) {
				$extras['mod'][] = $class;
				unset( $classes[ $key ] );
			} elseif ( preg_match( '/^dropdown-header|^dropdown-divider|^dropdown-item-text/i', $class ) && $is_sub_menu ) {
				$extras['mod'][] = $class;
				unset( $classes[ $key ] );
			} elseif ( preg_match( '/^fa-(\S*)?|^fa(s|r|l|b)?(\s?)?$/i', $class ) ) {
				$extras['icon'][] = $class;
				unset( $classes[ $key ] );
			} elseif ( preg_match( '/^glyphicon-(\S*)?|^glyphicon(\s?)$/i', $class ) ) {
				$extras['icon'][] = $class;
				unset( $classes[ $key ] );
			}
		}

		return $classes;
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return "
		.nav-link {
			display: block;
			padding: 0.5rem 1rem;
			color: var(--wp--preset--color--primary);
			transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
		}
		.disabled>.nav-link,
		.nav-link.disabled {
			color: var(--wp--preset--color--gray);
			pointer-events: none;
			cursor: default;
		}
		.wp-block-navigation.has-text-color .nav-link {
			color: inherit;
		}
		.wp-block-navigation .nav-link {
			display: flex;
			align-items: center;
		}
		.wp-block-navigation .wp-block-navigation-link__icon {
			margin-right: .5rem;
		}
		.wp-block-navigation .wp-block-navigation-link__label {
			flex: 1 1 auto;
			word-break: normal;
			overflow-wrap: break-word;
		}
		.wp-block-navigation .wp-block-navigation-item__description {
			display: none;
		}
		";
	}
}