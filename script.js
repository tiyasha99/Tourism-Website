$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY >= 20){
      $('.navbar').addClass('sticky');
    }
    else{
      $('.navbar').removeClass('sticky');
    }
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
  });
  // slide-up script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });
  
  //typing animation script
  var typed = new Typed(".typing", {
    strings: ["Himachal", "North-East", "Kerala", "Jammu And Kashmir", "Rajasthan"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

  // toggle menu/navbar script

  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
});