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

  $('.team-about').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
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