import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './display.js';
import loadRestaurants from './display.js';

loadRestaurants();

const menuBtn = document.getElementById('menu');
const offcanvas = document.getElementById('offcanvas');
const main = document.querySelector('main');
const hero = document.querySelector('.hero');
const header = document.querySelector('header');

menuBtn.addEventListener('click', function (event) {
    offcanvas.classList.toggle('active');
    event.stopPropagation();
});

menuBtn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
        offcanvas.classList.toggle('active');
        event.stopPropagation();
    }
});

main.addEventListener('click', function () {
    offcanvas.classList.remove('active');
});

hero.addEventListener('click', function () {
    offcanvas.classList.remove('active');
});

header.addEventListener('click', function () {
    offcanvas.classList.remove('active');
});