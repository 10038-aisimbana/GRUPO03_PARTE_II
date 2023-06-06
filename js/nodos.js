function agregarElemento() {
// Crear un nuevo elemento de párrafo
var nuevoParrafo = document.createElement("p");
                                 
// Crear un nodo de texto para el contenido del párrafo
var contenido = document.createTextNode("¡Hola, soy un nuevo párrafo!");

// Asignar el nodo de texto al párrafo
nuevoParrafo.appendChild(contenido);

// Establecer el color del párrafo en verde
nuevoParrafo.style.color = "green";

// Agregar el párrafo al elemento con el id "contenedor1"
document.getElementById("contenedor1").appendChild(nuevoParrafo);
}