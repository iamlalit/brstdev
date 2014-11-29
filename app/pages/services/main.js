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
           //console.log(height, heightOfWindow);
            if(height > 450){
                $('#strategy').addClass('upwards0-strategy').removeClass('downwards0-strategy');   
                if(height > 500){
                    $('#strategy').addClass('upwards1-strategy').removeClass('upwards0-strategy downwards1-strategy');  
                    if(height > 550){
                        $('#strategy').addClass('upwards2-strategy').removeClass('upwards1-strategy downwards2-strategy'); 
                        if(height > 600){
                            $('#strategy').addClass('upwards3-strategy').removeClass('upwards2-strategy downwards3-strategy');
                        }
                    }
                }
            }
            if(height > 580){
                $('#platform').addClass('upwards0-strategy').removeClass('downwards0-strategy');   
                if(height > 630){
                    $('#platform').addClass('upwards1-strategy').removeClass('upwards0-strategy downwards1-strategy');  
                    if(height > 680){
                        $('#platform').addClass('upwards2-strategy').removeClass('upwards1-strategy downwards2-strategy'); 
                        if(height > 730){
                            $('#platform').addClass('upwards3-strategy').removeClass('upwards2-strategy downwards3-strategy');
                        }
                    }
                }
            }
            if(height > 650){
                $('#marketing').addClass('upwards0-strategy').removeClass('downwards0-strategy');   
                if(height > 700){
                    $('#marketing').addClass('upwards1-strategy').removeClass('upwards0-strategy downwards1-strategy');  
                    if(height > 750){
                        $('#marketing').addClass('upwards2-strategy').removeClass('upwards1-strategy downwards2-strategy'); 
                        if(height > 800){
                            $('#marketing').addClass('upwards3-strategy').removeClass('upwards2-strategy downwards3-strategy');
                        }
                    }
                }
            }
        } else {
            //upward scroll
            var height = $(window).scrollTop()
            var heightOfWindow = $(window).height();
            //console.log(height, heightOfWindow);
            if(height < 820){
                $('#marketing').addClass('downwards3-strategy').removeClass('upwards3-strategy'); 
                if(height < 770){
                    $('#marketing').addClass('downwards2-strategy').removeClass('upwards2-strategy downwards3-strategy'); 
                    if(height < 720){
                        $('#marketing').addClass('downwards1-strategy').removeClass('upwards1-strategy downwards2-strategy'); 
                        if(height < 670){
                            $('#marketing').addClass('downwards0-strategy').removeClass('upwards0-strategy downwards1-strategy'); 
                        }
                    }
                }
            }
            if(height < 710){
                $('#platform').addClass('downwards3-strategy').removeClass('upwards3-strategy'); 
                if(height < 660){
                    $('#platform').addClass('downwards2-strategy').removeClass('upwards2-strategy downwards3-strategy'); 
                    if(height < 610){
                        $('#platform').addClass('downwards1-strategy').removeClass('upwards1-strategy downwards2-strategy'); 
                        if(height < 560){
                            $('#platform').addClass('downwards0-strategy').removeClass('upwards0-strategy downwards1-strategy'); 
                        }
                    }
                }
            }
            if(height < 620){
                $('#strategy').addClass('downwards3-strategy').removeClass('upwards3-strategy'); 
                if(height < 580){
                    $('#strategy').addClass('downwards2-strategy').removeClass('upwards2-strategy downwards3-strategy'); 
                    if(height < 530){
                        $('#strategy').addClass('downwards1-strategy').removeClass('upwards1-strategy downwards2-strategy'); 
                        if(height < 480){
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

$(document).ready(function(){
    $("#myAffix").affix();
});


(function fixCircle(){
    var pos = $('.circleContainer').offset().top;
    $(window).on('scroll', function(){
        //console.log(x.offset().top +'-------'+ main.scrollTop());
        if( pos <= $(document).scrollTop()){
            $('#display').addClass('affix');
        }else{
            $('#display').removeClass('affix');
        }
        console.log(pos +' <= '+ $(document).scrollTop());
    });
})();


$.fn.scrollStopped = function(callback) {
    $(this).scroll(function(){
        var self = this, $this = $(self);
        if ($this.data('scrollTimeout')) {
            clearTimeout($this.data('scrollTimeout'));
        }
        $this.data('scrollTimeout', setTimeout(callback,250,self));
    });
};

(function contentSwitcher(){
    $(window).on("scroll", function (e) {
        e.preventDefault();
        var pos = $('#display').offset();
        $('.getContent').each(function () {
            if ($(this).next().hasClass('getContent')){
                if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
                    //$('#display').html($(this).find('.inner-circle').clone());
                    $('#display').html($(this).find('.inner-circle').clone());
                    //$('#display').find('.bounce').children().removeClass('hide');
                    return;
                }
            }
        });
    });
    $(window).scrollStopped(function(){
        var pos = $('#display').offset();
        $('.getContent').each(function () {
            if ($(this).next().hasClass('getContent')){
                if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
                    $('#display').append($(this).find('.bounce').clone());
                    $('#display').find('.bounce').children().removeClass('hide');
                    return;
                }else if($('.circleContainer').offset().top >= $(document).scrollTop()){
                    $('#display').find('.bounce').children().remove();
                    //console.log($('.circleContainer').offset().top +' - '+ $(this).offset().top);
                }
            }
        });
    });
    $(document).ready(function () {
        $(window).trigger('scroll'); // init the value
    });
})();