// Ejemplo de cláusula if para evaluar la temperatura
let temperatura = 30;
if (temperatura > 25) {
    // Si la temperatura es mayor a 25, muestra "Hace calor"
    console.log("Hace calor");
} else if (temperatura < 15) {
    // Si la temperatura es menor a 15, muestra "Hace frío"
    console.log("Hace frío");
} else {
    // Si la temperatura está entre 15 y 25, muestra "La temperatura es agradable"
    console.log("La temperatura es agradable");
}

// Ejemplo de if anidado para saludar según la hora
let hora = 10;
if (hora < 12) {
    // Si la hora es menor a 12, muestra "Buenos días"
    console.log("Buenos días");
} else {
    // Si la hora es 12 o más, verifica si es menor a 18
    if (hora < 18) {
        // Si la hora es menor a 18, muestra "Buenas tardes"
        console.log("Buenas tardes");
    } else {
        // Si la hora es 18 o más, muestra "Buenas noches"
        console.log("Buenas noches");
    }
} 

// Uso de operadores lógicos AND (&&) en cláusulas if
let esEstudiante = true;
let tieneBeca = false;
if (esEstudiante && tieneBeca) {
    // Solo si es estudiante y tiene beca, muestra el mensaje de descuento
    console.log("Tienes descuento en la matrícula");
}

// Uso de operadores lógicos AND (&&) con comparación de rango
let edad = 20;
if (edad >= 18 && edad < 65) {
    // Si la edad está entre 18 y 65, muestra "Eres un adulto"
    console.log("Eres un adulto");
}

// Uso de operadores lógicos OR (||) en cláusulas if
let saldo = 100;
let precioProducto = 50;
if (saldo >= precioProducto || tieneBeca) {
    // Si el saldo es suficiente o tiene beca, puede comprar el producto
    console.log("Puedes comprar el producto");
}

// Ejemplo de if anidado con operadores lógicos y comparación
let esMiembro = true;
if (esMiembro) {
    // Si es miembro, verifica si el saldo es suficiente
    if (saldo >= precioProducto) {
        // Si el saldo es suficiente, puede comprar con descuento
        console.log("Puedes comprar el producto con descuento");
    } else {
        // Si no tiene suficiente saldo, muestra un mensaje correspondiente
        console.log("No tienes suficiente saldo para comprar el producto");
    }
}

