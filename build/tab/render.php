<?php

// Exit if accessed directly 
if( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Attributes
$block_id = isset( $attributes['uid'] ) ? $attributes['uid'] : null;
$text_align = isset( $attributes['textAlign'] ) ? $attributes['textAlign'] : null;

// Wrapper
$class = 'wp-block-tt-tab-panel ';
$class .= $unique_class = wp_unique_id( 'wp-block-tt-tab-panel-' );
$class .= $text_align ? ' has-text-align-' . $text_align : null;
$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $class ) );

// Block content
$block_content = '<div ' . $wrapper_attributes .' id="wp-block-tt-tab-panel-' . $block_id . '" role="region">';
$block_content .= wp_kses_post( $content );
$block_content .= '</div>';
echo wp_kses_post( $block_content );

?>