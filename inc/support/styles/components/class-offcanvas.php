<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Styles\Components
 * @copyright   Copyright (c) 2024, WeCodeArt Framework
 * @since		6.1.5
 * @version		6.4.5
 */

namespace WeCodeArt\Support\Styles\Components;

defined( 'ABSPATH' ) || exit;

use function WeCodeArt\Functions\get_prop;

/**
 * Offcanvas Styles
 */
class OffCanvas extends Base {
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
		return <<<CSS
			:is(.wp-offcanvas,.offcanvas) {
				--wp--offcanvas-zindex: 1045;
				--wp--offcanvas-width: 400px;
				--wp--offcanvas-height: 30vh;
				--wp--offcanvas-padding-x: 1rem;
				--wp--offcanvas-padding-y: 1rem;
				--wp--offcanvas-color: var(--wp--preset--color--dark);
				--wp--offcanvas-bg: rgb(var(--wp--background--rgb, 255,255,255));
				--wp--offcanvas-transition: transform 0.3s ease-in-out;
				position: fixed;
				bottom: 0;
				display: flex;
				flex-direction: column;
				max-width: 100%;
				visibility: hidden;
				background-color: var(--wp--offcanvas-bg);
				background-clip: padding-box;
				transition: var(--wp--offcanvas-transition);
				z-index: var(--wp--offcanvas-zindex);
				outline: 0;
			}
			:is(.wp-offcanvas,.offcanvas):is(.showing,.show:not(.hiding)) {
				transform: none;
			}
			:is(.wp-offcanvas,.offcanvas):is(.showing,.hiding,.show) {
				visibility: visible;
			}
			.theme-is-dark :is(.wp-offcanvas,.offcanvas) {
				--wp--offcanvas-color: var(--wp--preset--color--white);
			}
			:is(.wp-offcanvas__header,.offcanvas-header) {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: var(--wp--offcanvas-padding-y) var(--wp--offcanvas-padding-x);
			}
			:is(.wp-offcanvas__header,.offcanvas-header) :is(.wp-close,.btn-close) {
				padding: calc(var(--wp--offcanvas-padding-y) * .5) calc(var(--wp--offcanvas-padding-x) * .5);
				margin-top: calc(-.5 * var(--wp--offcanvas-padding-y));
				margin-left: calc(-.5 * var(--wp--offcanvas-padding-x));
				margin-right: calc(-.5 * var(--wp--offcanvas-padding-x));
				margin-bottom: calc(-.5 * var(--wp--offcanvas-padding-y));
			}
			:is(.wp-offcanvas__title,.offcanvas-title) {
				margin-bottom: 0;
				line-height: 1.5;
			} 
			:is(.wp-offcanvas__body,.offcanvas-body) {
				flex-grow: 1;
				padding: var(--wp--offcanvas-padding-y) var(--wp--offcanvas-padding-x);
				overflow-y: auto;
			}
			:is(.wp-offcanvas--start,.wp-offcanvas--end,.offcanvas-start,.offcanvas-end) {
				top: 0;
				width: var(--wp--offcanvas-width);
			}
			:is(.wp-offcanvas--start,.offcanvas-start) {
				left: 0;
				border-right: 1px solid var(--wp--preset--color--accent);
				transform: translateX(-100%);
			}
			:is(.wp-offcanvas--end,.offcanvas-end) {
				right: 0;
				border-left: 1px solid var(--wp--preset--color--accent);
				transform: translateX(100%);
			}
			:is(.wp-offcanvas--top,.wp-offcanvas--bottom,.offcanvas-top,.offcanvas-bottom) {
				right: 0;
				left: 0;
				height: var(--wp--offcanvas-height);
				max-height: 100%;
			}
			:is(.wp-offcanvas--top,.offcanvas-top) {
				top: 0;
				border-bottom: 1px solid var(--wp--preset--color--accent);
				transform: translateY(-100%);
			} 
			:is(.wp-offcanvas--bottom,.offcanvas-bottom) {
				border-top: 1px solid var(--wp--preset--color--accent);
				transform: translateY(100%);
			}
		CSS;
	}
}
