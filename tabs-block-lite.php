<?php
/**
 * Plugin Name:       Tabs Block Lite
 * Plugin URI:        https://github.com/troytempleman/tabs-block-lite
 * Description:       A block that displays horizontal list items that can be selected to show their associated sections of content.
 * Version:           0.1.0
 * Requires at least: 6.0
 * Requires PHP:      7.0
 * Author:            Troy Templeman
 * Author URI:        http://troytempleman.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       tabs-block
 * Domain Path:       /languages
 */

// Exit if accessed directly 
if( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Register block
function tabs_block_register() {
	
	// Tabs
	register_block_type( 
		__DIR__ . '/build/tabs'
	);
	// Tab
	register_block_type(
		__DIR__ . '/build/tab'
	);
}
add_action( 'init', 'tabs_block_register' );
