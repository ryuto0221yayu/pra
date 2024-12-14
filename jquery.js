$(function(){
  $('.scroll_animation').css('visibility','hidden');
  $(window).scroll(function(){
    var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
    $('.scroll_animation').each(function(){
    var targetPosition = $(this).offset().top;
    if(topWindow > targetPosition - windowHeight + 100){
      $(this).addClass("fadeInDown");
    }
    });
  });
});