//Operadores que se utilizan para trabajar con cadenas de texto en JavaScript
// Los operadores de cadena se utilizan para manipular y trabajar con cadenas de texto en JavaScript

let str1 = "Hola";
let str2 = "Mundo";
console.log("Cadena 1:", str1); // Salida: Cadena 1: Hola
console.log("Cadena 2:", str2); // Salida: Cadena 2: Mundo

// Concatenación de cadenas
let concatenacion = str1 + " " + str2; // "Hola Mundo"
console.log("Concatenación:", concatenacion); // Salida: Concatenación: Hola Mundo

// Concatenación con el operador +=
str1 += " " + str2; // Ahora str1 es "Hola Mundo"
console.log("str1 después de concatenar:", str1); // Salida: str1 después de concatenar: Hola Mundo

// Repetición de cadenas
let repeticion = str1.repeat(3); // "Hola MundoHola MundoHola Mundo"
console.log("Repetición:", repeticion); // Salida: Repetición: Hola MundoHola MundoHola Mundo

// Longitud de una cadena
let longitud = str1.length; // 13
console.log("Longitud de str1:", longitud); // Salida: Longitud de str1: 13

// Acceso a caracteres individuales
let primerCaracter = str1[0]; // 'H'
console.log("Primer carácter de str1:", primerCaracter); // Salida: Primer carácter de str1: H
let ultimoCaracter = str1[str1.length - 1]; // 'o'
console.log("Último carácter de str1:", ultimoCaracter); // Salida: Último carácter de str1: o

// Subcadena (substring)    
let subcadena = str1.substring(0, 4); // "Hola"
console.log("Subcadena de str1:", subcadena); // Salida: Subcadena de str1: Hola

// Subcadena con slice
let subcadenaSlice = str1.slice(5, 10); // "Mundo"
console.log("Subcadena de str1 con slice:", subcadenaSlice); // Salida: Subcadena de str1 con slice: Mundo

// Búsqueda de subcadenas
let indice = str1.indexOf("Mundo"); // 5
console.log("Índice de 'Mundo' en str1:", indice); // Salida: Índice de 'Mundo' en str1: 5
let ultimoIndice = str1.lastIndexOf("o"); // 12
console.log("Último índice de 'o' en str1:", ultimoIndice); // Salida: Último índice de 'o' en str1: 12

// Verificar si una cadena contiene otra cadena
let contiene = str1.includes("Hola"); // true
console.log("¿str1 contiene 'Hola'?", contiene); // Salida: ¿str1 contiene 'Hola'? true

// Verificar si una cadena comienza o termina con otra cadena
let comienzaCon = str1.startsWith("Hola"); // true
console.log("¿str1 comienza con 'Hola'?", comienzaCon); // Salida: ¿str1 comienza con 'Hola'? true
let terminaCon = str1.endsWith("Mundo"); // true
console.log("¿str1 termina con 'Mundo'?", terminaCon); // Salida: ¿str1 termina con 'Mundo'? true

// Convertir a mayúsculas y minúsculas
let mayusculas = str1.toUpperCase(); // "HOLA MUNDO"
console.log("str1 en mayúsculas:", mayusculas); // Salida: str1 en mayúsculas: HOLA MUNDO
let minusculas = str1.toLowerCase(); // "hola mundo"
console.log("str1 en minúsculas:", minusculas); // Salida: str1 en minúsculas: hola mundo

// Eliminar espacios en blanco al inicio y al final
let strConEspacios = "   Hola Mundo   ";
let sinEspacios = strConEspacios.trim(); // "Hola Mundo"
console.log("Cadena sin espacios:", sinEspacios); // Salida: Cadena sin espacios: Hola Mundo

// Dividir una cadena en un array
let palabras = str1.split(" "); // ["Hola", "Mundo"]
console.log("Palabras en str1:", palabras); // Salida: Palabras en str1: [ 'Hola', 'Mundo' ]

// Unir un array en una cadena
let cadenaUnida = palabras.join(", "); // "Hola, Mundo"
console.log("Cadena unida:", cadenaUnida); // Salida: Cadena unida: Hola, Mundo

// Reemplazar una subcadena
let reemplazo = str1.replace("Mundo", "JavaScript"); // "Hola JavaScript"
console.log("str1 después de reemplazar 'Mundo':", reemplazo); // Salida: str1 después de reemplazar 'Mundo': Hola JavaScript

// Reemplazar todas las ocurrencias de una subcadena
let reemplazoGlobal = str1.replace(/o/g, "0"); // "H0la Mund0"
console.log("str1 después de reemplazar 'o' por '0':", reemplazoGlobal); // Salida: str1 después de reemplazar 'o' por '0': H0la Mund0