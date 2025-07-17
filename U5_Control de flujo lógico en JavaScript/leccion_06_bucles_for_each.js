//Bucñes for...each en JavaScript
// El bucle for...each es una forma de iterar sobre elementos de un array o colección.
// Es una sintaxis más limpia y moderna que el bucle for tradicional.
// Sin embargo, no es un bucle nativo de JavaScript, sino un método de los arrays llamado forEach().

// EJEMPLO BÁSICO CON UN ARRAY
const numeros = [1, 2, 3, 4, 5]; // Array con 5 elementos
numeros.forEach(function(numero) {
    // 'numero' contendrá cada valor del array en cada iteración
    // Internamente, JavaScript usa el protocolo de iteración (Symbol.iterator)
    // Es equivalente a: numeros[0], numeros[1], numeros[2], etc.
    console.log("Número:", numero);
    // Imprime: Número: 1, Número: 2, Número: 3, Número: 4, Número: 5
});

// EJEMPLO CON UN STRING
// Los strings no tienen un método forEach, pero podemos convertirlos en un array de caracteres
const texto = "Hola"; // String con 4 caracteres
Array.from(texto).forEach(function(caracter) {
    // 'caracter' contendrá cada carácter del string en cada iteración
    // Esto incluye caracteres especiales, emojis, y caracteres Unicode
    // Es más seguro que usar texto[i] porque maneja correctamente caracteres multibyte
    console.log("Carácter:", caracter);
    // Imprime: Carácter: H, Carácter: o, Carácter: l, Carácter: a
});

// EJEMPLO CON UN OBJETO ITERABLE (Map)
// Map es una estructura de datos que mantiene pares clave-valor
// A diferencia de los objetos, las claves pueden ser de cualquier tipo
const mapa = new Map([
    ["clave1", "valor1"],    // Array con [clave, valor]
    ["clave2", "valor2"],    // Cada elemento es un par clave-valor
    ["clave3", "valor3"]
]);
// DESTRUCTURING EN EL BUCLE forEach
// [clave, valor] extrae automáticamente los elementos del array
mapa.forEach(function([clave, valor]) {
    // 'clave' y 'valor' contendrán cada par clave-valor del Map
    console.log("Clave:", clave, "Valor:", valor);
    // Imprime: Clave: clave1 Valor: valor1, Clave: clave2 Valor: valor2, Clave: clave3 Valor: valor3
});