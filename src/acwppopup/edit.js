/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element}
 */
export default function Edit({ attributes, setAttributes }) {
	const { popupId } = attributes;
	const blockProps = useBlockProps({
        className: 'acwp-popup-block-editor',
    });
			return (
				 <div {...blockProps}>
					<TextControl
						label={__('Popup ID', 'acwpblocks')}
						value={popupId}
						onChange={(value) => setAttributes({ popupId: value })}
						placeholder={__('Enter a popup ID', 'acwpblocks')}
						style={{ maxWidth: '300px' }}
					/>

					<div className='acwp-popup-block-content'>
						<InnerBlocks 
							renderAppender={InnerBlocks.ButtonBlockAppender} 
							placeholder={__('Add any block here', 'acwpblocks')}
						/>
					</div>
				</div>
	);
}
