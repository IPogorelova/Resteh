//services menu script

var menu1 = document.getElementById('menu1');
var menu2 = document.getElementById('menu2');
var menu3 = document.getElementById('menu3');
var menu4 = document.getElementById('menu4');
var menu5 = document.getElementById('menu5');

var service1 = document.getElementById('service1');
var service2 = document.getElementById('service2');
var service3 = document.getElementById('service3');
var service4 = document.getElementById('service4');
var service5 = document.getElementById('service5');


menu1.onclick = function () {
    service1.classList.add('active');
    service2.classList.remove('active');
    service3.classList.remove('active');
    service4.classList.remove('active');
    service5.classList.remove('active');


    menu1.classList.add('active');
    menu2.classList.remove('active');
    menu3.classList.remove('active');
    menu4.classList.remove('active');
    menu5.classList.remove('active');
};

menu2.onclick = function () {
    service1.classList.remove('active');
    service2.classList.add('active');
    service3.classList.remove('active');
    service4.classList.remove('active');
    service5.classList.remove('active');

    menu1.classList.remove('active');
    menu2.classList.add('active');
    menu3.classList.remove('active');
    menu4.classList.remove('active');
    menu5.classList.remove('active');
};

menu3.onclick = function () {
    service1.classList.remove('active');
    service2.classList.remove('active');
    service3.classList.add('active');
    service4.classList.remove('active');
    service5.classList.remove('active');

    menu1.classList.remove('active');
    menu2.classList.remove('active');
    menu3.classList.add('active');
    menu4.classList.remove('active');
    menu5.classList.remove('active');
};

menu4.onclick = function () {
    service1.classList.remove('active');
    service2.classList.remove('active');
    service3.classList.remove('active');
    service4.classList.add('active');
    service5.classList.remove('active');

    menu1.classList.remove('active');
    menu2.classList.remove('active');
    menu3.classList.remove('active');
    menu4.classList.add('active');
    menu5.classList.remove('active');
};

menu5.onclick = function () {
    service1.classList.remove('active');
    service2.classList.remove('active');
    service3.classList.remove('active');
    service4.classList.remove('active');
    service5.classList.add('active');

    menu1.classList.remove('active');
    menu2.classList.remove('active');
    menu3.classList.remove('active');
    menu4.classList.remove('active');
    menu5.classList.add('active');
};
