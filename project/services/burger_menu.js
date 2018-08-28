// "burger"-menu open&close script
var menu_button = document.getElementById('burger');
var menu_element = document.getElementById('menu');

menu_button.onclick = function() {
    menu_element.classList.toggle('open_menu');
};