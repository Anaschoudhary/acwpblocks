<?php

/**
 * Plugin Name:       Acwpblocks
 * Description:       Acwpblocks — A Gutenberg plugin with multiple useful blocks.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Anas Choudhary
 * Author URI:        https://anaschoudhary.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       acwpblocks
 *
 * @package Acwpblocks
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Registers custom blocks.
 */
function acwpblocks_register_blocks()
{
	register_block_type(__DIR__ . '/build/acwppopup', [
		'render_callback' => 'acwpblocks_render_popup_block',
	]);
}
add_action('init', 'acwpblocks_register_blocks');

/**
 * Render callback function for the popup block.
 */
function acwpblocks_render_popup_block($attributes, $content)
{
	// Add custom PHP logic for rendering the popup block here (if needed).
	return $content;
}
