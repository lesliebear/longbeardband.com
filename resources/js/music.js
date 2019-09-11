$(document).ready(function() {
  const body_space = $(window).height() - $('#header-nav').outerHeight() - $('#footer-nav').outerHeight();
  if ($('#body-content').height() < body_space){
    $('#body-content').height(body_space);
  }

  $('#ssfap-spotify-wrapper iframe').height($('.alb img').height());
  $('#ssfap-spotify-wrapper iframe').width($('.alb img').width());
});
