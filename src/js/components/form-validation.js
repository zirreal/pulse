$(document).ready(function(){ 
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                tel: 'required',
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: 'Пожалуйста, введите свое имя',
                    minlength: jQuery.validator.format('Введите {0} символа!')
                },
                tel: 'Пожалуйста, введите свой номер телефона',
                email: {
                    required: 'Пожалуйста, введите свой email',
                    email: 'Неправильно введен адрес почты'
                }
            }
        });
    };

    validateForms('.modal__form');
    validateForms('.consultation__form');
    validateForms('.modal__form');


    // phone mask
    $('input[name=tel]').mask('+7 (999) 999-99-99');
})