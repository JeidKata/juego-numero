/*
JavaScript, por su parte, es el único lenguaje de programación de los tres (HTML, CSS y JavaScript). 
Es responsable de agregar interactividad y dinamismo a las páginas. 
Permite la creación de funcionalidades como animaciones, validaciones de formularios y 
actualizaciones de contenido en tiempo real. 
*/
let numeroSecreto = generarNumeroSecreto();

function intentoDeUsuario() {
    alert("Click desde el botón Intentar");
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento(".texto__parrafo", "Indica un número secreto entre 1 y 10. ¡Buena suerte!");
console.log(numeroSecreto)