document.getElementById("product-request-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const comments = document.getElementById("comments").value;

    // Mostrar un mensaje de confirmación
    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.style.display = "block";  // Mostrar el mensaje de éxito

    // Opcional: Limpiar el formulario después de la solicitud
    document.getElementById("product-request-form").reset();
});