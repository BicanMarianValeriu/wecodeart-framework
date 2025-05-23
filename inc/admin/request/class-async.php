<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Admin\Async
 * @copyright   Copyright (c) 2025, WeCodeArt Framework
 * @since 		5.0.0
 * @version		5.0.0
 */

namespace WeCodeArt\Admin\Request;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Admin\Request;

/**
 * This class handles a post request being send to a given endpoint.
 */
abstract class Async {

    /**
     * Prefix
     *
     * (default value: 'wp')
     *
     * @var     string
     * @access  protected
     */
    protected $prefix = 'wp';

    /**
     * Action
     *
     * @var     string
     * @access  protected
     */
    protected $action = 'async_request';

    /**
     * Identifier
     *
     * @var     mixed
     * @access  protected
     */
    protected $identifier;

    /**
     * Data
     *
     * @var     array
     * @access  protected
     */
    protected $data = [];

    /**
     * Initiate new async request
     */
    public function __construct() {
        $this->identifier = $this->prefix . '_' . $this->action;

        add_action( 'wp_ajax_' . $this->identifier,         [ $this, 'maybe_handle' ] );
        add_action( 'wp_ajax_nopriv_' . $this->identifier,  [ $this, 'maybe_handle' ] );
    }

    /**
     * Dispatch the async request
     *
     * @return array|WP_Error
     */
    public function dispatch() {
        $request = new Request( add_query_arg( $this->get_query_args(), $this->get_query_url() ), $this->get_post_args() );

		return $request->send( $request::METHOD_POST );
    }

    /**
     * Set data used during the request
     *
     * @param   array $data Data.
     *
     * @return  $this
     */
    public function data( $data ) {
        $this->data = $data;

        return $this;
    }

    /**
     * Get query args
     *
     * @return array
     */
    protected function get_query_args() {
        if ( property_exists( $this, 'query_args' ) ) {
            return $this->query_args;
        }

        return [
            'action' => $this->identifier,
            'nonce'  => wp_create_nonce( $this->identifier ),
        ];
    }

    /**
     * Get query URL
     *
     * @return string
     */
    protected function get_query_url() {
        if ( property_exists( $this, 'query_url' ) ) {
            return $this->query_url;
        }

        return admin_url( 'admin-ajax.php' );
    }

    /**
     * Get post args
     *
     * @return array
     */
    protected function get_post_args() {
        if ( property_exists( $this, 'post_args' ) ) {
            return $this->post_args;
        }

        return [
            'timeout'   => 0.01,
            'blocking'  => false,
            'body'      => $this->data,
            'cookies'   => $_COOKIE,
            'sslverify' => apply_filters( 'https_local_ssl_verify', false ),
        ];
    }

    /**
     * Handler
     */
    public function maybe_handle() {
        // Don't lock up other requests while processing
        session_write_close();

        $this->handle();

        wp_die();
    }

    /**
     * Handle
     *
     * Override this method to perform any actions required during the async request.
     */
    abstract protected function handle();
}