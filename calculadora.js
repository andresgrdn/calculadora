let pantalla = document.getElementById("pantalla");

function getPantallaText() {
    return pantalla.textContent;
}

function setPantallaText(texto) {
    pantalla.textContent = texto;
}

function concatPantallaText(texto) {
    pantalla.textContent += texto;  
}

/**
 * Seccion para boton borrar la pantalla
 */

let boton_clear = document.getElementById("borrar");

boton_clear.addEventListener("click", borrarPantalla);

function borrarPantalla() {
    setPantallaText("");
}