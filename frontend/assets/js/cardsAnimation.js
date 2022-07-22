var $window = $(window);

$('.containerForCardsInCustomer').fadeIn('fast');

// function getWidth() {
//     $('.containerForCardsInCustomer').css({
//         height: $window.height(),
//         width: $window.width(),
//     });   
// }

function go(){
    $('#cards').owlCarousel({
        loop:false,
        items:1,
        margin:10,
        nav:false
    });
    
    (function($) {
        $.fn.clickToggle = function(func1, func2) {
            var funcs = [func1, func2];
            this.data('toggleclicked', 0);
            this.click(function() {
                var data = $(this).data();
                var tc = data.toggleclicked;
                $.proxy(funcs[tc], this)();
                data.toggleclicked = (tc + 1) % 2;
            });
            return this;
        };
    }(jQuery));    
    
    $('.card').each(function(){
        var that = $(this);
        var b = that.find('.bg-img');
        var o = that.find('.overlay');
        
        var r = that.find('.info .right');
        var l = that.find('.info .left');
        var tl = new TimelineMax();        
        
        
        var tween1 = TweenMax.to(that, 0.35, {height:600, margin:0, width:'100%', background:'#fff', borderRadius:0, ease: Expo.easeInOut, y: 0 });
        var tween2 = TweenMax.to(b, 0.35, {borderRadius:0, ease: Expo.easeInOut, y: 0 });
        var tween3 = TweenMax.to(o, 0.35, {borderRadius:0, ease: Expo.easeInOut, y: 0 });
        
        var tween4 = TweenMax.to(r, 0.35, {width:'100%', height:'100px', ease: Expo.easeInOut });
        var tween5 = TweenMax.to(l, 0.35, {width:'100%', height:'100px', ease: Expo.easeInOut });
        
        tween1.pause();
        tween2.pause();
        tween3.pause();    
        tween4.pause();
        tween5.pause();
        
        $(that).clickToggle(function() {   
            tween1.play();
            tween2.play();
            tween3.play();
            tween4.play();
            tween5.play();
        },
        function() {
            tween1.reverse();
            tween2.reverse();
            tween3.reverse();
            TweenMax.to(r, 0.35, {width:'30%', height:'132px', ease: Expo.easeInOut });
            TweenMax.to(l, 0.35, {width:'70%', height:'132px', ease: Expo.easeInOut });
            
        });        
    });
    
    $('.containerForCardsInCustomer').on('swipe',function(){
        $('.card').click(false);
        tween1.reverse();
        tween2.reverse();
        tween3.reverse(); 
    });      
};

go();
// getWidth();
// $window.resize(getWidth);