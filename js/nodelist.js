// Obtener los elementos de la lista como un NodeList
var nodeList = document.querySelectorAll('#myList li');

// Utilizar el método forEach() para recorrer los elementos del NodeList
nodeList.forEach(function(element, index) {
                                // Aplicar diferentes acciones según el índice del elemento
if (index % 2 === 0) {
// Cambiar el color de fondo de los elementos pares
element.classList.add('highlight1');
} else {
// Agregar una clase 'bold' a los elementos impares
element.classList.add('bold');

// Agregar un evento de clic a los elementos impares
element.addEventListener('click', function() {
alert('Haz hecho clic en el elemento: ' + element.textContent);
});
}
});