$(document).ready(function () {
  $('.restaurants__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="restaurants__slider-arrow restaurants__slider-arrowleft"><img class="pre-arrow-img" src="./images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="restaurants__slider-arrow restaurants__slider-arrowright"><img class="next-arrow-img" src="./images/arrow-right.svg" alt=""></button>',
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 3,
      }
    },
    ]
  });

  $('.specialities__slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="restaurants__slider-arrow restaurants__slider-arrowleft specialities__arrow-left"><img class="pre-arrow-img" src="./images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="restaurants__slider-arrow restaurants__slider-arrowright specialities__arrow-right"><img class="next-arrow-img" src="./images/arrow-right.svg" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.header__burger-btn').click(function (event) {
    $('.rightside-menu').toggleClass('rightside-menu--close');
  })
  $('.header__burger-btn').click(function (event) {
    $('.header__burger-btn').toggleClass('header__burger-line--close');
  })
  $('.nearest__btn').click(function (event) {
    $('.nearest__btn').toggleClass('nearest__btn-loading');
  })
  $('.restaurants__btn').click(function (event) {
    $('.restaurants__btn').toggleClass('restaurants__btn-loading');
  })
  $('.specialities__btn').click(function (event) {
    $('.specialities__btn').toggleClass('specialities__btn-loading');
  })


});