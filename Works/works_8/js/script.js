$(document).ready(function(){
// works1 hoover
$('html').mouseover(function(){
		$('#works_name').animate({left:'200px'},800);
		$('.works8').animate({left:'-691px'},800);
		$('.works_info p').fadeIn(4000);
		$('.works1').fadeOut(400);
		$('.works2').fadeOut(400);
		$('.works3').fadeOut(400);
	});
// works1 leave
// $('.works1 a').mouseleave(function(){
// 		// Get the overlay div
// 		var overlay = $(this).children('.overlay');
// 		overlay.slideUp(800);
// 	});
});


