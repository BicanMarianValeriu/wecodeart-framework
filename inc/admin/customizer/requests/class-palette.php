<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Customizer/Choices AJAX
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		5.0.0
 * @version		5.0.0
 */

namespace WeCodeArt\Admin\Customizer\Requests;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Singleton;
use WeCodeArt\Admin\Request\Async;
use WeCodeArt\Admin\Customizer\Requests;
use function WeCodeArt\Functions\get_prop;
use function WeCodeArt\Functions\set_settings_array;

/**
 * This class handles a post request being send to a given endpoint.
 */
class Palette extends Async {

    /**
     * Prefix
     *
     * @var     string
     * @access  protected
     */
    protected $prefix = 'wca';

    /**
     * Action
     *
     * @var     string
     * @access  protected
     */
    protected $action = 'update_palette';

    /**
     * Handle
     * 
     * @return  mixed
     */
    protected function handle() {
        $action     = filter_input( INPUT_POST, 'type', FILTER_SANITIZE_STRING );
        $value      = filter_input( INPUT_POST, 'value', FILTER_SANITIZE_STRING );
        $palette    = filter_input( INPUT_POST, 'palette' );
        
		if ( empty( $palette ) ) {
            wp_send_json_error( [
                'message' => esc_html__( 'Missing palette.', 'wecodeart' )
            ] );
        }

        $_updated = wecodeart_json( [ 'settings', 'custom', 'colorPalettes' ], [] );
        
        switch( $action ) :
            case 'update' : 
            // All new palettes: array of objects
                $_updated = json_decode( $palette, true );
            break;
            // Palette slug to remove: string
            case 'remove' : 
                $_updated = wp_list_filter( $_updated, [ 'slug' => $palette ], 'NOT' );
            break; 
            // Single new palette: object
            case 'add' :
                $_updated[] = json_decode( $palette, true );
            break;
        endswitch;

        // Update new palette
        Requests::update_palette( null, $_updated, $value );
        
        return wp_send_json_success( [
            'type'      => $action,
            'value'     => $value,
            'palette'   => $_updated
        ] );
    }
}