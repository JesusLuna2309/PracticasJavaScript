//Bucles while en JavaScript
// El bucle while ejecuta un bloque de código mientras una condición sea verdadera
// Es útil cuando no sabemos de antemano cuántas veces se repetirá el bucle
// A diferencia de for, while no requiere una inicialización o incremento explícito

// EJEMPLO BÁSICO - ANATOMÍA DEL BUCLE WHILE
// Paso 1: Inicialización FUERA del bucle
let contador = 0; // Variable de control inicializada antes del bucle

// Paso 2: Condición evaluada ANTES de cada iteración
while (contador < 5) { // Esta condición se evalúa en cada ciclo
    // Paso 3: Código que se ejecuta en cada iteración
    console.log("Contador:", contador); // Acción a realizar
    
    // Paso 4: Modificación de la variable de control DENTRO del bucle
    contador++; // ¡CRÍTICO! Sin esto tendríamos un bucle infinito
    // Equivale a: contador = contador + 1
}
// Flujo de ejecución:
// Iteración 1: contador=0, condición=true, imprime 0, contador se vuelve 1
// Iteración 2: contador=1, condición=true, imprime 1, contador se vuelve 2
// Iteración 3: contador=2, condición=true, imprime 2, contador se vuelve 3
// Iteración 4: contador=3, condición=true, imprime 3, contador se vuelve 4
// Iteración 5: contador=4, condición=true, imprime 4, contador se vuelve 5
// Iteración 6: contador=5, condición=false, EL BUCLE TERMINA

// EJEMPLO CON UNA CONDICIÓN COMPLEJA
let numero = 10; // Valor inicial
while (numero > 0) { // Condición: mientras número sea positivo
    console.log("Número:", numero);
    
    // Aquí podríamos realizar operaciones complejas:
    // - Cálculos matemáticos
    // - Validaciones
    // - Operaciones con otros datos
    
    numero -= 2; // Decremento de 2 en 2 (no necesariamente 1)
    // Equivale a: numero = numero - 2
}
// Flujo: 10 → 8 → 6 → 4 → 2 → 0 (se detiene)
// Demuestra que la variable de control puede cambiar de cualquier forma

// EJEMPLO CON UN ARRAY - SIMULANDO UN BUCLE FOR TRADICIONAL
const frutas = ["manzana", "banana", "naranja"]; // Array con 3 elementos (índices 0, 1, 2)

let indice = 0; // Variable de control para indexar el array
// IMPORTANTE: indice comienza en 0 porque los arrays en JS empiezan en índice 0

while (indice < frutas.length) { 
    // frutas.length = 3, entonces: mientras indice < 3
    // Esta condición asegura que no accedamos a índices inexistentes
    
    console.log("Fruta en el índice " + indice + ": " + frutas[indice]);
    // frutas[0] = "manzana", frutas[1] = "banana", frutas[2] = "naranja"
    // Si accediéramos a frutas[3], obtendríamos 'undefined'
    
    indice++; // Avanzamos al siguiente índice
    // Sin esto, estaríamos en un bucle infinito imprimiendo siempre frutas[0]
}
// Flujo de ejecución:
// indice=0: imprime "manzana", indice se vuelve 1
// indice=1: imprime "banana", indice se vuelve 2  
// indice=2: imprime "naranja", indice se vuelve 3
// indice=3: condición 3 < 3 es false, bucle termina

// EJEMPLO CON UN STRING - LOS STRINGS SON "ARRAY-LIKE"
const mensaje = "Hola"; // String con 4 caracteres (índices 0, 1, 2, 3)

let posicion = 0; // Variable para indexar cada carácter del string
// Los strings se comportan como arrays de caracteres para acceso por índice

while (posicion < mensaje.length) {
    // mensaje.length = 4, entonces: mientras posicion < 4
    // Los strings tienen la propiedad .length como los arrays
    
    console.log("Carácter en la posición " + posicion + ": " + mensaje[posicion]);
    // mensaje[0] = "H", mensaje[1] = "o", mensaje[2] = "l", mensaje[3] = "a"
    // Acceso por índice funciona igual que con arrays
    
    posicion++; // Avanzamos a la siguiente posición
    // Incremento necesario para evitar bucle infinito
}
// Flujo de ejecución:
// posicion=0: accede a "H", posicion se vuelve 1
// posicion=1: accede a "o", posicion se vuelve 2
// posicion=2: accede a "l", posicion se vuelve 3
// posicion=3: accede a "a", posicion se vuelve 4
// posicion=4: condición 4 < 4 es false, bucle termina

// CONSIDERACIONES IMPORTANTES SOBRE BUCLES WHILE:

// 1. RIESGO DE BUCLE INFINITO:
// while (true) { // ¡PELIGRO! Este bucle nunca terminará
//     console.log("Infinito");
//     // Falta modificar la condición dentro del bucle
// }

// 2. CONDICIÓN FALSA DESDE EL INICIO:
// let x = 10;
// while (x < 5) { // Esta condición ya es false
//     console.log("Nunca se ejecuta");
// }
// El bucle no se ejecutará ni una sola vez

// 3. MODIFICACIÓN INCORRECTA DE LA VARIABLE:
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i += 2; // Si incrementas de 2 en 2, podrías saltar el valor límite
// }
// Resultado: 0, 2, 4 (se detiene correctamente)

// 4. CUÁNDO USAR WHILE VS FOR:
// Usa WHILE cuando:
// - No sabes cuántas iteraciones necesitas
// - La condición depende de cálculos complejos
// - Estás esperando input del usuario
// - Procesando datos hasta encontrar un valor específico

// Usa FOR cuando:
// - Sabes exactamente cuántas iteraciones necesitas
// - Recorres arrays o colecciones de tamaño conocido
// - Necesitas un contador simple y predecible