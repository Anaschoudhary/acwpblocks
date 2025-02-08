import { InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { popupId } = attributes;
            return (
                <div className={`popup-block acwp-${popupId}`}>
                    <div className="popup-content">
                        <button className="popup-close" aria-label="Close Popup">
                            &times;
                        </button>
                        <InnerBlocks.Content />
                    </div>
                </div>
            );
}
