// hero swiper initialization

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// menu item display on click

let mobileMenuIcon= document.querySelector('header .fa-bars')
let menu= document.querySelector('header .menu')

mobileMenuIcon.addEventListener('click',function(){
  menu.classList.toggle("open");
})