$(function(){

  $('html').mouseenter(function(){
		$('#Big_img').fadeIn(1200);
    $('#Big_img2').fadeIn(1200);
		});

$('#Big_img').mouseenter(function(){
  $(this).fadeOut('fast');
})

$('#Big_img2').mouseleave(function(){
  $('#Big_img').fadeIn('fast');
})



});
