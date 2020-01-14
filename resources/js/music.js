$(document).ready(function() {
  const body_space = $(window).height() - $('#header-nav').outerHeight() - $('#footer-nav').outerHeight();
  if ($('#body-content').height() < body_space){
    $('#body-content').height(body_space);
  }

  $('.spotify-wrapper iframe').height($('.alb img').height());
  $('.spotify-wrapper iframe').width($('.alb img').width());
});
