$(function() {

    "use strict";

    $('[data-toggle="collapse"]').on("click", function(e) {
        e.preventDefault();

        var $this = $(this),
            accordion = $this.data("parent"),
            currentItem = $this.attr("href");

        /**
        * Remove active class from accordion items
        * SlideUp other accordion items
        */
        if( !$(currentItem).hasClass("active") ) {
            $(accordion).find(".accordion__content").slideUp("100");
            $(accordion).find(".accordion__item").removeClass("active");
        }

        /**
        * Add active class for current accordion item
        * Show active accordion panel
        */
        $(currentItem).find(".accordion__content").slideToggle("100");
        $(currentItem).toggleClass("active");
    });

});
