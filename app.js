
const boton = document.querySelector("#boton");
const mensaje = document.querySelector("#mensaje");
const campoNombre = document.querySelector("#nombre");
const campoDescripcion = document.querySelector("#descripcion");
const campoTipo = document.querySelector("#tipo");
const campoCorreo = document.querySelector("#correo");

function mostrarAviso() {
    const nombre = campoNombre.value.trim();
    const descripcion = campoDescripcion.value.trim();
    const tipo = campoTipo.value;
    const correo = campoCorreo.value.trim();

    if (!nombre) {
        mensaje.textContent = "Error: Ingresa el nombre del videojuego.";
        mensaje.style.color = "red";

    } else if (!tipo) {
        mensaje.textContent = "Error: Selecciona un tipo.";
        mensaje.style.color = "red";

    } else if (descripcion.length < 15) {
        mensaje.textContent = "Error: La descripción debe tener mínimo 15 caracteres.";
        mensaje.style.color = "red";

    } else if (!correo) {
        mensaje.textContent = "Error: Ingresa tu correo electrónico.";
        mensaje.style.color = "red";

    } else if (!campoCorreo.checkValidity()) {
        mensaje.textContent = "Error: Ingresa un correo electrónico válido.";
        mensaje.style.color = "red";

    } else {
        mensaje.textContent = "Tu propuesta de intercambio está lista para ser publicada";
        mensaje.style.color = "green";
    }
}

boton.addEventListener("click", mostrarAviso);


