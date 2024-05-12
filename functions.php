<?php

// adding CSS and Js files
// For Local add this code in wp_enqueue param's => "NULL, microtime(), all"
function files_setup() {
    wp_enqueue_style('style', get_stylesheet_uri(), NULL, microtime(), all);
    wp_enqueue_script('main', get_theme_file_uri('/js/main.js'), NULL, microtime(), all);

}

add_action('wp_enqueue_scripts', 'files_setup');