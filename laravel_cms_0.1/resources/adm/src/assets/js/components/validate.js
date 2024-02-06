$(document).ready(function () {



    /**
     *   Validation login, Register, Reminder
     *
     * */

    $('.js-validate-form').validate({

        ignore: [],

        rules: {
            mail: {
                required: true,
                customemail: true
            },

            password: {
                required: true,
            },

            password2: {
                equalTo: '[name="password"]'
            },

            rules: {
                required: true
            }
        },


        errorPlacement: function(error, element) {
            return false;
        },

        unhighlight: function(element) { // <-- fires when element is valid
            $(element).removeClass('error').addClass('valid');
        },
    });







});