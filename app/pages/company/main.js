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

/*$(function() {

    var a = $('a[href*=#]:not([href=#])');
    a.on('click',function() {
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

});*/

function key(){
    $(document).keydown(function(e) {
       return e.keyCode;
    });
}

$(window).on('scroll', function(){
    if(key() == 32){
        console.log('------------------------->'+$(document).scrollTop());
    }
})

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

    var lastScrollTop = 0;
    $(window).scroll(function(event){

        // if($('#ourApproach').isOnScreen() || $('#zero').isOnScreen()){
        //     $('#marketing').addClass('upwards3-strategy');
        //     $('#platform').addClass('upwards3-strategy');
        //     $('#strategy').addClass('upwards3-strategy');
        // }
        var st = $(this).scrollTop();
        //console.log('st', st);
        if (st > lastScrollTop){
           // downscroll code
           var height = $(window).scrollTop()
           var heightOfWindow = $(window).height();
            console.log(height, heightOfWindow);
            if(height > 750){
                $('#strategy').addClass('upwards0-strategy').removeClass('downwards0-strategy');   
                if(height > 790){
                    $('#strategy').addClass('upwards1-strategy').removeClass('upwards0-strategy downwards1-strategy');  
                    if(height > 840){
                        $('#strategy').addClass('upwards2-strategy').removeClass('upwards1-strategy downwards2-strategy'); 
                        if(height > 890){
                            $('#strategy').addClass('upwards3-strategy').removeClass('upwards2-strategy downwards3-strategy');
                        }
                    }
                }
            }
            if(height > 890){
                $('#platform').addClass('upwards0-strategy').removeClass('downwards0-strategy');   
                if(height > 940){
                    $('#platform').addClass('upwards1-strategy').removeClass('upwards0-strategy downwards1-strategy');  
                    if(height > 990){
                        $('#platform').addClass('upwards2-strategy').removeClass('upwards1-strategy downwards2-strategy'); 
                        if(height > 1020){
                            $('#platform').addClass('upwards3-strategy').removeClass('upwards2-strategy downwards3-strategy');
                        }
                    }
                }
            }
            if(height > 960){
                $('#marketing').addClass('upwards0-strategy').removeClass('downwards0-strategy');   
                if(height > 1000){
                    $('#marketing').addClass('upwards1-strategy').removeClass('upwards0-strategy downwards1-strategy');  
                    if(height > 1030){
                        $('#marketing').addClass('upwards2-strategy').removeClass('upwards1-strategy downwards2-strategy'); 
                        if(height > 1060){
                            $('#marketing').addClass('upwards3-strategy').removeClass('upwards2-strategy downwards3-strategy');
                        }
                    }
                }
            }
        } else {
            //upward scroll
            var height = $(window).scrollTop()
            var heightOfWindow = $(window).height();
            console.log(height, heightOfWindow);
            if(height < 1080){
                $('#marketing').addClass('downwards3-strategy').removeClass('upwards3-strategy'); 
                if(height < 1040){
                    $('#marketing').addClass('downwards2-strategy').removeClass('upwards2-strategy downwards3-strategy'); 
                    if(height < 1000){
                        $('#marketing').addClass('downwards1-strategy').removeClass('upwards1-strategy downwards2-strategy'); 
                        if(height < 960){
                            $('#marketing').addClass('downwards0-strategy').removeClass('upwards0-strategy downwards1-strategy'); 
                        }
                    }
                }
            }
            if(height < 1040){
                $('#platform').addClass('downwards3-strategy').removeClass('upwards3-strategy'); 
                if(height < 1000){
                    $('#platform').addClass('downwards2-strategy').removeClass('upwards2-strategy downwards3-strategy'); 
                    if(height < 970){
                        $('#platform').addClass('downwards1-strategy').removeClass('upwards1-strategy downwards2-strategy'); 
                        if(height < 930){
                            $('#platform').addClass('downwards0-strategy').removeClass('upwards0-strategy downwards1-strategy'); 
                        }
                    }
                }
            }
            if(height < 910){
                $('#strategy').addClass('downwards3-strategy').removeClass('upwards3-strategy'); 
                if(height < 870){
                    $('#strategy').addClass('downwards2-strategy').removeClass('upwards2-strategy downwards3-strategy'); 
                    if(height < 840){
                        $('#strategy').addClass('downwards1-strategy').removeClass('upwards1-strategy downwards2-strategy'); 
                        if(height < 800){
                            $('#strategy').addClass('downwards0-strategy').removeClass('upwards0-strategy downwards1-strategy'); 
                        }
                    }
                }
            }

        }
        lastScrollTop = st;
    });
    //to call the function each time whenever a user scrolls the window

    $(window).scroll(function() {
        // for Navigation comes after scroll
        var secondaryNavigation = $('#secondary-navigation'), windows = $(this);
        if(windows.scrollTop() > 160){
            secondaryNavigation.addClass('translate-down').removeClass('translate-up');
        } else {
            secondaryNavigation.addClass('translate-up').removeClass('translate-down');
        }
    });
});


