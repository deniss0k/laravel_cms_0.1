$(function() {

    "use strict";

    $('[data-toggle="dropdown"]').on("click", function(e) {
        e.preventDefault();

        var $this = $(this),
            dropdown = $this.next("[data-dropdown]");

        $('[data-toggle="dropdown"]').removeClass('opened');
        $(this).addClass('opened');

        if(dropdown.is(":visible")) {
            dropdown.slideUp("fast");
            $(this).removeClass('opened');

        } else {
            $("[data-dropdown]").slideUp("fast");
            dropdown.slideToggle("fast");
        }
    });

    $('.dropdown__link.option').on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
            $text = $this.text(),
            dropdown = $("[data-dropdown]");

            dropdown.slideUp('fast');
        $('[data-toggle="dropdown"]').removeClass('opened');

        $this.parent().parent().parent().find("[data-toggle='dropdown']").find('.dropdown__item').text($text);
    });

    /**
    * Close dropdown on click somewhere
    */
    $("body").on("click", function() {
        $("[data-dropdown]").slideUp("fast");
        $('[data-toggle="dropdown"]').removeClass('opened');
    });


    /**
    * Close dropdown when resize browser
    */
    $(window).on("resize", function() {
        $("[data-dropdown]").slideUp("fast");
    });


    /**
    * Don't close dropdown when click on dropdown and button
    */
    $('[data-toggle="dropdown"], [data-dropdown]').on("click", function(e) {
        e.stopPropagation();
    });
});
