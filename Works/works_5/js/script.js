$(document).ready(function(){
// works1 hoover
$('html').mouseover(function(){
		$('#works_name').animate({left:'200px'},2000);
		$('.works5').animate({left:'359px'},2000);
		$('.works_info p').fadeIn(3000);
		$('.works2').fadeOut(400);
		$('.works3').fadeOut(400);
		$('.works4').fadeOut(400);
	});

});
