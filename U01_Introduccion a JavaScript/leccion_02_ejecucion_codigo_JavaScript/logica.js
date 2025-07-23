function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min; // Genera un número aleatorio entre 1 y 100
}

let aleatorio = generarNumeroAleatorio(1, 10);
alert("El número aleatorio generado es: " + aleatorio);

