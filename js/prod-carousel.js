$(document).ready(function() {
  
  var owl = $("#product-carousel");
  owl.owlCarousel({
    singleItem:true,
    pagination:false,
    rewindNav:false,
    slideSpeed:800,
    mouseDrag:false
  });
  $(".whiskey").click(function(){
    owl.trigger('owl.next');
    $('.right').css('opacity', 0);
    $('.left').css('opacity', 1);
  });
  
  $(".gin").click(function(){
    owl.trigger('owl.prev');
    $('.right').css('opacity', 1);
    $('.left').css('opacity', 0);
  });
  
  $(".right").click(function(){
    owl.trigger('owl.next');
    $('.right').css('opacity', 0);
    $('.left').css('opacity', 1);
  });
  
  var hash = document.URL.substring(document.URL.indexOf("#")+1);
  if (hash == "whiskey"){
    owl.trigger('owl.next');
    $('.right').css('opacity', 0);
    $('.left').css('opacity', 1);
  }
  
  // Custom Navigation Events
  $(".right").click(function(){
    owl.trigger('owl.next');
    $('.right').css('opacity', 0);
    $('.left').css('opacity', 1);
  });
  $(".left").click(function(){
    owl.trigger('owl.prev');
    $('.left').css('opacity', 0);
    $('.right').css('opacity', 1);
  });
});