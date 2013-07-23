/*
 * @build : 20-07-2013
 * @author : Ram swaroop
 * @easing effect : easings.net
 */
(function($){
    
    $.fn.animatescroll = function(options) {
        
        // fetches options
        var opts = $.extend({},$.fn.animatescroll.defaults,options);
        
        // Get the distance of particular id or class from top
        var offset = this.offset().top;

        // Scroll the page to the desired position
        $("html, body").animate({ scrollTop: offset-opts.padding }, opts.scrollSpeed, opts.easing);
        
    };
    
    // default options
    $.fn.animatescroll.defaults = {        
        easing:"swing",
        scrollSpeed:800,
        padding:0
    };   
    
}(jQuery));