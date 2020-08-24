export function accordian() {
    /* Varriables */

    const accordians = $('.what-we-do__accordian');
    const accordiansBtn = $('.accordian__header_btn');
    const accordiansContent = $('.accordian__content');

    /* Event handlers */

    accordiansBtn.each((i) => {
        $(accordiansBtn[i]).on('click', () => {
            if ($(accordians[i]).hasClass('accordian-active')) {
                $(accordiansContent[i]).animate({
                    height: '0px',
                    padding: '0 15px'
                }, 400);
                setTimeout(() => {
                    $(accordians[i]).removeClass('accordian-active');
                }, 400);
            } else {
                const content = $('.accordian-active').find('.accordian__content');
                $(content).animate({
                    height: '0px',
                    padding: '0 15px'
                }, 400);

                setTimeout(() => {
                    $('.accordian-active').removeClass('accordian-active');
                    $(accordians[i]).addClass('accordian-active');
                    $(accordiansContent[i]).animate({
                        height: '180px',
                        padding: '20px 15px'
                    }, 400);
                }, 400);
            }
        });
    });
}