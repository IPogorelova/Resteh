$(document).ready(function() {

    $("#photo_content").mouseover(function () {
        if ($(window).width() >= 768) {
            $("#general_text").fadeOut('700');
        }
    });

    $(".column.short").mouseover(function () {
        if ($(window).width() >= 768) {
            $("#general_text").fadeIn('700');
        }
    });


    $("#photo1").mouseover(function () {
        if ($(window).width() >= 768) {
            $("#hover_project1").stop(true, true).fadeIn('700');
        }
    });
    $(this).mouseout(function () {
        if ($(window).width() >= 768) {
            $("#hover_project1").stop(true, true).fadeOut('700');
        }
    });

    $("#photo2").mouseover(function () {
        if ($(window).width() >= 768) {
            $("#hover_project2").stop(true, true).fadeIn('700');
        }
    });
    $(this).mouseout(function () {
        if ($(window).width() >= 768) {
            $("#hover_project2").stop(true, true).fadeOut('700');
        }
    });

    $("#photo3").mouseover(function () {
        if ($(window).width() >= 768) {
            $("#hover_project3").stop(true, true).fadeIn('700');
        }
    });
    $(this).mouseout(function () {
        if ($(window).width() >= 768) {
            $("#hover_project3").stop(true, true).stop().fadeOut('700');
        }
    });

    $("#photo4").mouseover(function () {
        if ($(window).width() >= 768) {
            $("#hover_project4").stop(true, true).fadeIn('0.5s');
        }
    });
    $(this).mouseout(function () {
        if ($(window).width() >= 768) {
            $("#hover_project4").stop(true, true).fadeOut('0.5s');
        }
    });
});
