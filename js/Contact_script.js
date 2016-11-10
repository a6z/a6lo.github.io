$(function(){
  $('html').mouseenter(function(){
		$('.row1').fadeIn(1000);
    $('.row2').fadeIn(1600);
    $('.row3').fadeIn(2200);
		});


  $('.col').mouseenter(function(){
      $(this).children('.block').fadeIn('fast');
      $(this).children('#fb').animate({top:'20px',left:'30px',opacity:'1'},500);
      $(this).children('#ig').animate({top:'30px',left:'20px',opacity:'1'},500);
      $(this).children('#FB').animate({top:'24px',left:'20px',opacity:'1'},500);
      $(this).children('#IG').animate({top:'30px',left:'20px',opacity:'1'},500);
  });
  $('.col').mouseleave(function(){
      $(this).children('.block').fadeOut('fast');
      $(this).children('#fb').animate({top:'60px',left:'80px',opacity:'0'},500);
      $(this).children('#ig').animate({top:'60px',left:'40px',opacity:'0'},500);
      $(this).children('#FB').animate({top:'60px',left:'-10px',opacity:'0'},500);
      $(this).children('#IG').animate({top:'70px',left:'10px',opacity:'0'},500);
  });


});
