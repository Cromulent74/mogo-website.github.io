import { scrollHandler } from './scrollHandler.js';

export function fixedHeader(header, headerHeight) {
    $(function() {
        /* Event handlers */
        
        $(window).on('scroll', () => {
            scrollHandler(header, headerHeight);
        });
    });
};