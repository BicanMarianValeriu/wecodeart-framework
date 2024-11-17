<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Support\Debug
 * @copyright   Copyright (c) 2024, WeCodeArt Framework
 * @since 		6.4.5
 * @version		6.4.5
 */

namespace WeCodeArt\Support;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Config\Interfaces\Integration;
use WeCodeArt\Config\Traits\{ Singleton, No_Conditionals };

/**
 * The Debug object.
 */
final class Debug implements Integration {

	use Singleton;
	use No_Conditionals;

	/**
	 * Register hooks
	 */
	public function register_hooks() {}

	/**
	 * Log data to the console.
	 *
	 * @param 	mixed 	$data  Data to log.
	 * @param 	bool  	$trace Whether to log the stacktrace.
	 *
	 * @return 	void
	 */
	public static function log( $data, bool $trace = false ): void {
		add_action( 'wp_footer', static fn() => static::render_log( $data, $trace ), PHP_INT_MAX );
		add_action( 'admin_footer', static fn() => static::render_log( $data, $trace ), PHP_INT_MAX );
	}

	/**
	 * Log data to the console.
	 *
	 * @param 	mixed 	$data Data to log.
	 *
	 * @return 	void
	 */
	public static function stacktrace(): array {
		$backtrace  = debug_backtrace();
		$stacktrace = [];

		foreach ( $backtrace as $index => $trace ) {
			if ( ! isset( $trace['file'] ) || ! isset( $trace['line'] ) ) {
				continue;
			}

			if ( 0 === $index ) {
				continue;
			}

			$stacktrace[] = $trace['file'] . ': ' . $trace['line'] . PHP_EOL;
		}

		return $stacktrace;
	}

	/**
	 * Render the log.
	 *
	 * @param 	mixed 	$data  Data to log.
	 * @param 	bool  	$trace Whether to log the stacktrace.
	 *
	 * @return 	void
	 */
	private static function render_log( $data, bool $trace = true ): void {
		$stacktrace = self::stacktrace();

		echo '<script id="wecodeart-debug">';
		echo 'console.log(' . json_encode( $data ) . ');';

		if ( $trace && $stacktrace ) {
			foreach ( $stacktrace as $trace ) {
				echo 'console.log(' . json_encode( $trace ) . ');';
			}
		}

		echo '</script>';
	}
}