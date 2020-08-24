import { disableScroll } from './toggleScroll.js';
import { ebleScroll } from './toggleScroll.js';

export function showBurgerMenu(header, headerHeight) {
    /* Varriables */

    const showBtn = $('.header-burger-menu__btn');
    const hideBtn = $('.hide-burger-menu__btn');
    const burgerMenu = $('.burger-menu');

    /* Functions */

    function showBurgerMenu(menu) {
        menu.animate({
            width: '100%',
            padding: '0 20px'
        }, 400);

        disableScroll(menu);
    }

    function hideBurgerMenu(menu) {
        menu.animate({
            width: 0,
            padding: 0
        }, 400);

        ebleScroll(menu, header, headerHeight);
    }

    /* Event handlers */

    showBtn.on('click', () => {
        showBurgerMenu(burgerMenu);
    });
    hideBtn.on('click', () => {
        hideBurgerMenu(burgerMenu);
    });
}