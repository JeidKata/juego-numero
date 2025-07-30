/*
JavaScript, por su parte, es el único lenguaje de programación de los tres (HTML, CSS y JavaScript). 
Es responsable de agregar interactividad y dinamismo a las páginas. 
Permite la creación de funcionalidades como animaciones, validaciones de formularios y 
actualizaciones de contenido en tiempo real. 
*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSecretos = [];
let numeroMaximo = 10;

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("numero").value);
    console.log(intentos);
    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento(".texto__parrafo", `¡Felicidades! Adivinaste el número secreto en ${intentos} ${intentos === 1 ? "intento": "intentos"}.`);
        // document.querySelector("#reiniciar").disabled = false;
        document.getElementById("reiniciar").removeAttribute("disabled");
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
    document.querySelector("#numero").value = "";
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto(){
    let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroSecreto);
    console.log(listaNumerosSecretos);
    // Si ya sorteamos todos los números
    if (listaNumerosSecretos.length == numeroMaximo) {
        asignarTextoElemento(".texto__parrafo", "No quedan números secretos por adivinar. Reinicia el juego.");
        return; // No genera un nuevo número si ya se han usado todos
    }else{

        //si el número secreto generado está incluido en la lista
        if (listaNumerosSecretos.includes(numeroSecreto)) {
            return generarNumeroSecreto(); // Genera un nuevo número si ya existe
        }else {
            listaNumerosSecretos.push(numeroSecreto); // Agrega el nuevo número a la lista
            return numeroSecreto; // Retorna el número secreto único
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento(".texto__parrafo", "Indica un número secreto entre 1 y 10. ¡Buena suerte!");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    /*limpiar caja
    Mensaje de inicio
    generar el numero aleatorio
    inicializar el numero de intentos
    desactivar boton reiniciar*/
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

condicionesIniciales();
