$(function(){

  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
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
});