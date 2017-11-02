/* eslint-disable no-unused-vars */
const form = document.getElementById('formProperty');
form.addEventListener('click', function (event) {
    const action = event.target.getAttribute('data-action');
    const size = document.getElementById('size');
    const color = document.getElementById('color');
    const img = document.getElementById('img');
    if(action === 'S' || action === 'M' || action === 'L' ) {
        size.innerHTML = '<span>Размер: <b>'+action+'</b></span> ';

    }
    if(action === 'white' || action === 'yellow' || action === 'green'){
        color.innerHTML = '<span>Цвет: <b>'+action+'</b></span> ';
        img.innerHTML = '<img src="img/tshirt_'+action+'.jpg" class="product__photo_size">';
    }
});
