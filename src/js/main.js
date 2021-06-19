/*JS*/
'use strict';

import {verticalPosition, isPartialyVisible, throttle, TimeDifference} from './components/goodies.js';
import {sliderLaunch} from './components/slider.js';
import {tabToggle, tabUnderline} from './components/tabs.js';
import {enableHover, disableHover} from './components/hover_toggle.js';
import {preventScroll} from './components/scrolling.js';
import {pageAnimations} from './components/page_animations.js';

const SLIDERS = document.querySelectorAll('.glide');
const INTRO = document.querySelector('.intro');
const HEADER = document.querySelector('.header');
const MOBILE_MENU = document.querySelector('.mobile-menu');
const HAMBURGER = document.querySelector('.js-checkbox');
const TABS = [...document.querySelectorAll('.js-tab')];
const TAB_HOLDER = document.querySelector('.js-tab-link');
const TAB_LINE = document.querySelector('.js-tab-underline');
const TAB_FIRST = document.querySelector('.js-tab-link--first');

const SLIDER_CONFIGS = [
    {   type: 'carousel',
        startAt: 0,
        perView: 3,
        gap: 40,
        autoplay: 10000,
        breakpoints: {
            1250: {
                gap: 20
            },
            1080: {
                perView: 2
            },
            680: {
                perView: 1
            }
        }
    },
    {   autoplay: 3000,
        type: 'carousel',
        startAt: 0,
        gap: 0,
        perView: 1
    }
];

const ANIMATED_ITEMS = [
    {   item: [...document.querySelectorAll('.heading-secondary')],
        classList: 'animated-string'    },
    {   item: [...document.querySelectorAll('.btn')],
        classList: 'animated-btn'       },
    {   item: [...document.querySelectorAll('.js-string')],
        classList: 'animated-string'    },
    {   item: [...document.querySelectorAll('.js-string--left')],
        classList: 'animated-string--left'  },
    {   item: [...document.querySelectorAll('.js-string--right')],
        classList: 'animated-string--right' }
];

const BACKGROUNDED_MENU = [
    {   item: HEADER,
        classList: 'header--filled'     },
    {   item: MOBILE_MENU,
        classList: 'mobile-menu--highlighted'}
];

//animate items on page
let animatedItems = throttle(function () {

    for (let complex of ANIMATED_ITEMS) {
        pageAnimations(complex, isPartialyVisible);
    }

    for (let complex of BACKGROUNDED_MENU) {
        (verticalPosition(INTRO, -150)) ? complex.item.classList.add(complex.classList)
            : complex.item.classList.remove(complex.classList);
    }
}, 50);

window.addEventListener('scroll', () => {
    animatedItems();
}, false);

//tabs toggle
if (TAB_HOLDER) {
    TAB_HOLDER.addEventListener('click', event => {
        if ([...event.target.classList].includes('tab-box__link')) {
            tabToggle(event, TABS, 'tab-box__tab--visible');
            tabUnderline(TAB_LINE, TAB_HOLDER, event.target);
        }
    });
}

//prevent scrolling when mobile menu
if (MOBILE_MENU) {
    MOBILE_MENU.addEventListener('click', event => {
        preventScroll(event, HAMBURGER, 'js-checkbox');
    });
}

//detect touch device, disable/disable hover effects and scroll when mobile menu
let time = new TimeDifference();

document.addEventListener('touchstart', () => {
    time.current = new Date();
    disableHover();
    (HAMBURGER.checked) ? document.body.style.overflow = 'hidden'
        : document.body.style.overflow = 'auto';
}, true);

document.addEventListener('mousemove', () => {
    if(time.difference >= 500){
        enableHover();
    }

}, true);

//launch  sliders and tabs underline
document.addEventListener("DOMContentLoaded", () => {
    if (SLIDERS && SLIDER_CONFIGS) {
        sliderLaunch(SLIDERS, SLIDER_CONFIGS);
    }

    if (TAB_LINE && TAB_HOLDER && TAB_FIRST) {
        setTimeout(tabUnderline, 500, TAB_LINE, TAB_HOLDER, TAB_FIRST);
    }
});
