//Operadores aritméticos en JavaScript

// Los operadores aritméticos se utilizan para realizar operaciones matemáticas básicas
let a = 10;

let b = 5;

console.log("Valor de a:", a); // Salida: Valor de a: 10
console.log("Valor de b:", b); // Salida: Valor de b: 5

// Suma
let suma = a + b; // 10 + 5 = 15
console.log("Suma:", suma); // Salida: Suma: 15

// Resta
let resta = a - b; // 10 - 5 = 5
console.log("Resta:", resta); // Salida: Resta: 5

// Multiplicación
let multiplicacion = a * b; // 10 * 5 = 50
console.log("Multiplicación:", multiplicacion); // Salida: Multiplicación: 50

// División
let division = a / b; // 10 / 5 = 2
console.log("División:", division); // Salida: División: 2

// Módulo (resto de la división)
let modulo = a % b; // 10 % 5 = 0
console.log("Módulo:", modulo); // Salida: Módulo: 0

// Exponente (potencia)
let exponente = a ** b; // 10 ** 5 = 100000
console.log("Exponente:", exponente); // Salida: Exponente: 100000

// Incremento
a++; // Incrementa a en 1 (ahora a = 11)
console.log("Incremento de a:", a); // Salida: Incremento de a: 11

// Decremento
b--; // Decrementa b en 1 (ahora b = 4)
console.log("Decremento de b:", b); // Salida: Decremento de b: 4

// Operador de negación
let negativo = -a; // Negación de a (ahora negativo = -11)
console.log("Negativo de a:", negativo); // Salida: Negativo de a: -11

// Operador de incremento pre-fijo
let preIncremento = ++a; // Incrementa a en 1 y asigna el nuevo valor a preIncremento (ahora a = 12, preIncremento = 12)
console.log("Pre-incremento de a:", preIncremento); // Salida: Pre-incremento de a: 12

// Operador de decremento pre-fijo
let preDecremento = --b; // Decrementa b en 1 y asigna el nuevo valor a preDecremento (ahora b = 3, preDecremento = 3)
console.log("Pre-decremento de b:", preDecremento); // Salida: Pre-decremento de b: 3

// Operador de incremento post-fijo
let postIncremento = a++; // Asigna el valor actual de a a postIncremento (postIncremento = 12, luego a se incrementa a 13)
console.log("Post-incremento de a:", postIncremento); // Salida: Post-incremento de a: 12   

// Operador de decremento post-fijo
let postDecremento = b--; // Asigna el valor actual de b a postDecremento (postDecremento = 3, luego b se decrementa a 2)
console.log("Post-decremento de b:", postDecremento); // Salida: Post-decremento de b: 3

// Operador de exponenciación (ES2016)
let base = 2;
let exponente2 = 3;
let potencia = base ** exponente2; // 2 ** 3 = 8
console.log("Potencia de 2 elevado a 3:", potencia); // Salida: Potencia de 2 elevado a 3: 8

// Operador de agrupación
let resultado = (a + b) * 2; // Agrupa la suma antes de multiplicar
console.log("Resultado de (a + b) * 2:", resultado); // Salida: Resultado de (a + b) * 2: 26

// Operador de concatenación (para cadenas)
let cadena1 = "Hola";
let cadena2 = "Mundo";
let concatenacion = cadena1 + " " + cadena2; // "Hola Mundo"
console.log("Concatenación de cadenas:", concatenacion); // Salida: Concatenación de cadenas: Hola Mundo