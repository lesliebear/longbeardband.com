$(document).ready(() => {
  
    $('.nav-item').mouseenter( () => {
        $('.apple-whole').hide();
        $('.apple-bite').show();
    }).mouseleave( () => {
        $('.apple-bite').hide();
        $('.apple-whole').show();
    });

    twitch();
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
