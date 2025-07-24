function obtenerNumerosPares(array) {
  // 1. Crear el contenedor principal para los números pares
  const contenedorNumeros = document.createElement("div"); // Renombrado para mayor claridad
  contenedorNumeros.className = "contenedor-numeros"; // Clase CSS consistente

  // 2. Crear y añadir el título
  const titulo = document.createElement("h3");
  titulo.innerText = "Números Pares";
  contenedorNumeros.appendChild(titulo);

  // 3. Iterar sobre el array para encontrar y mostrar los números pares
  let hayPares = false; // Bandera para saber si encontramos algún par

  for (const numero of array) { // Usamos 'const' para la variable del bucle
    if (numero % 2 === 0) { // CORRECCIÓN: 'nummero' a 'numero' y uso de '==='
      const parrafoNumero = document.createElement("p"); // Renombrado para mayor claridad
      parrafoNumero.innerText = numero;
      contenedorNumeros.appendChild(parrafoNumero);
      hayPares = true; // Marcamos que se encontró al menos un par
    }
  }

  // Opcional: Mostrar un mensaje si no hay números pares
  if (!hayPares) {
    const mensaje = document.createElement("p");
    mensaje.innerText = "No se encontraron números pares.";
    mensaje.style.fontStyle = "italic";
    mensaje.style.color = "#888";
    contenedorNumeros.appendChild(mensaje);
  }

  // 4. Devolver el elemento contenedor para que sea añadido donde se desee
  return contenedorNumeros;
}
document.addEventListener('DOMContentLoaded', () => {
    // Ejemplo de un array de números para probar
    const miArrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const otroArraySinPares = [1, 3, 5, 7, 9];
    const arrayVacio = [];

    // Llama a la función y obtén el elemento que contiene los números pares
    const elementoPares = obtenerNumerosPares(miArrayDeNumeros);
    const elementoSinPares = obtenerNumerosPares(otroArraySinPares);
    const elementoVacio = obtenerNumerosPares(arrayVacio);

    // Añade el elemento al cuerpo del documento (o a un div específico si lo tuvieras)
    document.body.appendChild(elementoPares);
    document.body.appendChild(document.createElement('hr')); // Separador para los ejemplos
    document.body.appendChild(elementoSinPares);
    document.body.appendChild(document.createElement('hr'));
    document.body.appendChild(elementoVacio);
});