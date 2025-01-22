// Manejo de envío de formulario
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado de enviar el formulario

    // Muestra el mensaje de confirmación
    document.getElementById("confirmationMessage").classList.remove("hidden");

    // Aquí puedes agregar lógica para enviar los datos del formulario a un servidor, por ejemplo.
    console.log("Formulario enviado");
});
