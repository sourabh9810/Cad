'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);



// readMorePopup js file


const trigger = document.querySelector('#trigger');
const modalWrapper = document.querySelector('.modal__wrapper');
const closeBtn = document.querySelector('.close');

trigger.addEventListener('click', function(){
    openModal();
});

closeBtn.addEventListener('click', function(){
    closeModal();
});

modalWrapper.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal();
});



function openModal() {
    modalWrapper.classList.add('active');
}
function closeModal() {
    modalWrapper.classList.remove('active');
}


// #EDF2F7



// course tamplate 2


const triggerpoint1 = document.querySelector('#trigger1');
const modalWrapper1 = document.querySelector('.modal__wrapper1');
const closeBtn1 = document.querySelector('.close1');

triggerpoint1.addEventListener('click', function(){
    openModal1();
});

closeBtn1.addEventListener('click', function(){
    closeModal1();
});

modalWrapper1.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal1();
});



function openModal1() {
    modalWrapper1.classList.add('active');
}
function closeModal1() {
    modalWrapper1.classList.remove('active');
}


// course tamplate 3


const triggerpoint2 = document.querySelector('#trigger2');
const modalWrapper2 = document.querySelector('.modal__wrapper2');
const closeBtn2 = document.querySelector('.close2');

triggerpoint2.addEventListener('click', function(){
    openModal2();
});

closeBtn2.addEventListener('click', function(){
    closeModal2();
});

modalWrapper2.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal2();
});



function openModal2() {
    modalWrapper2.classList.add('active');
}
function closeModal2() {
    modalWrapper2.classList.remove('active');
}

// facalties slider

const swiper = new Swiper('.slider-wrapper', {
    
  loop: true,
  grabCurser:true,
  // spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    
  breakpoints:{
      0:{
       slidesPerView:1
      },
      922:{
        slidesPerView:2
       },
    
      1224:{
       slidesPerView:3
      },

  }
  
});

// FAQ's

const triggerpoint3 = document.querySelector('#faqtrigger');
const modalWrapper3 = document.querySelector('.modal__wrapper3');
const closeBtn3 = document.querySelector('.close3');

triggerpoint3.addEventListener('click', function(){
    openModal3();
});

closeBtn3.addEventListener('click', function(){
    closeModal3();
});

modalWrapper3.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal3();
});



function openModal3() {
    modalWrapper3.classList.add('active');
}
function closeModal3() {
    modalWrapper3.classList.remove('active');
}

// course modal wrapper5 popup js 

const triggerpoint5 = document.querySelector('#trigger5');
const modalWrapper5 = document.querySelector('.modal__wrapper5');
const closeBtn5 = document.querySelector('.close5');

triggerpoint5.addEventListener('click', function(){
    openModal5();
});

closeBtn5.addEventListener('click', function(){
    closeModal5();
});

modalWrapper5.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal5();
});


function openModal5() {
    modalWrapper5.classList.add('active');
}
function closeModal5() {
    modalWrapper5.classList.remove('active');
}

// course modal wrapper5 popup js 

const triggerpoint4 = document.querySelector('#trigger4');
const modalWrapper4 = document.querySelector('.modal__wrapper4');
const closeBtn4 = document.querySelector('.close4');

triggerpoint4.addEventListener('click', function(){
    openModal4();
});

closeBtn4.addEventListener('click', function(){
    closeModal4();
});

modalWrapper4.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal4();
});
function openModal4() {
    modalWrapper4.classList.add('active');
}
function closeModal4() {
    modalWrapper4.classList.remove('active');
}

// course modal wrapper6 popup js 

const triggerpoint6 = document.querySelector('#trigger6');
const modalWrapper6 = document.querySelector('.modal__wrapper6');
const closeBtn6 = document.querySelector('.close6');

triggerpoint6.addEventListener('click', function(){
    openModal6();
});

closeBtn6.addEventListener('click', function(){
    closeModal6();
});

modalWrapper6.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal6();
});
function openModal6() {
    modalWrapper6.classList.add('active');
}
function closeModal6() {
    modalWrapper6.classList.remove('active');
}