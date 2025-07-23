//Operadores de comparación en JavaScript

// Los operadores de comparación se utilizan para comparar dos valores y devolver un valor booleano (true o false)
let a = 10;
let b = 5;

console.log("Valor de a:", a); // Salida: Valor de a: 10
console.log("Valor de b:", b); // Salida: Valor de b: 5

// Igualdad estricta (===): compara valor y tipo
console.log("a es igual a b (===):", a === b); // Salida: a es igual a b (===): false
console.log("a es igual a 10 (===):", a === 10); // Salida: a es igual a 10 (===): true
console.log("b es igual a '5' (===):", b === '5'); // Salida: b es igual a '5' (===): false
console.log("b es igual a 5 (===):", b === 5); // Salida: b es igual a 5 (===): true

// Desigualdad estricta (!==): compara valor y tipo
console.log("a es diferente de b (!==):", a !== b); // Salida: a es diferente de b (!==): true
console.log("a es diferente de 10 (!==):", a !== 10); // Salida: a es diferente de 10 (!==): false
console.log("b es diferente de '5' (!==):", b !== '5'); // Salida: b es diferente de '5' (!==): true
console.log("b es diferente de 5 (!==):", b !== 5); // Salida: b es diferente de 5 (!==): false

// Mayor que (>): compara si el valor de la izquierda es mayor que el de la derecha
console.log("a es mayor que b (>):", a > b); // Salida: a es mayor que b (>): true
console.log("b es mayor que a (>):", b > a); // Salida: b es mayor que a (>): false

// Menor que (<): compara si el valor de la izquierda es menor que el de la derecha
console.log("a es menor que b (<):", a < b); // Salida: a es menor que b (<): false
console.log("b es menor que a (<):", b < a); // Salida: b es menor que a (<): true

// Mayor o igual que (>=): compara si el valor de la izquierda es mayor o igual que el de la derecha
console.log("a es mayor o igual que b (>=):", a >= b); // Salida: a es mayor o igual que b (>=): true
console.log("b es mayor o igual que a (>=):", b >= a); // Salida: b es mayor o igual que a (>=): false
console.log("a es mayor o igual que 10 (>=):", a >= 10); // Salida: a es mayor o igual que 10 (>=): true
console.log("b es mayor o igual que 5 (>=):", b >= 5); // Salida: b es mayor o igual que 5 (>=): true

// Menor o igual que (<=): compara si el valor de la izquierda es menor o igual que el de la derecha
console.log("a es menor o igual que b (<=):", a <= b); // Salida: a es menor o igual que b (<=): false
console.log("b es menor o igual que a (<=):", b <= a); // Salida: b es menor o igual que a (<=): true
console.log("a es menor o igual que 10 (<=):", a <= 10); // Salida: a es menor o igual que 10 (<=): true
console.log("b es menor o igual que 5 (<=):", b <= 5); // Salida: b es menor o igual que 5 (<=): true
console.log("a es menor o igual que 4 (<=):", a <= 4); // Salida: a es menor o igual que 4 (<=): false

// Igualdad no estricta (==): compara solo valor, no tipo   
console.log("a es igual a b (==):", a == b); // Salida: a es igual a b (==): false
console.log("a es igual a 10 (==):", a == 10); // Salida: a es igual a 10 (==): true
console.log("b es igual a '5' (==):", b == '5'); // Salida: b es igual a '5' (==): true
console.log("b es igual a 5 (==):", b == 5); // Salida: b es igual a 5 (==): true

// Desigualdad no estricta (!=): compara solo valor, no tipo
console.log("a es diferente de b (!=):", a != b); // Salida: a es diferente de b (!=): true
console.log("a es diferente de 10 (!=):", a != 10); // Salida: a es diferente de 10 (!=): false
console.log("b es diferente de '5' (!=):", b != '5'); // Salida: b es diferente de '5' (!=): false
console.log("b es diferente de 5 (!=):", b != 5); // Salida: b es diferente de 5 (!=): false

// Comparación de cadenas
let str1 = "Hola";
let str2 = "Mundo";
console.log("str1 es igual a str2 (===):", str1 === str2); // Salida: str1 es igual a str2 (===): false
console.log("str1 es igual a 'Hola' (===):", str1 === "Hola"); // Salida: str1 es igual a 'Hola' (===): true
console.log("str1 es diferente de str2 (!==):", str1 !== str2); // Salida: str1 es diferente de str2 (!==): true
console.log("str1 es diferente de 'Hola' (!==):", str1 !== "Hola"); // Salida: str1 es diferente de 'Hola' (!==): false

/**
 * Las cadenas se comparan lexicográficamente, es decir, se comparan carácter por carácter según su valor Unicode.
 * Por ejemplo, "Hola" es menor que "Mundo" porque 'H' (72) es menor que 'M' (77) en la tabla Unicode.
 * Si los caracteres son iguales, se compara el siguiente carácter hasta encontrar una diferencia.
 * Si una cadena es un prefijo de otra, la cadena más corta se considera menor.
 * Por ejemplo, "Hola" es menor que "Hola Mundo" porque la primera es un prefijo de la segunda.
 * Si las cadenas son iguales, se considera que son iguales.
 */
console.log("str1 es mayor que str2 (>):", str1 > str2); // Salida: str1 es mayor que str2 (>): false
console.log("str1 es menor que str2 (<):", str1 < str2); // Salida: str1 es menor que str2 (<): true
console.log("str1 es mayor o igual que str2 (>=):", str1 >= str2); // Salida: str1 es mayor o igual que str2 (>=): false
console.log("str1 es menor o igual que str2 (<=):", str1 <= str2); // Salida: str1 es menor o igual que str2 (<=): true

console.log("str1 es igual a 'Hola' (==):", str1 == "Hola"); // Salida: str1 es igual a 'Hola' (==): true
console.log("str1 es diferente de 'Hola' (!=):", str1 != "Hola"); // Salida: str1 es diferente de 'Hola' (!=): false
console.log("str1 es igual a 'Mundo' (==):", str1 == "Mundo"); // Salida: str1 es igual a 'Mundo' (==): false
console.log("str1 es diferente de 'Mundo' (!=):", str1 != "Mundo"); // Salida: str1 es diferente de 'Mundo' (!=): true
console.log("str1 es mayor que 'Hola' (>):", str1 > "Hola"); // Salida: str1 es mayor que 'Hola' (>): false
console.log("str1 es menor que 'Mundo' (<):", str1 < "Mundo"); // Salida: str1 es menor que 'Mundo' (<): true
console.log("str1 es mayor o igual que 'Hola' (>=):", str1 >= "Hola"); // Salida: str1 es mayor o igual que 'Hola' (>=): true
console.log("str1 es menor o igual que 'Mundo' (<=):", str1 <= "Mundo"); // Salida: str1 es menor o igual que 'Mundo' (<=): true

// Comparación de booleanos
let bool1 = true;   
let bool2 = false;
console.log("bool1 es igual a bool2 (===):", bool1 === bool2); // Salida: bool1 es igual a bool2 (===): false
console.log("bool1 es igual a true (===):", bool1 === true); // Salida: bool1 es igual a true (===): true
console.log("bool2 es igual a false (===):", bool2 === false); // Salida: bool2 es igual a false (===): true
console.log("bool1 es diferente de bool2 (!==):", bool1 !== bool2); // Salida: bool1 es diferente de bool2 (!==): true
console.log("bool1 es diferente de true (!==):", bool1 !== true); // Salida: bool1 es diferente de true (!==): false
console.log("bool2 es diferente de false (!==):", bool2 !== false); //  Salida: bool2 es diferente de false (!==): false
/**
 * Los booleanos se comparan directamente:
 * true es mayor que false, porque en JavaScript,
 * true se considera como 1 y false como 0 en operaciones de comparación.
 * false es menor que true.
 * true es igual a true y false es igual a false.
 */
console.log("bool1 es mayor que bool2 (>):", bool1 > bool2); // Salida: bool1 es mayor que bool2 (>): true
console.log("bool1 es menor que bool2 (<):", bool1 < bool2); // Salida: bool1 es menor que bool2 (<): false
console.log("bool1 es mayor o igual que bool2 (>=):", bool1 >= bool2); // Salida: bool1 es mayor o igual que bool2 (>=): true
console.log("bool1 es menor o igual que bool2 (<=):", bool1 <= bool2); // Salida: bool1 es menor o igual que bool2 (<=): false

console.log("bool1 es igual a true (==):", bool1 == true); // Salida: bool1 es igual a true (==): true
console.log("bool2 es igual a false (==):", bool2 == false); // Salida: bool2 es igual a false (==): true
console.log("bool1 es diferente de true (!=):", bool1 != true); // Salida: bool1 es diferente de true (!=): false
console.log("bool2 es diferente de false (!=):", bool2 != false); // Salida: bool2 es diferente de false (!=): false