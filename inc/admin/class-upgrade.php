<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Admin\Upgrade
 * @copyright   Copyright (c) 2024, WeCodeArt Framework
 * @since 		6.1.2
 * @version		6.3.7
 */

namespace WeCodeArt\Admin;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Admin\Installer\Module;
use WeCodeArt\Config\Traits\Singleton;
use WeCodeArt\Config\Interfaces\Configuration;
use function WeCodeArt\Functions\get_prop;

/**
 * Upgrade
 */
class Upgrade {

	use Singleton;

	/**
	 * Send to Constructor
	 */
	public function init() {
		add_action( 'after_switch_theme', [ $this, 'after_switch_theme' ], 20 );
	}

	/**
	 * Run updates after theme switch
	 *
	 * @return void
	 */
	public function after_switch_theme() {
		$version = wecodeart( 'options' )::get( 'theme_version' );

		$routines = [
			'6.1.2' => 'upgrade_1',
			'6.2.9' => 'upgrade_629',
			'6.3.5' => 'upgrade_635',
		];

		array_walk( $routines, [ $this, 'run_upgrade' ], $version );

		$this->finish_up( $version );
	}

	/**
	 * 6.3.5
	 *
	 * @param 	string $version Current plugin version.
	 */
	private function upgrade_635( $version ) {
		$modules = wecodeart( 'options' )::get( 'installed_modules' );

		if( empty( $modules ) ) {
			return wecodeart( 'options' )::set( [
				'installed_modules' => 'unset'
			] );
		}

		wecodeart( 'options' )::set( [
			'modules'	=> $modules
		] );
	}

	/**
	 * 6.2.9
	 *
	 * @param 	string $version Current plugin version.
	 */
	private function upgrade_629( $version ) {
		$modules = wecodeart( 'options' )::get( 'installed_modules' );

		if( ! $modules ) {
			wecodeart( 'options' )::set( [
				'installed_modules' => []
			] );
		}
	}

	/**
	 * 6.1.2
	 *
	 * @param 	string $version Current plugin version.
	 */
	private function upgrade_1( $version ) {
		// Actions here.
	}

	/**
	 * Runs the upgrade.
	 *
	 * @param 	string $routine         The method to call.
	 * @param 	string $version         The new version.
	 * @param 	string $current_version The current set version.
	 *
	 * @return 	void
	 */
	protected function run_upgrade( $routine, $version, $current_version ) {
		if ( version_compare( $current_version, $version, '<' ) ) {
			$this->$routine( $current_version );
		}
	}

	/**
	 * Runs the needed cleanup after an update, setting the DB version to latest version, flushing caches etc.
	 *
	 * @param 	string|null $previous_version The previous version.
	 *
	 * @return 	void
	 */
	protected function finish_up( $previous_version = null ) {
		if ( $previous_version ) {
			wecodeart( 'options' )::set( [
				'theme_previous' => $previous_version 
			] );
		}

		// Update theme version.
		wecodeart( 'options' )::set( [
			'theme_version' => wecodeart( 'version' )
		] );

		do_action( 'wecodeart/upgrade/finish', $previous_version );
	}
}