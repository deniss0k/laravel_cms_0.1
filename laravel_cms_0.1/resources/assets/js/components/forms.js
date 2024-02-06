$(document).ready(function () {


    // if (!$('.js-new-form input'.val() == "")) {
    //     $('.js-new-form label').addClass('active');
    // } else {
    //     removeClass('active');
    // }

    var $formField = $('.js-form-field');

    $formField.on('focus', function () {
        var $this = $(this);

        $this.parent().find('.label').addClass('active');
    });

    $formField.on('blur', function () {
        var $this = $(this);

        if ($this.val() == "") {
            $this.parent().find('.label').removeClass('active');
        } else {
            $this.parent().find('.label').addClass('active');
        }
    });
});