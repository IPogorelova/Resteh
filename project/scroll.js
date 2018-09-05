/*$(function(){
    $(document).scroll(function(){
        $('#general_text').stop().animate({
            scrollTop : $(this).scrollTop()
        });
    });
});
*/

var photo1 = document.getElementById('photo1');
var about_text = document.getElementById('general_text');
/*var content = document.getElementsByClassName('column.long col_content');*/

window.onscroll = function() {
    var coords = photo1.getBoundingClientRect();

    if (coords.top < 0) {
        alert('here i am :3');
        /*about_text.classList.add('scrolled');*/
        about_text.getPropertyValue('display: none');
    }
    if (coords.top >= 0) {
        /*about_text.classList.remove('scrolled');*/
        about_text.getPropertyValue('display: block');
    }

};

