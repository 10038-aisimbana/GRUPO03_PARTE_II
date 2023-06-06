function onMouseOver(contenedor) {
    var imagenFrontal = contenedor.querySelector('.imagen.front');
    var imagenTrasera = contenedor.querySelector('.imagen.back');

    imagenFrontal.style.transform = 'rotateY(-90deg)';
    imagenTrasera.style.transform = 'rotateY(90deg)';
}

function onMouseOut(contenedor) {
    var imagenFrontal = contenedor.querySelector('.imagen.front');
    var imagenTrasera = contenedor.querySelector('.imagen.back');

    imagenFrontal.style.transform = 'rotateY(0)';
    imagenTrasera.style.transform = 'rotateY(180deg)';
}