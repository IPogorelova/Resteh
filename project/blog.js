//services menu script

var menu1 = document.getElementById('menu1');
var menu2 = document.getElementById('menu2');
var menu3 = document.getElementById('menu3');

var service1 = document.getElementById('service1');
var service2 = document.getElementById('service2');
var service3 = document.getElementById('service3');


menu1.onclick = function () {
    service1.classList.add('active');
    service2.classList.remove('active');
    service3.classList.remove('active');

    menu1.classList.add('active');
    menu2.classList.remove('active');
    menu3.classList.remove('active');
};

menu2.onclick = function () {
    service1.classList.remove('active');
    service2.classList.add('active');
    service3.classList.remove('active');

    menu1.classList.remove('active');
    menu2.classList.add('active');
    menu3.classList.remove('active');
};

menu3.onclick = function () {
    service1.classList.remove('active');
    service2.classList.remove('active');
    service3.classList.add('active');

    menu1.classList.remove('active');
    menu2.classList.remove('active');
    menu3.classList.add('active');
};

