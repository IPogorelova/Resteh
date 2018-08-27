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
};

//project descriptions hover on photo
var photo1 = document.getElementById('photo1');
var photo2 = document.getElementById('photo2');
var photo3 = document.getElementById('photo3');
var photo4 = document.getElementById('photo4');

var general = document.getElementById('general_text');
var projects = document.getElementById('projects');
var about = document.getElementById('about');
var proj1 = document.getElementById('hover_project1');
var proj2 = document.getElementById('hover_project2');
var proj3 = document.getElementById('hover_project3');
var proj4 = document.getElementById('hover_project4');


photo1.onmouseover = function() {
    proj1.classList.toggle('proj_preview');
    general.classList.toggle('proj_preview');
    projects.classList.toggle('proj_preview');
    about.classList.toggle('proj_preview');
};
photo1.onmouseout = function() {
    proj1.classList.toggle('proj_preview');
    general.classList.toggle('proj_preview');
    projects.classList.toggle('proj_preview');
    about.classList.toggle('proj_preview');
};

photo2.onmouseover = function() {
    proj2.classList.toggle('proj_preview');
    general.classList.toggle('proj_preview');
    projects.classList.toggle('proj_preview');
    about.classList.toggle('proj_preview');
};
photo2.onmouseout = function() {
    proj2.classList.toggle('proj_preview');
    general.classList.toggle('proj_preview');
    projects.classList.toggle('proj_preview');
    about.classList.toggle('proj_preview');
};

photo3.onmouseover = function() {
    proj3.classList.toggle('proj_preview');
    general.classList.toggle('proj_preview');
    projects.classList.toggle('proj_preview');
    about.classList.toggle('proj_preview');
};
photo3.onmouseout = function() {
    proj3.classList.toggle('proj_preview');
    general.classList.toggle('proj_preview');
    projects.classList.toggle('proj_preview');
    about.classList.toggle('proj_preview');
};


photo4.onmouseover = function() {
    proj4.classList.toggle('proj_preview');
    general.classList.toggle('proj_preview');
    projects.classList.toggle('proj_preview');
    about.classList.toggle('proj_preview');
};
photo4.onmouseout = function() {
    proj4.classList.toggle('proj_preview');
    general.classList.toggle('proj_preview');
    projects.classList.toggle('proj_preview');
    about.classList.toggle('proj_preview');
};