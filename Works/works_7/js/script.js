$(document).ready(function(){
// works1 hoover
$('html').mouseover(function(){
		$('#works_name').animate({left:'200px'},1700);
		$('.works7').animate({left:'-241px'},1400);
		$('.works_info p').fadeIn(5000);
		$('.works1').fadeOut(400);
		$('.works2').fadeOut(400);
		$('.works4').fadeOut(400);
	});
// works1 leave
// $('.works1 a').mouseleave(function(){
// 		// Get the overlay div
// 		var overlay = $(this).children('.overlay');
// 		overlay.slideUp(800);
// 	});
});
