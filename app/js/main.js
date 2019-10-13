$(function(){

  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    speed: 1000,
  });

  $('.slider__content').slick({
    infinite: true,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 1000,
  });

  $('.slider__content a').fancybox({
    caption: function (instance, item) {
      return $(this).parent().find('.card-text').html();
    }
  });

   $('.slider__life-main').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: true,
     fade: true,
     asNavFor: '.slider__life-nav',
     prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icon/left-arrow.svg"></button>',
     nextArrow: '<button class="slick-arrow slick-next"><img src="images/icon/right-arrow.svg"></button>',
   });
   $('.slider__life-nav').slick({
     slidesToShow: 5,
     slidesToScroll: 1,
     arrows: true,
     asNavFor: '.slider__life-main',
     focusOnSelect: true,
     centerMode: true,
     infinite: true,
   });
});