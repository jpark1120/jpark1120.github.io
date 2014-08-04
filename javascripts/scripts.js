function setEventHandlers(){

  $('.links').on('click', function(evt){
    evt.preventDefault();
    $('.links').each(function(i, link){
      $(link).removeClass('clicked');
    });
    $(this).addClass("clicked");
  });

  $('#about-me').on('click', function(evt){
    evt.preventDefault();
    $('html, body').animate({
      scrollTop: ($('.about-me').offset().top)
    },500);
  });

  $('#my-work').on('click', function(evt){
    evt.preventDefault();
    $('html, body').animate({
      scrollTop: ($('.my-work').offset().top)
    },500);
  });

  $('#contact-me').on('click', function(evt){
    evt.preventDefault();
    $('html, body').animate({
      scrollTop: ($('.contact-me').offset().top)
    },500);
  });

  $(window).on('load', function(){
    $('.intro-content').fadeIn(2000, function(){
       $('.quote').fadeIn(1000);
    });
  });


}
// The .offset() method allows us to retrieve the current position of an element relative to the document



$(function(){
  setEventHandlers();
});