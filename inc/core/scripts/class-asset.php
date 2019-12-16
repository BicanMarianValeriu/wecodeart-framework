<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Core/Scripts/Asset
 * @copyright   Copyright (c) 2019, WeCodeArt Framework
 * @since 		3.9.5
 * @version		3.9.5
 */ 

namespace WeCodeArt\Core\Scripts;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Config\Interfaces\ConfigInterface;
use WeCodeArt\Config\Exceptions\FileNotFoundException;

/**
 * Framework Assets
 */
class Asset {

	/**
     * Theme config instance.
     *
     * @var \WeCodeArt\Config\Interfaces\ConfigInterface
     */
	protected $config;
	
    /**
     * Asset file.
     *
     * @var string
     */
	protected $file;
	
    /**
     * Construct asset.
     *
     * @param \WeCodeArt\Config\Interfaces\ConfigInterface $config
     */
    public function __construct( ConfigInterface $config ) {
        $this->config = $config;
	}
	/**
     * Get asset file URI.
     *
     * @return string
     */
    public function get_uri() {
        if ( $this->file_exists( $file = $this->get_public_path() ) ) {
            return $this->get_public_uri();
        }
        throw new FileNotFoundException("Asset file [$file] cannot be located.");
	}
	
    /**
     * Get asset file path.
     *
     * @return string
     */
    public function get_path() {
        if ( $this->file_exists( $file = $this->get_public_path() ) ) {
            return $file;
        }
        throw new FileNotFoundException("Asset file [$file] cannot be located.");
	}
	
    /**
     * Gets asset uri path.
     *
     * @return string
     */
    public function get_public_uri() {
        $uri = $this->config['paths']['uri'];
        return $uri . '/' . $this->get_relative_path();
	}

    /**
     * Gets asset directory path.
     *
     * @return string
     */
    public function get_public_path() {
        $directory = $this->config['paths']['directory'];
        return $directory . '/' . $this->get_relative_path();
	}
	
    /**
     * Gets asset relative path.
     *
     * @return string
     */
    public function get_relative_path() {
        $public = $this->config['directories']['assets'];
        return $public . '/' . $this->file;
	}
	
    /**
     * Checks if asset file exsist.
     *
     * @param  string $file
     *
     * @return boolean
     */
    public function file_exists( $file ) {
        return file_exists( $file );
	}
	
    /**
     * Gets the Asset file.
     *
     * @return string
     */
    public function get_file() {
        return $this->file;
	}
	
    /**
     * Sets the Asset file.
     *
     * @param string $file the file
     *
     * @return self
     */
    public function set_file( $file ) {
        $this->file = $file;
        return $this;
    }
}