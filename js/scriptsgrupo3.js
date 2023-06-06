var animacionIniciada = false;
var idAnimacion;

function alternarAnimacion() {
if (!animacionIniciada) {
iniciarAnimacion();
animacionIniciada = true;
} else {
detenerAnimacion();
animacionIniciada = false;
}
}

function iniciarAnimacion() {
var balon = document.getElementById('balon');
var posicion = 0;
var direccion = 1;
var velocidad = 2;

function animar() {
posicion += velocidad * direccion;

if (posicion > 200 || posicion < 0) {
direccion *= -1;
}

balon.style.left = posicion + 'px';

idAnimacion = requestAnimationFrame(animar);
}

animar();
}

function detenerAnimacion() {
cancelAnimationFrame(idAnimacion);
};