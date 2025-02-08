<?php

/**
 * Plugin Name:       Acwpblocks
 * Description:       Acwpblocks — is a Gutenberg plugin created with multiple usefull blocks.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Anas Choudhary
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
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function acwpblocks_acwpblocks_block_init()
{
	register_block_type(__DIR__ . '/build/acwppopup', [
		'render_callback' => 'acwp_render_popup_block',
	]);
}
add_action('init', 'acwpblocks_acwpblocks_block_init');
