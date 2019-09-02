const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const workButton = document.querySelector('.work-button');
const botWorkButton = document.querySelector('.bot-work-button');
const contactButton = document.querySelector('.contact-button');
const homeButton = document.querySelector('.home-button');
var slidePosition = 2;
//console.log(slides);

const slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slideWidth);

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const orinalMove = (track) => {
  track.style.transform = 'translateX(-' + slides[2].style.left + ')';
}

const moveToSlide = (track, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
}

homeButton.addEventListener('mouseover', e => {
  const nextSlide = slides[2];
  slidePosition = 2;
  moveToSlide(track, nextSlide);
});

document.getElementById("work-image").addEventListener('mouseover', e => {
  const nextSlide = slides[4];
  slidePosition = 4;
  moveToSlide(track, nextSlide);
});

document.getElementById("contact-image").addEventListener('mouseover', e => {
  const nextSlide = slides[0];
  slidePosition = 0;
  moveToSlide(track, nextSlide);
});

workButton.addEventListener('mouseover', e => {
  if (slidePosition == 4){
    null;
  }
  else {
    const nextSlide = slides[3];
    slidePosition = 3;
    moveToSlide(track, nextSlide);
  }
});

workButton.addEventListener('click', e => {
  if (slidePosition == 4){
    null;
  }
  else {
    const nextSlide = slides[4];
    slidePosition = 4;
    moveToSlide(track, nextSlide);
  }
});

botWorkButton.addEventListener('mouseover', e => {
  if (slidePosition == 4){
    null;
  }
  else {
    const nextSlide = slides[3];
    slidePosition = 3;
    moveToSlide(track, nextSlide);
  }
});

botWorkButton.addEventListener('click', e => {
  if (slidePosition == 4){
    null;
  }
  else {
    const nextSlide = slides[4];
    slidePosition = 4;
    moveToSlide(track, nextSlide);
  }
});

contactButton.addEventListener('mouseover', e => {
  if (slidePosition == 0){
    null;
  }
  else {
    const nextSlide = slides[1];
    slidePosition = 1;
    moveToSlide(track, nextSlide);
  }
});

contactButton.addEventListener('click', e => {
  if (slidePosition == 0){
    null;
  }
  else {
    const nextSlide = slides[0];
    slidePosition = 0;
    moveToSlide(track, nextSlide);
  }
});

window.onload = orinalMove(track);
