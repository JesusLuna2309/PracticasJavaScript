//Destructuracion de arreglos y objetos en JavaScript

const numeros = [1, 2, 3, 4, 5]; // Array de números

// Desestructuración de un arreglo:
// Extrae el primer, segundo y cuarto elemento del arreglo 'numeros'.
// El tercer elemento se omite usando una coma vacía.
/**
 * Utiliza la destructuración de arreglos para extraer valores específicos del array 'numeros'.
 * La destructuración permite asignar elementos del arreglo a variables individuales de manera concisa.
 * En este caso, 'primerNumero' recibe el primer elemento, 'segundoNumero' el segundo,
 * se omite el tercer elemento usando una coma vacía, y 'cuarto' recibe el cuarto elemento.
 * El operador ...resto agrupa el resto de los elementos no asignados en un nuevo arreglo llamado 'resto'.
 * Así, 'resto' contendrá todos los elementos que no fueron asignados a las variables anteriores.
 */
const [primerNumero, segundoNumero, , cuarto, ...resto] = numeros;

console.log("Primer número:", primerNumero); // Salida: Primer número: 1
console.log("Segundo número:", segundoNumero); // Salida: Segundo número: 2
console.log("Cuarto número:", cuarto); // Salida: Cuarto número: 4
console.log("Resto de números:", resto); // Salida: Resto de números: [5]
console.log("Todos los números:", numeros); // Salida: Todos los números: [1, 2, 3, 4, 5]

// Desestructuración de un objeto
const persona = {
    nombre: "Natalia", // Propiedad nombre
    edad: 30,          // Propiedad edad
    ciudad: "Madrid"   // Propiedad ciudad
};
const { nombre, edad, ciudad } = persona; // Desestructuración de un objeto
console.log("Nombre:", nombre); // Salida: Nombre: Natalia
console.log("Edad:", edad); // Salida: Edad: 30
console.log("Ciudad:", ciudad); // Salida: Ciudad: Madrid

// Desestructuración con alias
const { nombre: nombrePersona, edad: edadPersona } = persona; // Asignación de alias
console.log("Nombre con alias:", nombrePersona); // Salida: Nombre con alias: Natalia
console.log("Edad con alias:", edadPersona); // Salida: Edad con alias: 30
// La siguiente línea genera error porque 'ciudadPersona' no fue definido en la desestructuración
console.log("Ciudad con alias:", ciudadPersona); // Salida:
