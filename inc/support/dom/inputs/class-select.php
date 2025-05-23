<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework 
 * @subpackage 	Markup\Inputs
 * @copyright   Copyright (c) 2025, WeCodeArt Framework
 * @since		5.0.0
 * @version		6.4.1
 */

namespace WeCodeArt\Support\DOM\Inputs;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Support\Markup;
use WeCodeArt\Support\DOM\Inputs\Basic;
use function WeCodeArt\Functions\get_prop;
use function WeCodeArt\Functions\encode_svg_data;

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
            
                wecodeart( 'dom' )::wrap( 'select-placeholder', [
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
            
                wecodeart( 'dom' )::wrap( 'select-option', [
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
     * @since   6.4.1
     * @version 6.4.1
     *
     * @return 	string
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
        $symbol = encode_svg_data( join( '', [
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">',
				'<path fill="none" stroke="#343a40" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2 5 6 6 6-6"/>',
			'</svg>'
		] ) );

		return '
            select {
                text-transform: none;
                word-wrap: normal;
            }
            select:disabled {
                opacity: 1;
            }
            .form-select {
                --wp--input--icon-select: url("' . $symbol . '");
                display: block;
                width: 100%;
                padding: var(--wp--input--padding-y) 2.25rem var(--wp--input--padding-y) var(--wp--input--padding-x);
                -moz-padding-start: calc(var(--wp--input--padding-x) - 3px);
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--wp--input--color);
                background-color: var(--wp--input--background-color);
                background-image: var(--wp--input--icon-select);
                background-repeat: no-repeat;
                background-position: right var(--wp--input--padding-x) center;
                background-size: 1em .75em;
                border: var(--wp--input--border);
                border-radius: var(--wp--input--border-radius);
                transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                appearance: none;
            }
            .form-select:focus {
                border-color: var(--wp--input--border-color-focus);
                box-shadow: 0 0 0 .25rem var(--wp--preset--color--accent);
                outline: 0;
            }
            .form-select[multiple],
            .form-select[size]:not([size="1"]) {
                padding-right: var(--wp--input--padding-x);
                background-image: none;
            }
            .form-select:disabled {
                background-color: var(--wp--input--disabled-color);
            }
            .form-select:-moz-focusring {
                color: transparent;
                text-shadow: 0 0 0 #212529;
            }   
            .form-select-sm {
                padding-top: .25rem;
                padding-bottom: .25rem;
                padding-left: .75rem;
                font-size: var(--wp--preset--font-size--small);
                border-radius: calc(0.75 * var(--wp--input--border-radius));
            }   
            .form-select-lg {
                padding-top: .5rem;
                padding-bottom: .5rem;
                padding-left: 1rem;
                font-size: var(--wp--preset--font-size--medium);
                border-radius: calc(1.25 * var(--wp--input--border-radius));
            }

            .was-validated .form-select:is(:valid,:invalid):not([multiple]):where(:not([size]),[size="1"]),
            .form-select:is(.is-valid,.is-invalid):not([multiple]):where(:not([size]),[size="1"]) {
                padding-right: 4.125rem;
                background-position: right var(--wp--input--padding-x) center, center right 2.25rem;
                background-size: 16px 12px, var(--wp--input--validation-size);
            }
            .was-validated .form-select:valid:not([multiple]):is(:not([size]),[size="1"]),
            .form-select.is-valid:not([multiple]):is(:not([size]),[size="1"]) {
                background-image: var(--wp--input--icon-select), var(--wp--input--icon-valid);
            }
            .was-validated .form-select:invalid:not([multiple]):is(:not([size]),[size="1"]),
            .form-select.is-invalid:not([multiple]):is(:not([size]),[size="1"]) {
                background-image: var(--wp--input--icon-select), var(--wp--input--icon-invalid);
            }
            .was-validated .form-select:valid,
            .form-select.is-valid {
                border-color: var(--wp--preset--color--success);
            }
            .was-validated .form-select:invalid,
            .form-select.is-invalid {
                border-color: var(--wp--preset--color--danger);
            }
            .was-validated .form-select:valid:focus,
            .form-select.is-valid:focus {
                border-color: var(--wp--preset--color--success);
                box-shadow: 0 0 0 .25rem rgba(125, 200, 85, 0.25);
            }
            .was-validated .form-select:invalid:focus,
            .form-select.is-invalid:focus {
                border-color: var(--wp--preset--color--danger);
                box-shadow: 0 0 0 .25rem rgba(220, 53, 69, 0.25);
            }

            @media (prefers-reduced-motion: reduce) {
                .form-select {
                    transition: none;
                }
            }
        ';
	}
}