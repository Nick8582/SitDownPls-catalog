let reg = document.querySelector(".header__select");
new Choices(reg, {
  searchEnabled: !1,
  itemSelectText: "",
  shouldSort: !1,
  classNames: {containerOuter: "choices choices__region", list: "choices__list--region", flippedState: ""}
});
let fil = document.querySelector(".header__filter");
new Choices(fil, {
  searchEnabled: !1,
  itemSelectText: "",
  shouldSort: !1,
  classNames: {containerOuter:"choices choices__filter",list:"choices__list--filter",flippedState:""}
});
const burger = document.querySelector('.burger--menu');
const menu = document.querySelector('.bottom--menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
})

const swiperHero = new Swiper('.hero__slider', {
  autoplay: {delay: 4000},
  effect: "fade",
  fadeEffect: {crossFade: true},
  loop: true,
  pagination: {
    el: '.swiper-pagination-hero',
    clickable: true,
  },
});

const swiperOferta = new Swiper('.oferta__slider', {
  effect: 'horizontal',
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
