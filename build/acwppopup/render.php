<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

function acwp_render_popup_block($attributes, $content)
{
	$popup_id = isset($attributes['popupId']) ? sanitize_text_field($attributes['popupId']) : '';

	return sprintf(
		'<div %s data-popup-id="%s">%s</div>',
		get_block_wrapper_attributes(),
		esc_attr($popup_id),
		wp_kses_post($content)
	);
}
