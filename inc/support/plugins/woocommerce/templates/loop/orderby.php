<?php
/**
 * Show options for ordering
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/loop/orderby.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce\Templates
 * @version     3.6.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>
<form class="woocommerce-ordering" method="get"><?php

	wecodeart_input( 'select', [
		'attrs'		=> [
			'name'			=> 'orderby',
			'class'			=> 'form-select orderby',
			'aria-label'	=> esc_html__( 'Shop order', 'wecodeart' ),
			'value'			=> wc_clean( filter_input( INPUT_GET, 'orderby' ) ),
		],
		'choices'	=> $catalog_orderby_options
	] );
	
	wecodeart_input( 'hidden', [
		'attrs' => [
			'name' => 'paged',
			'value'=> '1'
		]
	] );

	wc_query_string_form_fields( null, [ 'orderby', 'submit', 'paged', 'product-page' ] );

?></form>
