//Bucles do...while en JavaScript
// El bucle do...while ejecuta un bloque de código al menos una vez,
// y luego repite el bloque mientras una condición sea verdadera.
// A diferencia del bucle while, la condición se evalúa DESPUÉS de ejecutar el bloque de código.

// EJEMPLO BÁSICO - ANATOMÍA DEL BUCLE DO...WHILE
// Paso 1: Inicialización FUERA del bucle
let contador = 0; // Variable de control inicializada antes del bucle

// Paso 2: Código que se ejecuta AL MENOS UNA VEZ
do {
    // IMPORTANTE: Este bloque SIEMPRE se ejecuta primero
    // No importa si la condición del while es false desde el inicio
    // Esta es la diferencia fundamental con el bucle while tradicional
    
    // Paso 3: Acción a realizar
    console.log("Contador:", contador); // Imprime el valor actual del contador
    
    // Paso 4: Modificación de la variable de control DENTRO del bucle
    contador++; // Incrementa el contador en 1
    // CRÍTICO: Sin este incremento, tendríamos un bucle infinito
    // Equivale a: contador = contador + 1
    
} while (contador < 5); // Paso 5: Condición evaluada DESPUÉS de cada iteración
// La condición se verifica SOLO después de ejecutar todo el bloque do
// Si es true, vuelve a ejecutar el bloque do
// Si es false, el bucle termina

// Flujo de ejecución DETALLADO:
// 1. Se ejecuta el bloque do (contador=0, imprime "Contador: 0", contador se vuelve 1)
// 2. Se evalúa while(1 < 5) → true, continúa
// 3. Se ejecuta el bloque do (contador=1, imprime "Contador: 1", contador se vuelve 2)
// 4. Se evalúa while(2 < 5) → true, continúa
// 5. Se ejecuta el bloque do (contador=2, imprime "Contador: 2", contador se vuelve 3)
// 6. Se evalúa while(3 < 5) → true, continúa
// 7. Se ejecuta el bloque do (contador=3, imprime "Contador: 3", contador se vuelve 4)
// 8. Se evalúa while(4 < 5) → true, continúa
// 9. Se ejecuta el bloque do (contador=4, imprime "Contador: 4", contador se vuelve 5)
// 10. Se evalúa while(5 < 5) → false, EL BUCLE TERMINA

// EJEMPLO CON UNA CONDICIÓN COMPLEJA
let numero = 10; // Valor inicial

do {
    // Este bloque se ejecuta independientemente del valor inicial de 'numero'
    // Incluso si numero fuera -5, este código se ejecutaría al menos una vez
    console.log("Número:", numero); // Imprime el número actual
    
    // Aquí podríamos realizar operaciones complejas:
    // - Cálculos matemáticos complejos
    // - Validaciones de datos
    // - Operaciones con bases de datos
    // - Procesamiento de archivos
    // - Interacciones con APIs
    
    numero -= 2; // Decremento de 2 en 2 (no necesariamente 1)
    // Equivale a: numero = numero - 2
    // Demuestra que puedes modificar la variable de control de cualquier manera
    
} while (numero > 0); // Condición: mientras número sea positivo
// Esta condición se evalúa DESPUÉS de cada ejecución del bloque do

// Flujo DETALLADO: 10 → 8 → 6 → 4 → 2 → 0 (se detiene cuando numero = 0)
// 1. do: imprime "10", numero se vuelve 8, while(8 > 0) → true
// 2. do: imprime "8", numero se vuelve 6, while(6 > 0) → true
// 3. do: imprime "6", numero se vuelve 4, while(4 > 0) → true
// 4. do: imprime "4", numero se vuelve 2, while(2 > 0) → true
// 5. do: imprime "2", numero se vuelve 0, while(0 > 0) → false, TERMINA

// EJEMPLO CON UN ARRAY - SIMULANDO UN BUCLE FOR TRADICIONAL
const frutas = ["manzana", "banana", "naranja"]; // Array con 3 elementos (índices 0, 1, 2)
let indice = 0; // Variable de control para indexar el array
// IMPORTANTE: indice comienza en 0 porque los arrays en JS empiezan en índice 0

do {
    // Este bloque se ejecutará al menos una vez, incluso si frutas fuera un array vacío
    // (aunque en ese caso frutas[0] sería undefined)
    
    // frutas.length = 3, entonces la condición será: mientras indice < 3
    // Esta verificación asegura que no accedamos a índices inexistentes
    
    console.log("Fruta en el índice " + indice + ": " + frutas[indice]);
    // frutas[0] = "manzana", frutas[1] = "banana", frutas[2] = "naranja"
    // Si accediéramos a frutas[3], obtendríamos 'undefined'
    
    indice++; // Incrementamos el índice para la siguiente iteración
    // Sin este incremento, tendríamos un bucle infinito accediendo siempre a frutas[0]
    
} while (indice < frutas.length); // Condición: mientras haya más frutas que procesar

// Flujo de ejecución DETALLADO:
// 1. do: indice=0, imprime "manzana", indice se vuelve 1, while(1 < 3) → true
// 2. do: indice=1, imprime "banana", indice se vuelve 2, while(2 < 3) → true
// 3. do: indice=2, imprime "naranja", indice se vuelve 3, while(3 < 3) → false, TERMINA

// CUÁNDO USAR DO...WHILE VS WHILE:

// USA DO...WHILE CUANDO:
// - Necesitas ejecutar código al menos una vez
// - Solicitas entrada del usuario (menús, validaciones)
// - Procesas al menos un elemento de datos
// - Necesitas realizar una acción antes de verificar una condición

// EJEMPLO PRÁCTICO DE USO:
// let respuesta;
// do {
//     respuesta = prompt("¿Quieres continuar? (sí/no)");
//     // Este prompt se ejecuta al menos una vez
// } while (respuesta !== "sí" && respuesta !== "no");

// USA WHILE CUANDO:
// - La condición debe verificarse antes de cualquier ejecución
// - Podrías no necesitar ejecutar el bloque nunca
// - Estás iterando mientras una condición externa sea verdadera

// RIESGOS COMUNES CON DO...WHILE:

// 1. BUCLE INFINITO (mismo riesgo que while):
// do {
//     console.log("Infinito");
//     // Sin modificar la variable de control
// } while (true);

// 2. CONDICIÓN SIEMPRE VERDADERA:
// let x = 0;
// do {
//     console.log(x);
//     x++; // Si nunca cambias la lógica de la condición
// } while (x >= 0); // Esta condición siempre será true

// 3. ACCESO A ÍNDICES FUERA DE RANGO:
// let arr = [1, 2, 3];
// let i = 0;
// do {
//     console.log(arr[i]); // Podría acceder a undefined si i supera arr.length
//     i++;
// } while (i <= arr.length); // Debería ser i < arr.length

// COMPARACIÓN PRÁCTICA WHILE VS DO...WHILE:

// Con WHILE (condición false desde el inicio):
// let contador1 = 10;
// while (contador1 < 5) {
//     console.log("Nunca se ejecuta");
// }

// Con DO...WHILE (misma condición):
// let contador2 = 10;
// do {
//     console.log("Se ejecuta una vez"); // Se ejecuta aunque 10 no sea < 5
// } while (contador2 < 5);

// NOTA FINAL: El bucle do...while es menos común que while o for,
// pero es extremadamente útil en situaciones específicas donde la
// ejecución inicial es crítica para la lógica de tu programa.