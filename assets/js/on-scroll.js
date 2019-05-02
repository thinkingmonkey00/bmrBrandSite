$(function() {
    var navbar = $(".navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            navbar.addClass("scroll");
        } else {
            navbar.removeClass("scroll");
        }
    });
});