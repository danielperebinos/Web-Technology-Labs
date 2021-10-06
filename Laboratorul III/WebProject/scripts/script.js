$(document).ready(function(){
  $numberSlides = 4;

  if ($( window ).width() < 768){
      $numberSlides = 3;
  }
  else {
    $numberSlides = 4;
  }

  $('.slider').slick({
    arrows: false,
    slidesToShow: $numberSlides,
    infinite: true,
    autoplay: true
  });
});
