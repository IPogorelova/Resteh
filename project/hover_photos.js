$(document).ready(function() {

    $("#photo_content").mouseover(function () {
        if ($(window).width() >= 768) {
            $("#general_text").hide('1s');
        }
    });

    $(".column.short").mouseover(function () {
        if ($(window).width() >= 768) {
            $("#general_text").show('0.5s');
        }
    });


    $("#photo1").mouseover(function () {
        if ($(window).width() >= 768) {
            $("#hover_project1").show('1s');
        }
    });
    $(this).mouseout(function () {
        if ($(window).width() >= 768) {
            $("#hover_project1").hide('0.5s');
        }
    });

    $("#photo2").mouseover(function () {
        if ($(window).width() >= 768) {
            $("#hover_project2").show('0.5s');
        }
    });
    $(this).mouseout(function () {
        if ($(window).width() >= 768) {
            $("#hover_project2").hide('0.5s');
        }
    });

    $("#photo3").mouseover(function () {
        if ($(window).width() >= 768) {
            $("#hover_project3").show('0.5s');
        }
    });
    $(this).mouseout(function () {
        if ($(window).width() >= 768) {
            $("#hover_project3").hide('0.5s');
        }
    });

    $("#photo4").mouseover(function () {
        if ($(window).width() >= 768) {
            $("#hover_project4").show('0.5s');
        }
    });
    $(this).mouseout(function () {
        if ($(window).width() >= 768) {
            $("#hover_project4").hide('0.5s');
        }
    });
});
