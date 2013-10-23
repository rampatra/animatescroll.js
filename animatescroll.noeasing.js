/*
 * @build  : 20-07-2013
 * @author : Ram swaroop
 * @site   : Compzets.com
 */
(function($){
    
    $.fn.animatescroll = function(options) {
        
        // fetches options
        var opts = $.extend({},$.fn.animatescroll.defaults,options);
        
        if(opts.element == "html,body") {
            // Get the distance of particular id or class from top
            var offset = this.offset().top;
        
            // Scroll the page to the desired position
            $(opts.element).stop().animate({ scrollTop: offset - opts.padding}, opts.scrollSpeed, opts.easing);
        }
        else {
            // Scroll the element to the desired position
            $(opts.element).stop().animate({ scrollTop: this.offset().top - this.parent().offset().top + this.parent().scrollTop() - opts.padding}, opts.scrollSpeed, opts.easing);
        }
        
    };
    
    // default options
    $.fn.animatescroll.defaults = {        
        easing:"swing",
        scrollSpeed:800,
        padding:0,
        element:"html,body"
    };   
    
}(jQuery));