import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/revealonscroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testimonial'), "60%");