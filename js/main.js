lightGallery(document.querySelector(".gallery__wrapper"))

// Can also be included with a regular script tag
// import Typed from 'typed.js';

let options = {
  strings: ['Web Develope' , 'Frontend'],
  typeSpeed: 40,
  showCursor: false,
  backSpeed: 50,
  loop: true,
  
};

let typed = new Typed('.hello', options);

AOS.init({
    once: true
});