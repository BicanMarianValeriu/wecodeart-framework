<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg CSS Module
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since		4.0.3
 * @version		5.0.0
 */

namespace WeCodeArt\Gutenberg\Modules;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg;
use WeCodeArt\Integration;
use WeCodeArt\Core\Scripts;
use function WeCodeArt\Functions\get_prop;

/**
 * Handles Gutenberg Theme CSS Functionality.
 */
class Styles implements Integration {

	use Singleton;
	use Scripts\Base;

	/**
	 * The Styles Processor
	 *
	 * @access 	public
	 * @var 	null|object
	 */
	public $CSS		= null;

	/**
	 * The blocks styles
	 *
	 * @access 	public
	 * @var 	string
	 */
	public $styles		= '';

	/**
	 * The blocks duotone
	 *
	 * @access 	public
	 * @var 	string
	 */
	public $filters		= [];

	/**
	 * Current processed blocks
	 *
	 * @access 	public
	 * @var 	string
	 */
	public static $processed = [];

	/**
	 * Get Conditionals
	 *
	 * @return void
	 */
	public static function get_conditionals() {
		wecodeart( 'conditionals' )->set( [
			'with_blocks_styles' => Styles\Condition::class,
		] );

		return [ 'with_blocks_styles' ];
	}

	/**
	 * Register Hooks - into styles processor action if enabled
	 *
	 * @since 	5.0.0
	 *
	 * @return 	void
	 */
	public function register_hooks() {
		$this->CSS = wecodeart( 'integrations' )->get( 'styles' );

		// Hooks
		add_action( 'enqueue_block_editor_assets',	[ $this, 'block_editor_assets' 	], 0 );
		add_filter( 'render_block',					[ $this, 'filter_render' 		], 10, 2 );
		add_action( 'wp_footer',					[ $this, 'output_styles'		], 10, 1 );

		// Remove WP/GB plugins hooks - we dont need this anymore!
		remove_filter( 'render_block', 'wp_render_layout_support_flag', 10, 2 );
		remove_filter( 'render_block', 'wp_render_elements_support', 	10, 2 );
		remove_filter( 'render_block', 'wp_render_duotone_support',		10, 2 );
		remove_filter( 'render_block', 'gutenberg_render_layout_support_flag', 	10, 2 );
		remove_filter( 'render_block', 'gutenberg_render_elements_support', 	10, 2 );
		remove_filter( 'render_block', 'gutenberg_render_duotone_support', 		10, 2 );
	}

	/**
	 * Editor only.
	 *
	 * @return  void
	 */
	public function block_editor_assets() {
		wp_enqueue_script( $this->make_handle(), $this->get_asset( 'js', 'gutenberg-styles' ), [
			'wecodeart-gutenberg-inline'
		], wecodeart( 'version' ) );
	}

	/**
	 * Filter render_block
	 *
	 * @param	string 	$block_content
	 * @param	array 	$block
	 *
	 * @return 	string 	HTML
	 */
	public function filter_render( $content, $block ) {
		$block_id = get_prop( $block['attrs'], 'customCSSId', false );

		if( in_array( $block_id, self::$processed ) || $block_id === false ) return $content;

		// Remove styles, where needed
		if ( in_array( $block['blockName'], (array) apply_filters( 'wecodeart/filter/gutenberg/styles/remove', [
			'core/list',
			'core/group',
			'core/cover',
			'core/table',
			'core/verse',
			'core/quote',
			'core/spacer',
			'core/image',
			'core/pullquote',
			'core/media-text',
			'core/social-links',
			'core/social-link',
		], true ) ) ) {
			$content 	= preg_replace( '/(<[^>]+) style="([^"]*)"/i', '$1', $content, 1 );
		}

		// Add necessary class
		$cssid		= substr( $block_id, 0, 8 );
		$content	= preg_replace( '/' . preg_quote( 'class="', '/' ) . '/', 'class="css-' . $cssid . ' ', $content, 1 );

		// Process a block
		$processed 	= self::process_block( $block );
		$styles 	= $processed->get_styles();
		$filters	= $processed->get_duotone();

		// Process CSS, add prefixes and convert to string!
		$this->styles .= $this->CSS::parse( $this->CSS::add_prefixes( $styles ) );

		// Process Duotone SVG filters
		if( $filters ) {
			$this->filters[$cssid] = $filters;
		}

		// This is processed so next time we skipp it (avoid issues like multiple calls of this filter, if any)
		self::$processed[] = $block_id;

		return $content;
	}

	/**
	 * Output styles in footer.
	 *
	 * @return 	string
	 */
	public function output_styles() {
		if( ! empty( $this->styles ) ) {
			$inline_css = $this->CSS::compress( $this->styles );
			// Escaping is not really necessary since CSS processor does that already!
			printf( '<style id="wecodeart-blocks-custom-css">%s</style>', wp_strip_all_tags( $inline_css ) );
		}

		if( empty( $this->filters ) ) return;
		?>
		<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 0 0" focusable="false" role="none" class="visually-hidden">
			<defs><?php
			
			foreach( $this->filters as $block_id => $filter ) : ?>
				<filter id="<?php echo esc_attr( $block_id ); ?>">
					<feColorMatrix type="matrix" values=".299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 0 0 0 1 0" />
					<feComponentTransfer color-interpolation-filters="sRGB">
						<?php foreach( $filter as $value ) : ?>
						<feFuncR type="table" tableValues="<?php echo esc_attr( implode( ' ', $value ) ); ?>" />
						<?php endforeach; ?>
					</feComponentTransfer>
				</filter>
			<?php endforeach;
			
			?></defs>
		</svg>
		<?php
	}

	/**
	 * Process a block.
	 *
	 * @param 	array 	$block 	The block data.
	 *
	 * @return 	object
	 */
	public static function process_block( $block = [] ) {
		// Find the class that will handle the output for this block.
		$classname	= Styles\Blocks::class;
		$defaults   = [
			'core/cover' 		=> Styles\Blocks\Cover::class,
			'core/media-text' 	=> Styles\Blocks\Media::class,
			'core/button' 		=> Styles\Blocks\Button::class,
			'core/image' 		=> Styles\Blocks\Image::class,
			'core/spacer' 		=> Styles\Blocks\Spacer::class,
			'core/column' 		=> Styles\Blocks\Column::class,
			'core/social-links'	=> Styles\Blocks\Social::class,
			'core/separator' 	=> Styles\Blocks\Separator::class,
			'core/pullquote' 	=> Styles\Blocks\PullQuote::class
		];

		$output_classes = apply_filters( 'wecodeart/filter/gutenberg/styles/blocks', $defaults );

		if ( array_key_exists( $block['blockName'], $output_classes ) ) {
			$classname = $output_classes[ $block['blockName'] ];
		}
		
		if( class_exists( $classname ) ) {
			return ( new $classname( $block ) );
		};
	}
}
