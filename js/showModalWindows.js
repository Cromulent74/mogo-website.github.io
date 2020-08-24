import { disableScroll } from './toggleScroll.js';
import { ebleScroll } from './toggleScroll.js';

export function showModalWindows(header, headerHeight) {
    $(function() {
        /* Varriables */

        const learnMore = $('.learn-more');
        const learnMoreBg = $('.modal-window__learn-more_bg');
        const learnMore__modalWindow = $('.modal-window__learn-more_bg');
        const learnMoreForm = $('.modal-window__learn-more');
        const closeBtn = $('.close-modal-window-container');

        /* Functions */

        function showModalWindow(modal, targetBtn, form, e) {
            /* Disable scroll */

            disableScroll(modal);

            modal.css('top', $(window).scrollTop() + 'px');

            e.preventDefault();

            modal.css('display', 'flex');
            modal.animate({
                opacity: 1
            }, 400);

            setTimeout(() => {
                if ($(window).height() <= 1080 && $(window).height() > 900) {
                    form.animate({
                        height: '50%',
                        padding: '100px 35px 75px 35px'
                    }, 400);
                } else if ($(window).height() <= 900 && $(window).height() > 600) {
                    form.animate({
                        height: '60%',
                        padding: '100px 35px 75px 35px'
                    }, 400);
                } else if ($(window).height() <= 600) {
                    form.animate({
                        height: '85%',
                        padding: '100px 20px 75px 20px'
                    }, 400);
                } else if ($(window).height() > 1080) {
                    form.animate({
                        height: '35%',
                        padding: '100px 35px 75px 35px'
                    }, 400);
                }
            }, 400);
        }

        function closeModalWindow__btn(closeBtn, form, modal) {
            /* Eble scroll */

            ebleScroll(modal, header, headerHeight);
            
            form.animate({
                height: '0',
                padding: '0 35px 0 35px'
            }, 400);

            setTimeout(() => {
                modal.animate({
                    opacity: 0
                }, 400);
                setTimeout(() => {
                    modal.css('display', 'none');
                    modal.css('top', 'auto');
                }, 400);
            }, 400);
        }

        /* Event handlers */

        learnMore.on('click', (e) => {
            showModalWindow(learnMore__modalWindow, learnMore, learnMoreForm, e);
        });

        closeBtn.on('click', () => {
            closeModalWindow__btn(closeBtn, learnMoreForm, learnMore__modalWindow);
        });

        learnMoreBg.on('click', (e) => {
            if (!$(e.target).hasClass('modal-window__learn-more_bg'))
                return false;
            else
                closeModalWindow__btn(closeBtn, learnMoreForm, learnMore__modalWindow);
        });
    });
}