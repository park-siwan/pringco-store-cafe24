var nav = $('.nav-container');
 
$(window).scroll(function () {
    if ($(this).scrollTop() > 130) {
        nav.addClass("f-nav");
    } else {
        nav.removeClass("f-nav");
    }
});