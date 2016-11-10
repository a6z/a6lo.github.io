$(document).ready(function(){
// a6's photo hoover
$('html').mouseover(function(){
    $('.img_right').animate({right: '-82px'},"slow");
    $('.info').animate({left: '102px'},"slow");
    $('h2').animate({opacity:1}, "slow");
    $('p').animate({opacity:1}, "slow");
});



});

// var name ="Sam";
// alert("Hello"+ name);
