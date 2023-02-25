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
use function WeCodeArt\Functions\get_prop;

/**
 * Standard Inputs Markup
 */
class Fieldset extends Base {

    /**
     * Input's Label - disabled.
     *
     * @since   5.0.0
     * @var     string
     */
    public $_label = 'none';

    /**
     * All choices tied to the control.
     *
     * @since   5.0.0
     * @var     array
     */
    public $choices = [];

    /**
     * Exclusive.
     *
     * @since   5.7.2
     * @var     bool
     */
    public $exclusive = false;
    
    /**
	 * Constructor 
	 */
	public function __construct( string $class = 'fieldset', array $args = [] ) {
        $type               = get_prop( $args, 'type', 'checkbox' );
        $this->unique_id    = wp_unique_id( 'fieldset-' );
        $this->type         = in_array( $type, [ 'radio', 'checkbox' ] ) ? $type : 'checkbox';
        $this->label        = get_prop( $args, 'label', '' );
        $this->exclusive    = get_prop( $args, 'exclusive', false );
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
        wecodeart( 'markup' )::wrap( 'fieldset-' . $this->type, [
            [
                'tag'   => 'span',
                'attrs' => [
                    'class' => get_prop( $this->attrs, [ 'class' ] ),
                ]
            ]
        ], function() {
            // Legend
            $this->get_label();
            
            // Fields
            $fields = '';
            foreach( $this->choices as $key => $label ) {
                // Create a basic input
                $fields .= wecodeart_input( 'toggle', [
                    'type'  => $this->type,
                    'label' => $label,
                    'attrs' => wp_parse_args( [
                        'value'		=> $key,
                        'name' 		=> $this->get_option_name( $key ),
                        'id'        => $this->get_option_id( $key ),
                        'checked'	=> $this->checked_option( $key ),
                    ], $this->attrs )
                ], false );
            }

            // Messages
            $fields .= $this->get_messages();

            // Already escaped in the Basic Input and its methods
            echo $fields; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        } );
    }

    /**
	 * Render the label HTML of the input
     *
     * @since   5.0.0
     * @version 5.7.2
     *
	 * @return	mixed|string
	 */
	public function get_label() {
        if( empty( $this->label ) ) return;

        wecodeart( 'markup' )::wrap( 'fieldset-label', [
            [
                'tag'   => 'label',
                'attrs' => [
                    'class' => 'd-block'
                ]
            ]
        ], $this->label );
    }

    /**
	 * Get Item Name
     *
     * @since   5.0.0
	 * @return	string
	 */
	public function get_option_name( string $item ): string {
        $value = '';
        
        if( $this->type === 'checkbox' ) {
            $value = get_prop( $this->attrs, 'name', $this->unique_id ) . ( $this->exclusive ? '[]' : '' );
        }

        if( $this->type === 'radio' ) {
            $value = get_prop( $this->attrs, 'name', $this->unique_id );
        }
        
        return $value;
    }

    /**
	 * Get Item ID
     *
     * @since   5.0.0
	 * @return	string
	 */
	public function get_option_id( string $item ): string {
        $value = get_prop( $this->attrs, 'name', $this->unique_id ) . '-' . sanitize_title_with_dashes( $item );

        return $value;
    }

    /**
	 * Checked Option
     *
     * @since   5.0.0
	 * @return	mixed|string
	 */
	public function checked_option( string $value ): bool {
        if( isset( $this->attrs['value'] ) ) {
            if( is_array( $this->attrs['value'] ) && in_array( $value, $this->attrs['value'] ) ) {
                return true;
            }

            if( is_string( $this->attrs['value'] ) && $this->attrs['value'] === $value ) {
                return true;
            }
        }

        return false;
    }

    /**
	 * Input styles.
	 *
	 * @return 	string
	 */
	public static function styles(): string {
		return '
            fieldset {
                min-width: 0;
                padding: 0;
                margin: 0;
                border: 0;
            }
            legend {
                float: left;
                width: 100%;
                padding: 0;
                margin-bottom: 1rem;
                font-size: inherit;
                font-weight: inherit;
                line-height: inherit;
            }
            legend + * {
                clear: left;
            }
        ';
	}
}