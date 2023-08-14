<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Styles\Components
 * @copyright   Copyright (c) 2023, WeCodeArt Framework
 * @since		6.1.5
 * @version		6.1.5
 */

namespace WeCodeArt\Support\Styles\Components;

defined( 'ABSPATH' ) || exit();

use function WeCodeArt\Functions\get_prop;

/**
 * Close Styles
 */
class Modal extends Base {
	/**
     * Component's Style Deps.
     *
     * @var     array
     */
    static $deps = [ 'transition', 'close' ];

    /**
	 * Component styles.
	 *
	 * @return 	string
	 */
	public static function styles(): string {
		$breaks	= wecodeart_json( [ 'settings', 'custom', 'breakpoints' ], [] );

		$break_sm = get_prop( $breaks, 'sm' );
		$break_lg = get_prop( $breaks, 'lg' );
		$break_xl = get_prop( $breaks, 'xl' );
		
		$inline = '
			/* Modal */
			.modal {
				--wp--modal-zindex: 1055;
				--wp--modal-width: 500px;
				--wp--modal-padding: 1rem;
				--wp--modal-margin: .5rem;
				--wp--modal-color: ;
				--wp--modal-bg: rgb(var(--wp--background--rgb, 255,255,255));
				--wp--modal-border-color: var(--wp--preset--color--accent);
				--wp--modal-border-width: 1px;
				--wp--modal-border-radius: .5rem;
				--wp--modal-box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.075);
				--wp--modal-inner-border-radius: calc(0.5rem - 1px);
				--wp--modal-header-bg: var(--wp--preset--color--accent);
				--wp--modal-header-padding-x: 1rem;
				--wp--modal-header-padding-y: 1rem;
				--wp--modal-header-padding: 1rem 1rem;
				--wp--modal-header-border-color: var(--wp--modal-border-color);
				--wp--modal-header-border-width: 1px;
				--wp--modal-title-line-height: 1.5;
				--wp--modal-footer-gap: .5rem;
				--wp--modal-footer-bg: ;
				--wp--modal-footer-border-color: var(--wp--modal-border-color);
				--wp--modal-footer-border-width: 1px;
				position: fixed;
				top: 0;
				left: 0;
				display: none;
				width: 100%;
				height: 100%;
				overflow-x: hidden;
				overflow-y: auto;
				outline: 0;
				z-index: var(--wp--modal-zindex);
			}

			.theme-is-dark .modal {
				--wp--modal-bg: rgb(var(--wp--background--rgb, 0,0,0));
				--wp--modal-color: var(--wp--preset--color--white);
			}
			
			.modal-dialog {
				position: relative;
				width: auto;
				margin: var(--wp--modal-margin);
				pointer-events: none
			}
			
			.modal.fade .modal-dialog {
				transition: transform 0.3s ease-out;
				transform: translate(0, -50px)
			}
			
			.modal.show .modal-dialog {
				transform: none
			}
			
			.modal.modal-static .modal-dialog {
				transform: scale(1.02)
			}
			
			.modal-dialog-scrollable {
				height: calc(100% - var(--wp--modal-margin) * 2)
			}
			
			.modal-dialog-scrollable .modal-content {
				max-height: 100%;
				overflow: hidden
			}
			
			.modal-dialog-scrollable .modal-body {
				overflow-y: auto
			}
			
			.modal-dialog-centered {
				display: flex;
				align-items: center;
				min-height: calc(100% - var(--wp--modal-margin) * 2)
			}
			
			.modal-content {
				position: relative;
				display: flex;
				flex-direction: column;
				width: 100%;
				color: var(--wp--modal-color);
				pointer-events: auto;
				background-color: var(--wp--modal-bg);
				background-clip: padding-box;
				border: var(--wp--modal-border-width) solid var(--wp--modal-border-color);
				border-radius: var(--wp--modal-border-radius);
				outline: 0
			}
			
			.modal-backdrop {
				--wp--backdrop-zindex: 1050;
				--wp--backdrop-bg: #000;
				--wp--backdrop-opacity: 0.5;
				position: fixed;
				top: 0;
				left: 0;
				z-index: var(--wp--backdrop-zindex);
				width: 100vw;
				height: 100vh;
				background-color: var(--wp--backdrop-bg)
			}
			
			.modal-backdrop.fade {
				opacity: 0
			}
			
			.modal-backdrop.show {
				opacity: var(--wp--backdrop-opacity)
			}
			
			.modal-header {
				display: flex;
				flex-shrink: 0;
				align-items: center;
				justify-content: space-between;
				padding: var(--wp--modal-header-padding);
				border-bottom: var(--wp--modal-header-border-width) solid var(--wp--modal-header-border-color);
				border-top-left-radius: var(--wp--modal-inner-border-radius);
				border-top-right-radius: var(--wp--modal-inner-border-radius);
				background-color: var(--wp--modal-header-bg);
			}
			
			.modal-header .btn-close {
				padding: calc(var(--wp--modal-header-padding-y) * 0.5) calc(var(--wp--modal-header-padding-x) * 0.5);
				margin: calc(-0.5 * var(--wp--modal-header-padding-y)) calc(-0.5 * var(--wp--modal-header-padding-x)) calc(-0.5 * var(--wp--modal-header-padding-y)) auto
			}
			
			.modal-title {
				margin-top: 0;
				margin-bottom: 0;
				font-weight: 400;
				line-height: var(--wp--modal-title-line-height)
			}
			
			.modal-body {
				position: relative;
				flex: 1 1 auto;
				padding: var(--wp--modal-padding)
			}
			
			.modal-footer {
				display: flex;
				flex-shrink: 0;
				flex-wrap: wrap;
				align-items: center;
				justify-content: flex-end;
				padding: calc(var(--wp--modal-padding) - var(--wp--modal-footer-gap) * 0.5);
				background-color: var(--wp--modal-footer-bg);
				border-top: var(--wp--modal-footer-border-width) solid var(--wp--modal-footer-border-color);
				border-bottom-right-radius: var(--wp--modal-inner-border-radius);
				border-bottom-left-radius: var(--wp--modal-inner-border-radius)
			}
			
			.modal-footer > * {
				margin: calc(var(--wp--modal-footer-gap) * 0.5)
			}
			
			.modal--fullscreen {
				width: 100vw;
				max-width: none;
				height: 100%;
				margin: 0
			}
			
			.modal--fullscreen .modal-content {
				height: 100%;
				border: 0;
				border-radius: 0
			}
			
			.modal--fullscreen :where(.modal-header,.modal-footer) {
				border-radius: 0
			}
			
			.modal--fullscreen .modal-body {
				overflow-y: auto
			}
        ';

		// FullScreen Breakpoints
		foreach( $breaks as $key => $value ) {
			$inline .= "
				@media (max-width:{$value}) {
					.modal--fullscreen\:{$key} .modal-dialog {
						width: 100vw;
						max-width: none;
						height: 100%;
						margin: 0
					}
				
					.modal--fullscreen\:{$key} .modal-content {
						height: 100%;
						border: 0;
						border-radius: 0
					}
				
					.modal--fullscreen\:{$key} :where(.modal-header,.modal-footer) {
						border-radius: 0
					}
				
					.modal--fullscreen\:{$key} .modal-body {
						overflow-y: auto
					}
				}
			";
		}

		// Sizes
		$inline .= "
			@media (min-width:{$break_sm}) {
				.modal {
					--wp--modal-margin: 1.75rem;
					--wp--modal-box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.15)
				}
			
				.modal-dialog {
					max-width: var(--wp--modal-width);
					margin-right: auto;
					margin-left: auto
				}
			
				.modal-sm {
					--wp--modal-width: 300px
				}
			}
			
			@media (min-width:{$break_lg}) {
				.modal-lg,
				.modal-xl {
					--wp--modal-width: 800px
				}
			}
			
			@media (min-width:{$break_xl}) {
				.modal-xl {
					--wp--modal-width: 1140px
				}
			}
		";

		// Reduce Motion
		$inline .= '
			@media (prefers-reduced-motion:reduce) {
				.modal.fade .modal-dialog {
					transition: none
				}
			}
		';

		return $inline;
	}
}