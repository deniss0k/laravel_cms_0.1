
$(function() {

    "use strict";

    /**
    * Sticky
    * Docs: https://github.com/garand/sticky
    */

    // var stickyEl = $(".js-sticky-sidebar");
    //
    //     stickyEl.sticky({
    //         topSpacing: 90,
    //         bottomSpacing: 250
    //     });



    var stickyCartDetails = $("#js-sidebar-sticky");

    stickyCartDetails.sticky({
        topSpacing: 20,
        bottomSpacing: 250
    });

});
