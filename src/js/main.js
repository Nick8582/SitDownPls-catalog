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
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    501: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 36,
    },
    993: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32
    },
  },
  a11y: false,
});

const rating = document.querySelector('.rating');
const cardDisplay = rating.querySelectorAll('.card__wrap');
let winWidth = window.screen.width;

const resize = () => {
  winWidth = window.screen.width
  if(winWidth > 1309) {
    for(let i = 0; i < cardDisplay.length; i++) {
      cardDisplay[i].style.display = 'block';

    }
  } else if(winWidth < 1310) {
    for(let i = 0; i < cardDisplay.length; i++) {
      if( i > 5 ) {
        cardDisplay[i].style.display = 'none';
      }
    }
  }
}


window.addEventListener('resize', () => {
  resize()
});

(() => {
  resize();
})()
