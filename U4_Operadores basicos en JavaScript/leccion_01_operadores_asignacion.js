//Operadores de asignación en JavaScript

// Los operadores de asignación se utilizan para asignar valores a variables
let x = 10; // Asignación simple
console.log("Valor de x:", x); // Salida: Valor de x: 10
x += 5; // Suma y asignación
console.log("Valor de x después de sumar 5:", x); // Salida: Valor de x después de sumar 5: 15
x -= 3; // Resta y asignación
console.log("Valor de x después de restar 3:", x); // Salida: Valor de x después de restar 3: 12
x *= 2; // Multiplicación y asignación  
console.log("Valor de x después de multiplicar por 2:", x); // Salida: Valor de x después de multiplicar por 2: 24
x /= 4; // División y asignación
console.log("Valor de x después de dividir por 4:", x); // Salida: Valor de x después de dividir por 4: 6
x %= 5; // Módulo y asignación
console.log("Valor de x después de calcular el módulo 5:", x); // Salida: Valor de x después de calcular el módulo 5: 1
x **= 3; // Exponente y asignación  
console.log("Valor de x después de elevar al cubo:", x); // Salida: Valor de x después de elevar al cubo: 1
x &= 2; // AND bit a bit y asignación
console.log("Valor de x después de AND bit a bit con 2:", x); // Salida: Valor de x después de AND bit a bit con 2: 0
x |= 3; // OR bit a bit y asignación
console.log("Valor de x después de OR bit a bit con 3:", x); // Salida: Valor de x después de OR bit a bit con 3: 3

x ^= 1; // XOR bit a bit y asignación
console.log("Valor de x después de XOR bit a bit con 1:", x); // Salida: Valor de x después de XOR bit a bit con 1: 2
x <<= 1; // Desplazamiento a la izquierda y asignación  
console.log("Valor de x después de desplazar a la izquierda 1 bit:", x); // Salida: Valor de x después de desplazar a la izquierda 1 bit: 4
x >>= 1; // Desplazamiento a la derecha y asignación
console.log("Valor de x después de desplazar a la derecha 1 bit:", x); // Salida: Valor de x después de desplazar a la derecha 1 bit: 2
x >>>= 1; // Desplazamiento a la derecha sin signo y asignación
console.log("Valor de x después de desplazar a la derecha sin signo 1 bit:", x); // Salida: Valor de x después de desplazar a la derecha sin signo 1 bit: 1

// Operador de asignación condicional (nullish coalescing)
let y = null;
y ??= 5; // Asigna 5 a y si y es null o undefined
console.log("Valor de y después de nullish coalescing:", y); // Salida: Valor de y después de nullish coalescing: 5

// Operador de asignación condicional (OR)
let z = 0;
z ||= 10; // Asigna 10 a z si z es falsy (0, null, undefined, false, NaN, "")
console.log("Valor de z después de OR condicional:", z); // Salida: Valor de z después de OR condicional: 10

// Operador de asignación condicional (AND)
let a = 5;
a &&= 10; // Asigna 10 a a si a es truthy
console.log("Valor de a después de AND condicional:", a); // Salida: Valor de a después de AND condicional: 10

// Operador de asignación condicional (nullish coalescing)
let b = undefined;
b ??= 20; // Asigna 20 a b si b es null o undefined
console.log("Valor de b después de nullish coalescing:", b); // Salida: Valor de b después de nullish coalescing: 20


