//Funciones declaradas como una expresión
// Las funciones expresión se asignan a variables y no están sujetas a "hoisting"
// Esto significa que no se pueden usar antes de ser declaradas, a diferencia de las function declarations
let sumar = function(a, b) {
    return a + b; // Retorna la suma de dos números
    // Esta es una función anónima asignada a la variable 'sumar'
    // También se podría escribir como: let sumar = (a, b) => a + b; (función flecha)
}

let numeros = [1, 2, 3, 4, 5];

// reduce() es un método de array que aplica una función acumuladora
// Sintaxis: array.reduce(callback, valorInicial)
// callback recibe: (acumulador, valorActual, índice, array)
let sumaTotal = numeros.reduce(sumar, 0); // Usa la función sumar para reducir
// Proceso paso a paso del reduce:
// Iteración 1: sumar(0, 1) = 1 (acumulador: 0, valor: 1)
// Iteración 2: sumar(1, 2) = 3 (acumulador: 1, valor: 2)  
// Iteración 3: sumar(3, 3) = 6 (acumulador: 3, valor: 3)
// Iteración 4: sumar(6, 4) = 10 (acumulador: 6, valor: 4)
// Iteración 5: sumar(10, 5) = 15 (acumulador: 10, valor: 5)

console.log("Suma total:", sumaTotal); // Imprime: Suma total: 15

//Permite pasar funciones como argumentos (Higher-Order Functions)
// Una función de orden superior es aquella que:
// 1. Recibe una o más funciones como argumentos
// 2. Y/o retorna una función como resultado
function procesarNumeros(numeros, operacion) {
    // map() crea un nuevo array aplicando la función a cada elemento
    // No modifica el array original (inmutabilidad)
    return numeros.map(operacion); // Aplica la operación a cada número del array
    // El parámetro 'operacion' debe ser una función que tome un elemento y retorne un valor transformado
}

// Ejemplo de callback: función anónima pasada como argumento
let numerosCuadrados = procesarNumeros(numeros, function(num) {
    return num * num; // Retorna el cuadrado de cada número
    // Esta función se ejecuta para cada elemento: 1*1=1, 2*2=4, 3*3=9, 4*4=16, 5*5=25
});
console.log("Números al cuadrado:", numerosCuadrados); // Imprime: Números al cuadrado: [1, 4, 9, 16, 25]

// EJEMPLOS ADICIONALES para demostrar la flexibilidad:

// Usando la misma función con diferentes operaciones
let numerosDobles = procesarNumeros(numeros, function(num) {
    return num * 2; // Duplica cada número
});
console.log("Números duplicados:", numerosDobles); // [2, 4, 6, 8, 10]

let numerosCubicos = procesarNumeros(numeros, function(num) {
    return num ** 3; // Eleva al cubo cada número (ES2016+)
});
console.log("Números al cubo:", numerosCubicos); // [1, 8, 27, 64, 125]

// Funciones con nombre que se pueden reutilizar
const multiplicarPorTres = function(numero) {
    return numero * 3;
};

const esNumeroPar = function(numero) {
    return numero % 2 === 0 ? `${numero} es par` : `${numero} es impar`;
};

let numerosTriplicados = procesarNumeros(numeros, multiplicarPorTres);
let paridadNumeros = procesarNumeros(numeros, esNumeroPar);

console.log("Números triplicados:", numerosTriplicados); // [3, 6, 9, 12, 15]
console.log("Paridad de números:", paridadNumeros); // ["1 es impar", "2 es par", ...]

// Comparación: Function Expression vs Function Declaration
// Function Expression (lo que usamos arriba):
const funcionExpresion = function(x) { return x * 2; };

// Function Declaration:
function funcionDeclaracion(x) { return x * 2; }

// Diferencias clave:
// 1. Hoisting: funcionDeclaracion se puede usar antes de ser declarada
// 2. funcionExpresion solo está disponible después de la asignación
// 3. funcionExpresion puede ser asignada condicionalmente

// Ejemplo de uso condicional de function expressions:
let operacion;
if (Math.random() > 0.5) {
    operacion = function(x) { return x * 2; };
} else {
    operacion = function(x) { return x / 2; };
}

// Esto permite mayor flexibilidad en tiempo de ejecución
let resultadoDinamico = procesarNumeros(numeros, operacion);
console.log("Resultado dinámico:", resultadoDinamico);

//Ejemplo de función anónima autoejecutable (IIFE)
// Se ejecuta inmediatamente después de ser definida
(function() {
    console.log("Esta es una función anónima autoejecutable");
})(); // Imprime: Esta es una función anónima autoejecutable
// IIFE es útil para crear un ámbito aislado y evitar contaminación del espacio global
// También se usa para inicializar código que no necesita ser reutilizado

//Ejemplo de función con callback
// Las funciones callback son funciones pasadas como argumentos a otras funciones
function procesarArray(array, callback) {
    // Itera sobre cada elemento del array y aplica la función callback
    for (let i = 0; i < array.length; i++) {
        callback(array[i]); // Llama a la función callback con el elemento actual
    }
}
// Definimos una función callback que imprime cada elemento
function imprimirElemento(elemento) {
    console.log("Elemento:", elemento); // Imprime el elemento actual del array
}
// Llamamos a procesarArray pasando el array y la función callback
procesarArray([10, 20, 30], imprimirElemento);

