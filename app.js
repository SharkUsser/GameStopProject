const boton = document.querySelector("#boton");
const mensaje = document.querySelector("#mensaje");
const campoNombre = document.querySelector("#nombre");

function mostrarAviso() {
    const nombre = campoNombre.value.trim();

    if (!nombre) {
        mensaje.textContent = "Error: Ingresa el nombre del videojuego.";
    } else {
        mensaje.textContent = "Tu propuesta de intercambio está lista para ser publicada";
    }
}

boton.addEventListener("click", mostrarAviso);
