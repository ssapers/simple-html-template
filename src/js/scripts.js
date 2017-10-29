/* eslint-disable no-unused-vars */

const form = document.getElementById('formProperty');
form.addEventListener('click', function (event) {
    const action = event.target.getAttribute('data-action');
    const size = document.getElementById('size');
    const color = document.getElementById('color');
    const img = document.getElementById('img');
    if(action === 'S') {
        size.innerHTML = '<span>Размер: <b>S</b></span> ';

    }
    if(action === 'M') {
        size.innerHTML = '<span>Размер: <b>M</b></span> ';

    }
    if(action === 'L') {
        size.innerHTML = '<span>Размер: <b>L</b></span> ';
    }
    if(action === 'white') {
        color.innerHTML = '<span>Цвет: <b>White</b></span> ';
        img.innerHTML = '<img src="img/tshirt_white.jpg">';

    }
    if(action === 'yellow') {
        color.innerHTML = '<span>Цвет: <b>Yellow</b></span> ';
        img.innerHTML = '<img src="img/tshirt_yellow.jpg">';

    }
    if(action === 'green') {
        color.innerHTML = '<span>Цвет: <b>Green</b></span> ';
        img.innerHTML = '<img src="img/tshirt_green.jpg">';
    }
});

