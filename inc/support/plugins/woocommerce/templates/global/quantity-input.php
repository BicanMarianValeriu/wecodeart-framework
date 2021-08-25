<?php
/**
 * Product quantity inputs
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/global/quantity-input.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 4.0.0
 */

defined( 'ABSPATH' ) || exit;

?>
<div class="quantity me-3">
<?php if ( $max_value && $min_value === $max_value ) {

    wecodeart_input( 'hidden', [
		'attrs' => [
            'class' => 'qty',
			'name'  => $input_name,
			'value' => $min_value,
            'id'    => $input_id
		]
	] );

} else {
	/* translators: %s: Quantity. */
	$label = ! empty( $args['product_name'] ) ? sprintf( esc_html__( '%s quantity', 'woocommerce' ), wp_strip_all_tags( $args['product_name'] ) ) : esc_html__( 'Quantity', 'woocommerce' );
        
    do_action( 'woocommerce_before_quantity_input_field' );
    
    wecodeart_input( 'number', [
        'attrs' => [
            'class' => 'form-control ' . join( ' ', (array) $classes ),
            'name'  => $input_name,
            'value' => $input_value,
            'id'    => $input_id,
            'step'  => $step,
            'min'   => $min_value,
            'max'   => 0 < $max_value ? $max_value : '',
            // 'size'  => '4', // HTML Invalid
            'title' => _x( 'Qty', 'Product quantity input tooltip', 'woocommerce' ),
            'placeholder'   => $placeholder,
            'inputmode'     => $inputmode
        ]
    ] );
    
    do_action( 'woocommerce_after_quantity_input_field' );
}
?>
</div>
