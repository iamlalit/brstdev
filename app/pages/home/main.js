//bootstrap carousel image slider to slide the image
$(document).ready(function(){
    $('.carousel').carousel({
      interval: false,
      pause: ''
    });
    $('#contact-slider').off('keydown.bs.carousel');

    $("#home-page")
	    .load(function() { 
	    	$('body.index').css({'background': 'url("../../.tmp/img/Homepage_MainImage_rev1.gif")', 'background-size': 'cover'});
	    })
	    .error(function() { 
	    	console.log("error loading image"); 
	    });
});

$(document).ready(function(){
	var kids = $('.magic-icons').children();
	function animateIcons(){
		$(kids[0]).delay(3000).fadeOut(1000, function() { 
			$(kids[1]).css('display', 'inline-block');  
			$(kids[1]).delay(3000).fadeOut(1000, function() {
				$(kids[2]).css('display', 'inline-block');
				$(kids[2]).delay(3000).fadeOut(1000, function() {
					$(kids[0]).css('display', 'inline-block');
					animateIcons();
				})
			}); 
		});	
	}
	function animateIcons1(){
		$(kids[3]).delay(4000).fadeOut(1000, function() { 
			$(kids[4]).css('display', 'inline-block');  
			$(kids[4]).delay(4000).fadeOut(1000, function() {
				$(kids[5]).css('display', 'inline-block');
				$(kids[5]).delay(4000).fadeOut(1000, function() {
					$(kids[3]).css('display', 'inline-block');
					animateIcons1();
				})
			}); 
		});	
	}
	

	function animateIcons2(){
		$(kids[6]).delay(6000).fadeOut(1000, function() { 
			$(kids[7]).css('display', 'inline-block');  
			$(kids[7]).delay(6000).fadeOut(1000, function() {
				$(kids[8]).css('display', 'inline-block');
				$(kids[8]).delay(6000).fadeOut(1000, function() {
					$(kids[6]).css('display', 'inline-block');
					animateIcons2();
				})
			}); 
		});	
	}
	
	// animateIcons();
	// animateIcons1();
	// animateIcons2();

	//ballon3
	var kidds = $(".ballon3 .magic-icons").children();
	function animateIcons3(){
		$(kidds[0]).delay(3000).fadeOut(1000, function() { 
			$(kidds[1]).css('display', 'inline-block');
			$(kidds[1]).delay(3000).fadeOut(1000, function() {
				$(kidds[0]).css('display', 'inline-block');
				animateIcons3();
			})
		});	
	}
	function animateIcons4(){
		$(kidds[2]).delay(4000).fadeOut(1000, function() { 
			$(kidds[3]).css('display', 'inline-block');
			$(kidds[3]).delay(4000).fadeOut(1000, function() {
				$(kidds[2]).css('display', 'inline-block');
				animateIcons4();
			})
		});	
	}
	function animateIcons5(){
		$(kidds[4]).delay(5000).fadeOut(1000, function() { 
			$(kidds[5]).css('display', 'inline-block');
			$(kidds[5]).delay(5000).fadeOut(1000, function() {
				$(kidds[4]).css('display', 'inline-block');
				animateIcons5();
			})
		});	
	}

	// animateIcons3();
	// animateIcons4();
	// animateIcons5();
});