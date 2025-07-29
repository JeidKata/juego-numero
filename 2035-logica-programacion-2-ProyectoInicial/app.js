/*
JavaScript, por su parte, es el único lenguaje de programación de los tres (HTML, CSS y JavaScript). 
Es responsable de agregar interactividad y dinamismo a las páginas. 
Permite la creación de funcionalidades como animaciones, validaciones de formularios y 
actualizaciones de contenido en tiempo real. 
*/
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("numero").value);
    console.log(intentos);
    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento(".texto__parrafo", `¡Felicidades! Adivinaste el número secreto en ${intentos} ${intentos === 1 ? "intento": "intentos"}.`);
    }else {
        // El usuario no acertó.
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento(".texto__parrafo", "El número secreto es menor.");
        } else {
            asignarTextoElemento(".texto__parrafo", "El número secreto es mayor.");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let nUsuario = document.querySelector("#numero");
    nUsuario.value = "";
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