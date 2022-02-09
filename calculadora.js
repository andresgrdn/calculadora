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
 * Seccion para botones de entrada
 */

let botones_entrada = document.getElementsByClassName("entrada");

// TODO: Mejorar la lectura de este codigo.
for (let i=0; i<botones_entrada.length; i++) {
    botones_entrada[i].addEventListener("click", () => {
        concatPantallaText(botones_entrada[i].textContent);
    });
}