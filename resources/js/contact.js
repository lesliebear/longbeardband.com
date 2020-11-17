$(document).ready(() => {
  if ($(window).width() > 767){
    const body_space = $(window).height() - $('#header-nav').outerHeight() - $('#footer-nav').outerHeight();
    if ($('#body-content').height() < body_space ){
      $('#body-content').height(body_space);
    }
  }

  if ($(window).width() < 992){
    $('#body-content').css('width', '80%');
    $('#photo').css('margin-bottom', '20px');
    $('#info').css('margin-bottom', '10%');
  }

  $('#body-content').width($('#header-nav').width());
  $('#photo img').attr('src', '../resources/images/long-beard-ferry.jpg');
});
