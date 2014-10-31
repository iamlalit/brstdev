var nbDrop = 5;

// function to generate a random number range.
function randRange( minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

var body = document.body,
    html = document.documentElement;

var height = 0; //Math.max( body.scrollHeight, body.offsetHeight,
    //html.clientHeight, html.scrollHeight, html.offsetHeight );

// function to generate drops
/*function createRain() {

    for( var i=1;i<nbDrop;i++) {
        var dropLeft = randRange(100,400);
        //var dropTop = randRange(0,height);
        //var hue = 'rgb(' + (randRange( 1, 120)) + ',' + (randRange( 40, 160)) + ',' + (randRange( 1, 255)) + ')';

        $('.rain').append('<div style="font-size: '+ randRange(18, 50)+'px" class="icomatic droplets" id="drop'+i+'">drop</div>');
        $('#drop'+i).css('left',dropLeft);
        $('#drop'+i).css('top',height);
    }

};*/
/*function doEmpty(){
    $('.rain').empty();
}*/
// Make it rain
setInterval(function(){
    //doEmpty();
    //createRain();
},10000);

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1);
        return false;
      }
    }
  });
});

//to jump bubbles
$(document).ready(function() {

    //for Discovery
    var kids0 = $( '#zero' ).children( '.info-circle' );
    var kids1 = $( '#one' ).children( '.info-circle' );
    var kids2 = $( '#two' ).children( '.info-circle' );
    var kids3 = $( '#three' ).children( '.info-circle' );
    var kids4 = $( '#four' ).children( '.info-circle' );
    var kids5 = $( '#five' ).children( '.info-circle' );
    var kids6 = $( '#six' ).children( '.info-circle' );

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

        // for Navigation comes after scroll
        var secondaryNavigation = $('#secondary-navigation'), windows = $(this);
        if(windows.scrollTop() > 110){
            secondaryNavigation.addClass('translate-down').removeClass('translate-up');
        } else {
            secondaryNavigation.addClass('translate-up').removeClass('translate-down');
        }
        
      //for discovery
      if($('#showCircle00').isOnScreen() && $('#showCircle01').isOnScreen()){
        $(kids0[0]).addClass('animation0 table-cell').removeClass('hide');
        $(kids0[1]).addClass('animation1 table-cell').removeClass('hide');
        $(kids0[2]).addClass('animation2 table-cell').removeClass('hide');
        $(kids0[3]).addClass('animation3 table-cell').removeClass('hide');
      }else{
        $(kids0[0]).removeClass('animation0 table-cell').addClass('hide');
        $(kids0[1]).removeClass('animation1 table-cell').addClass('hide');
        $(kids0[2]).removeClass('animation2 table-cell').addClass('hide');
        $(kids0[3]).removeClass('animation3 table-cell').addClass('hide');
      }

      if($('#showCircle10').isOnScreen() && $('#showCircle11').isOnScreen()){
        $(kids1[0]).addClass('animation0 table-cell').removeClass('hide');
        $(kids1[1]).addClass('animation1 table-cell').removeClass('hide');
        $(kids1[2]).addClass('animation2 table-cell').removeClass('hide');
        $(kids1[3]).addClass('animation3 table-cell').removeClass('hide');
        $(kids1[4]).addClass('animation4 table-cell').removeClass('hide');
      }else{
        $(kids1[0]).removeClass('animation0 table-cell').addClass('hide');
        $(kids1[1]).removeClass('animation1 table-cell').addClass('hide');
        $(kids1[2]).removeClass('animation2 table-cell').addClass('hide');
        $(kids1[3]).removeClass('animation3 table-cell').addClass('hide');
        $(kids1[4]).removeClass('animation4 table-cell').addClass('hide');
      }

      if($('#showCircle20').isOnScreen() && $('#showCircle21').isOnScreen()){
        $(kids2[0]).addClass('animation0 table-cell').removeClass('hide');
        $(kids2[1]).addClass('animation1 table-cell').removeClass('hide');
        $(kids2[2]).addClass('animation2 table-cell').removeClass('hide');
        $(kids2[3]).addClass('animation3 table-cell').removeClass('hide');
        $(kids2[4]).addClass('animation4 table-cell').removeClass('hide');
        $(kids2[5]).addClass('animation5 table-cell').removeClass('hide');
      }else{
        $(kids2[0]).removeClass('animation0 table-cell').addClass('hide');
        $(kids2[1]).removeClass('animation1 table-cell').addClass('hide');
        $(kids2[2]).removeClass('animation2 table-cell').addClass('hide');
        $(kids2[3]).removeClass('animation3 table-cell').addClass('hide');
        $(kids2[4]).removeClass('animation4 table-cell').addClass('hide');
        $(kids2[5]).removeClass('animation5 table-cell').addClass('hide');
      }

      if($('#showCircle30').isOnScreen() && $('#showCircle31').isOnScreen()){
        $(kids3[0]).addClass('animation0 table-cell').removeClass('hide');
        $(kids3[1]).addClass('animation1 table-cell').removeClass('hide');
        $(kids3[2]).addClass('animation2 table-cell').removeClass('hide');
        $(kids3[3]).addClass('animation3 table-cell').removeClass('hide');
        $(kids3[4]).addClass('animation4 table-cell').removeClass('hide');
        $(kids3[5]).addClass('animation5 table-cell').removeClass('hide');
      }else{
        $(kids3[0]).removeClass('animation0 table-cell').addClass('hide');
        $(kids3[1]).removeClass('animation1 table-cell').addClass('hide');
        $(kids3[2]).removeClass('animation2 table-cell').addClass('hide');
        $(kids3[3]).removeClass('animation3 table-cell').addClass('hide');
        $(kids3[4]).removeClass('animation4 table-cell').addClass('hide');
        $(kids3[5]).removeClass('animation5 table-cell').addClass('hide');
      }

      if($('#showCircle40').isOnScreen() && $('#showCircle41').isOnScreen()){
        $(kids4[0]).addClass('animation0 table-cell').removeClass('hide');
        $(kids4[1]).addClass('animation1 table-cell').removeClass('hide');
        $(kids4[2]).addClass('animation2 table-cell').removeClass('hide');
        $(kids4[3]).addClass('animation3 table-cell').removeClass('hide');
      }else{
        $(kids4[0]).removeClass('animation0 table-cell').addClass('hide');
        $(kids4[1]).removeClass('animation1 table-cell').addClass('hide');
        $(kids4[2]).removeClass('animation2 table-cell').addClass('hide');
        $(kids4[3]).removeClass('animation3 table-cell').addClass('hide');
      }

      if($('#showCircle50').isOnScreen() && $('#showCircle51').isOnScreen()){
        $(kids5[0]).addClass('animation0 table-cell').removeClass('hide');
        $(kids5[1]).addClass('animation1 table-cell').removeClass('hide');
        $(kids5[2]).addClass('animation2 table-cell').removeClass('hide');
        $(kids5[3]).addClass('animation2 table-cell').removeClass('hide');
        $(kids5[4]).addClass('animation3 table-cell').removeClass('hide');
      }else{
        $(kids5[0]).removeClass('animation0 table-cell').addClass('hide');
        $(kids5[1]).removeClass('animation1 table-cell').addClass('hide');
        $(kids5[2]).removeClass('animation2 table-cell').addClass('hide');
        $(kids5[3]).removeClass('animation2 table-cell').addClass('hide');
        $(kids5[4]).removeClass('animation3 table-cell').addClass('hide');
      }

      if($('#showCircle60').isOnScreen() && $('#showCircle61').isOnScreen()){
        $(kids6[0]).addClass('animation0 table-cell').removeClass('hide');
        $(kids6[1]).addClass('animation1 table-cell').removeClass('hide');
        $(kids6[2]).addClass('animation2 table-cell').removeClass('hide');
        $(kids6[3]).addClass('animation3 table-cell').removeClass('hide');
        $(kids6[4]).addClass('animation4 table-cell').removeClass('hide');
      }else{
        $(kids6[0]).removeClass('animation0 table-cell').addClass('hide');
        $(kids6[1]).removeClass('animation1 table-cell').addClass('hide');
        $(kids6[2]).removeClass('animation2 table-cell').addClass('hide');
        $(kids6[3]).removeClass('animation3 table-cell').addClass('hide');
        $(kids6[4]).removeClass('animation4 table-cell').addClass('hide');
      }
    });

    //Menu component to scroll
    setTimeout(function() {
          $('#secondary-navigation ul li a').on('click', function(en){
                //getting value from name property
                var anchorName = en.currentTarget.name;
                var windowHeight = $(window).height();
                var windowQuatrHeight = windowHeight/4;
                //Will work for every node in Menu - target id and name property of anchor tag should be same.
                if(anchorName != 'document'){
                    console.log(anchorName);
                    var target = '#' + anchorName;
                    var topDistance = $(target).offset().top;                    
                    $(document.body).animate({
                        'scrollTop':  topDistance - windowQuatrHeight
                    }, 1000);
                } 
                //Will work only for top
                if (anchorName == 'document'){
                    $(document.body).animate({
                        'scrollTop':  0
                    }, 1000);
                }  
          });
    }, 1000);
});