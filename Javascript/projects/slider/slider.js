let index = 0;
let speed = 3500;
let interval = null;
let button = true;

const container = document.querySelectorAll('.slider-container');
const buttons = document.querySelectorAll('.slider-button');
const slides = document.querySelectorAll('.slider img');

const w_container = slides[0].naturalWidth;
const h_container = slides[0].naturalHeight;
const _buttons = buttons[0].offsetHeight;

document.addEventListener('DOMContentLoaded', intialize);

function intialize() {
    buttons.forEach(_btn => {
        const _btnpos = (h_container/2) - _buttons - (_buttons/2);
        _btn.style.top = `${_btnpos}px`;
    });
    if (slides.length > 0) {
        slides[index].classList.add('show');
        interval = setInterval(nextSlide, speed);
    }
    if (button === false) {
        buttons.forEach(button => {
            button.classList.add('hide');
        });
    } 
}

function show(e) {
    if (e >= slides.length) {
        index = 0;
    } else if (e < 0) {
        index = slides.length -1;
    }
    slides.forEach(slide => {
        slide.classList.remove('show');
    });
    slides[index].classList.add('show');
}

function prevSlide() {
    index --;
    show(index);
}

function nextSlide() {
    index ++;
    show(index);
}