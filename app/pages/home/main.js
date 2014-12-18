//bootstrap carousel image slider to slide the image
$(document).ready(function(){
    $('.carousel').carousel({
      interval: false,
      pause: ''
    });
    $('#contact-slider').off('keydown.bs.carousel');

    $("#home-page")
	    .load(function() { 
	    	console.log("image loaded correctly"); 
	    	$('body.index').css({'background': 'url("../../.tmp/img/Homepage_MainImage_rev1.gif")', 'background-size': 'cover'});
	    })
	    .error(function() { 
	    	console.log("error loading image"); 
	    });
});