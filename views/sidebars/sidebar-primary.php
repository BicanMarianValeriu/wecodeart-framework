<?php if ( ! defined( 'ABSPATH' ) ) exit(); // Exit if accessed directly
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Primary Sidebar
 * @since 		v3.0.4
 * @version		v3.5
 */
?>
<aside id="primary-sidebar" class="primary-sidebar" itemscope="" itemtype="http://schema.org/WPSideBar">
	<?php 
		do_action( 'wecodeart/hook/sidebar/primary/before' );
		if( is_active_sidebar( 'primary' ) ) dynamic_sidebar( 'primary' ); 
		do_action( 'wecodeart/hook/sidebar/primary/after' );
	?>
</aside>
