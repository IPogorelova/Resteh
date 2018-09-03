// color of active left menu points
var refer = document.getElementsByTagName('nav');
refer.onclick = function() {
    refer.setAttribute('color', '#030303');
};

// "burger"-menu open&close script
var menu_button = document.getElementById('burger');
var menu_element = document.getElementById('menu');

menu_button.onclick = function() {
  menu_element.classList.toggle('open_menu');
  menu_button.classList.toggle('open_menu');
};
