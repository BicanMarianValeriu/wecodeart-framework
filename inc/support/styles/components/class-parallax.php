<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Styles\Components
 * @copyright   Copyright (c) 2025, WeCodeArt Framework
 * @since		6.2.8
 * @version		6.3.7
 */

namespace WeCodeArt\Support\Styles\Components;

defined( 'ABSPATH' ) || exit;

use function WeCodeArt\Functions\get_prop;

/**
 * Parallax Styles
 */
class Parallax extends Base {
	/**
     * Component's Style Deps.
     *
     * @var     array
     */
    static $deps = [];

    /**
	 * Component styles.
	 *
	 * @return 	string
	 */
	public static function styles(): string {
		// Parallax range: animation-range is calculated with offset instead of leaving "viewport"
		// to avoid stopping -250px from top. This behaviour is disabled when translate is positive (to bottom)
		return <<<CSS
			.has-parallax {
				--wp--animation: __backgroundPosition;
				--wp--easing: linear;
				--wp--offset: -250px;
				--wp--range: 0 calc(100vh + max(var(--wp--offset) * -1,0));
				animation-timeline: view();
				animation-range: var(--wp--range);
				animation-name: var(--wp--animation);
				animation-timing-function: var(--wp--easing);
				animation-direction: forwards;
				animation-duration: 1ms;
			}
			
			@keyframes __backgroundPosition {
				to {
					background-position: 50% calc(50% + var(--wp--offset));
				}
			}

			@keyframes __translate3d {
				to {
					transform: translate3d(var(--wp--offset-x,0),var(--wp--offset),var(--wp--offset-z,0));
				}
			}
		CSS;
	}
}
