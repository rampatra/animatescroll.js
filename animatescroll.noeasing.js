/*
 * @build  : 20-07-2013
 * @author : Ram swaroop
 * @site   : Compzets.com
 */
(function($){
    
    $.fn.animatescroll = function(options) {
        
        // fetches options
        var opts = $.extend({},$.fn.animatescroll.defaults,options);
        
        if (!this.length) { return this; }

        this.each(function() {

            var $this = $(this),
                scrollTop,
                completeFlag = false;

            if (typeof opts.onScrollStart == 'function') { // make sure the callback is a function
                opts.onScrollStart.call($this); // brings the scope to the callback
            }

            if(opts.element == 'html,body'){
                scrollTop = $this.offset().top - opts.padding;
            } else {
                scrollTop = $this.offset().top - $this.parent().offset().top + $this.parent().scrollTop() - opts.padding;
            }

            // Scroll the element to the desired position
            $(opts.element).animate(
                { scrollTop: scrollTop },
                {
                    duration: opts.scrollSpeed,
                    easing: opts.easing,
                    complete: function(){
                        if (typeof opts.onScrollEnd == 'function' && completeFlag === false) { // make sure the callback is a function
                            completeFlag = true;
                            opts.onScrollEnd.call($this); // brings the scope to the callback
                        }
                    }
                });
        });

        return this;
    };
    
    // default options
    $.fn.animatescroll.defaults = {        
        easing:"swing",
        scrollSpeed:800,
        padding:0,
        element:"html,body"
    };   
    
}(jQuery));


