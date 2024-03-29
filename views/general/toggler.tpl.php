<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage  Navbar Toggler HTML
 * @since	 	5.0.0
 * @version    	6.1.7
 */

defined( 'ABSPATH' ) || exit;

wecodeart( 'styles' )->Components->load( [ 'toggler' ] );

/**
 * @param   mixed  	$id			Toggle ID
 * @param   mixed	$toggle		Toggle Type
 * @param   mixed	$icon		Toggle Icon
 */

?>
<button type="button" class="navbar-toggler" data-bs-toggle="<?php echo esc_attr( $toggle ); ?>" data-bs-target="#<?php echo esc_attr( $id ); ?>" aria-expanded="false" aria-label="<?php esc_attr_e( 'Toggle navigation', 'wecodeart' ); ?>">
	<?php if ( $icon ) : ?>
	<span class="navbar-toggler-icon"></span>
	<?php else : ?>
	<span class="navbar-toggler-text"><?php esc_html_e( 'Menu', 'wecodeart' ); ?></span>
	<?php endif; ?>
</button>