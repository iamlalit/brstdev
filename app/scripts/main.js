
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
    //to call the function each time whenever a user scrolls the window
    $(window).scroll(function() {
      if($('.continue.one').isOnScreen()){
        $(kids[0]).addClass('orange-animation0 table-cell').removeClass('hide');
        $(kids[1]).addClass('purple-animation1 table-cell').removeClass('hide');
        $(kids[2]).addClass('blue-animation2 table-cell').removeClass('hide');
        $(kids[3]).addClass('pink-animation3 table-cell').removeClass('hide');
      }else{
        $(kids[0]).removeClass('orange-animation0 table-cell').addClass('hide');
        $(kids[1]).removeClass('purple-animation1 table-cell').addClass('hide');
        $(kids[2]).removeClass('blue-animation2 table-cell').addClass('hide');
        $(kids[3]).removeClass('pink-animation3 table-cell').addClass('hide');
      }
    });
});