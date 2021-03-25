(function () {
    let button = $('.to-top');

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 1000);
    })



}())

$('.rules__accordion-title').click(function (event) {
    $(this).toggleClass('accordion-active').next().slideToggle(600);
});