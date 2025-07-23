/**
 * Declaración de funciones en JavaScript
 * Las funciones son bloques de código reutilizables que realizan tareas específicas.
 * Pueden recibir parámetros, realizar cálculos y devolver resultados.
 * Funciones pueden ser declaradas de varias formas:
 * - Declaración de función
 * - Expresión de función
 * - Funciones flecha (Arrow functions)
 * - Funciones anónimas
 * - Funciones con parámetros por defecto
 * Funciones pueden ser llamadas múltiples veces con diferentes argumentos.
 * Funciones también pueden ser anidadas, es decir, una función puede llamar a otra función.
 * Funciones son fundamentales para la programación modular y la reutilización de código.
 * Funciones pueden ser declaradas antes o después de su uso en el código.
 * Funciones pueden ser asignadas a variables, permitiendo su uso como objetos de primera clase.
 */
//Declaración de una función simple
function saludar(nombre) {
    console.log("Hola, " + nombre + "!"); // Muestra un saludo personalizado en la consola
}
//Llamada a la función - Para ejecutar una función se usa su nombre seguido de paréntesis con los argumentos
saludar("Carlos"); // Salida: Hola, Carlos!