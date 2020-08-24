import { disableScroll } from './toggleScroll.js';
import { ebleScroll } from './toggleScroll.js';

export function animationScrolling(header, headerHeight) {
    $(function() {
        /* Varriables */

        const navigationItem = $('.navigation-item');
        const burgerNavigationItem = $('.burger-menu__navigation-item_link');
        const burgerMenu = $('.burger-menu');

        /* Functions */

        function scrollDesktop(event) {
            event.preventDefault();

            const target = event.target;
            const idVar = $(target).attr('href');
            let id = '';

            for (let i = 1; i <= idVar.length - 1; i++) {
                id += idVar[i];
            }

            const elementToScroll = $('#' + id);
            const distance = elementToScroll.offset().top;

            $('html, body').animate({
                'scrollTop': distance
            }, 750);
        }

        function scrollMobile(event, menu) {
            event.preventDefault();

            burgerMenu.animate({
                width: 0,
                padding: 0
            }, 400);

            ebleScroll(menu, header, headerHeight);

            setTimeout(() => {
                const target = event.target;
                const idVar = $(target).attr('href');
                let id = '';

                for (let i = 1; i <= idVar.length - 1; i++) {
                    id += idVar[i];
                }

                const elementToScroll = $('#' + id);
                const distance = elementToScroll.offset().top - $('.header-block').height();

                $('html, body').animate({
                    'scrollTop': distance
                }, 750);
            }, 400);
        }

        /* Event handlers */

        $(navigationItem).on('click', scrollDesktop);
        $(burgerNavigationItem).on('click', () => {
            scrollMobile(event, burgerMenu);
        });
    });
};