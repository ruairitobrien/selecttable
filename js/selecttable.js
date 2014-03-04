;(function ($) {
    $.fn.tableSelect = function (options) {
        var settings = $.extend({
            // Default options.
            backgroundColor: "RED"
            
        }, options);
        this.find( "td" ).css( "background-color", settings.backgroundColor );
        
        var test = function(text) {
            return text;
        };
        
        return {
            test: test
        };
        
    };
}(jQuery));
