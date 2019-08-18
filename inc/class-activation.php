<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework 
 * @subpackage 	Compatability/Activation
 * @copyright   Copyright (c) 2019, WeCodeArt Framework
 * @since		3.5
 * @version		3.8.1
 */

namespace WeCodeArt;

if ( ! defined( 'ABSPATH' ) ) exit(); 

use WeCodeArt\Admin\Notifications;

/**
 * Activation - runs first before any other class to make sure user meets the requirements
 */
class Activation {

	use \WeCodeArt\Singleton;

	/**
	 * Requirements
	 *
	 * @access 	protected
	 * @var		array
	 */
	protected $requirements = [];

	/**
	 * Messages
	 *
	 * @access 	protected
	 * @var		array
	 */
	protected $messages = [];

	/**
	 * Status
	 *
	 * @access 	protected
	 * @var		boolean
	 */
	protected $status = true;  
	
	/**
	 * Send to Constructor
	 * @since 3.6.2
	 */
	public function init() {
		$this->set_i18n();
		$this->set_requirements();
		$this->compare_requirements();

		if( $this->is_ok() === false ) {
			// Init notifications system on Activation Check.
			Notifications::get_instance();

			// Add default error notices into admin, prevent customizer load and redirect notice.
			add_action( 'after_switch_theme', 	array( $this, 'after_switch_theme' 	) );
			add_action( 'load-customize.php', 	array( $this, 'customizer_notice' 	) );
			add_action( 'template_redirect', 	array( $this, 'redirect_notice' 	) );

			// Add Our Theme Hook.
			do_action( 'wecodeart/hook/activation/failed' );
		}
	}

	/**
	 * Get Activation Validation Status
	 *
	 * @since 	3.5
	 * @version	3.6.2
	 */
	public function is_ok() {
		if( ! $this->requirements ) return true;
		foreach( $this->requirements as $val ) {
			if( $val['failed'] === true ) {
				$this->status = false;
				break;
			}
		}

		return $this->status;
	}

	/**
	 * Set Translation Messages
	 *
	 * @since 	3.7.9
	 */
	public function set_i18n( $args = [] ) {
		$defaults = [
			'customizer' => esc_html__( 'Your WordPress installation does not meet the minimum requirements to run WeCodeArt Framework. Please upgrade and try again.', 'wecodeart' ),
			'checkpoint' => esc_html__( 'WeCodeArt Framework requires at least %s version %s. You are running version %s. Please upgrade and try again.', 'wecodeart' )
		];

		$args = wp_parse_args( $args, apply_filters( 'wecodeart/filter/activation/i18n', $defaults ) );

		return $this->messages = $args;	
	}

	/**
	 * Set Requirements
	 *
	 * @since 	3.5
	 * @version	3.8.6
	 */
	public function set_requirements( $args = [] ) {
		// Setup an array with data to check compatability.
		$defaults = [
			[
				'label'		=> 'WordPress',
				'required' 	=> '5.0',
				'installed' => $GLOBALS['wp_version']
			],
			[
				'label' 	=> 'PHP',
				'required' 	=> '5.6.2',
				'installed' => phpversion()
			]
		];

		$args = wp_parse_args( $args, apply_filters( 'wecodeart/filter/activation/requirements', $defaults ) );

		return $this->requirements = $args;	
	}

	/**
	 * Compare Requirements
	 *
	 * @since 	3.5
	 * @version	3.5
	 */
	public function compare_requirements() {
		if( ! $this->requirements ) return;
		foreach( $this->requirements as $key => $val ) {
			$this->requirements[$key]['failed'] = version_compare( $val['installed'], $val['required'], '<=' );
		}	
	}

	/**
	 * Show an error notice box
	 *
	 * @since 	1.8
	 * @version	3.8.1
	 */
	public function after_switch_theme() {
		switch_theme( WP_DEFAULT_THEME );
		unset( $_GET['activated'] );
		$this->admin_notice(); 
	}

	/**
	 * Show an error notice box
	 *
	 * @since 	1.8
	 * @version	3.8.1
	 */
	public function admin_notice() {
		if( ! $this->requirements ) return;
		foreach( $this->requirements as $key => $val ) {
			if( $val['failed'] === true ) {
				$message = sprintf( $this->messages['checkpoint'], $val['label'], $val['required'], $val['installed'] );
				Notifications::add( [ 'type' => 'error', 'message' => wpautop( $message ) ] );
			}
		}	
	}

	/**
	 * Show an error notice box on WP Customizer
	 *
	 * @since 	1.8
	 * @version	3.5 
	 */
	public function customizer_notice() {
		if( ! $this->requirements ) return;
		foreach( $this->requirements as $key => $val ) {
			if( $val['failed'] === true ) {
				wp_die( $this->messages['customizer'], '', [ 'back_link' => true ] );
				break;
			}
		} 
	}

	/**
	 * Prevents the Theme Preview from being loaded.
	 *
	 * @since 	1.8
	 * @version	3.5 
	 */
	public function redirect_notice() {
		if( isset( $_GET['preview'] ) ) wp_die( $this->messages['customizer'] );
	}
}