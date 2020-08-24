export function scrollHandler(header, headerHeight) {
    /* Varriables */
    const scrollDistance = $(window).scrollTop();

    if (scrollDistance >= headerHeight) {
        $('.fakeHeader').show();
        header.addClass('fixedHeader');
    } else {
        $('.fakeHeader').hide();
        header.removeClass('fixedHeader');
    }
}