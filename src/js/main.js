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
    nextEl: '.oferta__button-next',
    prevEl: '.oferta__button-prev',
  },
  breakpoints: {
    501: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    993: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 33,
    },
    1311: {
      spaceBetween: 32,
    },
  },
  a11y: false,
});

const swiperSpecial = new Swiper('.special__slider', {
  effect: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 32,
  navigation: {
    nextEl: '.special__button-next',
    prevEl: '.special__button-prev',
  },
  breakpoints: {
    501: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 32,
    },
    993: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32,
    },
    1311: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 32,
    },
  }
});

const ratingClass = '.rating';
const cardDisplayClass = '.card__wrap';
let winWidth = window.screen.width;


const resize = (a) => {
  winWidth = window.screen.width
  if(winWidth > 1309) {
    for(let i = 0; i < a.length; i++) {
      a[i].style.display = 'block';
    }
  } else if(winWidth < 1310) {
    for(let i = 0; i < a.length; i++) {
      if( i > 5 ) {
        a[i].style.display = 'none';
      }
    }
  }
  console.log(winWidth)
}


if(document.querySelector(ratingClass)) {
  const rating = document.querySelector(ratingClass);
  const cardDisplay = rating.querySelectorAll(cardDisplayClass);
  resize(cardDisplay);
  window.addEventListener('resize', () => {
    resize(cardDisplay);
  });
}


(() => {

  tippy('.tooltip-js', {
    theme: 'project',
    maxWidth: 157,
    trigger:"mouseenter focus click",
    interactive: true,
  });
})()
