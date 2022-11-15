import SlideNav from './modules/slide.js';
const slide = new SlideNav('.slide', '.wrap');
slide.init();
slide.addControl('.custom-control');

import ScrollSmooth from './modules/scroll-smooth.js';
const smooth = new ScrollSmooth('[data-scroll="smooth"] a[href^="#"]');
smooth.init();
