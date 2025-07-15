//Operadores spread y rest
//Operador spread = permite expandir un iterable en lugares donde se esperan cero o más argumentos (funciones) o elementos (arrays).
//Operador rest = permite agrupar un número indefinido de elementos en un array.

// Array base que usaremos en varios ejemplos
const numeros = [1, 2, 3, 4, 5];

// Ejemplo de uso del operador spread
// Math.max() necesita argumentos individuales, no un array
// Sin spread: Math.max([1,2,3,4,5]) retornaría NaN
// Con spread: Math.max(1,2,3,4,5) retorna 5
const maximo = Math.max(...numeros); // El spread convierte [1,2,3,4,5] en 1,2,3,4,5
console.log("El número máximo es:", maximo) // Imprime: 5

//Unir dos arrays con el operador spread
const masNumeros = [4, 5, 6];
// El spread permite combinar arrays de forma inmutable (sin modificar los originales)
// [...numeros, ...masNumeros] = [1,2,3,4,5,4,5,6]
const todosLosNumeros2 = [...numeros, ...masNumeros];
console.log("Todos los números unidos son:", todosLosNumeros2); // [1,2,3,4,5,4,5,6]

// Unir dos objetos con el operador spread
const persona1 = { nombre: "Ana", edad: 25 };
const persona2 = { ciudad: "Barcelona", profesion: "Arquitecta" };
// El spread copia todas las propiedades de ambos objetos en uno nuevo
// Si hubiera propiedades duplicadas, las del segundo objeto sobrescribirían las del primero
const personaCompleta = { ...persona1, ...persona2 };
console.log("Persona completa:", personaCompleta); // {nombre: "Ana", edad: 25, ciudad: "Barcelona", profesion: "Arquitecta"}

//convertir un array en una lista de argumentos con el operador spread
// Esta función espera exactamente 3 parámetros
function sumarTres(a, b, c) {
    return a + b + c;
}
const numerosParaSumar = [1, 2, 3];
// El spread convierte el array [1,2,3] en argumentos individuales: sumarTres(1, 2, 3)
console.log("La suma es:", sumarTres(...numerosParaSumar)); // Imprime: 6

//Convertir un string en un array de caracteres con el operador spread
const texto = "Hola";
// Los strings son iterables, por lo que el spread puede separarlos en caracteres
// "Hola" se convierte en ["H", "o", "l", "a"]
const caracteres = [...texto];
console.log("Array de caracteres:", caracteres); // ["H", "o", "l", "a"]

// Ejemplo de uso del operador rest
// El operador rest (...valores) agrupa todos los argumentos en un array
// Permite que la función acepte cualquier cantidad de parámetros
function sumar(...valores) {
    // valores es un array que contiene todos los argumentos pasados
    // reduce() suma todos los elementos: (0+1+2+3+4+5) = 15
    return valores.reduce((acumulado, actual) => acumulado + actual, 0);
}
// Los argumentos (1, 2, 3, 4, 5) se agrupan automáticamente en el array [1, 2, 3, 4, 5]
console.log("La suma es:", sumar(1, 2, 3, 4, 5)); // Imprime: 15

// Ejemplo de uso del operador spread con arrays
const numeros2 = [6, 7, 8];
// Otra forma de combinar arrays - mismo concepto que antes
const todosLosNumeros = [...numeros, ...numeros2]; // [1,2,3,4,5,6,7,8]
console.log("Todos los números son:", todosLosNumeros); 

// Ejemplo de uso del operador spread con objetos
const persona = { nombre: "Juan", edad: 30 };
// El spread crea una copia superficial del objeto y añade nuevas propiedades
// El objeto original no se modifica
const copiaPersona = { ...persona, ciudad: "Madrid" };
console.log("Persona original:", persona); // {nombre: "Juan", edad: 30}
console.log("Copia de persona:", copiaPersona); // {nombre: "Juan", edad: 30, ciudad: "Madrid"}

// Ejemplo de uso del operador rest en una función
// Combina parámetros normales con rest
// 'nombre' captura el primer argumento, '...datos' captura el resto
function mostrarDatos(nombre, ...datos) {
    console.log("Nombre:", nombre); // Imprime el primer argumento
    console.log("Datos adicionales:", datos); // Imprime el resto como array
}
// nombre = "Ana", datos = [25, "Ingeniera", "Madrid"]
mostrarDatos("Ana", 25, "Ingeniera", "Madrid");

// Ejemplo de uso del operador spread en una función
// Demuestra el uso combinado de rest y spread
function mostrarNumeros(...numeros) {
    // Primero rest agrupa los argumentos en un array 'numeros'
    // Luego spread los expande de nuevo para console.log()
    // Es como hacer: console.log("Números:", 10, 20, 30, 40)
    console.log("Números:", ...numeros);
}
// Los argumentos se agrupan en [10, 20, 30, 40] y luego se expanden
mostrarNumeros(10, 20, 30, 40); // Imprime: Números: 10 20 30 40
