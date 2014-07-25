function setEventHandlers(){

  $('.links').on('click', function(evt){
    evt.preventDefault();
    $('.links').each(function(i, link){
      $(link).removeClass('clicked');
    });
    $(this).addClass("clicked");
  });

  $('#about_me').on('click', function(evt){
    evt.preventDefault();
    $('div.about_me').siblings().fadeOut(1);
    $('.about_me').fadeIn(500);
  });

  $('#my_work').on('click', function(evt){
    evt.preventDefault();
    $('div.my_work').siblings().fadeOut(1);
    $('.my_work').fadeIn(500);
  });

  $('#contact_me').on('click', function(evt){
    evt.preventDefault();
    $('div.contact_me').siblings().fadeOut(1);
    $('.contact_me').fadeIn(500);
  });

}


$(function(){
  setEventHandlers();
});