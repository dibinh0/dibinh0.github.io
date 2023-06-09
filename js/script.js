$(function(){

  $('.sl').slick({
  	infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true
  });

});

//stickNAVbar

// $(window).on('scroll', function(){
// 	if($(window).scrollTop()){
// 		$('header').addClass('black');
// 	}
// 	else{
// 		$('header').removeClass('black');
// 	}
// })


$(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.headerBtn').click(function(event){
		$('.header__burger,.header').removeClass('active');
	});
});