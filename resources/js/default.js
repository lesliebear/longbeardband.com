$(document).ready(() => {

  setResponsive();

  $(window).on('resize', () => {
    console.log('resize');
    setResponsive();
  });
});

const setResponsive = () => {
  if ($(window).width() > 990){
    $('.nav-item').mouseenter( () => {
        toggleApple();
    }).mouseleave( () => {
        toggleApple();
    });
  } else {
    $('.navbar-toggler').click( () => {
      toggleApple();
    });
  }

  if ($(window).width() >= 2000){
    $('.fa-lg').each(function() {
      $(this).removeClass('fa-lg').addClass('fa-3x');
    });
  }

  $('body').css('min-height', $(window).height() + 'px');
}

const toggleApple = () => {
  if ( $('.apple-whole').is(":visible") ){
    $('.apple-whole').hide();
    $('.apple-bite').show();
  } else {
    $('.apple-bite').hide();
    $('.apple-whole').show();
  }
}
