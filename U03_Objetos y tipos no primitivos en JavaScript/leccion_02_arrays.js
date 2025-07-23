//Arrays en JavaScript

const numeros = [1, 2, 3, 4, 5]; // Un array de números

// Acceso a elementos
console.log("Primer número:", numeros[0]); // Salida: Primer número: 1
console.log("Segundo número:", numeros[1]); // Salida: Segundo número: 2

// Modificación de elementos
numeros[2] = 10; // Cambiamos el tercer número
console.log("Nuevo tercer número:", numeros[2]); // Salida: Nuevo tercer número: 10

// Añadir elementos
numeros.push(6); // Añadimos un nuevo número al final
console.log("Array después de añadir un elemento:", numeros);

// Eliminar elementos
numeros.splice(1, 1); // Eliminamos el segundo número
console.log("Array después de eliminar un elemento:", numeros);

// Longitud del array
console.log("Longitud del array:", numeros.length); // Salida: Longitud del array: 5    

// Iterar sobre un array
for (let i = 0; i < numeros.length; i++) {
    console.log("Número en la posición", i, ":", numeros[i]);
}   

// Métodos comunes de arrays
// forEach: Ejecuta una función para cada elemento del array
numeros.forEach(function(numero, indice) {
    console.log("Número en la posición", indice, ":", numero);
});
// find: Encuentra el primer elemento que cumple una condición
const encontrado = numeros.find(function(numero) {
    return numero === 10; // Buscamos el número 10
});
console.log("Número encontrado:", encontrado); // Salida: Número encontrado: 10

// some: Comprueba si al menos un elemento cumple una condición
const existeMayorQueCinco = numeros.some(function(numero) {
    return numero > 5; // Buscamos si hay algún número mayor que 5
});
console.log("¿Existe algún número mayor que 5?", existeMayorQueCinco); // Salida: ¿Existe algún número mayor que 5? true

// map: Crea un nuevo array con los resultados de aplicar una función a cada elemento
const numerosDoblados = numeros.map(function(numero) {
    return numero * 2; // Doblamos cada número
});
console.log("Números doblados:", numerosDoblados); // Salida: Números doblados: [2, 20, 6]

// filter: Crea un nuevo array con los elementos que cumplen una condición
const numerosFiltrados = numeros.filter(function(numero) {
    return numero > 2; // Filtramos números mayores que 2
});
console.log("Números filtrados:", numerosFiltrados); // Salida: Números filtrados: [10, 6]

// reduce: Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor
const sumaTotal = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero; // Sumamos todos los números
}, 0); // Iniciamos el acumulador en 0
console.log("Suma total de números:", sumaTotal); // Salida: Suma total de números: 16

// sort: Ordena los elementos del array
const numerosDesordenados = [5, 3, 8, 1, 4];
numerosDesordenados.sort(function(a, b) {
    return a - b; // Ordenamos de menor a mayor
});
console.log("Números ordenados:", numerosDesordenados); // Salida: Números ordenados: [1, 3, 4, 5, 8]

// reverse: Invierte el orden de los elementos del array
const numerosInvertidos = numerosDesordenados.reverse(); // Invertimos el array
console.log("Números invertidos:", numerosInvertidos); // Salida: Números invertidos: [8, 5, 4, 3, 1]

// concat: Combina dos o más arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayConcatenado = array1.concat(array2);
console.log("Array concatenado:", arrayConcatenado); // Salida: Array concatenado: [1, 2, 3, 4, 5, 6]

// slice: Crea un nuevo array con una copia de una parte del array original
const arrayOriginal = [1, 2, 3, 4, 5];
const arrayCortado = arrayOriginal.slice(1, 4); // Cortamos del índice 1 al 4 (sin incluir 4)
console.log("Array cortado:", arrayCortado); // Salida: Array cortado: [2, 3, 4]

// join: Une todos los elementos del array en un string
const arrayParaUnir = ['Hola', 'mundo', '!'];
const stringUnido = arrayParaUnir.join(' '); // Unimos con un espacio
console.log("String unido:", stringUnido); // Salida: String unido: "Hola mundo !"

// flat: Aplana un array de arrays en un solo array
const arrayAnidado = [[1, 2], [3, 4], [5, 6]];
const arrayAplanado = arrayAnidado.flat(); // Aplanamos el array
console.log("Array aplanado:", arrayAplanado); // Salida: Array aplanado: [1, 2, 3, 4, 5, 6]

// includes: Comprueba si un array contiene un elemento específico
const arrayConElementos = [1, 2, 3, 4, 5];
const contieneTres = arrayConElementos.includes(3); // Verificamos si contiene el número 3
console.log("¿El array contiene el número 3?", contieneTres); // Salida: ¿El array contiene el número 3? true

// indexOf: Devuelve el primer índice en el que se encuentra un elemento
const arrayConIndices = [1, 2, 3, 4, 5];
const indiceTres = arrayConIndices.indexOf(3); // Buscamos el índice del número 3
console.log("Índice del número 3:", indiceTres); // Salida: Índice del número 3: 2

// Array mixto: Un array puede contener diferentes tipos de datos
const arrayMixto = [1, 'dos', true, null, { clave: 'valor' }, [1, 2, 3]];
console.log("Array mixto:", arrayMixto); // Salida: Array mixto: [1, 'dos', true, null, { clave: 'valor' }, [1, 2, 3]]

//Array multidimensional: Un array que contiene otros arrays
const arrayMultidimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Array multidimensional:", arrayMultidimensional); // Salida: Array multidimensional: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Recorrer un array multidimensional
// El arrayMultidimensional es una matriz (array de arrays), por lo que necesitamos dos bucles:
// El primer bucle (i) recorre las filas (arrays internos).
for (let i = 0; i < arrayMultidimensional.length; i++) {
    // El segundo bucle (j) recorre los elementos de cada fila.
    for (let j = 0; j < arrayMultidimensional[i].length; j++) {
        // Accedemos a cada elemento usando dos índices: [fila][columna]
        console.log("Elemento en posición [" + i + "][" + j + "]:", arrayMultidimensional[i][j]);
    }
}