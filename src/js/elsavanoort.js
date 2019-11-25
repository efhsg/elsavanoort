function closeHamburgermenuOnClick() {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var opened = $('.navbar-collapse').hasClass('show');
        if (opened === true && !clickover.hasClass('navbar-toggler')) {
            $('.navbar-toggler').click();
        }
    })
}

function scrollToHashOnNavbarLinkClick() {
    $('a').on('click', function (event) {
        if (this.hash !== '' && $(this).parents('#navbarContent').length > 0) {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            })
        }
    });
}

function smoothCarouselResize() {
    var $carousel = $('.carousel');

    $carousel.on('slide.bs.carousel', function (e) {
        if ($(this).find('.carousel-inner').height() > 0) {
            $(this).find('.carousel-inner').animate({
                height: $(e.relatedTarget).height()
            }, 300);
        }
    });
    $carousel.on('slid.bs.carousel', function () {
        $(this).find('.carousel-inner').height('100%');
    });
}

$(document).ready(function () {
    closeHamburgermenuOnClick();
    scrollToHashOnNavbarLinkClick();
    smoothCarouselResize();
});
