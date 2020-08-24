export function slider(items, btnPrev, btnNext, pos, sliderClass) {
    /* Functions */

    function next() {
        if (pos + 1 <= items.length - 1) {
            $(items).each(i => $(items[i]).addClass(sliderClass));

            pos++;
            $(items[pos]).css('opacity', 0);
            $(items[pos]).removeClass(sliderClass);
            $(items[pos]).animate({
                opacity: 1
            }, 400);

            console.log(pos);
        } else if (pos + 1 > items.length - 1) {
            $(items).each(i => $(items[i]).addClass(sliderClass));

            pos = 0;
            $(items[pos]).css('opacity', 0);
            $(items[pos]).removeClass(sliderClass);
            $(items[pos]).animate({
                opacity: 1
            }, 400);
            console.log(pos);
        }
    }

    function back() {
        if (pos - 1 >= 0) {
            $(items).each(i => $(items[i]).addClass(sliderClass));

            pos--;
            $(items[pos]).css('opacity', 0);
            $(items[pos]).removeClass(sliderClass);
            $(items[pos]).animate({
                opacity: 1
            }, 400);
        } else if (pos - 1 < 0) {
            $(items).each(i => $(items[i]).addClass(sliderClass));

            pos = items.length - 1;
            $(items[pos]).css('opacity', 0);
            $(items[pos]).removeClass(sliderClass);
            $(items[pos]).animate({
                opacity: 1
            }, 400);
        }
    }

    /* Event handlers */

    btnNext.on('click', next);

    btnPrev.on('click', back);
}