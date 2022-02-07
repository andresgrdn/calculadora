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

/**
 * Seccion para botones de digitos
 */

let botones_numeros = document.getElementsByClassName("numero");

// TODO: Mejorar la lectura de este codigo.
for (let i=0; i<botones_numeros.length; i++) {
    botones_numeros[i].addEventListener("click", () => {
        concatPantallaText(botones_numeros[i].textContent);
    });
}