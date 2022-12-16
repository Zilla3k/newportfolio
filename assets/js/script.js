import SlideNav from './modules/slide.js';
import ScrollSmooth from './modules/scroll-smooth.js';
import MenuMobile from './modules/menu-mobile.js';

// SLideNav
const slide = new SlideNav('.slide', '.wrap');
slide.init();
slide.addControl('.custom-control');

// ScrollSmooth
const smooth = new ScrollSmooth('[data-scroll="smooth"] a[href^="#"]');
smooth.init();

// MenuMobile
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();
