import { InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { popupId } = attributes;
      const sanitizedPopupId = popupId.replace(/[^a-zA-Z0-9_-]/g, '');
            return (
                <div className={`popup-block acwp-${sanitizedPopupId}`}>
                    <div className="popup-content">
                        <button className="popup-close" aria-label="Close Popup">
                            &times;
                        </button>
                        <InnerBlocks.Content />
                    </div>
                </div>
            );
}
