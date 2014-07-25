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
    $('div.about-me').siblings().hide();
    $('.about-me').fadeIn(500);
  });

  $('#my-work').on('click', function(evt){
    evt.preventDefault();
    $('div.my-work').siblings().hide();
    $('.my-work').fadeIn(500);
  });

  $('#contact-me').on('click', function(evt){
    evt.preventDefault();
    $('div.contact-me').siblings().hide();
    $('.contact-me').fadeIn(500);
  });

}


$(function(){
  setEventHandlers();
});