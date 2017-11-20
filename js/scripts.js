/* eslint-disable no-unused-vars */
const menuElem = document.getElementById('menu-mobile');
const titleElem = menuElem.querySelector('.menu-mobile__content');

titleElem.onclick = function() {
    menuElem.classList.toggle('menu-open');
};
import PropertySelector from './property-selector.js';

const Dispatcher = document.getElementById('property');

new PropertySelector(document.getElementById('colorList'));
new PropertySelector(document.getElementById('sizeList'));

Dispatcher.addEventListener('property-selected', ev => {
    const data = ev.detail;

    if (data.type === 'color') {
        changePicture(data.value);
    }
    if (data.type === 'size') {
        changePrice(data.value);
    }

});

function changePrice(value) {
    document.getElementById('size').innerHTML = '<span>Размер: <b>'+value+'</b></span> ';
}

function changePicture(color) {
    document.getElementById('color').innerHTML= '<span>Цвет: <b>'+ color +'</b></span>';
    document.getElementById('img').src = 'img/tshirt_' + color + '.jpg';
}

