$(document).ready(function(){
    $('.intro__laptop').slick({
        arrows:false,
        dots:true,
        speed: 600,
        infinite: false,
        autoplay: true,
        draggable: false,
        swipe: true,
        touchMove: false,
        fade: true,
    });
});

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1500);
    e.preventDefault();
  });