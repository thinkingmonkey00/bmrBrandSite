// ES5
"use strict";

// Init fancyBox
$().fancybox({
  selector: ".slick-slide:not(.slick-cloned)",
  hash: false
});

// Init Slick
$(".main-slider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  swipeToSlide: true,
  arrows: false,
  responsive: [{
    breakpoint: 475,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  
  }]
});








/* ES6
// Init fancyBox
$().fancybox({
  selector: ".slick-slide:not(.slick-cloned)",
  hash: false
});

// Init Slick
$(".main-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  swipeToSlide: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
*/