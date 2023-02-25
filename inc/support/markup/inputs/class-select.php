<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework 
 * @subpackage 	Markup\Inputs
 * @copyright   Copyright (c) 2023, WeCodeArt Framework
 * @since		5.0.0
 * @version		5.7.2
 */

namespace WeCodeArt\Support\Markup\Inputs;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Support\Markup;
use WeCodeArt\Support\Markup\Inputs\Basic;
use function WeCodeArt\Functions\get_prop;

/**
 * Standard Inputs Markup
 */
class Select extends Basic {

    /**
     * Input's Type.
     *
     * @since   5.0.0
     * @var     string
     */
    public $type = 'select';

    /**
     * All choices tied to the control.
     *
     * @since   5.0.0
     * @var     array
     */
    public $choices = [];
    
    /**
	 * Constructor 
	 */
	public function __construct( string $type = 'select', array $args = [] ) {
        $this->unique_id    = wp_unique_id( 'select-' );
        $this->label        = get_prop( $args, 'label', '' );
        $this->_label       = get_prop( $args, '_label', 'before' );
        $this->attrs        = get_prop( $args, 'attrs', [] );
        $this->choices      = get_prop( $args, 'choices', [] );
        $this->messages     = get_prop( $args, 'messages', [] );
    }

	/**
	 * Create HTML Inputs
	 *
	 * @since	unknown
	 * @version	5.0.0
	 */
	public function content() {
        $placeholder = get_prop( $this->attrs, 'placeholder', false );
        
        ?>
        <select <?php $this->input_attrs( [ 'type', 'value', 'placeholder' ] ); ?>>
            <?php if( $placeholder ) {
            
                wecodeart( 'markup' )::wrap( 'select-placeholder', [
                    [
                        'tag' => 'option',
                        'attrs' => [
                            'class'     => false,
                            'disabled'  => true,
                            'selected'  => isset( $this->attrs['value'] ) ? null : true,
                        ]
                    ]
                ], $placeholder );

            } ?>
            <?php foreach( $this->choices as $value => $label ) {
            
                wecodeart( 'markup' )::wrap( 'select-option', [
                    [
                        'tag' => 'option',
                        'attrs' => [
                            'class'     => false,
                            'value'     => $value,
                            'selected'  => $this->selected_option( $value ),
                        ]
                    ]
                ], $label );

            } ?>
        </select>
        <?php
    }

    /**
	 * Selected Option
     *
     * @since   5.0.0
	 * @return	boolean
	 */
	public function selected_option( string $value ) {
        return isset( $this->attrs['value'] ) ? in_array( $value, (array) $this->attrs['value'], true ) : null;
    }

    /**
     * Get input's class.
     * 
     * @since   5.7.2
     * @version 5.7.2
     *
     * @param 	string
     */
    public function input_class(): string {
        return 'form-select';
    }

    /**
	 * Input styles.
	 *
	 * @return 	string
	 */
	public static function styles(): string {
		return '
            select {
                text-transform: none;
                word-wrap: normal;
            }
            select:disabled {
                opacity: 1;
            }
            .form-select {
                display: block;
                width: 100%;
                padding: var(--wp--input--padding-y) 2.25rem var(--wp--input--padding-y) var(--wp--input--padding-x);
                -moz-padding-start: calc(var(--wp--input--padding-x) - 3px);
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--wp--preset--color--dark);
                background-color: var(--wp--preset--color--white);
                background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right var(--wp--input--padding-x) center;
                background-size: 16px 12px;
                border: var(--wp--input--border);
                border-radius: var(--wp--input--border-radius);
                transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                appearance: none;
            }
            .form-select:focus {
                border-color: var(--wp--preset--color--primary);
                outline: 0;
                box-shadow: 0 0 0 0.25rem rgba(35, 136, 237, 0.25);
            }
            .form-select[multiple],
            .form-select[size]:not([size="1"]) {
                padding-right: var(--wp--input--padding-x);
                background-image: none;
            }
            .form-select:disabled {
                background-color: #e9ecef;
            }
            .form-select:-moz-focusring {
                color: transparent;
                text-shadow: 0 0 0 #212529;
            }   
            .form-select-sm {
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
                padding-left: 0.5rem;
                font-size: var(--wp--preset--font-size--small);
                border-radius: 0.25rem;
            }   
            .form-select-lg {
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                padding-left: 1rem;
                font-size: var(--wp--preset--font-size--medium);
                border-radius: 0.5rem;
            }

            .was-validated .form-select:valid,
            .form-select.is-valid {
                border-color: var(--wp--preset--color--success);
            }
            .was-validated .form-select:valid:not([multiple]):not([size]),
            .was-validated .form-select:valid:not([multiple])[size="1"],
            .form-select.is-valid:not([multiple]):not([size]),
            .form-select.is-valid:not([multiple])[size="1"] {
                padding-right: 4.125rem;
                background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%237dc855%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e");
                background-position: right var(--wp--input--padding-x) center, center right 2.25rem;
                background-size: 16px 12px, calc(0.75em + var(--wp--input--padding-y)) calc(0.75em + var(--wp--input--padding-y));
            }
            .was-validated .form-select:valid:focus,
            .form-select.is-valid:focus {
                border-color:var(--wp--preset--color--success);
                box-shadow: 0 0 0 0.25rem rgba(125, 200, 85, 0.25);
            }
            .was-validated .form-select:invalid, .form-select.is-invalid {
                border-color: var(--wp--preset--color--danger);
            }
            .was-validated .form-select:invalid:not([multiple]):not([size]),
            .was-validated .form-select:invalid:not([multiple])[size="1"],
            .form-select.is-invalid:not([multiple]):not([size]),
            .form-select.is-invalid:not([multiple])[size="1"] {
                padding-right: 4.125rem;
                background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e");
                background-position: right var(--wp--input--padding-x) center, center right 2.25rem;
                background-size: 16px 12px, calc(0.75em + var(--wp--input--padding-y)) calc(0.75em + var(--wp--input--padding-y));
            }
            .was-validated .form-select:invalid:focus,
            .form-select.is-invalid:focus {
                border-color:var(--wp--preset--color--danger);
                box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
            }

            @media (prefers-reduced-motion: reduce) {
                .form-select {
                    transition: none;
                }
            }
        ';
	}
}