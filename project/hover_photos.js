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
});




$(document).ready(
    function(){
        console.log('!!!!!!!');

        if ($(window).width() >= 768) {

            $('.photo').on('mouseenter', function (event) {
                const elem = event.target;
                const $elem = $(elem);
                const text = $elem.data().info;
                const $text_block = $('#text_block');
                $text_block.empty();
                $text_block.append($('<p>' + text + '</p>'));
                console.log('!!!!!!TTTTT', $elem.offset().top);
                $text_block.offset({top: $elem.offset().top});

                $('#photo_content').on("scroll", function (scroll_event) {
                    console.log('!!!!!!TTTTT', elem.getBoundingClientRect());
                    if (elem.getBoundingClientRect().top < 0) {
                        $text_block.css({
                            top: '11%',
                            position: 'fixed'
                        });
                    } else {
                        $text_block.css({
                            top: $elem.offset().top,
                            position: 'absolute'
                        });
                    }

                });

            });

            $('#photo_content').on('mouseleave', function (event) {
                const elem = event.target;
                const $elem = $(elem);
                const text = $elem.data().info;
                const $text_block = $('#text_block');
                $text_block.empty();
            });

        }

    }
);

/*    $("#photo1").mouseover(function () {
        if ($(window).width() >= 768) {
            var top_img1 = $("#photo1").offset().top;
            //$("#hover_project1").stop(true, true).fadeIn('700');
            $("#hover_project1").attr('top', top_img1);
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
*/