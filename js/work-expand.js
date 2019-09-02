$('.work-button').click(function() {
    $('.carousel').css({
        'height': '90vh',
    });
    $('.footer-container').css({
      'display': 'none',
    });
});

$('.bot-work-button').click(function() {
    $('.carousel').css({
        'height': '90vh',
    });
    $('.footer-container').css({
      'display': 'none',
    });
});

$('#work-image').hover(function() {
    $('.carousel').css({
        'height': '90vh',
    });
    $('.footer-container').css({
      'display': 'none',
    });
});

$('.home-button').hover(function() {
  $('.carousel').css({
      'height': '70vh',
  });
});


$('.contact-button').hover(function() {
  $('.carousel').css({
      'height': '70vh',
  });
  if ($(window).width() < 800) {
    $('.footer-container').css({
      'display': 'block',
    });
  }
});

$('.contact-button').click(function() {
  $('.carousel').css({
      'height': '70vh',
  });
  if ($(window).width() < 800) {
    $('.footer-container').css({
      'display': 'block',
    });
  }
});
