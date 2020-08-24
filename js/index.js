import { animationScrolling } from './animationScroll.js';
import { fixedHeader } from './fixedHeader.js';
import { showModalWindows } from './showModalWindows.js';
import { checkInputs } from './checkInputInModal.js';
import { showBurgerMenu } from './showBurgerMenu.js';
import { accordian } from './accordian.js';
import { slider } from './sliderModule.js';

/* Varriables */

const header = $('.header');
const headerHeight = $('.header-container').height();

const quoteItems = $('.slider-quote__item');
const quoteBtnPrev = $('.slider-quote__btn-prev');
const quoteBtnNext = $('.slider-quote__btn-next');
const quotePos = 0;

const testmonialItems = $('.testimonial-slider__item');
const testmonialBtnPrev = $('.testimonial-btn-prev');
const testmonialBtnNext = $('.testimonial-btn-next');
const testmonialPos = 0;

/* Functions */

animationScrolling(header, headerHeight);

fixedHeader(header, headerHeight);

showModalWindows(header, headerHeight);
checkInputs();

showBurgerMenu(header, headerHeight);

accordian();

slider(quoteItems, quoteBtnPrev, quoteBtnNext, quotePos, 'slider-quote__item_noactive');
slider(testmonialItems, testmonialBtnPrev, testmonialBtnNext, testmonialPos, 'testimonial-slider__item__noactive');