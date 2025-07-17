//Sentencias break y continue en JavaScript
// Estas sentencias controlan el flujo de los bucles y estructuras de control
// 'break' termina el bucle o switch, 'continue' salta a la siguiente
// iteración del bucle

// EJEMPLO BÁSICO CON UN BUCLE FOR
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Termina el bucle cuando i es igual a 5
        // IMPORTANTE: break sale inmediatamente del bucle más cercano
        // No ejecuta el resto del código dentro del bucle para esta ni futuras iteraciones
        // Es como si el bucle nunca hubiera existido después de este punto
    }
    console.log("Número:", i); // Imprime los números del 0 al 4
}
// Salida: Número: 0, Número: 1, Número: 2, Número: 3, Número: 4
// El bucle se detiene antes de imprimir el 5
// Flujo de ejecución:
// i=0: condición true, imprime 0, incrementa i
// i=1: condición true, imprime 1, incrementa i
// i=2: condición true, imprime 2, incrementa i
// i=3: condición true, imprime 3, incrementa i
// i=4: condición true, imprime 4, incrementa i
// i=5: condición true, ejecuta break - SALE DEL BUCLE COMPLETAMENTE

// EJEMPLO CON UN BUCLE WHILE
let j = 0;
while (j < 10) {
    if (j === 3) {
        j++; // CRÍTICO: Incrementa j para evitar un bucle infinito
        // Sin este incremento, j permanecería en 3 para siempre
        // y el continue haría que el bucle se ejecute infinitamente
        continue; // Salta a la siguiente iteración cuando j es 3
        // IMPORTANTE: continue regresa al inicio del bucle (while condition)
        // No ejecuta el resto del código en esta iteración específica
        // pero el bucle continúa con la siguiente iteración
    }
    console.log("Número:", j); // Imprime los números excepto el 3
    j++; // Incrementa j en cada iteración NORMAL
}
// Salida: Número: 0, Número: 1, Número: 2, Número: 4, Número: 5, Número: 6, Número: 7,
// Número: 8, Número: 9
// El número 3 se salta, pero el bucle continúa hasta 9
// Flujo de ejecución detallado:
// j=0: no es 3, imprime 0, incrementa j a 1
// j=1: no es 3, imprime 1, incrementa j a 2
// j=2: no es 3, imprime 2, incrementa j a 3
// j=3: es 3, incrementa j a 4, ejecuta continue - SALTA AL WHILE
// j=4: no es 3, imprime 4, incrementa j a 5
// ... y así sucesivamente hasta j=9

// EJEMPLO AVANZADO: BREAK EN BUCLES ANIDADOS
console.log("--- Break en bucles anidados ---");
for (let x = 0; x < 3; x++) {
    console.log("Bucle externo, x =", x);
    for (let y = 0; y < 3; y++) {
        if (y === 1) {
            break; // Solo rompe el bucle INTERNO, no el externo
        }
        console.log("  Bucle interno, y =", y);
    }
}
// Salida:
// Bucle externo, x = 0
//   Bucle interno, y = 0
// Bucle externo, x = 1
//   Bucle interno, y = 0
// Bucle externo, x = 2
//   Bucle interno, y = 0

// EJEMPLO AVANZADO: CONTINUE EN BUCLES ANIDADOS
console.log("--- Continue en bucles anidados ---");
for (let a = 0; a < 3; a++) {
    console.log("Bucle externo, a =", a);
    for (let b = 0; b < 3; b++) {
        if (b === 1) {
            continue; // Solo salta la iteración del bucle INTERNO
        }
        console.log("  Bucle interno, b =", b);
    }
}
// Salida:
// Bucle externo, a = 0
//   Bucle interno, b = 0
//   Bucle interno, b = 2
// Bucle externo, a = 1
//   Bucle interno, b = 0
//   Bucle interno, b = 2
// Bucle externo, a = 2
//   Bucle interno, b = 0
//   Bucle interno, b = 2

// EJEMPLO PRÁCTICO: BUSCAR UN ELEMENTO EN UN ARRAY
const nombres = ["Ana", "Carlos", "Pedro", "María", "Luis"];
let nombreBuscado = "Pedro";
let encontrado = false;

for (let index = 0; index < nombres.length; index++) {
    if (nombres[index] === nombreBuscado) {
        console.log(`Encontrado ${nombreBuscado} en la posición ${index}`);
        encontrado = true;
        break; // Una vez encontrado, no necesitamos seguir buscando
        // Esto hace el código más eficiente - no revisamos el resto del array
    }
}

if (!encontrado) {
    console.log(`${nombreBuscado} no se encontró en el array`);
}

// EJEMPLO PRÁCTICO: FILTRAR NÚMEROS PARES
console.log("--- Números pares usando continue ---");
for (let num = 1; num <= 10; num++) {
    if (num % 2 !== 0) {
        continue; // Si es impar, salta esta iteración
    }
    console.log("Número par:", num); // Solo ejecuta para números pares
}
// Salida: Número par: 2, Número par: 4, Número par: 6, Número par: 8, Número par: 10

// ADVERTENCIA: ERRORES COMUNES
// Error 1: Olvidar incrementar en continue con while
/*
let k = 0;
while (k < 5) {
    if (k === 2) {
        continue; // ERROR: k nunca se incrementa, bucle infinito
    }
    console.log(k);
    k++;
}
*/

// Error 2: Break fuera de bucle o switch
/*
if (true) {
    break; // ERROR: break solo funciona en bucles y switch
}
*/

// LABELS: Para controlar bucles específicos en anidamientos
console.log("--- Usando labels con break ---");
outer: for (let m = 0; m < 3; m++) {
    for (let n = 0; n < 3; n++) {
        if (m === 1 && n === 1) {
            break outer; // Rompe el bucle etiquetado como 'outer'
        }
        console.log(`m: ${m}, n: ${n}`);
    }
}
// Salida:
// m: 0, n: 0
// m: 0, n: 1
// m: 0, n: 2
// m: 1, n: 0
// (Se detiene cuando m=1 y n=1)