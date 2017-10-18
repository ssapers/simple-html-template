const changeSize = (x) => {
    const y = document.getElementById('size');
    if(x === 1) {
        y.innerHTML = '<span>Размер: <b>S</b></span> ';

    }
    if(x === 2) {
        y.innerHTML = '<span>Размер: <b>M</b></span> ';

    }
    if(x === 3) {
        y.innerHTML = '<span>Размер: <b>L</b></span> ';

    }
};
const changeColor = (x) => {
    const y = document.getElementById('color');
    const z = document.getElementById('img');
    if(x === 1) {
        y.innerHTML = '<span>Цвет: <b>White</b></span> ';
        z.innerHTML = '<img src="img/tshirt_white.jpg">';

    }
    if(x === 2) {
        y.innerHTML = '<span>Цвет: <b>Yellow</b></span> ';
        z.innerHTML = '<img src="img/tshirt_yellow.jpg">';

    }
    if(x === 3) {
        y.innerHTML = '<span>Цвет: <b>Green</b></span> ';
        z.innerHTML = '<img src="img/tshirt_green.jpg">';

    }
};

