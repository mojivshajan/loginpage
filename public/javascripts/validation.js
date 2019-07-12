$(document).ready(function () {
    $("#signup-form").validate({
        rules: {
            username: {
                required: true,
                minlength: 4
            },
            password: {
                required: true,
                minlength: 5
            },
            confirmpassword: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            }
        },
        messages: {
            username: {
                required: "please enter validname",
                minlength: "min lenghth 4"
            },
            password: {
                required: "enter password",
                minlength: "minlenghth 5"
            },
            confirmpassword: {
                require: " password is not same",
                minlength: "minlenth 5",
                equalTo: "password"
            }
        }

    })
})