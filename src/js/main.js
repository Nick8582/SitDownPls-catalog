if (document.querySelector('.header')) {
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
    classNames: {containerOuter: "choices choices__filter", list: "choices__list--filter", flippedState: ""}
  });
  const burger = document.querySelector('.burger-menu');
  const menu = document.querySelector('.bottom-menu');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
  })
}


if (document.querySelector('.hero__slider')) {
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
}

if (document.querySelector('.oferta__slider')) {
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
}

if (document.querySelector('.special__slider')) {
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
}

if (document.querySelector('.rating')) {
  const ratingClass = '.rating';
  const cardDisplayClass = '.card__wrap';
  const btnRating = document.querySelector('.rating__btn');
  let winWidth = window.screen.width;

  const resize = (a, b) => {
    winWidth = window.screen.width
    if (winWidth > 1309) {
      for (let i = 0; i < a.length; i++) {
        a[i].style.display = 'block';
        if (i > 7) {
          a[i].style.display = 'none';
          btnRating.style.display = 'block';
        }
      }
    } else if (winWidth < 1310) {
      for (let i = 0; i < a.length; i++) {
        if (i > 5) {
          a[i].style.display = 'none';
          btnRating.style.display = 'block';
        }
      }
    }
    if (b) {
      for (let i = 0; i < a.length; i++) {
        a[i].style.display = 'block';
      }
      btnRating.style.display = 'none';
    }
    console.log(winWidth)
  }
  const rating = document.querySelector(ratingClass);
  const cardDisplay = rating.querySelectorAll(cardDisplayClass);
  resize(cardDisplay);
  window.addEventListener('resize', () => {
    resize(cardDisplay);
  });
  btnRating.addEventListener('click', (e) => {
    e.preventDefault();
    resize(cardDisplay, "click");
  })
}

(() => {

  tippy('.tooltip-js', {
    theme: 'project',
    maxWidth: 157,
    trigger: "mouseenter focus click",
    interactive: true,
  });


})()

if (document.querySelector(".contact__input")) {
  let contactButtons = document.querySelector('.contact__btn');
  let contactSuccess = document.querySelectorAll('.contact__input');
  let selector = document.querySelector("input[type='tel']");
  let im = new Inputmask("+7 (999) 999-99-99");

  im.mask(selector);

  contactButtons.addEventListener('click', (function () {
    contactSuccess.forEach((function (inp) {
      return inp.classList.add('js-success')
    }))
  }))

  new JustValidate('.contact__form', {
    colorWrong: '#D11616',
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 25
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Недопустимый формат",
        minLength: "Имя не может быть меньше двух символов",
        maxLength: "Запрещено вводить более 25 символов"
      },
      tel: {
        required: "Недопустимый формат",
        function: "Здесь должно быть 10 символов"
      },
      email: {
        required: "Недопустимый формат",
        email: "Email должен быть по примеру example@mail.ru"
      }
    },
    submitHandler: function (thisForm) {
      let formData = new FormData(thisForm);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      }
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
      thisForm.reset();
    }
  });
}

if (document.querySelector('.js-filter-price-options')) {
  const filterPriceSlider = document.querySelector('.filter__range-slider')

  noUiSlider.create(filterPriceSlider, {
    start: [10000, 100000],
    connect: true,
    range: {
      min: 0,
      max: 150000,
    },
    step: 1,

  })
}
