$(document).ready(() => {
  const body_space = $(window).height() - $('#header-nav').outerHeight() - $('#footer-nav').outerHeight();
  $('#body-content').height(body_space);
  // if ($(window).width() > 990){
  //   $('#cover-photo').css('width', 'auto').css('height', body_space * .6 + 'px');
  // }

  // if ($(window).height() > $('body').height() && $(window).width() > 990){
  //     $('body').height( $(window).height() );
  // }

});
