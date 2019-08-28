$(document).ready(function () {
  // smooth scroll
  $('.nav-item a, .header-link').click(function (link){
    link.preventDefault();

    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 25
    }, 3000);
  })
});
