$(document).ready(function(){
	$('html').mouseover(function(){
		$('#img').fadeIn(500);
		});
// a6's photo hoover
$('#img .img_left a').mouseover(function(){
		// Get data attribute values
		var title = $(this).parent('div').data('title');
		var desc = $(this).parent('div').data('desc');
		if(!$(this).children('div').length){
			$(this).append('<div class="overlay"></div>');
		}
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		// Add html to overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
		// Fade in overlay
		overlay.fadeIn(2000);
	});
$('#img .img_left a').mouseleave(function(){
		// Get the overlay div
		var overlay = $(this).children('.overlay');

		// Fade out overlay
		overlay.fadeOut(500);
	});
// loracy's photo hoover
$('#img .img_right a').mouseover(function(){
		// Get data attribute values
		var title = $(this).parent('div').data('title');
		var desc = $(this).parent('div').data('desc');
		if(!$(this).children('div').length){
			$(this).append('<div class="overlay"></div>');
		}
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		// Add html to overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
		// Fade in overlay
		overlay.fadeIn(2000);
	});
$('#img .img_right a').mouseleave(function(){
		// Get the overlay div
		var overlay = $(this).children('.overlay');

		// Fade out overlay
		overlay.fadeOut(500);
	});
$('.img_right a').mouseover(function(){
    $('#colorful_img_lo').fadeIn(300);
    });
$('.img_right a').mouseleave(function(){
     $('#colorful_img_lo').fadeOut(800);
    });
$('.img_left a').mouseover(function(){
    $('#colorful_img_a6').fadeIn(300);
    });
$('.img_left a').mouseleave(function(){
     $('#colorful_img_a6').fadeOut(800);
    });

});


   