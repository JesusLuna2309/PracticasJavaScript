//Funciones flecha (Arrow Functions) en JavaScript
// Son una forma más concisa de escribir funciones, introducidas en ES6 (ECMAScript 2015).
// Permiten una sintaxis más limpia y evitan problemas con el contexto de 'this'.
// Sintaxis básica: (parámetros) => { cuerpo de la función }
// Si hay un solo parámetro, se pueden omitir los paréntesis: parametro => { cuerpo }
// Si la función retorna una sola expresión, se puede omitir el bloque y la palabra 'return': parametro => expresion

//Funciones flecha con un retorno implícito
const sumar = (a, b) => a + b; // Retorna la suma de dos números
// IMPORTANTE: Sin llaves {} la función retorna automáticamente el resultado de la expresión
// Es equivalente a: const sumar = (a, b) => { return a + b; }
// El retorno implícito solo funciona con UNA SOLA expresión
console.log("La suma es:", sumar(5, 3)); // Imprime: La suma es: 8

//Funciones flecha sin parámetros
const saludar = () => {
    console.log("¡Hola, mundo!"); // Muestra un saludo genérico
    // IMPORTANTE: Los paréntesis vacíos () son OBLIGATORIOS cuando no hay parámetros
    // No se puede escribir: const saludar = => { ... } - SyntaxError!
}
saludar(); // Llama a la función, salida: ¡Hola, mundo!

//Funciones flecha con un solo parámetro (sin paréntesis)
const cuadrado = x => x * x; // Retorna el cuadrado de un número
// IMPORTANTE: Solo cuando hay EXACTAMENTE UN parámetro se pueden omitir los paréntesis
// Con 0, 2 o más parámetros, los paréntesis son obligatorios
// También válido: const cuadrado = (x) => x * x;
console.log("El cuadrado de 4 es:", cuadrado(4)); // Imprime: El cuadrado de 4 es: 16

//Funciones flecha con múltiples parámetros
const multiplicar = (x, y) => x * y; // Retorna el producto de dos números
// IMPORTANTE: Con múltiples parámetros, los paréntesis son OBLIGATORIOS
// No se puede escribir: const multiplicar = x, y => x * y - SyntaxError!
console.log("El producto de 6 y 7 es:", multiplicar(6, 7)); // Imprime: El producto de 6 y 7 es: 42

//Funciones flecha con cuerpo de bloque
const dividir = (x, y) => {
    // IMPORTANTE: Con llaves {} SIEMPRE debes usar 'return' explícitamente
    // Sin 'return', la función retornaría undefined
    if (y === 0) {
        return "Error: División por cero"; // Manejo de error para evitar división por cero
    }
    return x / y; // Retorna el cociente de dos números
    // Múltiples líneas requieren llaves y return explícito
}
console.log("El cociente de 10 y 2 es:", dividir(10, 2)); // Imprime: El cociente de 10 y 2 es: 5   

//Funciones flecha con objeto literal
const crearPersona = (nombre, edad) => ({ nombre, edad }); // Retorna un objeto con las propiedades nombre y edad
// IMPORTANTE: Los paréntesis alrededor del objeto {} son OBLIGATORIOS
// Sin paréntesis: const crearPersona = (nombre, edad) => { nombre, edad } - SyntaxError!
// JavaScript interpretaría las llaves como un bloque de código, no como un objeto
// Los paréntesis le dicen a JavaScript que es una expresión de objeto
// Esto usa la sintaxis de propiedades abreviadas de ES6: { nombre, edad } = { nombre: nombre, edad: edad }
const persona = crearPersona("Ana", 30);
console.log("Persona creada:", persona); // Imprime: Persona creada: { nombre: 'Ana', edad: 30 }

//Funciones flecha como callbacks
// Las funciones flecha son ideales para usar como callbacks en métodos de arrays como map, filter y reduce
const numeros = [1, 2, 3, 4, 5];
// Usando map para duplicar cada número en el array
const numerosDuplicados = numeros.map(num => num * 2); // Retorna un nuevo array con los números duplicados
// IMPORTANTE: Comparación de sintaxis:
// Función tradicional: numeros.map(function(num) { return num * 2; })
// Función flecha: numeros.map(num => num * 2)
// La función flecha es mucho más concisa para callbacks simples
console.log("Números duplicados:", numerosDuplicados); // Imprime: Números duplicados: [2, 4, 6, 8, 10]

// EJEMPLOS ADICIONALES para clarificar conceptos:

// Diferencias importantes con funciones tradicionales:
// 1. NO tienen su propio 'this' - heredan el 'this' del contexto donde se definen
const objeto = {
    nombre: "Objeto",
    funcionTradicional: function() {
        console.log("Función tradicional - this.nombre:", this.nombre); // "Objeto"
    },
    funcionFlecha: () => {
        console.log("Función flecha - this.nombre:", this.nombre); // undefined
        // 'this' no se refiere al objeto, sino al contexto global
    }
};

// 2. NO se pueden usar como constructores
const MiFuncion = () => {};
// new MiFuncion(); // TypeError: MiFuncion is not a constructor

// 3. NO tienen objeto 'arguments'
const funcionConArguments = function() {
    console.log(arguments); // Funciona - muestra todos los argumentos
};
const flechaSinArguments = (...args) => {
    console.log(args); // Usa rest parameters en su lugar
};

// Más ejemplos de sintaxis:
const ejemplos = {
    // Sin parámetros
    sinParametros: () => "Hola",
    
    // Un parámetro (paréntesis opcionales)
    unParametro1: x => x * 2,
    unParametro2: (x) => x * 2, // También válido
    
    // Múltiples parámetros (paréntesis obligatorios)
    multipleParametros: (a, b, c) => a + b + c,
    
    // Retorno de objeto (paréntesis obligatorios)
    retornoObjeto: (x, y) => ({ suma: x + y, producto: x * y }),
    
    // Cuerpo de bloque (return explícito)
    cuerpoBloque: (x) => {
        const resultado = x * x;
        return resultado;
    }
};

// Casos de uso típicos:
const datos = [1, 2, 3, 4, 5];

// Filtrar números pares
const pares = datos.filter(n => n % 2 === 0);
console.log("Números pares:", pares); // [2, 4]

// Calcular suma total
const suma = datos.reduce((acc, val) => acc + val, 0);
console.log("Suma total:", suma); // 15

// Verificar si todos son positivos
const todosPositivos = datos.every(n => n > 0);
console.log("Todos positivos:", todosPositivos); // true

// Encontrar primer número mayor a 3
const mayorATres = datos.find(n => n > 3);
console.log("Primer número > 3:", mayorATres); // 4
