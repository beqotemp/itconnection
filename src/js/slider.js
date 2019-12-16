import $ from "jquery";
import 'slick-carousel'

$(document).ready(function(){
  $('.letters-slider__slides').slick({
  	slidesToShow: 5,
  	slidesToScroll: 1,
    arrows:true,
    prevArrow: $('#letter-prev-slide'),
    nextArrow: $('#letter-next-slide'),
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

  
});