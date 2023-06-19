<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Admin\Installer\Theme
 * @copyright   Copyright (c) 2023, WeCodeArt Framework
 * @since 		6.1.2
 * @version		6.1.2
 */

namespace WeCodeArt\Admin\Installer;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Installable;
use WeCodeArt\Admin\Request;
use WeCodeArt\Admin\Installer;
use function WeCodeArt\Functions\get_prop;

/**
 * Theme Installer
 */
class Theme extends Installer implements Installable {
	/**
	 * Sets remote.
	 *
	 * @since 	6.1.2
	 *
	 * @return 	void
	 */
	public function set_api_url(): bool {
		switch ( $this->source ) {
			case 'wordpress':
				$this->remote = 'https://api.wordpress.org/themes/info/1.1/?action=theme_information&request[slug]=%s';
				break;
			default:
				parent::set_api_url();
			break;
		}

		return true;
	}

	/**
	 * Install the theme.
	 *
	 * @since 	6.1.2
	 *
	 * @return 	mixed
	 */
	public function install() {
		if( ! $this->package ) {
			return $this->status = null;
		}

		// Include the necessary files
		include_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
        include_once ABSPATH . 'wp-admin/includes/theme-install.php';
        require_once ABSPATH . 'wp-admin/includes/file.php';

		// Create an instance of the theme upgrader
		$skin 		= new Skin();
		$upgrader 	= new \Theme_Upgrader( $skin );
		$result 	= $upgrader->install( $this->package, [ 'overwrite_package' => true ] );

		// Theme installed
		if( $result ) {
			return $this->status = true;
		}
		
		return $this->status = false;
	}

	/**
	 * Fix GitHub path.
	 *
	 * @since 	6.1.2
	 *
	 * @param 	boolean $true       always true
	 * @param 	mixed   $hook_extra not used
	 * @param 	array   $result     the result of the move
	 *
	 * @return 	array 	$result		the result of the move
	 */
	public function upgrader_post_install( $true, $hook_extra, $result ): array {
		if( $this->source !== 'github' ) {
			return $result;
		}

		global $wp_filesystem;

		$destination = WP_CONTENT_DIR . '/themes/' . $this->get_dir();

		$wp_filesystem->move( $result['destination'], $destination );
		$result['destination'] = $destination;

		return $result;
	}
}