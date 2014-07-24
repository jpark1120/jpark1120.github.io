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
    $('div.about_me').siblings().css('display', 'none');
    $('.about_me').fadeIn(500);
  });

  $('#my_work').on('click', function(evt){
    evt.preventDefault();
    $('div.my_work').siblings().css('display', 'none');
    $('.my_work').fadeIn(500);
  });

  $('#contact_me').on('click', function(evt){
    evt.preventDefault();
    $('div.contact_me').siblings().css('display', 'none');
    $('.contact_me').fadeIn(500);
  });

}


$(function(){
  setEventHandlers();
});