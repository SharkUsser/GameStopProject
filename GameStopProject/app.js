const boton = document.querySelector("#boton"); 
const mensaje = document.querySelector("#mensaje"); 

function mostrarAviso() {  
    mensaje.textContent = "Tu propuesta de intercambio está lista para ser publicada"; 
} 

boton.addEventListener("click", mostrarAviso);

const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!correo.value.trim()) {
    errores.correo = "El correo electrónico es obligatorio.";
} else if (!correo.validity.valid || !regexCorreo.test(correo.value.trim())) {
    errores.correo = "Escribe un correo electrónico válido.";
}
