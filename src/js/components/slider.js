$(document).ready(function(){
    $('.slider__container').slick({
        speed: 500,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
        ]
    });
  });


