<?php

/**
 * Render callback for the Popup Block.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @param array  $attributes Block attributes.
 * @param string $content    Inner block content.
 * @return string Rendered block output.
 */
function acwpblocks_render_popup_block($attributes, $content)
{
	$popup_id = !empty($attributes['popupId']) ? sanitize_text_field($attributes['popupId']) : '';

	return sprintf(
		'<div %s data-popup-id="%s">%s</div>',
		get_block_wrapper_attributes(),
		esc_attr($popup_id),
		wp_kses_post($content)
	);
}
