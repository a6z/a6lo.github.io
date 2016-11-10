$(document).ready(function(){
$('html').mouseover(function(){
        $('.img_works').fadeIn(500);
});
// works1 hoover
$('.works1 a').mouseover(function(){
		var title = $(this).parent('div').data('title');
		var desc = $(this).parent('div').data('desc');
		if(!$(this).children('div').length){
			$(this).append('<div class="overlay"></div>');
		}
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		// Add html to overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
		overlay.fadeIn(400);
	});
// works1 leave
$('.works1 a').mouseleave(function(){
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		overlay.fadeOut(800);
	});
$('.works2 a').mouseover(function(){
		var title = $(this).parent('div').data('title');
		var desc = $(this).parent('div').data('desc');
		if(!$(this).children('div').length){
			$(this).append('<div class="overlay"></div>');
		}
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		// Add html to overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
		overlay.fadeIn(400);
	});
// works1 leave
$('.works2 a').mouseleave(function(){
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		overlay.fadeOut(800);
	});
$('.works3 a').mouseover(function(){
		var title = $(this).parent('div').data('title');
		var desc = $(this).parent('div').data('desc');
		if(!$(this).children('div').length){
			$(this).append('<div class="overlay"></div>');
		}
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		// Add html to overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
		overlay.fadeIn(400);
	});
// works1 leave
$('.works3 a').mouseleave(function(){
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		overlay.fadeOut(800);
	});
$('.works4 a').mouseover(function(){
		var title = $(this).parent('div').data('title');
		var desc = $(this).parent('div').data('desc');
		if(!$(this).children('div').length){
			$(this).append('<div class="overlay"></div>');
		}
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		// Add html to overlay
		overlay.html('<h4>'+title+'</h4><p>'+desc+'</p>');
		overlay.fadeIn(400);
	});
// works1 leave
$('.works4 a').mouseleave(function(){
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		overlay.fadeOut(800);
	});
$('.works5 a').mouseover(function(){
		var title = $(this).parent('div').data('title');
		var desc = $(this).parent('div').data('desc');
		if(!$(this).children('div').length){
			$(this).append('<div class="overlay"></div>');
		}
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		// Add html to overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
		overlay.fadeIn(400);
	});
// works1 leave
$('.works5 a').mouseleave(function(){
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		overlay.fadeOut(800);
	});
$('.works6 a').mouseover(function(){
		var title = $(this).parent('div').data('title');
		var desc = $(this).parent('div').data('desc');
		if(!$(this).children('div').length){
			$(this).append('<div class="overlay"></div>');
		}
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		// Add html to overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
		overlay.fadeIn(400);
	});
// works1 leave
$('.works6 a').mouseleave(function(){
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		overlay.fadeOut(800);
	});
$('.works7 a').mouseover(function(){
		var title = $(this).parent('div').data('title');
		var desc = $(this).parent('div').data('desc');
		if(!$(this).children('div').length){
			$(this).append('<div class="overlay"></div>');
		}
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		// Add html to overlay
		overlay.html('<h5>'+title+'</h5><p>'+desc+'</p>');
		overlay.fadeIn(400);
	});
// works1 leave
$('.works7 a').mouseleave(function(){
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		overlay.fadeOut(800);
	});

$('.works8 a').mouseover(function(){
		var title = $(this).parent('div').data('title');
		var desc = $(this).parent('div').data('desc');
		if(!$(this).children('div').length){
			$(this).append('<div class="overlay"></div>');
		}
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		// Add html to overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
		overlay.fadeIn(400);
	});
// works1 leave
$('.works8 a').mouseleave(function(){
		// Get the overlay div
		var overlay = $(this).children('.overlay');
		overlay.fadeOut(800);
	});

});
