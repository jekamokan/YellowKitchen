$(document).ready(function () {
  $('.restaurants__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="restaurants__slider-arrow restaurants__slider-arrowleft"><img class="pre-arrow-img" src="./images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="restaurants__slider-arrow restaurants__slider-arrowright"><img class="next-arrow-img" src="./images/arrow-right.svg" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 2,
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
    responsive: [{
        breakpoint: 1150,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });

  $('.header__burger-btn').click(function (event) {
    $('.rightside-menu').toggleClass('rightside-menu--close');
    $('.header__burger-btn').toggleClass('header__burger-line--close');
    $('body').toggleClass('body__modal');

  })
  // $('.header__burger-btn').click(function (event) {
  //   $('.header__burger-btn').toggleClass('header__burger-line--close');
  // })
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





$('body').on('click', '.popup__password-control', function(){
	if ($('#password-input').attr('type') == 'password'){
		$(this).addClass('popup__password-view');
		$('#password-input').attr('type', 'text');
	} else {
		$(this).removeClass('popup__password-view');
		$('#password-input').attr('type', 'password');
	}
	return false;
});



// $('.header__login-btn').click(function () {
//     $('body').addClass('popup');
//   })
//   $('.popup__close').click(function () {
//     $('body').removeClass('popup');
//   })


