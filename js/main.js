$(function(){
  $('.top__slider').slick({
    autoplay: true,
    fade: true,
    arrows: false,
    dots: true,
  });

  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true
  })

});