//bucles for
//Iteración de un bucle for
//El bucle for se utiliza para iterar sobre un bloque de código un número específico de veces.
//Sintaxis básica del bucle for:
//for (inicialización; condición; incremento) {
//    // Código a ejecutar en cada iteración
//}

//En este ejemplo, el bucle for se ejecuta 5 veces, desde i = 0 hasta i < 5.
//Dentro del bucle, se imprime el número de iteración actual en la consola.
//El valor de i se incrementa en 1 en cada iteración, gracias a la expresión i++ al final del bucle.
let i = 0;
for (i = 0; i < 5; i++) {
    console.log("Iteración número: " + i); // Salida: 0, 1, 2, 3, 4
}   

//Bucle for con un array
//El bucle for también se puede utilizar para iterar sobre los elementos de un array.
//En este ejemplo, el bucle for recorre el array frutas y muestra cada fruta en la consola.
let frutas = ["manzana", "banana", "naranja", "uva", "kiwi"];
for (let j = 0; j < frutas.length; j++) {
    console.log("Fruta: " + frutas[j]); // Accede a cada elemento del array por su índice
}

//Bucle for...in con un objeto
//El bucle for...in se utiliza para iterar sobre las propiedades enumerables de un objeto.
//En este ejemplo, el bucle for...in recorre las claves del objeto persona y muestra cada clave y su valor correspondiente en la consola.
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
for (let clave in persona) {
    console.log(clave + ": " + persona[clave]); // Muestra: nombre: Juan, edad: 30, ciudad: Madrid
}

//Bucle for con un string
//El bucle for también se puede utilizar para iterar sobre los caracteres de un string.
//Los strings se comportan como arrays de caracteres para el acceso por índice.
let mensaje = "Hola, mundo!";
for (let k = 0; k < mensaje.length; k++) {
    console.log("Carácter en la posición " + k + ": " + mensaje[k]); // Accede a cada carácter
}

//Bucle for anidado
//Los bucles for también pueden anidarse para iterar sobre estructuras más complejas como matrices.
//El bucle externo maneja las filas y el bucle interno maneja las columnas.
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
        console.log("Elemento en la posición [" + fila + "][" + columna + "]: " + matriz[fila][columna]);
    }
}

//Bucle for con un rango de números
//El bucle for también se puede utilizar para generar un rango de números y almacenarlos en un array.
let rango = [];
for (let m = 1; m <= 10; m++) {
    rango.push(m); // Agrega cada número al array
}
console.log("Rango de números del 1 al 10: " + rango.join(", ")); // Une los elementos con comas

//Bucle for con un contador descendente
//El bucle for también puede contar hacia atrás usando el operador de decremento (--).
for (let n = 5; n >= 0; n--) {
    console.log("Cuenta regresiva: " + n); // Salida: 5, 4, 3, 2, 1, 0
}

//Bucle for con un paso personalizado
//El bucle for también permite definir un paso personalizado en el incremento usando operadores de asignación.
for (let o = 0; o <= 20; o += 2) {
    console.log("Número par: " + o); // Salida: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
}

