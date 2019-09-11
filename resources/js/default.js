$(document).ready(() => {

  if ($(window).width() > 990){
    $('.nav-item').mouseenter( () => {
        $('.apple-whole').hide();
        $('.apple-bite').show();
    }).mouseleave( () => {
        $('.apple-bite').hide();
        $('.apple-whole').show();
    });

    // twitch();
  }

  if ($(window).width() >= 2000){
    $('.fa-lg').each(function() {
      $(this).removeClass('fa-lg').addClass('fa-3x');
    });
  }

  $('body').css('min-height', $(window).height() + 'px');
});

const twitch = () => {
  setTimeout( () => {
    $('.apple-whole').hide();
    $('.apple-bite').show();
  }, 200);
  setTimeout( () => {
    $('.apple-bite').hide();
    $('.apple-whole').show();
  }, 500);
  setTimeout( () => {
    $('.apple-whole').hide();
    $('.apple-bite').show();
  }, 700);
  setTimeout( () => {
    $('.apple-bite').hide();
    $('.apple-whole').show();
  }, 1000);
  setTimeout( () => {
    $('.apple-whole').hide();
    $('.apple-bite').show();
  }, 1200);
  setTimeout( () => {
    $('.apple-bite').hide();
    $('.apple-whole').show();
  }, 1500);
  // setTimeout( () => {
  //   $('.apple-whole').hide();
  //   $('.apple-bite').show();
  // }, 1700);
  // setTimeout( () => {
  //   $('.apple-bite').hide();
  //   $('.apple-whole').show();
  // }, 2000);
  // setTimeout( () => {
  //   $('.apple-whole').hide();
  //   $('.apple-bite').show();
  // }, 2200);
  // setTimeout( () => {
  //   $('.apple-bite').hide();
  //   $('.apple-whole').show();
  // }, 2500);
}
