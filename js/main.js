$(function(){
  $('.top__slider').slick({
    autoplay: true,
    fade: true,
    arrows: false,
    dots: true,
    responsive: [
      {
      breakpoint: 1246,
      settings: {
        dots: false
      }
      }
    ]
  });

  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    responsive: [
      {
      breakpoint: 1240,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  })


  $('.menu__btn').click(function() {
    $(".menu__btn").toggleClass('active');
    $('.menu__list').toggleClass('menu__list--active');
  });
});
