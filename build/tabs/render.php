<?php

// Exit if accessed directly 
if( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Attributes
$text_align = isset( $attributes['textAlign'] ) ? $attributes['textAlign'] : null;
$header_justification = isset( $attributes['headerJustification'] ) ? $attributes['headerJustification'] : null;

// Wrapper
$class = 'wp-block-tt-tabs ';
$class .= $unique_class = wp_unique_id( 'wp-block-tt-tabs-' );
$class .= $text_align ? ' has-text-align-' . $text_align : null;
$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $class ) );

// Block content
$block_content = '<div ' . $wrapper_attributes . '>';
$block_content .= '<ul class="wp-block-tt-tabs-header">';
foreach ( $block->inner_blocks as $inner_block ) {
	$block_id = isset( $inner_block->attributes['uid'] ) ? $inner_block->attributes['uid'] : null;
	$header_button_text = isset( $inner_block->attributes['headerButtonText'] ) ? $inner_block->attributes['headerButtonText'] : null;
	$block_content .= '<li class="wp-block-tt-tab-header">';
	$block_content .= '<button class="wp-block-tt-tab-header-button" id="wp-block-tt-tab-header-button-' . $block_id . '">';
	$block_content .= '<span class="wp-block-tt-tab-header-button-text">' . $header_button_text . '</span>';
	$block_content .= '</button>';
	$block_content .= '</li>';
}
$block_content .= '</ul>';
$block_content .= wp_kses_post( $content );
$block_content .= '</div>';
echo wp_kses_post( $block_content );

?>