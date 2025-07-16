//Tipos Primitivos y No Primitivos en JavaScript

//Tipos de datos primitivos

// Un número entero
let numero = 42; // Se declara una variable de tipo number con valor entero
numero = 100; // Se reasigna el valor de la variable numero

// Un número decimal
let decimal = 3.14; // Se declara una variable de tipo number con valor decimal

// Una cadena de texto
let texto = "Hola, mundo"; // Se declara una variable de tipo string

// Un valor booleano
let booleano = true; // Se declara una variable de tipo boolean

// Un valor nulo
let nulo = null; // Se declara una variable con valor null

// Un valor indefinido
let indefinido; // Se declara una variable sin valor asignado (undefined)

// Un símbolo (ES6)
let simbolo = Symbol("descripcion"); // Se declara una variable de tipo Symbol

// Un BigInt (ES11)
let bigInt = BigInt(123456789012345678901234567890); // Se declara una variable de tipo BigInt


//Tipos de datos no primitivos

// Un objeto
let objeto = { nombre: "Natalia", apellido: "Corea" }; // Se declara un objeto con dos propiedades

// Un arreglo
let arreglo = [1, 2, 3, 4, 5]; // Se declara un arreglo con varios elementos

// Una función
function funcion() {
    console.log("Esta es una función"); // Función que imprime un mensaje en consola
}

// Una fecha
let fecha = new Date(); // Se declara un objeto Date con la fecha y hora actual

// Una expresión regular
let regex = /ab+c/; // Se declara una expresión regular

// Un mapa (ES6)
let mapa = new Map(); // Se declara un objeto Map para pares clave-valor

// Un conjunto (Set) (ES6)
let conjunto = new Set([1, 2, 3]); // Se declara un objeto Set con valores únicos

// Un WeakMap (ES6)
let weakMap = new WeakMap(); // Se declara un objeto WeakMap para claves de tipo objeto

// Un WeakSet (ES6)
let weakSet = new WeakSet(); // Se declara un objeto WeakSet para almacenar objetos únicos

// Un ArrayBuffer (ES6)
let arrayBuffer = new ArrayBuffer(16); // Un buffer de memoria de 16 bytes

// Un TypedArray (ES6)
let typedArray = new Uint8Array(arrayBuffer); // Un TypedArray que permite trabajar con datos binarios

// Un DataView (ES6)
let dataView = new DataView(arrayBuffer); // Un DataView que permite leer y escribir datos en un ArrayBuffer
