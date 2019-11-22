$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var opened = $('.navbar-collapse').hasClass('show');
        if (opened === true && !clickover.hasClass('navbar-toggler')) {
            $('.navbar-toggler').click();
        }
    })
});

$(document).ready(function () {
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
    })
});