import { scrollHandler } from './scrollHandler.js';

export function disableScroll(item) {
    /* Varriables */

    const currentScrollY = $(window).scrollTop();
    const currentScrollX = $(window).scrollLeft();

    /* Disable scroll */

    $(window).on('scroll', () => {
        window.scrollTo(currentScrollX, currentScrollY);
    });
    $(window).on('touchmove', (e) => {
        e.preventDefault();
    });
    $(item[0]).addClass('disable-scroll');
}

export function ebleScroll(item, header, headerHeight) {
    /* Eble scroll */

    $(window).off('scroll');
    $(window).off('touchmove');
    setTimeout(() => {
        $(window).on('scroll', () => {
            scrollHandler(header, headerHeight);
        });
        $(item).removeClass('disable-scroll');
    }, 400);
}