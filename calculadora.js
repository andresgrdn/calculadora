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