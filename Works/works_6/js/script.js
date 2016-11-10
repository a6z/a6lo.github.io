$(document).ready(function(){
// works1 hoover
$('html').mouseover(function(){
		$('#works_name').animate({left:'200px'},2000);
		$('.works6').animate({left:'59px'},2000);
		$('.works_info p').fadeIn(3000);
		$('.works1').fadeOut(400);
		$('.works3').fadeOut(400);
		$('.works4').fadeOut(400);
	});
// works1 leave
// $('.works1 a').mouseleave(function(){
// 		// Get the overlay div
// 		var overlay = $(this).children('.overlay');
// 		overlay.slideUp(800);
// 	});
});
