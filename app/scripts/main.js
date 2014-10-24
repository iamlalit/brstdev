
'use strict';

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//to jump bubbles
$(document).ready(function() {
    $('a').click(function(e) {
        window.location.hash = $(this).attr('id');
    });

    //for Discovery
    var kids = $( '.outer-circle' ).children( '.info-circle' );

    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();

    //function to determine viewport visibility
    $.fn.isOnScreen = function(){
    
        var win = $(window);
        
        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();
        
        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();
        
        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));  
    };
    //$( kids[0] ).animate({'display': 'none' ,'left': '-1000px', 'top': '-1000px'});
    $(kids[0]).css({'left': '0'})
    //to call the function each time whenever a user scrolls the window
    $(window).scroll(function() {
      if($('.continue.one').isOnScreen()){
        console.log('in');
      }else{
        console.log('out');
      }
    });
});