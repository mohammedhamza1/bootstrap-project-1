$(function () {
    'use strict';
    // navbar scroll
    $(window).scroll(function () {
        var navbar = $(".navbar");
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass("scrolled");
        } else {
            navbar.removeClass("scrolled");
        }

    });
    // deals with tabs
    $(".tab-switch li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        //hide all tabs
        $(".tabs-section .tabs-content > div").hide();
        // display tabs
        $('.' + $(this).data('class')).show();

    });

});
