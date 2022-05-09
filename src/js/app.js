import * as flsFunction from "./modules/functions.js";
flsFunction.isWebp();

import { langSelect } from "./lang.js";

 import Swiper, { Navigation, Pagination } from 'swiper';

  const swiper = new Swiper();

  const alllang = ['RU', 'EN'];

  $(function() {
  $('.slider').slick({
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '60px',
    speed: 10000,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    autoplay: true,
    responsive: [
		{
        breakpoint: 1060,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
			}
        },
		{
        breakpoint: 530,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
		}
        }
    ]
  });

  if($(window).width() < 990) {
	  $('.instruments__inner').addClass('instruments__inner--slider');
  }
  else {
	  $('.instruments__inner').removeClass('instruments__inner--slider');
  }

  $('.header__language-change').click(function(){
    $(this).toggleClass('active')
    let lang=  $(this).siblings().addClass('active').text()
    location.href = window.location.pathname + "#" + lang;
    changelang()

  })

  function changelang() {
    let hash = window.location.hash
    hash = hash.substr(1)


    if (!alllang.includes(hash)) {
      location.href = window.location.pathname + "#RU";
      location.reload()
    }

    for (let key in langSelect) {
      document.querySelector("."+ key + "-lng").innerHTML = langSelect[key][hash];
    }
  }




  $('.instruments__inner--slider').slick({
        arrows: false,
		dots: true,
		slidesToScroll: 1,
		autoplaySpeed: 0,
  });
    $('.feedback__item-raiting').rateYo({
		starWidth: "32px",
    	rating: 5,
		readOnly: true,
		ratedFill: "#F2D080",
  });
});