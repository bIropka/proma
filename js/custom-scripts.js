$(document).ready(function () {

    /******************************************************************************************************************
     ******* init scripts
     ******************************************************************************************************************/

    $('#timer').countdown({
        date: '01/27/2017 01:25:00',
        offset: +3,
        day: '',
        days: '',
        hour: '',
        hours: '',
        minute: '',
        minutes: '',
        second: '',
        seconds: ''
    });
    
    $('a[href^="#"]').click(function(){
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
        if ($(window).width() < '981'){
            $('.nav-panel').removeClass('active');
        }
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 100}, 400);
        return false;
    });

    setTimeout(function() {
        $('.slider-wrap').animate({opacity: '1'}, 500);
    }, 500);

    if ($(window).scrollTop() > 300) {
        $('.nav-panel .phone-number').addClass('active');
    } else {

        $('.nav-panel .phone-number').removeClass('active');
    }

    $(window).scroll(function() {

        if ($(window).scrollTop() > 300) {
            $('.nav-panel .phone-number').addClass('active');
        } else {

            $('.nav-panel .phone-number').removeClass('active');
        }

    });


    /******************************************************************************************************************
     ******* clicks scripts
     ******************************************************************************************************************/

    $('.custom-select .current-value').click(function() {

        $(this).parent().toggleClass('active');
        $(this).siblings('.fa').toggleClass('fa-caret-down fa-caret-up')

    });

    $('.custom-select ul li').click(function() {

        var newValue = $(this).html();
        $(this).html($(this).parent().siblings('.current-value').html());
        $(this).parent().siblings('.current-value').html(newValue)

        $(this).parents('.custom-select').removeClass('active');
        $(this).parent().siblings('.fa').removeClass('fa-caret-up').addClass('fa-caret-down');

    });

    $('.burger').click(function() {

        $(this).parents('.nav-panel').toggleClass('active');

    });

    $('.get-in-touch').click(function() {

        $('.window-callback').fadeIn();

    });
    
    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.window-inner')).length) $('.window').fadeOut();
        if ($target.hasClass('button-ok')) $('.window').fadeOut();
    });

    /******************************************************************************************************************
     ******* sliders
     ******************************************************************************************************************/

    $('.slider-products .slider').slick({
        slidesToShow: 5,
        appendArrows: '.slider-products-control',
        prevArrow: '.slider-products-prev',
        nextArrow: '.slider-products-next',
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.reviews .slider').slick({
        appendArrows: '.slider-reviews-control',
        prevArrow: '.slider-reviews-prev',
        nextArrow: '.slider-reviews-next',
        dots: true
    });


    /******************************************************************************************************************
     ******* sliders
     ******************************************************************************************************************/
    
    $(function($) {
        $('form').validatr({
            showall: true,
            valid: function() {
                // Получение ID формы
                var fieldMessage = $('.message-feedback');
                var formID = $(this).attr('id');
                // Добавление решётки к имени ID
                var formNm = $('#' + formID);
                var scriptFile;
                if (formID == 'form-discount') scriptFile = 'mail-discount.php';
                if (formID == 'form-callback') scriptFile = 'mail-callback.php';
                $.ajax({
                    type: "POST",
                    url: scriptFile,
                    data: formNm.serialize(),
                    success: function (data) {
                        $('.window-feedback').fadeIn();
                        $(fieldMessage).html('Сообщение отправлено!');
                    },
                    error: function (data) {
                        $('.window-feedback').fadeIn();
                        $(fieldMessage).html('ОШИБКА!<br> Попробуйте еще раз!');
                    }
                });
                return false;
            }
        });
    });

});
