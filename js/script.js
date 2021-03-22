/* Popup */

const open = document.querySelector('.contacts_button');
const popup = document.querySelector('.modal');
const close = document.querySelector('.modal_close_button');
const form = popup.querySelector('.modal_form');
const username = popup.querySelector('[name=username]');

open.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal_show');
  username.focus();
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal_show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal_show')) {
      evt.preventDefault();
      popup.classList.remove('modal_show');
    }
  }
});

/* Slider */

const slideToggle = document.querySelector('.slide_control');
const slideImg = document.querySelector('.features_item');

slideToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  slideToggle.classList.add('slide_control--current:before');
  slideImg.classList.add('features_item--curent');
});

