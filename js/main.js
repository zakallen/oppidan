var menuToggle = false;
var contentToggle = true;

$(document).ready(function() {
  
  $('.javascript').hide();
  
  $('.car-option').css("margin-top", $(window).height()-100);
  
  $( window ).resize(function() {
    $('.car-option').css("margin-top", $(window).height()-100);
  });

  $('.hamburger').click(function(e) {
    if (menuToggle)
      $('.menu').removeClass("animate");
    else
      $('.menu').addClass("animate");
    menuToggle = !menuToggle;
  });

  $('.close').click(function() {
    history.back();
  });
  
  $(".mockup img").hover(function() {
    $(this).siblings("span").css("opacity", 1);
  }, function() {
    $(this).siblings("span").css("opacity", 0);
  });
  $(".media-bg").hover(function() {
    $(this).children(".media-detail").css("opacity", 1);
    $(this).children(".overlay").css("opacity", 1);
  }, function() {
    $(this).children(".media-detail").css("opacity", 0);
    $(this).children(".overlay").css("opacity", 0);
  });
  if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    setTimeout(function(){
      $('.content-div').addClass("animate");
    }, 2000);
    $('.car-option').css("margin-top", $(window).height()-100);
  
    $( window ).resize(function() {
      $('.car-option').css("margin-top", $(window).height()-100);
    });
  }else{
    $('.car-option').css("margin-top", $(window).height()-150);  
    $('.recipe-arrow').click(function(){
      $('html, body').animate({
        scrollTop: ($(".recipe-div").offset().top - 80)
      }, 2000);
    });
  }
  $('.arrow-school').click(function(e){
    $('.arrow-school').css("transform", (contentToggle) ? "rotate(90deg)" : "rotate(-90deg)");
    $('.school-div').css("transform", (contentToggle) ? "translate(0, " + $(window).height() + "px)" : "translate(0, 0)")
    contentToggle = !contentToggle;
  });
  $('.arrow-phil').click(function(e){
    $('.arrow-phil').css("transform", (contentToggle) ? "rotate(90deg)" : "rotate(-90deg)");
    $('.phil-div').css("transform", (contentToggle) ? "translate(0, " + ($('.phil-div').height()+150) + "px)": "translate(0, 0)")
    contentToggle = !contentToggle;
  });
});
