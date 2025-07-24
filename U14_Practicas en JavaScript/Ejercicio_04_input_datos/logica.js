// Mostrar la suma total de todos los números agregados al campo input:
const cantidadInput = document.getElementById("cantidad");
function mostrarTotal() {
    
    const totalSpan = document.getElementById("total");

    // Obtener el valor del input y convertirlo a un número
    const cantidad = parseInt(cantidadInput.value);
    
    const total = (totalSpan.innerText ? parseInt(totalSpan.innerText) : 0) + cantidad;
    totalSpan.innerText = total;
}

cantidadInput.addEventListener("change", mostrarTotal);