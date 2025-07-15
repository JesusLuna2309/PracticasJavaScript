//Tipos Primitivos y No Primitivos en JavaScript

//Tipos de datos primitivos
// Un número entero
let numero = 42; // Un número entero
numero = 100; // Cambiando el valor del número entero

// Un número decimal
let decimal = 3.14; // Un número decimal

// Una cadena de texto
let texto = "Hola, mundo"; // Una cadena de texto

// Un valor booleano
let booleano = true; // Un valor booleano

// Un valor nulo
let nulo = null; // Un valor nulo

// Un valor indefinido
let indefinido; // Un valor indefinido

// Un símbolo (ES6)
let simbolo = Symbol("descripcion"); // Un símbolo único 

// Un BigInt (ES11)
let bigInt = BigInt(123456789012345678901234567890);


//Tipos de datos no primitivos
// Un objeto

let objeto = { nombre: "Natalia", apellido: "Corea" }; // Un objeto con una propiedad

// Un arreglo
let arreglo = [1, 2, 3, 4, 5]; // Un arreglo con varios elementos

// Una función
function funcion() {
    console.log("Esta es una función"); // Una función que imprime un mensaje
}

// Una fecha
let fecha = new Date(); // Un objeto de fecha que representa el momento actual

// Una expresión regular
let regex = /ab+c/; // Una expresión regular que busca "ab" seguido de uno o más "c"

// Un mapa (ES6)
let mapa = new Map(); // Un mapa que permite almacenar pares clave-valor

// Un conjunto (Set) (ES6)
let conjunto = new Set([1, 2, 3]); // Un conjunto que almacena valores únicos

// Un WeakMap (ES6)
let weakMap = new WeakMap(); // Un WeakMap que permite almacenar objetos como claves

// Un WeakSet (ES6)
let weakSet = new WeakSet(); // Un WeakSet que permite almacenar objetos únicos

// Un ArrayBuffer (ES6)
let arrayBuffer = new ArrayBuffer(16); // Un buffer de memoria de 16 bytes

// Un TypedArray (ES6)
let typedArray = new Uint8Array(arrayBuffer); // Un TypedArray que permite trabajar con datos binarios

// Un DataView (ES6)
let dataView = new DataView(arrayBuffer); // Un DataView que permite leer y escribir datos en un ArrayBuffer
