var owl = $("#recipe-carousel");

$(document).ready(function() {
  $('.col-md-6').height($(window).height());
  $( window ).resize(function() {
    $('.col-md-6').height($(window).height());
  });
  
  owl.owlCarousel({
    singleItem:true,
    pagination:false,
    slideSpeed:800,
    mouseDrag:false
  });
  
  var car = $(".owl-carousel").data('owlCarousel');
  
  var hash = document.URL.substring(document.URL.indexOf("#")+1);
  if (hash == "fitz"){
    car.jumpTo(1);
  }else if(hash == "flyboy"){
    car.jumpTo(2);
  }else if(hash == "lime"){
    car.jumpTo(3);
  }else if(hash == "soph"){
    car.jumpTo(4);
  }else if(hash == "mort"){
    car.jumpTo(5);
  }else if(hash == "baller"){
    car.jumpTo(6);
  }else if(hash == "novelist"){
    car.jumpTo(7);
  }else if(hash == "roam"){
    car.jumpTo(8);
  }else if(hash == "bigwig"){
    car.jumpTo(9);
  }else if(hash == "arch"){
    car.jumpTo(10);
  }else if(hash == "curator"){
    car.jumpTo(11);
  }else if(hash == "solo"){
    car.jumpTo(12);
  }


  
  // Custom Navigation Events
  $(".right").click(function(){
    owl.trigger('owl.next');
  });
  $(".left").click(function(){
    owl.trigger('owl.prev');
  });
});