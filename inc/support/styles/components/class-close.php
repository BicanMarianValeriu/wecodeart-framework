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

/**
 * Close Styles
 */
class Close extends Base {
    /**
	 * Component styles.
	 *
	 * @return 	string
	 */
	public static function styles(): string {
		$symbol = 'data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="%23000"%3e%3cpath d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"/%3e%3c/svg%3e';

		return "
			/* Close */
			.btn-close {
				--wp--close-color: var(--wp--preset--color--black);
				--wp--close-icon: transparent url('$symbol') center/1em auto no-repeat;
				--wp--close-opacity: .5;
				--wp--close-white-filter: invert(1) grayscale(100%) brightness(200%);
				box-sizing: content-box;
				width: 1em;
				height: 1em;
				padding: .25em .25em;
				color: var(--wp--close-color);
				background: var(--wp--close-icon);
				border: 0;
				border-radius: .25rem;
				opacity: var(--wp--close-opacity);
			}

			.theme-is-dark .btn-close {
				filter: var(--wp--close-white-filter);
			}

			.btn-close:hover {
				color: var(--wp--close-color);
				text-decoration: none;
				opacity: .75;
			}

			.btn-close:focus {
				outline: 0;
				box-shadow: 0 0 0 .25rem rgba(35,136,237,0.25);
				opacity: 1;
			}

			.btn-close:is(.disabled,:disabled) {
				pointer-events: none;
				user-select: none;
				opacity: .25;
			}
        ";
	}
}