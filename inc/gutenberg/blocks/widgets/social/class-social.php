<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg\Blocks
 * @copyright   Copyright (c) 2025, WeCodeArt Framework
 * @since		5.0.0
 * @version		6.4.8
 */

namespace WeCodeArt\Gutenberg\Blocks\Widgets;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Social block.
 */
class Social extends Dynamic {

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
	protected $block_name = 'social-links';

	/**
	 * Init.
	 */
	public function init() {
		\add_filter( 'render_block_' . $this->get_block_type(), [ $this, 'render' ], 20, 2 );
	}

	/**
	 * Block args.
	 *
	 * @param	array $current	Existing register args
	 *
	 * @return 	array
	 */
	public function block_type_args( $current ): array {
		$attributes	= get_prop( $current, [ 'attributes' ], [] );
		$context	= get_prop( $current, [ 'provides_context' ], [] );
		$supports	= get_prop( $current, [ 'supports' ], [] );

		return [
			'attributes' 		=> wp_parse_args( [
				'namespace'		=> [
					'type'		=> 'string',
				],
			], $attributes ),
			'provides_context' 	=> wp_parse_args( [
				'namespace'		=> 'namespace',
			], $context ),
			'supports' 			=> wp_parse_args( [
				'typography'	=> [
					'__experimentalSelector' 		=> '.wp-block-social-link-label',
					'fontSize' 						=> true,
					'lineHeight' 					=> true,
					'__experimentalFontFamily' 		=> true,
					'__experimentalTextDecoration' 	=> true,
					'__experimentalFontStyle' 		=> true,
					'__experimentalFontWeight' 		=> true,
					'__experimentalLetterSpacing' 	=> true,
					'__experimentalTextTransform' 	=> true,
					'__experimentalWritingMode'		=> true,
					'__experimentalDefaultControls' => [
						'fontSize' => true,
					],
				],
			], $supports ),
			'variation_callback' => fn() => [
				[
					'name'        => 'core/social-links',
					'title'       => esc_html__( 'Social Icons', 'wecodeart' ),
					'description' => esc_html__( 'Display icons linking to your social media profiles or sites.', 'wecodeart' ),
					'attributes'  => [
						'namespace' 	=> '',
						'openInNewTab'	=> true
					],
					'isActive'    => [ 'namespace' ],
					'innerBlocks' => [
						[ 'core/social-link', [ 'service' => 'facebook', 	'url' => '#' ] ],
						[ 'core/social-link', [ 'service' => 'x', 			'url' => '#' ] ],
					],
					'scope'       => [ 'block', 'transform' ],
					'icon'        => null,
				],
				[
					'name'        => 'wecodeart/social-links/sharing',
					'title'       => esc_html__( 'Social Icons: Sharing', 'wecodeart' ),
					'description' => esc_html__( 'Display icons for sharing the current page on social media sites.', 'wecodeart' ),
					'attributes'  => [
						'namespace' 	=> 'wecodeart/social-links/sharing',
						'openInNewTab'	=> true
					],
					'isActive'    => [ 'namespace' ],
					'innerBlocks' => [
						[ 'core/social-link', [ 'service' => 'facebook', 	'url' => '#' ] ],
						[ 'core/social-link', [ 'service' => 'x', 			'url' => '#' ] ],
					],
					'scope'       => [ 'block', 'inserter', 'transform' ],
					'icon'        => null,
				]
			],
		];
	}

	/**
	 * Dynamically renders the `core/social-links` block.
	 *
	 * @param 	string 	$content 	The block markup.
	 * @param 	array 	$block 		The parsed block.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( string $content = '', array $block = [] ) {
		$attributes = get_prop( $block, 'attrs', [] );
		$services 	= wp_list_pluck( wp_list_pluck( get_prop( $block, 'innerBlocks', [] ), 'attrs' ), 'service' );
		
		if( ! empty( $services ) ) {
			$inline_css = '';
			
			$classnames = explode( ' ', get_prop( $attributes, 'className', '' ) );
			$classnames = array_filter( $classnames, function( $val ) {
				return strpos( $val, 'is-style-' ) === 0;
			} ) ?: [ '' ];

			static $loaded_styles = [];

			foreach( $services as $service ) {
				$classname = current( $classnames );

				if( array_key_exists( $classname, $loaded_styles ) && in_array( $service, $loaded_styles[$classname] ) ) continue;

				$inline_css .= $this->get_inline_style( $classname, $service );
				
				$loaded_styles[$classname][] = $service;
			}

			\wp_add_inline_style( $this->get_asset_handle(), $inline_css );
		}

		if ( self::is_sharing_variation( $block ) ) {
			$content 	= wecodeart( 'dom' )::processor( $content );
			
			if( $content->next_tag() ) {
				$content->add_class( 'wp-block-social-links--sharing' );
			}
			
			$content = $content->get_updated_html();
		}

		return $content;
	}

	/**
	 * Determines whether the block is a social sharing block.
	 *
	 * @param 	array 	$block/attributes
	 *
	 * @return 	bool 	Whether the block is a social sharing block.
	 */
	public static function is_sharing_variation( array $block = [] ): bool {
		if ( get_prop( $block, [ 'namespace' ], get_prop( $block, [ 'attrs', 'namespace' ], '' ) ) === 'wecodeart/social-links/sharing' ) {
			return true;
		}

		return false;
	}

	/**
	 * Get Styles
	 *
	 * @param 	string  $style		CSS classname
	 * @param 	string  $service 	Social Service name
	 *
	 * @return 	string 	Sanitized/Compressed CSS
	 */
	public function get_inline_style( string $style = 'default', string $service = '' ) {
		$inline_css = '';

		if( empty( $service ) ) {
			return $inline_css;
		}

		$colors = [
			'link'		=> '', // Preserve link color
			'mail'		=> '#f0f0f0',
			'amazon' 	=> '#ff9900',
			'bandcamp' 	=> '#1ea0c3',
			'behance' 	=> '#0757fe',
			'codepen' 	=> '#1e1f26',
			'chain' 	=> '#1e1f26',
			'deviantart'=> '#02e49b',
			'dribbble' 	=> '#e94c89',
			'dropbox' 	=> '#4280ff',
			'etsy' 		=> '#f45800',
			'facebook' 	=> '#1977f2',
			'feed' 		=> '#1977f2',
			'fivehundredpx'	=> '#000',
			'flickr' 	=> '#0461dd',
			'foursquare'=> '#e65678',
			'github' 	=> '#24292d',
			'goodreads'	=> '#eceadd',
			'google' 	=> '#ea4434',
			'instagram'	=> '#f00075',
			'lastfm' 	=> '#e21b24',
			'linkedin' 	=> '#0577b5',
			'mastodon' 	=> '#3288d4',
			'meetup' 	=> '#02ab6c',
			'medium' 	=> '#f6405f',
			'patreon'	=> '#ff424d',
			'pinterest'	=> '#e60122',
			'pocket' 	=> '#ef4155',
			'reddit' 	=> '#fe4500',
			'skype' 	=> '#0478d7',
			'snapchat' 	=> '#fefc00',
			'soundcloud'=> '#ff5600',
			'spotify' 	=> '#1bd760',
			'tumblr' 	=> '#011835',
			'telegram'	=> '#3390ec',
			'tiktok'	=> '#000000',
			'threads'	=> '#000000',
			'twitch' 	=> '#6440a4',
			'twitter' 	=> '#21a1f3',
			'x' 		=> '#000000',
			'vk' 		=> '#4680c2',
			'vimeo' 	=> '#1eb7ea',
			'wordpress'	=> '#3499cd',
			'whatsapp'	=> '#25d366',
			'yelp' 		=> '#d32422',
			'youtube'	=> '#ff0100',
		];

		$selector 	= '.wp-block-social-links .wp-block-social-link-anchor';
		$properties = [
			'color' => isset( $colors[$service] ) ? $colors[$service] : 'inherit'
		];

		// Logos only
		if( $style === 'is-style-logos-only' ) {
			$selector = '.wp-block-social-links.is-style-logos-only .wp-social-link-' . $service;
			$properties = [
				'color'	=> $colors[$service]
			];

			if( $service === 'goodreads' ) {
				$properties = wp_parse_args( [
					'color' => '#382110'
				], $properties );
			}

			if( $service === 'snapchat' ) {
				$properties = wp_parse_args( [
					'color' 	=> 'white',
				], $properties );
			}
			
			if( $service === 'yelp' ) {
				$properties = wp_parse_args( [
					'background-color' => $colors[$service],
					'color' => 'white',
				], $properties );
			}

			if( $service === 'mail' ) {
				$properties = wp_parse_args( [
					'color' => '#212121'
				], $properties );
			}
		// Default style
		} else {
			$selector = '.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-' . $service;
			$properties = [
				'background-color' => $colors[$service],
				'color'	=> '#fff'
			];

			if( $service === 'goodreads' ) {
				$properties = wp_parse_args( [
					'color' => '#382110'
				], $properties );
			}
			
			if( $service === 'mail' ) {
				$properties = wp_parse_args( [
					'color' => '#212121'
				], $properties );
			}
		}
		
		// Snapchat has 2 pair ping-pong balls :D
		if( $service === 'snapchat' ) {
			$properties = wp_parse_args( [
				'stroke' => '#000'
			], $properties );
		}

		$css_array = [];
		$css_array['global'][$selector] = $properties;

		$inline_css = wecodeart( 'styles' )::parse( $css_array, 'wp-block-social-link-' . $service );
		$inline_css = wecodeart( 'styles' )::compress( $inline_css );

		return $inline_css;
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return <<<CSS
			.wp-block-social-links {
				padding-left: 0;
				padding-right: 0;
				text-indent: 0;
				margin-left: 0;
				background: none;
			}
			.wp-block-social-links.aligncenter {
				display: flex;
				justify-content: center;
			}
			.wp-block-social-links.has-visible-labels .wp-block-social-link-anchor {
				padding: .5em 1em;
				flex-direction: row;
			}
			.wp-block-social-links.has-visible-labels svg {
				margin-right: .5em;
			}
			.wp-block-social-links.is-style-pill-shape .wp-block-social-link {
				width: auto;
			}
			.wp-block-social-links.is-style-pill-shape .wp-block-social-link-anchor {
				padding-left: calc((2.5/3) * 1em);
				padding-right: calc((2.5/3) * 1em);
			}
			.wp-block-social-links.is-style-square-shape .wp-block-social-link {
				border-radius: 0;
			}
			.wp-block-social-links.is-style-logos-only .wp-block-social-link {
				background: none;
			}
			.wp-block-social-links.is-style-logos-only .wp-block-social-link-anchor {
				padding: 0;
			}
			.wp-block-social-link {
				display: block;
				background-color: transparent;
				border-radius: 9999px;
			}
			.wp-block-social-link .wp-block-social-link-anchor {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				text-align: center;
				transition: all 0.1s ease;
				padding: 0.35em;
				line-height: 1;
				text-decoration: none;
				color: inherit;
				border: none;
				border-radius: inherit;
				box-shadow: none;
			}
			.wp-block-social-link .wp-block-social-link-anchor:is(:hover,:active,:visited) {
				color: inherit;
			}
			.wp-block-social-link .wp-block-social-link-anchor svg {
				width: 1em;
				height: 1em;
			}
			.is-style-logos-only .wp-block-social-link .wp-block-social-link-anchor svg {
				width: 1.25em;
				height: 1.25em;
			}
			.wp-social-link.wp-social-link__is-incomplete {
				opacity: 1;
			}
		CSS;
	}
}
