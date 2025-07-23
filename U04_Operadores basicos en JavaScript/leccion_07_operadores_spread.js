//Operadores spread y rest
//Operador spread = permite expandir un iterable en lugares donde se esperan cero o más argumentos (funciones) o elementos (arrays).
//Operador rest = permite agrupar un número indefinido de elementos en un array.

// Array base que usaremos en varios ejemplos
const numeros = [1, 2, 3, 4, 5];

// Ejemplo de uso del operador spread con funciones que esperan argumentos individuales
// Math.max() necesita argumentos individuales, no un array
// Sin spread: Math.max([1,2,3,4,5]) retornaría NaN porque intenta comparar un array con undefined
// Con spread: Math.max(...[1,2,3,4,5]) se convierte en Math.max(1,2,3,4,5) y retorna 5
const maximo = Math.max(...numeros); // El operador ... "desempaqueta" el array elemento por elemento
console.log("El número máximo es:", maximo) // Imprime: 5

//Unir dos arrays con el operador spread (concatenación inmutable)
const masNumeros = [4, 5, 6];
// El spread permite combinar arrays de forma inmutable (sin modificar los originales)
// [...numeros, ...masNumeros] crea un nuevo array con todos los elementos
// Es equivalente a numeros.concat(masNumeros) pero más legible
const todosLosNumeros2 = [...numeros, ...masNumeros];
console.log("Todos los números unidos son:", todosLosNumeros2); // [1,2,3,4,5,4,5,6]

// Unir dos objetos con el operador spread (fusión de objetos)
const persona1 = { nombre: "Ana", edad: 25 };
const persona2 = { ciudad: "Barcelona", profesion: "Arquitecta" };
// El spread copia todas las propiedades de ambos objetos en uno nuevo
// Si hubiera propiedades duplicadas, las del segundo objeto sobrescribirían las del primero
// Esto se llama "shallow copy" - solo copia el primer nivel de propiedades
const personaCompleta = { ...persona1, ...persona2 };
console.log("Persona completa:", personaCompleta); // {nombre: "Ana", edad: 25, ciudad: "Barcelona", profesion: "Arquitecta"}

//Convertir un array en una lista de argumentos con el operador spread
// Esta función espera exactamente 3 parámetros separados
function sumarTres(a, b, c) {
    return a + b + c;
}
const numerosParaSumar = [1, 2, 3];
// El spread convierte el array [1,2,3] en argumentos individuales: sumarTres(1, 2, 3)
// Sin spread tendríamos que hacer: sumarTres(numerosParaSumar[0], numerosParaSumar[1], numerosParaSumar[2])
console.log("La suma es:", sumarTres(...numerosParaSumar)); // Imprime: 6

//Convertir un string en un array de caracteres con el operador spread
const texto = "Hola";
// Los strings son iterables (tienen el protocolo Symbol.iterator), por lo que el spread puede separarlos
// "Hola" se convierte en ["H", "o", "l", "a"]
// Es más legible que texto.split('') y funciona con caracteres Unicode complejos
const caracteres = [...texto];
console.log("Array de caracteres:", caracteres); // ["H", "o", "l", "a"]

// Ejemplo de uso del operador rest en funciones (parámetros variables)
// El operador rest (...valores) agrupa todos los argumentos en un array
// Permite que la función acepte cualquier cantidad de parámetros (función variádica)
function sumar(...valores) {
    // valores es un array que contiene todos los argumentos pasados
    // reduce() aplica una función acumuladora: suma cada elemento al total
    // (acumulado, actual) => acumulado + actual es la función reductora
    // 0 es el valor inicial del acumulador
    return valores.reduce((acumulado, actual) => acumulado + actual, 0);
}
// Los argumentos (1, 2, 3, 4, 5) se agrupan automáticamente en el array [1, 2, 3, 4, 5]
console.log("La suma es:", sumar(1, 2, 3, 4, 5)); // Imprime: 15

// Ejemplo adicional del operador spread con arrays (duplicación)
const numeros2 = [6, 7, 8];
// Otra forma de combinar arrays - demuestra la flexibilidad del spread
// Podemos insertar elementos adicionales: [...numeros, 99, ...numeros2, 100]
const todosLosNumeros = [...numeros, ...numeros2]; // [1,2,3,4,5,6,7,8]
console.log("Todos los números son:", todosLosNumeros); 

// Ejemplo del operador spread con objetos (clonación y extensión)
const persona = { nombre: "Juan", edad: 30 };
// El spread crea una copia superficial del objeto y permite añadir nuevas propiedades
// El objeto original no se modifica (inmutabilidad)
// Si 'ciudad' ya existiera en persona, este nuevo valor la sobrescribiría
const copiaPersona = { ...persona, ciudad: "Madrid" };
console.log("Persona original:", persona); // {nombre: "Juan", edad: 30}
console.log("Copia de persona:", copiaPersona); // {nombre: "Juan", edad: 30, ciudad: "Madrid"}

// Ejemplo del operador rest combinado con parámetros normales
// Combina parámetros fijos con rest (debe ser el último parámetro)
// 'nombre' captura el primer argumento, '...datos' captura todos los demás
function mostrarDatos(nombre, ...datos) {
    console.log("Nombre:", nombre); // Imprime el primer argumento
    console.log("Datos adicionales:", datos); // Imprime el resto como array
}
// Al llamar: nombre = "Ana", datos = [25, "Ingeniera", "Madrid"]
// No se puede hacer function mostrarDatos(...datos, nombre) - SyntaxError!
mostrarDatos("Ana", 25, "Ingeniera", "Madrid");

// Ejemplo avanzado: uso combinado de rest y spread
// Demuestra cómo se pueden usar ambos operadores en la misma función
function mostrarNumeros(...numeros) {
    // Primero rest agrupa los argumentos en un array 'numeros'
    // Luego spread los expande de nuevo para console.log()
    // console.log puede recibir múltiples argumentos separados por comas
    // Es equivalente a: console.log("Números:", 10, 20, 30, 40)
    console.log("Números:", ...numeros);
}
// Los argumentos se agrupan en [10, 20, 30, 40] y luego se expanden
mostrarNumeros(10, 20, 30, 40); // Imprime: Números: 10 20 30 40

// Casos de uso adicionales importantes:

// 1. Copia profunda vs superficial
const objetoAnidado = { datos: { valor: 1 } };
const copia = { ...objetoAnidado }; // Solo copia superficial
// copia.datos === objetoAnidado.datos (misma referencia)

// 2. Rest en destructuring
const [primero, segundo, ...resto] = [1, 2, 3, 4, 5];
// primero = 1, segundo = 2, resto = [3, 4, 5]

// 3. Spread con iterables
const set = new Set([1, 2, 3]);
const arrayFromSet = [...set]; // [1, 2, 3]

// 4. Sobrescribir propiedades con spread
const config = { host: 'localhost', port: 3000 };
const newConfig = { ...config, port: 8080 }; // port se sobrescribe a 8080
