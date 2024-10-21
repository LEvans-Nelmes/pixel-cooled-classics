<?php
/**
 * Plugin Name: pixel plugin
 * Description: Adds custom JavaScript functionality to your WordPress site.
 * Version: 1.0
 * Author: Liam, Pixel-Cooled Classics
 */
function custom_javascript_plugin() {
    // wp_enqueue_script( 'custom-script', plugin_dir_url( __FILE__ ) . 'js/custom.js', array( 'jquery' ), '1.0', true );

    wp_register_script('coloris.min', '/js/coloris.min.js', array(), '1.0');
	wp_register_style('coloris.min', '/js/coloris.min.css', array(), '1.0');
	wp_register_script('pcc_script_20241016', '/js/pcc_script_20241016.js', array(), '1.0');
	// wp_register_script('pcc_script_20240531', '/js/pcc_script_20240531.js', array(), '1.0');
	wp_register_style('pcc_style_20240531', '/js/pcc_style_20240531.css', array(), '1.0');
	
	
	
	
	wp_enqueue_script('coloris.min');
	wp_enqueue_style('coloris.min');
	// wp_enqueue_script('pcc_script_20240531');
	wp_enqueue_script('pcc_script_20241016');
	wp_enqueue_style('pcc_style_20240531');

}
add_action( 'wp_enqueue_scripts', 'custom_javascript_plugin' );