$(document).ready(function () {
    let button = $('.to-top');

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 1000);
    })

    $('.buy-privilege__block-card').click(function (event) {
        const parent = $(this);

        if (parent.hasClass('privilege-active')) {
            parent.removeClass('privilege-active');
        } else {
            $('.buy-privilege__block-card').removeClass('privilege-active')
            parent.addClass('privilege-active');
        }
    });

    $('.buy-bundle__block-server-info').click(function (event) {
        const parent = $(this);

        if (parent.hasClass('privilege-active')) {
            parent.removeClass('privilege-active');
        } else {
            $('.buy-bundle__block-server-info').removeClass('privilege-active')
            parent.addClass('privilege-active');
        }
    });

    $('.rules__accordion-title').click(function (event) {
        $(this).toggleClass('accordion-active').next().slideToggle(600);
    });

    $('.donate__accordion-title').click(function (event) {
        $(this).toggleClass('accordion-active').next().slideToggle(600);
    });


    $('.donate__accordion-cases').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
    });
});







