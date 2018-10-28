$(document).ready(function(){
  $('.movie__list').slick({
    slidesToShow: 7,
    slidesToScroll: 2,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.movie__slider-arrow--left'),
    nextArrow: $('.movie__slider-arrow--right'),
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });

  var options = $('.options__item');
  options.on("click", function(event) {
    var elem = this;
    var prevActiveElem = $('.options__item.active');
    prevActiveElem.removeClass('active');
    $(elem).addClass('active');
  });

});