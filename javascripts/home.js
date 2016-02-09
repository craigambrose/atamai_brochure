$(window).scroll(function(){
  if($(window).scrollTop() >= $('#site-header').outerHeight()) {
    $('body').addClass('scrolled');
  } else {
    $('body').removeClass('scrolled');
  }
});