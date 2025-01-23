
const products = [
    "Producto 1", "Producto 2", "Producto 3", "Producto 4", "Producto 5",
    "Producto 6", "Producto 7", "Producto 8", "Producto 9", "Producto 10",
    
];

document.addEventListener("DOMContentLoaded", function() {
    
    loadProducts(products);
});

function loadProducts(productList) {
    const productSelect = document.getElementById("product");
    
    productSelect.innerHTML = '<option value="">Seleccionar producto</option>';
    
   
    productList.forEach(product => {
        const option = document.createElement("option");
        option.value = product;
        option.textContent = product;
        productSelect.appendChild(option);
    });
}

function filterProducts() {
    const searchTerm = document.getElementById("product-search").value.toLowerCase();
    const filteredProducts = products.filter(product => product.toLowerCase().includes(searchTerm));
    
    
    loadProducts(filteredProducts);
}
document.getElementById("product-request-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const comments = document.getElementById("comments").value;

    
    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.style.display = "block";  

    
    document.getElementById("product-request-form").reset();
});