$(document).ready(function(){
  

  $(".header__show-contacts").click(function(){
    $(".header__contacts").css("display","block");
    $(this).css("display","none") 
    $(".header__hidden-contacts").css("display","inline-block");
  })

  $(".header__hidden-contacts").click(function(){
    $(".header__contacts").css("display","none");
    $(this).css("display","none") 
    $(".header__show-contacts").css("display","inline-block");
  })

  $('.special__slider').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<p class="special__slider-arrow left"><img src="images/slider_arrow_left.png" alt=""></p>',
    nextArrow: '<p class="special__slider-arrow right"><img src="images/slider_arrow_right.png" alt=""></p>',
    responsive: [
      {
        breakpoint: 1359,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
      // {
      //   breakpoint: 1023,
      //   settings: {
      //     slidesToShow: 1,
      //     arrows: false,
      //   }
      // },
    ]
  });

  $('.feedback__items').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<p class="feedback__slider-arrow left"><img src="images/slider_arrow_left.png" alt=""></p>',
    nextArrow: '<p class="feedback__slider-arrow right"><img src="images/slider_arrow_right.png" alt=""></p>',
    responsive: [
      {
        breakpoint: 1359,
        settings: {
          arrows: false,
        }
      },
    ]
    
  });

});
