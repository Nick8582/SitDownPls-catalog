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

const swiper = new Swiper('.hero__slider', {

  direction: 'horizontal',
  loop: true,
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
