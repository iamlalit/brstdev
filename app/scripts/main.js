
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
    var kids0 = $( '#zero' ).children( '.info-circle' );
    var kids1 = $( '#one' ).children( '.info-circle' );
    var kids2 = $( '#two' ).children( '.info-circle' );
    var kids3 = $( '#three' ).children( '.info-circle' );
    var kids4 = $( '#four' ).children( '.info-circle' );

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
      if($('#showCircle01').isOnScreen() && $('#showCircle00').isOnScreen()){
        $(kids0[0]).addClass('orange-animation0 table-cell').removeClass('hide');
        $(kids0[1]).addClass('purple-animation1 table-cell').removeClass('hide');
        $(kids0[2]).addClass('blue-animation2 table-cell').removeClass('hide');
        $(kids0[3]).addClass('pink-animation3 table-cell').removeClass('hide');
      }else{
        $(kids0[0]).removeClass('orange-animation0 table-cell').addClass('hide');
        $(kids0[1]).removeClass('purple-animation1 table-cell').addClass('hide');
        $(kids0[2]).removeClass('blue-animation2 table-cell').addClass('hide');
        $(kids0[3]).removeClass('pink-animation3 table-cell').addClass('hide');
      }

      if($('#showCircle10').isOnScreen() && $('#showCircle11').isOnScreen()){
        $(kids1[0]).addClass('orange-animation0 table-cell').removeClass('hide');
        $(kids1[1]).addClass('purple-animation1 table-cell').removeClass('hide');
        $(kids1[2]).addClass('blue-animation2 table-cell').removeClass('hide');
        $(kids1[3]).addClass('pink-animation3 table-cell').removeClass('hide');
        $(kids1[4]).addClass('grey-animation4 table-cell').removeClass('hide');
      }else{
        $(kids1[0]).removeClass('orange-animation0 table-cell').addClass('hide');
        $(kids1[1]).removeClass('purple-animation1 table-cell').addClass('hide');
        $(kids1[2]).removeClass('blue-animation2 table-cell').addClass('hide');
        $(kids1[3]).removeClass('pink-animation3 table-cell').addClass('hide');
        $(kids1[4]).removeClass('grey-animation4 table-cell').addClass('hide');
      }

      if($('#showCircle20').isOnScreen() && $('#showCircle21').isOnScreen()){
        $(kids2[0]).addClass('orange-animation0 table-cell').removeClass('hide');
        $(kids2[1]).addClass('purple-animation1 table-cell').removeClass('hide');
        $(kids2[2]).addClass('blue-animation2 table-cell').removeClass('hide');
        $(kids2[3]).addClass('pink-animation3 table-cell').removeClass('hide');
        $(kids2[4]).addClass('grey-animation4 table-cell').removeClass('hide');
        $(kids2[5]).addClass('green-animation5 table-cell').removeClass('hide');
      }else{
        $(kids2[0]).removeClass('orange-animation0 table-cell').addClass('hide');
        $(kids2[1]).removeClass('purple-animation1 table-cell').addClass('hide');
        $(kids2[2]).removeClass('blue-animation2 table-cell').addClass('hide');
        $(kids2[3]).removeClass('pink-animation3 table-cell').addClass('hide');
        $(kids2[4]).removeClass('grey-animation4 table-cell').addClass('hide');
        $(kids2[5]).removeClass('green-animation5 table-cell').addClass('hide');
      }

      if($('#showCircle30').isOnScreen() && $('#showCircle31').isOnScreen()){
        $(kids3[0]).addClass('orange-animation0 table-cell').removeClass('hide');
        $(kids3[1]).addClass('purple-animation1 table-cell').removeClass('hide');
        $(kids3[2]).addClass('blue-animation2 table-cell').removeClass('hide');
        $(kids3[3]).addClass('pink-animation3 table-cell').removeClass('hide');
        $(kids3[4]).addClass('grey-animation4 table-cell').removeClass('hide');
        $(kids3[5]).addClass('green-animation5 table-cell').removeClass('hide');
      }else{
        $(kids3[0]).removeClass('orange-animation0 table-cell').addClass('hide');
        $(kids3[1]).removeClass('purple-animation1 table-cell').addClass('hide');
        $(kids3[2]).removeClass('blue-animation2 table-cell').addClass('hide');
        $(kids3[3]).removeClass('pink-animation3 table-cell').addClass('hide');
        $(kids3[4]).removeClass('grey-animation4 table-cell').addClass('hide');
        $(kids3[5]).removeClass('green-animation5 table-cell').addClass('hide');
      }

      if($('#showCircle40').isOnScreen() && $('#showCircle41').isOnScreen()){
        $(kids4[0]).addClass('orange-animation0 table-cell').removeClass('hide');
        $(kids4[1]).addClass('purple-animation1 table-cell').removeClass('hide');
        $(kids4[2]).addClass('blue-animation2 table-cell').removeClass('hide');
        $(kids4[3]).addClass('pink-animation3 table-cell').removeClass('hide');
      }else{
        $(kids4[0]).removeClass('orange-animation0 table-cell').addClass('hide');
        $(kids4[1]).removeClass('purple-animation1 table-cell').addClass('hide');
        $(kids4[2]).removeClass('blue-animation2 table-cell').addClass('hide');
        $(kids4[3]).removeClass('pink-animation3 table-cell').addClass('hide');
      }
    });
});