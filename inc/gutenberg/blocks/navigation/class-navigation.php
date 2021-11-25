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
 * @version		5.3.0
 */

namespace WeCodeArt\Gutenberg\Blocks;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Markup;
use WeCodeArt\Singleton;
use WeCodeArt\Core\Scripts;
use WeCodeArt\Support\Styles;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Navigation block.
 */
class Navigation extends Dynamic {

	use Singleton;
	use Scripts\Base;

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
	protected $block_name = 'navigation';

	/**
	 * Shortcircuit Register
	 */
	public function register() {
		add_filter( 'block_type_metadata_settings', [ $this, 'filter_render' ], 10, 2 );
	}

	/**
	 * Filter navigation markup
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
	 * Dynamically renders the `core/navigation` block.
	 *
	 * @param 	array 	$attributes The block attributes.
	 * @param 	string 	$content 	The block content.
	 * @param 	array 	$block 		The block data.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( $attributes = [], $content = '', $block = null ) {
		if ( $color = get_prop( $attributes, 'rgbTextColor' ) ) {
			$attributes['customTextColor'] = $color;
		}
		
		if ( $color = get_prop( $attributes, 'rgbBackgroundColor' ) ) {
			$attributes['customBackgroundColor'] = $color;
		}

		unset( $attributes['rgbTextColor'], $attributes['rgbBackgroundColor'] );

		$inner_blocks = $block->inner_blocks;

		// If `__unstableLocation` is defined, create inner blocks from the classic menu assigned to that location.
		if ( empty( $inner_blocks ) && array_key_exists( '__unstableLocation', $attributes ) ) {
			$menu_items = $this->get_menu_items( $attributes['__unstableLocation'] );
			if ( empty( $menu_items ) ) {
				return '';
			}
	
			$sorted_items 	= $this->sort_menu( $menu_items );
			$parsed_blocks 	= $this->parse_menu( $sorted_items[0], $sorted_items );
			$inner_blocks 	= new \WP_Block_List( $parsed_blocks, $attributes );
		}

		if ( ! empty( $block->context['navigationArea'] ) ) {
			$area    = $block->context['navigationArea'];
			$mapping = get_option( 'wp_navigation_areas', [] );
			if ( ! empty( $mapping[ $area ] ) ) {
				$attributes['navigationMenuId'] = $mapping[ $area ];
			}
		}
	
		// Load inner blocks from the navigation post.
		if ( array_key_exists( 'navigationMenuId', $attributes ) ) {
			$navigation_post = get_post( $attributes['navigationMenuId'] );
			if ( ! isset( $navigation_post ) ) {
				return '';
			}
	
			$parsed_blocks = parse_blocks( $navigation_post->post_content );
	
			// 'parse_blocks' includes a null block with '\n\n' as the content when
			// it encounters whitespace. This code strips it.
			$compacted_blocks = array_filter( $parsed_blocks, function( $block ) {
				return isset( $block['blockName'] );
			} );
	
			// TODO - this uses the full navigation block attributes for the
			// context which could be refined.
			$inner_blocks = new \WP_Block_List( $compacted_blocks, $attributes );
		}
		
		if ( empty( $inner_blocks ) ) {
			return '';
		}

		$block_id	= uniqid();

		// Styles
		wp_enqueue_style( $this->make_handle(), $this->get_asset( 'css', 'blocks/navigation' ), [
			'wecodeart-core-scripts'
		], wecodeart( 'version' ) );

		return Markup::wrap( 'navbar', [ [
			'tag' 	=> 'nav',
			'attrs'	=> $this->get_wrapper_attributes( $attributes )
		] ], function( $attributes, $inner_blocks ) use ( $block_id ) {

			// Navbar List HTML
			$html = Markup::wrap( 'navbar-nav', [ [
				'tag' 	=> 'ul',
				'attrs' => [
					'class' => 'wp-block-navigation__container nav navbar-nav',
				]
			] ], function( $inner_blocks ) {
				foreach( $inner_blocks as $inner_block ) echo $this->render_menu_block( $inner_block );
			}, [ $inner_blocks ], false );

			// Is responsive? Render in offcanvas container
			if( get_prop( $attributes, 'overlayMenu' ) !== 'never' ) {

				// Scripts
				wp_enqueue_script( $this->make_handle(), $this->get_asset( 'js', 'blocks/navigation' ), [
					'wecodeart-core-scripts'
				], wecodeart( 'version' ), true );

				// Toggler
				wecodeart_template( 'general/toggler', [
					'id'		=> 'navbar-' . $block_id,
					'toggle' 	=> 'offcanvas',
				] );

				// OffCanvas
				wecodeart_template( 'general/offcanvas', [
					'id'		=> 'navbar-' . $block_id,
					'classes'	=> [ 'offcanvas-start' ],
					'content' 	=> $html,
				] );

				return;
			}

			// Is ok, we use the WP block rendering
			echo $html;

		}, [ $attributes, $inner_blocks ], false );
	}

	/**
	 * Renders menu item wrapper.
	 *
	 * @param 	object 	$block.
	 *
	 * @return 	string 	Rendered block with wrapper block
	 */
	public function render_menu_block( $block ) {
		$html = $block->render();
		
		// For this specific blocks, please wrap them in a <li> for valid markup
		if( in_array( get_prop( $block->parsed_block, 'blockName', '' ), [
			'core/search',
			'core/social-links',
			'core/site-title',
			'core/site-logo'
		] ) ) {
			$classes	= [ 'wp-block-navigation-link', 'nav-item' ];
			$classes[]  = 'nav-item--' . join( '-', explode( '/', get_prop( $block->parsed_block, 'blockName' ) ) );

			return Markup::wrap( 'nav-item', [ [
				'tag' 	=> 'li',
				'attrs'	=> [
					'class'	=> join( ' ', $classes ),
				]
			] ], $html, [], false );
		}

		return $html;
	}

	/**
	 * Returns the menu items for a WordPress menu location.
	 *
	 * @param 	string 	$location The menu location.
	 * @return 	array 	Menu items for the location.
	 */
	public function get_menu_items( $location ) {
		if ( empty( $location ) ) {
			return;
		}
		
		$locations = get_nav_menu_locations();
		if ( ! isset( $locations[ $location ] ) ) {
			return;
		}
		
		$menu = wp_get_nav_menu_object( $locations[ $location ] );
		if ( ! $menu || is_wp_error( $menu ) ) {
			return;
		}

		$menu_items = wp_get_nav_menu_items( $menu->term_id, [ 'update_post_term_cache' => false ] );

		_wp_menu_item_classes_by_context( $menu_items );

		return $menu_items;
	}

	/**
	 * Sorts a standard array of menu items into a nested structure keyed by the
	 * id of the parent menu.
	 *
	 * @param 	array 	$menu_items Menu items to sort.
	 * @return 	array 	An array keyed by the id of the parent menu where each element
	 *               	is an array of menu items that belong to that parent.
	 */
	public function sort_menu( $menu_items ) {
		$sorted_menu_items = [];
		foreach ( (array) $menu_items as $menu_item ) {
			$sorted_menu_items[ $menu_item->menu_order ] = $menu_item;
		}
		unset( $menu_items, $menu_item );

		$sorted = [];

		foreach ( $sorted_menu_items as $menu_item ) {
			$sorted[ $menu_item->menu_item_parent ][] = $menu_item;
		}

		return $sorted;
	}

	/**
	 * Turns menu item data into a nested array of parsed blocks
	 *
	 * @param 	array 	$menu_items
	 * @param 	array 	$parent
	 *
	 * @return 	array	An array of parsed block data.
	 */
	public function parse_menu( $menu_items, $parent, $top = true ) {
		if ( empty( $menu_items ) ) {
			return [];
		}

		$blocks = [];

		foreach ( $menu_items as $item ) {
			$block = [
				'blockName' => 'core/navigation-link',
				'attrs'     => [
					'id'			=> ( null !== $item->object_id && 'custom' !== $item->object ) ? $item->object_id : null,
					'url'   		=> $item->url,
					'label' 		=> $item->title,
					'title' 		=> $item->attr_title,
					'type'          => $item->object,
					'description'   => $item->description,
					'className' 	=> implode( ' ', (array) $item->classes ),
					'rel' 			=> ( null !== $item->xfn && '' !== $item->xfn ) ? $item->xfn : null,
					'kind' 			=> null !== $item->type ? str_replace( '_', '-', $item->type ) : 'custom',
					'opensInNewTab'	=> null !== $item->target && '_blank' === $item->target,
					'isTopLevelLink'=> $top,
				],
			];

			$block['innerBlocks'] = $this->parse_menu( isset( $parent[ $item->ID ] ) ? $parent[ $item->ID ] : [], $parent, false );

			$blocks[] = $block;
		}

		return $blocks;
	}

	/**
	 * Get Class Color.
	 *
	 * @param 	array 	$context	Block Context
	 * @param 	string 	$key		Attribute name
	 * 
	 * @return 	string 	HEX color code for pallete class
	 */
	public static function get_class_color( $context, $key = 'background' ) {
		$palette 	= wecodeart_json( [ 'settings', 'color', 'palette', 'core' ], [] );
		$palette 	= wecodeart_json( [ 'settings', 'color', 'palette', 'theme' ], $palette );
		$palette 	= wecodeart_json( [ 'settings', 'color', 'palette', 'user' ], $palette );
		
		$_keys 		= [
			'overlay-background' 	=> 'overlayBackgroundColor',
			'overlay-text' 			=> 'overlayTextColor',
			'custom-background'		=> 'customBackgroundColor',
			'background' 			=> 'backgroundColor',
			'text'		 			=> 'textColor',
		];

		// Real attribute name
		$attribute 	= isset( $_keys[$key] ) ? $_keys[$key] : $key;

		// Get custom
		$color 		= get_prop( $context, [ 'style', 'color', $attribute ] );
		
		// If not custom, get named
		if( $color === null ) {
			$color = get_prop( $context, $attribute, $color );
			$color = get_prop( current( wp_list_filter( $palette, [ 'slug' => $color ] ) ), 'color', false );
		}

		// If named not found, fallback to body
		if( $color === false ) {
			$styles 	= wecodeart_json( [ 'styles', 'color', $key ], '' );
			if( strpos( $styles, '#' ) === 0 ) {
				$color = $styles;
			} else {
				if( mb_strpos( $styles, '|' ) !== false ) {
					$slug = explode( '|', $styles );
					$slug = end( $slug );
				} elseif( mb_strpos( $styles, '--' ) !== false ) {
					$slug = explode( '--', $styles );
					$slug = str_replace( ')', '', end( $slug ) );
				}
				$color	= get_prop( current( wp_list_filter( $palette, [
					'slug' => $slug,
				] ) ), 'color', '#ffffff' );
			}
		}

		return $color;
	}

	/**
	 * Build an array with CSS classes and inline styles defining the colors
	 * which will be applied to the navigation markup in the front-end.
	 *
	 * @param  array $attributes 	Navigation block context.
	 * @return array  	 			CSS classes and inline styles.
	 */
	public function get_colors( $attributes ) {
		$colors = [
			'classes'   => [],
			'styles' 	=> '',
		];
	
		// Text color.
		$has_named_text_color  = get_prop( $attributes, 'textColor', false );
		$has_custom_text_color = get_prop( $attributes, 'customTextColor', false );

		// Overlays - added via CSS because of extra specificity
		
		// Background color.
		$has_named_background_color  = get_prop( $attributes, 'backgroundColor', false );
		$has_custom_background_color = get_prop( $attributes, 'customBackgroundColor', false );
	
		// If has text color.
		if ( $has_custom_text_color || $has_named_text_color ) {
			// Add has-text-color class.
			$colors['classes'][] = 'has-text-color';
		}
	
		if ( $has_named_text_color ) {
			// Add the color class.
			$colors['classes'][] = sprintf( 'has-%s-color', $has_named_text_color );
		} elseif ( $has_custom_text_color ) {
			// Add the custom color inline style.
			$colors['styles'] .= sprintf( 'color: %s;', $has_custom_text_color );
			$colors['styles'] .= sprintf( '--wp--custom--color: %s;', $has_custom_text_color );
		}
	
		// If has background color.
		if ( $has_custom_background_color || $has_named_background_color ) {
			// Add has-background class.
			$colors['classes'][] = 'has-background';
		}
	
		if ( $has_named_background_color ) {
			// Add the background-color class.
			$colors['classes'][] = sprintf( 'has-%s-background-color', $has_named_background_color );
		} elseif ( $has_custom_background_color ) {
			// Add the custom background-color inline style.
			$colors['styles'] .= sprintf( 'background-color: %s;', $has_custom_background_color );
			$colors['styles'] .= sprintf( '--wp--custom--background-color: %s;', $has_custom_background_color );
		}
	
		return $colors;
	}

	/**
	 * Build an array with CSS classes and inline styles defining the font sizes
	 * which will be applied to the navigation markup in the front-end.
	 *
	 * @param  array $attributes 	Navigation block context.
	 * @return array 				Font size CSS classes and inline styles.
	 */
	public function get_typography( $attributes ) {
		// CSS classes.
		$typography = [
			'classes'   => [],
			'styles' 	=> '',
		];

		if ( $value = get_prop( $attributes, 'fontSize' ) ) {
			// Add the font size class.
			$typography['classes'][] = sprintf( 'has-%s-font-size', $value );
		} elseif ( $value = get_prop( $attributes, 'customFontSize' ) ) {
			// Add the custom font size inline style.
			$typography['styles'] = sprintf( 'font-size: %spx;--wp--custom--font-size: %spx;', $value, $value );
		}

		return $typography;
	}

	/**
	 * Return an array of wrapper attributes.
	 * 
	 * @return 	array
	 */
	public function get_wrapper_attributes( $attributes ) {
		$colors     = $this->get_colors( $attributes );
		$typography = $this->get_typography( $attributes );
		$background = get_prop( $attributes, 'customBackgroundColor', self::get_class_color( $attributes ) );

		$classes 	= [ 'wp-block-navigation', 'navbar' ];
		$classes[] 	= ( Styles::color_lightness( $background ) < 380 ) ? 'navbar-dark' : 'navbar-light';

		if( get_prop( $attributes, 'orientation', false ) === 'horizontal' ) {
			$classes[] = 'navbar-expand';
		}

		if( $value = get_prop( $attributes, 'overlayMenu' ) ) {
			if( $value !== 'never' ) {
				$classes 	= array_diff( $classes, [ 'navbar-expand' ] );
				if( $value === 'mobile' ) {
					$classes[] 	= $this->get_mobile_breakpoint();
				}
			}
		}
		
		if( get_prop( $attributes, 'openSubmenusOnClick', false ) === false ) {
			$classes[] 	= 'with-hover';
		}

		if( get_prop( $attributes, 'showSubmenuIcon', false ) === false ) {
			$classes[] 	= 'hide-toggle';
		}

		// Deprecated - uses flex layout support
		if( $align = get_prop( $attributes, 'itemsJustification' ) ) {
			$justify_options = [
				'left'          => 'start',
				'right'         => 'end',
				'center'        => 'center',
				'space-between' => 'space-between',
			];

			if ( array_key_exists( $align, $justify_options ) ) {
				$classes[] = 'justify-content-' . $justify_options[$align];
			}
		}
		// End deprecated

		$classes    	= array_merge( $classes, $colors['classes'], $typography['classes'] );
		$block_styles 	= get_prop( $attributes, 'styles', '' );

		return [
			'class'	=> join( ' ', array_filter( $classes ) ),
			'style'	=> $block_styles . $colors['styles'] . $typography['styles'],
		];
	}

	/**
	 * Return filter mobile breakpoint class.
	 * 
	 * @return 	array
	 */
	public function get_mobile_breakpoint() {
		return sanitize_html_class( 'navbar-expand-' . wecodeart_json( [ 'settings', 'custom', 'mobileBreakpoint' ], 'lg' ) );
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		$breaks 	= wecodeart_json( [ 'settings', 'custom', 'breakpoints' ], [] );
		$filter		= explode( '-', $this->get_mobile_breakpoint() );
		$breakpoint	= get_prop( $breaks, end( $filter ), '992px' );

		return "
		:is(.site-header,.offcanvas) .wp-block-navigation {
			padding-top: 0;
			padding-bottom: 0;
		}
		.wp-block-navigation.has-text-color .nav-link {
			color: inherit;
		}
		.wp-block-navigation.hide-toggle .dropdown-toggle::after {
			content: none;
		}
		.wp-block-navigation.with-hover .dropdown:where(:hover,:focus,:focus-within) > .dropdown-toggle ~ .dropdown-menu {
			display: block;
			visibility: visible;
			opacity: 1;
		}
		.wp-block-navigation[class*='navbar-expand-'] .offcanvas:not([aria-modal='true']) {
			width: initial;
		}
		.wp-block-navigation.navbar-dark .btn-close {
			background-color: var(--wp--white);
		}
		.wp-block-navigation .offcanvas-start .btn-close {
			margin-left: auto;
		}
		.wp-block-navigation :where(.offcanvas,.offcanvas-body) {
			justify-content: inherit;
			background-color: inherit;
		}
		.wp-block-navigation :where(.nav-link,.dropdown-item) {
			display: flex;
			align-items: center;
		}
		.wp-block-navigation-link__icon {
			margin-right: .5rem;
		}
		.wp-block-navigation-link__label {
			flex: 1 1 auto;
			word-break: normal;
			overflow-wrap: break-word;
		}
		.wp-block-navigation .dropdown-menu[data-bs-popper] {
			margin-top: 0;
		}
		.wp-block-navigation .dropdown-menu .dropdown-menu {
			top: 0;
			left: 100%;
		}
		@media (min-width: $breakpoint) {
			.wp-block-navigation .dropdown-menu .dropdown-toggle::after {
				border-top: 0.3em solid transparent;
				border-right: 0;
				border-bottom: 0.3em solid transparent;
				border-left: 0.3em solid;
			}
		}
		";
	}
}
