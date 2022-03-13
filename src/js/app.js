import * as flsFunction from "./modules/functions.js";

flsFunction.isWebp();

 import Swiper, { Navigation, Pagination } from 'swiper';

  const swiper = new Swiper();

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
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5
        }
      }
    ]
  });
    $('.feedback__item-raiting').rateYo({
		starWidth: "32px",
    	rating: 5,
		readOnly: true,
		ratedFill: "#F2D080",
  });
});