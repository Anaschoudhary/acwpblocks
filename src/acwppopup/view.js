/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 */

document.addEventListener('DOMContentLoaded', () => {
    const popups = document.querySelectorAll('[class^="popup-block acwp-"]');

    popups.forEach((popup) => {
        const popupId = popup.className.match(/acwp-(\S+)/)[1];

        // Find all buttons or elements with matching popupId as their class
        const triggers = document.querySelectorAll(`[class~="${popupId}"]`);
        const closeButton = popup.querySelector('.popup-close');

        // Open popup when a trigger is clicked
        triggers.forEach((trigger) => {
            trigger.addEventListener('click', (event) => {
                event.preventDefault();
                // Close all other popups
                closeAllPopups();
                // Open the desired popup
                popup.classList.add('is-visible');
            });
        });

        // Close popup when the close button is clicked
        closeButton?.addEventListener('click', () => {
            popup.classList.remove('is-visible');
        });

        // Close popup when clicking outside the content
        popup.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.classList.remove('is-visible');
            }
        });
    });

    // Function to close all popups
    function closeAllPopups() {
        popups.forEach((popup) => {
            popup.classList.remove('is-visible');
        });
    }
});
