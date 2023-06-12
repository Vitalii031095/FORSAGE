
let btn = document.querySelector('.header__btn');
let nav = document.querySelector('.header__nav')
let icon = document.querySelector('.menu__icon')
btn.addEventListener('click', function(){
 btn.classList.toggle('_active');
 nav.classList.toggle('_active');
 icon.classList.toggle('_active');
});

let navButtons = document.querySelectorAll('.header__link');

navButtons.forEach((e)=>{e.addEventListener('click',(e) => {nav.classList.toggle('_active');
btn.classList.toggle('_active');
icon.classList.toggle('_active');
});})



// let Widths = window.innerWidth;
// console.log(Widths)
// if(Widths < 580){
// let createb = document.createAttribute('li');
// createb =
// }




const slider = new Swiper('.benzin-swiper__img', {
navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
},
// pagination: {
//    el: '.swiper-pagination',
//    clickable:true,
  
//  },
 scrollbar: {
   el: '.swiper-scrollbar',
   draggable:true,
 }
 });

const twoSlider = new Swiper('.values__swiper',{
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
} )








	