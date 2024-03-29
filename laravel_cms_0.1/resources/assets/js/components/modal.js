$(function() {

    "use strict";

    /**
     * Remodal
     * Docs: https://github.com/VodkaBears/Remodal
     */

    $("[data-toggle=remodal]").on("click", function(e) {
        e.preventDefault();

        var modal_id = $(this).data("target");

        var modal = $(modal_id).remodal({
            hashTracking: false,
            closeOnEscape: false
        });

        modal.open();
    });

});
