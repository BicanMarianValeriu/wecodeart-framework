<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Author Box Template
 * @since 		3.0.3
 * @version		3.7.3
 */

if ( ! defined( 'ABSPATH' ) ) exit(); 
?>
<div id="author-box" class="author-box">
	<div class="<?php echo esc_attr( $container ); ?>">
		<div class="row">
			<div class="author-box__name col-12">
				<h3 class="author-box__headline">
					<?php echo $icon; ?>	
					<span><?php echo wp_kses_post( implode( ' ', [ $intro, $name ] ) ); ?></span>
				</h3>
			</div>
			<div class="author-box__gravatar col-12 col-md-auto text-center text-md-left"><?php
				echo wp_kses( $avatar, [ 'img' => [
					'alt'    => true,
					'class'  => true,
					'height' => true,
					'src'    => true,
					'srcset' => true,
					'width'  => true,
				] ] );
			?></div>
			<div class="author-box__description col">
				<?php echo wp_kses_post( $description ); ?>
				<a class="author-box__website btn btn-sm btn-outline-primary float-right"
					href="<?php echo esc_url( $url ); ?>" target="_blank" rel="nofollow">
					<?php echo $website['icon']; ?>
					<span><?php echo esc_html( $website['label'] ); ?></span>
				</a>
			</div>
		</div>
	</div>
</div>
<!-- /author-box -->