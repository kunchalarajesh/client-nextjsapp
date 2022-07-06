$(document).ready(function(){
  $('.toggle').click(function(){
    $(".nav-links").slideToggle('slow');
  })

  $(".slide-1").slick({
  	 adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 100000,
    arrows:false,
        dots:true
  });
    $(".team-about").slick({
     slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      cssEase: 'linear',
      adaptiveHeight:true,
      autoPlay:true,
      autoplaySpeed:3000,
      arrows:true
  //           responsive: [
    
    
  //   {
  //     breakpoint: 767,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
    
  // ]
  //             responsive: [
    
    
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3
  //     }
  //   }
    
  // ]
  
  });


    $(".testimonials-slider").slick({
     adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 100000,
    arrows:true  
  });


  $(window).scroll(function(){
      if ($(this).scrollTop() > 1) {
          $('header').addClass('moved-up');
      }
      if ($(this).scrollTop() > 2) {
          $('header').addClass('fixed');
      }
      else {
          $('header').removeClass('moved-up');
      }
});
});