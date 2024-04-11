<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework 
 * @subpackage 	Markup\Inputs
 * @copyright   Copyright (c) 2024, WeCodeArt Framework
 * @since		5.0.0
 * @version		6.4.1
 */

namespace WeCodeArt\Support\DOM\Inputs;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Support\DOM\Inputs\Base;
use function WeCodeArt\Functions\get_prop;

/**
 * Standard Inputs Markup
 */
class Basic extends Base {

    /**
	 * Constructor 
	 */
	public function __construct( string $type = 'hidden', array $args = [] ) {
        $this->type         = $type;
        $this->unique_id    = wp_unique_id( 'input-' );
        $this->label        = get_prop( $args, 'label', '' );
        $this->_label       = get_prop( $args, '_label', 'before' );
        $this->attrs        = get_prop( $args, 'attrs', [] );
        $this->messages     = get_prop( $args, 'messages', [] );
    }
	
	/**
	 * Create HTML Inputs
	 *
	 * @since	unknown
	 * @version	5.0.0
	 */
	public function content() {
        ?>
        <input <?php $this->input_attrs(); ?>/>
        <?php
    }

    /**
     * Get types.
     *
     * @since   5.0.0
     *
     * @return  array
     */
    public static function get_types(): array {
        return [
            'url',
            'tel',
            'text',
            'search',
            'email',
            'number', 
            'password',
            'submit',
            'radio',
            'checkbox',
            'hidden',
            // 'date',  // Extended
            // 'file',  // Extended
            // 'range', // Extended
            // 'color', // Extended
        ];
    }

    /**
     * Get input's class.
     * 
     * @since   5.0.0
     * @version 6.1.2
     *
     * @param 	string
     */
    public function input_class(): string {
        $class = '';

        if( $this->type !== 'hidden' ) {
            $class = 'form-control';
        }

        if( in_array( $this->type, [ 'radio', 'checkbox' ] ) ) {
            $class = 'form-check-input';
        }

        if( in_array( $this->type, [ 'submit', 'button' ] ) ) {
            $class = 'wp-element-button';
        }
        
        return $class;
    }

    /**
	 * Input styles.
	 *
	 * @return 	string
	 */
	public static function styles(): string {
		return '
            /* Controls */
            .form-control {
                display: block;
                width: 100%;
                padding: var(--wp--input--padding);
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--wp--input--color);
                background-color: var(--wp--input--background-color);
                background-clip: padding-box;
                border: var(--wp--input--border);
                border-radius: var(--wp--input--border-radius);
                transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                appearance: none;
            }
            .form-control:focus {
                border-color: var(--wp--input--border-color-focus);
                box-shadow: 0 0 0 0.25rem var(--wp--preset--color--accent);
                outline: 0;
            }
            .form-control::placeholder {
                color: var(--wp--input--placeholder-color);
                opacity: 1;
            }
            .form-control:disabled {
                background-color: var(--wp--input--disabled-color);
                opacity: 1;
            }
            .form-control-sm {
                min-height: calc(1.5em + 0.5rem + 2px);
                padding: 0.25rem 0.5rem;
                font-size: var(--wp--preset--font-size--small);
                border-radius: calc(0.75 * var(--wp--input--border-radius));
            }
            .form-control-lg {
                min-height: calc(1.5em + 1rem + 2px);
                padding: 0.5rem 1rem;
                font-size: var(--wp--preset--font-size--medium);
                border-radius: calc(1.25 * var(--wp--input--border-radius));
            }
            .form-control-plaintext {
                display: block;
                width: 100%;
                padding: var(--wp--input--padding-y) 0;
                margin-bottom: 0;
                line-height: 1.5;
                color: var(--wp--preset--color--dark);
                background-color: transparent;
                border: solid transparent;
                border-width: 1px 0;
            }
            .form-control-plaintext:focus {
                outline: 0;
            }
            .form-control-plaintext.form-control-sm,
            .form-control-plaintext.form-control-lg {
                padding-right: 0;
                padding-left: 0;
            }

            /* Validation */
            .was-validated .form-control:is(:valid,:invalid),
            .form-control:is(.is-valid,.is-invalid) {
                padding-right: calc(1.5em + var(--wp--input--padding-x));
                background-repeat: no-repeat;
                background-position: right calc(0.375em + 0.1875rem) center;
                background-size: var(--wp--input--validation-size);
            }
            .was-validated .form-control:valid,
            .form-control.is-valid {
                background-image: var(--wp--input--icon-valid);
                border-color: var(--wp--preset--color--success);
            }
            .was-validated .form-control:invalid,
            .form-control.is-invalid {
                background-image: var(--wp--input--icon-invalid);
                border-color: var(--wp--preset--color--danger);
            }
            .was-validated .form-control:valid:focus,
            .form-control.is-valid:focus {
                border-color: var(--wp--preset--color--success);
                box-shadow: 0 0 0 .25rem rgba(125, 200, 85, 0.25);
            }
            .was-validated .form-control:invalid:focus,
            .form-control.is-invalid:focus {
                border-color: var(--wp--preset--color--danger);
                box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
            }
                
            @media (prefers-reduced-motion: reduce) {
                .form-control {
                    transition: none;
                }
            }
        ';
	}
}