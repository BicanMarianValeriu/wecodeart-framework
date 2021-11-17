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
 * @version		5.2.2
 */

namespace WeCodeArt;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Core\Scripts;
use WeCodeArt\Core\Content;
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

		// Block Categories.
		add_filter( 'block_categories_all',			[ $this, 'block_category' 			], 10, 1 );
		
		// Editor Settings.
		add_filter( 'block_editor_settings_all',	[ $this, 'block_editor_settings' 	], 10, 2 );
		
		// Editor Assets.
		add_action( 'enqueue_block_editor_assets', 	[ $this, 'block_editor_assets' 		], 10, 1 );
		
		// Theme Support.
		add_action( 'after_setup_theme', 			[ $this, 'theme_support' ], 100 );

		// Meta.
		add_filter( 'init',							[ $this, 'register_meta' ] );

		// Admin.
		add_action( 'admin_init', 					[ $this, 'admin_init' ] );

		// Body Class.
		add_filter( 'body_class', 					[ $this, 'body_class' ] );

		// Skip links.
		remove_action( 'wp_footer', 				'the_block_template_skip_link' );
		remove_action( 'wp_footer', 				'gutenberg_the_skip_link' );
		add_action( 'wp_footer', 					[ $this, 'the_skip_link' ] );

		// Hidden Singular Page Title.
		add_filter( 'wecodeart/filter/entry/title/disabled', [ $this, 'disable_title' ], 10, 2 );

		// Modules.
		Gutenberg\Modules::get_instance();
		
		// Blocks.
		Gutenberg\Blocks::get_instance();
	}

	/**
	 * Register meta.
	 *
	 * @return 	void
	 */
	public function register_meta() {
		register_meta( 'post', '_wca_title_hidden', [
			'show_in_rest'  => true,
			'single'        => true,
			'type'          => 'boolean',
			'auth_callback' => function() {
				return current_user_can( 'edit_posts' );
			},
		] );
	}

	/**
	 * Maybe Disable Title
	 *
	 * @return 	bool
	 */
	public function disable_title( $disabled, $post_id ) {
		if( is_singular() && get_post_meta( $post_id, '_wca_title_hidden', true ) ) {
			$disabled = true;
		}
		
		return $disabled;
	}

	/**
	 * Replace title with blank
	 *
	 * @param 	array $classes The body classes.
	 *
	 * @return 	array Returns the new body classes.
	 */
	public function body_class( $classes ) {
		if ( is_admin() ) return $classes;
		
		if( is_singular() ) {			
			global $post;

			if ( get_post_meta( $post->ID, '_wca_title_hidden', true ) ) {
				$classes[] = 'has-title-hidden';
			}
		}

		return $classes;
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
		// Inline
		$data = apply_filters( 'wecodeart/filter/gutenberg/localize', [
			'theme' 	=> [
				'name'		=> wecodeart( 'name' ),
				'version' 	=> wecodeart( 'version' )
			],
			'restrictedBlocks' => apply_filters( 'wecodeart/filter/gutenberg/restricted', [
				'core/freeform',
				'core/shortcode',
				'core/nextpage',
				'core/archives',
				'core/calendar',
				'core/tag-cloud',
				'core/page-list',
				'core/latest-comments',
				'core/block',
			] ),
		] );
		
		wp_register_script( $this->make_handle( 'inline' ), '' );
		wp_enqueue_script( $this->make_handle( 'inline' ) );
		wp_add_inline_script( $this->make_handle( 'inline' ), 'window.wecodeartGutenberg = ' . wp_json_encode( $data ) . ';', 'before' );

		// Gutenberg editor assets.
		wp_enqueue_script( 	$this->make_handle(),	$this->get_asset( 'js', 'gutenberg/editor' ), 	[
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
			'lodash',
			$this->make_handle( 'inline' )
		], wecodeart( 'version' ) );
		
		// CodeMirror assets.
		wp_enqueue_code_editor( [ 'type' => 'text/html' ] );
		wp_add_inline_script( 'wp-codemirror', 'window.CodeMirror = wp.CodeMirror;' );
		wp_enqueue_script(
			$this->make_handle( 'codemirror-fs' ), 
			$this->get_asset( 'js', 'admin/codemirror-fs' ),
			[ 'wp-codemirror' ],
			wecodeart( 'version' )
		);
		
		$code_mirror = ''; // Adds a border to CodeMirror to match WP.
		$code_mirror .= '.CodeMirror{height:auto;margin-bottom:1rem;}';
		$code_mirror .= '.CodeMirror.CodeMirror-wrap{border:1px solid #949494;}';
		wp_add_inline_style( 'wp-editor', $code_mirror );
	}

	/**
	 * Support
	 *
	 * @access public
	 */
	public function theme_support() {
		$support = get_prop( $this->config, 'support', [] );

		// Theme Support
		foreach( $support as $feature => $value ) {
			if( $value === 'remove' ) {
				remove_theme_support( $feature );
				continue;
			};
			add_theme_support( $feature, $value );
		}
		
		// Editor Style
		add_editor_style( $this->get_asset( 'css', 'gutenberg/editor' ) );
	}

	/**
	 * Removes the Site Editor link from the admin.
	 *
	 * @return void
	 */
	public function admin_init() {
		// Developer mode will allways have access to FSE.
		if( wecodeart_if( 'is_dev_mode' ) ) return;

		// Developers can turn off FSE admin (eg: on production).
		if( ! get_prop( wecodeart_config( 'gutenberg' ), 'editor' ) ) {
			remove_submenu_page( 'themes.php', 'gutenberg-edit-site' );
		}
	}

	/**
	 * Print the skip-link script & styles.
	 *
	 * @todo Remove this when WP 5.8 is the minimum required version.
	 *
	 * @return void
	 */
	public function the_skip_link() {
		// Early exit if not a block theme.
		if ( ! gutenberg_supports_block_templates() ) {
			return;
		}

		// Early exit if not a block template.
		global $_wp_current_template_content;
		if ( ! $_wp_current_template_content ) {
			return;
		}
		?>
		<?php
		/**
		 * Print the skip-link script.
		 */
		?>
		<script>
		(function() {
			var skipLinkTarget = document.querySelector( 'main' ),
				sibling,
				skipLinkTargetID,
				skipLink;

			// Early exit if a skip-link target can't be located.
			if ( ! skipLinkTarget ) {
				return;
			}

			// Get the site wrapper.
			// The skip-link will be injected in the beginning of it.
			sibling = document.querySelector( '.wp-site-blocks' );

			// Early exit if the root element was not found.
			if ( ! sibling ) {
				return;
			}

			// Get the skip-link target's ID, and generate one if it doesn't exist.
			skipLinkTargetID = skipLinkTarget.id;
			if ( ! skipLinkTargetID ) {
				skipLinkTargetID = 'wp--skip-link--target';
				skipLinkTarget.id = skipLinkTargetID;
			}

			// Create the skip link.
			skipLink = document.createElement( 'a' );
			skipLink.classList.add( 'skip-link', 'screen-reader-text' );
			skipLink.href = '#' + skipLinkTargetID;
			skipLink.innerHTML = '<?php esc_html_e( 'Skip to content', 'wecodeart' ); ?>';

			// Inject the skip link.
			sibling.parentElement.insertBefore( skipLink, sibling );
		}());
		</script>
		<?php
	}
}