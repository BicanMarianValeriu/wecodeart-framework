<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage  DOM\SVG
 * @copyright   Copyright (c) 2025, WeCodeArt Framework
 * @since		3.5
 * @version		6.4.1
 */

namespace WeCodeArt\Support\DOM;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Config\Traits\Singleton;
use WeCodeArt\Config\Interfaces\Configuration;

/**
 * SVG Rendering
 */
class SVG implements Configuration {

	use Singleton;

	/**
	 * Default icons – svg sources.
	 *
	 * @var array
	 */
	protected $items = [
		'user' => [
			'viewBox' 	=> '0 0 448 512',
			'paths'  	=> [
				[
					'M352 128A128 128 0 1 1 224 0a128 128 0 0 1 128 128z',
					'fa-secondary',
				],
				[
					'M313.6 288h-16.7a174.1 174.1 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48v-41.6A134.43 134.43 0 0 0 313.6 288z',
					'fa-primary',
				]
			]
		],
		'clock' => [
			'viewBox' 	=> '0 0 512 512',
			'paths'  	=> [
				[
					'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm102.1 308.7l-28.2 38.8a12.08 12.08 0 0 1-16.8 2.6L224.9 294a12.08 12.08 0 0 1-4.9-9.7V116a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v137.7l63.5 46.2a12 12 0 0 1 2.6 16.8z',
					'fa-secondary',
				],
				[
					'M220 116a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v137.7l63.5 46.2a12 12 0 0 1 2.6 16.8l-28.2 38.8a12.08 12.08 0 0 1-16.8 2.6L224.9 294a12.08 12.08 0 0 1-4.9-9.7z',
					'fa-primary',
				]
			]		
		],
		'tags' => [
			'viewBox' 	=> '0 0 640 512',
			'paths'  	=> [
				[
					'M497.94 225.94L286.06 14.06A48 48 0 0 0 252.12 0H48A48 48 0 0 0 0 48v204.12a48 48 0 0 0 14.06 33.94l211.88 211.88a48 48 0 0 0 67.88 0l204.12-204.12a48 48 0 0 0 0-67.88zM112 160a48 48 0 1 1 48-48 48 48 0 0 1-48 48z',
					'fa-secondary',
				],
				[
					'M625.94 293.82L421.82 497.94a48 48 0 0 1-67.88 0l-.36-.36 174.06-174.06a90 90 0 0 0 0-127.28L331.4 0h48.72a48 48 0 0 1 33.94 14.06l211.88 211.88a48 48 0 0 1 0 67.88z',
					'fa-primary',
				],
			]			
		],
		'folder' => [
			'viewBox' 	=> '0 0 512 512',
			'paths'		=> [
				[
					'M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z',
					'fa-secondary'
				]
			]
		],
		'folders' => [
			'viewBox' 	=> '0 0 640 512',
			'paths'		=> [
				[
					'M 640 112 v 224 a 48 48 0 0 1 -48 48 H 176 a 48 48 0 0 1 -48 -48 V 48 a 48 48 0 0 1 48 -48 h 160 l 64 64 h 192 a 48 48 0 0 1 48 48 Z',
					'fa-secondary'
				],
				[
					'M 48 512 a 48 48 0 0 1 -48 -48 V 176 a 48 48 0 0 1 48 -48 h 48 v 208 a 80.09 80.09 0 0 0 80 80 h 336 v 48 a 48 48 0 0 1 -48 48 Z',
					'fa-primary'
				]
			]
		],
		'search' => [
			'viewBox' 	=> '0 0 512 512',
			'paths' 	=> 'M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z'
		],
		'globe' => [
			'viewBox' 	=> '0 0 512 512',
			'paths' 	=> 'M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm193.2 152h-82.5c-9-44.4-24.1-82.2-43.2-109.1 55 18.2 100.2 57.9 125.7 109.1zM336 256c0 22.9-1.6 44.2-4.3 64H164.3c-2.7-19.8-4.3-41.1-4.3-64s1.6-44.2 4.3-64h167.4c2.7 19.8 4.3 41.1 4.3 64zM248 40c26.9 0 61.4 44.1 78.1 120H169.9C186.6 84.1 221.1 40 248 40zm-67.5 10.9c-19 26.8-34.2 64.6-43.2 109.1H54.8c25.5-51.2 70.7-90.9 125.7-109.1zM32 256c0-22.3 3.4-43.8 9.7-64h90.5c-2.6 20.5-4.2 41.8-4.2 64s1.5 43.5 4.2 64H41.7c-6.3-20.2-9.7-41.7-9.7-64zm22.8 96h82.5c9 44.4 24.1 82.2 43.2 109.1-55-18.2-100.2-57.9-125.7-109.1zM248 472c-26.9 0-61.4-44.1-78.1-120h156.2c-16.7 75.9-51.2 120-78.1 120zm67.5-10.9c19-26.8 34.2-64.6 43.2-109.1h82.5c-25.5 51.2-70.7 90.9-125.7 109.1zM363.8 320c2.6-20.5 4.2-41.8 4.2-64s-1.5-43.5-4.2-64h90.5c6.3 20.2 9.7 41.7 9.7 64s-3.4 43.8-9.7 64h-90.5z'
		],
		'bars' => [
			'viewBox'	=> '0 0 512 512',
			'paths' 	=> 'M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z'
		],
		'comments' => [
			'viewBox' 	=> '0 0 576 512',
			'paths' 	=> [
				[
					'M208 352c-41 0-79.1-9.3-111.3-25-21.8 12.7-52.1 25-88.7 25a7.83 7.83 0 0 1-7.3-4.8 8 8 0 0 1 1.5-8.7c.3-.3 22.4-24.3 35.8-54.5-23.9-26.1-38-57.7-38-92C0 103.6 93.1 32 208 32s208 71.6 208 160-93.1 160-208 160z',
					'fa-secondary'
				],
				[
					'M576 320c0 34.3-14.1 66-38 92 13.4 30.3 35.5 54.2 35.8 54.5a8 8 0 0 1 1.5 8.7 7.88 7.88 0 0 1-7.3 4.8c-36.6 0-66.9-12.3-88.7-25-32.2 15.8-70.3 25-111.3 25-86.2 0-160.2-40.4-191.7-97.9A299.82 299.82 0 0 0 208 384c132.3 0 240-86.1 240-192a148.61 148.61 0 0 0-1.3-20.1C522.5 195.8 576 253.1 576 320z',
					'fa-primary'
				]
			]
		],
		'comment-dots' => [
			'viewBox'	=> '0 0 576 512',
			'paths'		=> [
				[
					'M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5a8 8 0 0 0-1.5 8.7A7.83 7.83 0 0 0 8 480c66.3 0 116-31.8 140.6-51.4A305 305 0 0 0 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm128 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm128 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32z',
					'fa-secondary'
				],
				[
					'M128 208a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm128 0a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm128 0a32 32 0 1 0 32 32 32 32 0 0 0-32-32z',
					'fa-primary'
				]
			]
		]
	];

	/**
	 * Adds a icon to the store.
	 *
	 * @param 	string 	$key 	Icon key
	 * @param	array	$data	Icon data
	 *
	 * @return 	void
	 */
	public static function add( string $key, array $data ) {
		$storage = SVG::get_instance();

		if( $storage->has( $key ) ) {
			return;
		}

		if( isset( $data['viewBox'] ) && isset( $data['paths'] ) ) {
			return $storage->set( $key, $data );
		}
		
		return _doing_it_wrong(
			__CLASS__, 
			sprintf( 
				esc_html__( 
					'When adding an SVG Icon with %s you must define `viewBox` and `paths` keys.', 
					'wecodeart'
				),
				__FUNCTION__
			),
			'3.9.4'
		);
	}

	/**
	 * Adds a icon to the store.
	 *
	 * @param 	string 	$key 	Icon key
	 * @param	array	$data	Icon data
	 *
	 * @return 	void
	 */
	public static function add_icon( string $key, array $data ) {
		return self::add( $key, $data );
	}

	/**
	 * Render an SVG Icon
	 *
	 * @param	string	$icon
	 * @param 	string 	$args
	 * @param 	array 	$fallback
	 *
	 * @param 	string
	 */
	public static function render( string $icon, $args = [], $fallback = '' ) {
		echo self::compile( $icon, $args, $fallback ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	/**
	 * Compile an SVG Icon from sprite
	 *
	 * @param	string	$icon - icon name
	 * @param 	array 	$args - arguments
	 * @param 	string	$fallback - fallback
	 *
	 * @return	string
	 */
	public static function compile( string $icon, $args = [], $fallback = '' ) {
		// Set defaults.
		$defaults = [
			'title'	=> '',
			'desc'	=> '',
			'class'	=> '',
		];
	
		// Parse args.
		$args = wp_parse_args( $args, $defaults );

		$icons = SVG::get_instance()->all();

		if ( array_key_exists( $icon, $icons ) ) {

			$icon_data = $icons[$icon];

			// Generate Attrs
			$attrs = [
				'class' 		=> 'svg-inline svg-inline--' .  $icon . '',
				'aria-hidden' 	=> 'true',
				'role' 			=> 'img',
				'focusable'		=> 'false',
				'xmlns'			=> 'http://www.w3.org/2000/svg',
				'viewBox'		=> $icon_data['viewBox']
			];

			if( $args['title'] ) {
				unset( $attrs['aria-hidden'] );

				$unique_id = uniqid();
				$attrs['aria-labelledby'] = 'title-' . $unique_id . '';

				if ( $args['desc'] ) {
					$attrs['aria-labelledby'] = 'title-' . $unique_id . ' desc-' . $unique_id . '';
				}
			}

			if( $args['class'] ) {
				$attrs['class'] .= ' ' . $args['class'];
			}

			$attributes = wecodeart( 'dom' )::generate_attr( $icon, $attrs );

			// Begin SVG markup.
			$svg = '<svg ' . $attributes . '>';

			// Display the title.
			if ( $args['title'] ) {
				$svg .= '<title id="title-' . $unique_id . '">' . esc_html( $args['title'] ) . '</title>';
				// Display the desc only if the title is already set.
				if ( $args['desc'] ) $svg .= '<desc id="desc-' . $unique_id . '">' . esc_html( $args['desc'] ) . '</desc>';
			}

			$svg .= self::generate_paths( $icon_data['paths'] );

			// Add some markup to use as a fallback for browsers that do not support SVGs.
			if( $fallback ) {
				$svg .= '<span class="svg__fallback icon-' . esc_attr( $fallback ) . '"></span>';
			}

			$svg .= '</svg>';
	
			$svg  = preg_replace( "/([\n\t]+)/", ' ', $svg ); 	// Remove newlines & tabs.
			$svg  = preg_replace( '/>\s*</', '><', $svg ); 		// Remove white space between SVG tags.
	
			return self::sanitize( $svg );
		}

		return null;
	}

	/**
	 * Render Paths SVG Icon
	 *
	 * @param	string	icon Icon Data
	 *
	 * @return	string
	 */
	public static function generate_paths( $icon ) {
		if( is_string( $icon ) ) {
			$icon = [ $icon ];
		}

		$string = '';
		
		$string = implode( '', array_map( function( $item ) {
			if( is_array( $item ) ) {
				return '<path d="' . esc_attr( $item[0] ) . '" class="' . esc_attr( $item[1] ) . '"></path>';
			}

			return '<path fill="currentColor" d="' . esc_attr( $item ) . '"></path>';

		}, (array) $icon ) );

		if( count( $icon ) > 1 ) {
			$string = '<g>'. $string . '</g>';
		}

		return $string;
	}

	/**
	 * Kses SVG
	 *
	 * @param 	string 	$data
	 *
	 * @return 	string
	 */
	public static function sanitize( string $data ) {
		return wp_kses( $data, [ 
			'svg' => [
				'class'  		=> true,
				'aria-hidden'  	=> true,
				'role' 			=> true,
				'focusable'    	=> true,
				'xmlns'    		=> true,
				'viewbox' 		=> true,
			],
			'g' 	=> [],
			'path' 	=> [
				'd' 	=> true,
				'class' => true,
				'fill'	=> true
			]
		] );
	}

	/**
     * Set a given configuration value.
     *
     * @param  array|string  $key
     * @param  mixed   $value
     *
     * @return void
     */
    public function set( $key, $value = null ) {
        $keys = is_array( $key ) ? $key : [ $key => $value ];

        foreach ( $keys as $key => $value ) {
            $this->items[$key] = $value;
        }
    }

	/**
     * Determine if the given configuration value exists.
     *
     * @param  string  $key
     *
     * @return bool
     */
    public function has( $key ) {
        return isset( $this->items[$key] );
    }

    /**
     * Get the specified configuration value.
     *
     * @param  string  $key
     * @param  mixed   $default
     *
     * @return mixed
     */
    public function get( $key, $default = null ) {
        if ( ! isset( $this->items[$key] ) ) {
            return $default;
        }

        return $this->items[$key];
	}

    /**
     * Forget a given configuration value.
     *
     * @param string  $key
     *
     * @return void
     */
    public function forget( $key ) {
        unset( $this->items[$key] );
    }

    /**
     * Get all of the configuration items for the application.
     *
     * @return array
     */
    public function all() {
        return $this->items;
    }
}