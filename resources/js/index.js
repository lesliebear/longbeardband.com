$(document).ready(() => {
  // const body_space = $(window).height() - $('#header-nav').outerHeight() - $('#title-row').outerHeight();
  const body_space = $(window).height() - $('#header-nav').outerHeight();
  $('#body-content').height(body_space);
  $('#cover-photo').css('width', 'auto').css('height', body_space * .8 + 'px');

  console.log('body: ' + $('body').height());
  console.log('window: ' + $(window).height());
  if ($(window).height() > $('body').height()){
    console.log('test');
      $('body').height( $(window).height() );
      // $('#body-content').height( $(window).height() );
  }

});
