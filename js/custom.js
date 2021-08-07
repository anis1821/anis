$(function(){   

  var mixer = mixitup('.mix_main');

$('.banner_slick').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true
  });

  $('.test_slick').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    dots:true
  });

  


  // pre loader
  $(window) .on ("load", function(){
    $(".preloader") .delay(1000) .fadeOut(1000)
  });

});