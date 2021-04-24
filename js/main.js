$(document).ready(function () {
    let button = $('.to-top');

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 1000);
    })

    $('.news__sort-item').click(function () {

        $('.news__sort-item').removeClass('sort-item-active');
        $(this).addClass('sort-item-active');
    });

    $('.banlist__sort-item').click(function () {

        $('.banlist__sort-item').removeClass('active-sort-link');
        $(this).addClass('active-sort-link');
    });


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

    $('.replenish__content-card').click(function (event) {
        const parent = $(this);

        if (parent.hasClass('replenish-active')) {
            parent.removeClass('replenish-active');
        } else {
            $('.replenish__content-card').removeClass('replenish-active')
            parent.addClass('replenish-active');
        }
    });

    $('.rules__accordion-title').click(function (event) {
        $(this).toggleClass('accordion-active').next().slideToggle(600);
    });

    $('.donate__accordion-title').click(function (event) {
        $(this).toggleClass('accordion-active').next().slideToggle(600);
    });


    $('.tabs__triggers-item').click(function (e) {
        e.preventDefault();

        $('.tabs__triggers-item').removeClass('tabs__triggers-item-active');
        $('.tabs__content-item').removeClass('tabs__content-item-active');

        $(this).addClass('tabs__triggers-item-active');
        $($(this).attr('href')).addClass('tabs__content-item-active');
    });

    $('.tabs__triggers-item:first').click();



    $('.friends__tabs-triggers-item').click(function (e) {
        e.preventDefault();

        $('.friends__tabs-triggers-item').removeClass('tabs__triggers-item-active');
        $('.friends__tab-content-item').removeClass('tabs__content-item-active');

        $(this).addClass('tabs__triggers-item-active');
        $($(this).attr('href')).addClass('tabs__content-item-active');
    });

    $('.friends__tabs-triggers-item:first').click();



    $('.bans__tabs-triggers-item').click(function (e) {
        e.preventDefault();

        $('.bans__tabs-triggers-item').removeClass('tabs__bans-triggers-item-active');
        $('.bans__tab-content-item').removeClass('tabs__bans-content-item-active');

        $(this).addClass('tabs__bans-triggers-item-active');
        $($(this).attr('href')).addClass('tabs__bans-content-item-active');
    });

    $('.bans__tabs-triggers-item:first').click();



    $('.case__accordion-cases-link').click(function (e) {
        e.preventDefault();

        $('.case__accordion-cases-link').removeClass('tabs__bans-triggers-item-active');
        $('.case__tab-content-item').removeClass('tabs__case-content-item-active');

        $(this).addClass('tabs__bans-triggers-item-active');
        $($(this).attr('href')).addClass('tabs__case-content-item-active');
    });

    $('.case__accordion-cases-link:first').click();




    $('.donate__accordion-bundle-link').click(function (e) {
        e.preventDefault();

        $('.donate__accordion-bundle-link').removeClass('tabs__bans-triggers-item-active');
        $('.bundle__tab-content-item').removeClass('tabs__case-content-item-active');

        $(this).addClass('tabs__bans-triggers-item-active');
        $($(this).attr('href')).addClass('tabs__case-content-item-active');
    });

    $('.donate__accordion-bundle-link:first').click();



    const modalCall = $("[data-modal]");

    modalCall.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $('.modal').hide();
        $(modalId).fadeIn();
        $("body").addClass('no-scroll');
    });

    $('.modal').on("click", function (event) {
        $(this).fadeOut();
        $("body").removeClass('no-scroll');
    });


    $('.modal-content').on("click", function (event) {
        event.stopPropagation();
    });




    $('a.scrollto').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });

    let input = $('.buy__content-count-input');
    input.val();

    $('.buy__content-count-counter').click(function () {
        if ($(this).hasClass('minus'))
            input.val(parseInt(input.val()) - 16);
        else if (input.val() >= 0)
            input.val(parseInt(input.val()) + 16);
    });

    $('.profile__top-acc-link-info').click(function (event) {
        event.preventDefault();

        $('.profile__top-acc-information').fadeIn();
    });

    $('.profile__top-acc-information-content-back').click(function (event) {
        event.preventDefault();

        $('.profile__top-acc-information').fadeOut();
    });

    $('#convert-rub').on('change', function () {
        $('#convert-lucky').val($('#convert-rub').val() + " ЛК");
    })

    $('.donate__accordion-cases').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
    });

    $('.case__accordion-cases').slick({
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
    });

});







