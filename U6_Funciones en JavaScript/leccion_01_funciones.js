//Funciones en JavaScript - Bloques de código reutilizable que realizan tareas específicas

//Definición de una función simple
//Las funciones se declaran con la palabra clave 'function', seguida del nombre y parámetros entre paréntesis
function saludar(nombre) {
    console.log("Hola, " + nombre + "!"); // Muestra un saludo personalizado en la consola
}

//Llamada a la función - Para ejecutar una función se usa su nombre seguido de paréntesis con los argumentos
saludar("Carlos"); // Salida: Hola, Carlos!

//Definición de una función con retorno
//La palabra clave 'return' permite que la función devuelva un valor al código que la llamó
function sumar(a, b) {
    return a + b; // Retorna la suma de dos números - la función termina aquí
}
//Llamada a la función y almacenamiento del resultado
//El valor retornado se puede asignar a una variable para uso posterior
let resultado = sumar(5, 3);
console.log("La suma es: " + resultado); // Salida: La suma es: 8

//Definición de una función con parámetros por defecto (ES6+)
//Si no se proporciona un valor para 'edad', automáticamente será 18
function saludarConEdad(nombre, edad = 18) {
    console.log("Hola, " + nombre + "! Tienes " + edad + " años."); // Usa el valor por defecto o el proporcionado
}
//Llamada a la función con un parámetro por defecto
saludarConEdad("Ana"); // Salida: Hola, Ana! Tienes 18 años. (usa el valor por defecto)
//Llamada a la función con ambos parámetros
saludarConEdad("Luis", 25); // Salida: Hola, Luis! Tienes 25 años. (sobrescribe el valor por defecto)

//Definición de una función anónima asignada a una variable
//Las funciones anónimas no tienen nombre y se asignan a variables para poder llamarlas
let multiplicar = function(x, y) {
    return x * y; // Retorna el producto de dos números
}
//Llamada a la función anónima a través de la variable
let producto = multiplicar(4, 6);
console.log("El producto es: " + producto); // Salida: El producto es: 24

//Definición de una función flecha (ES6+)
//Sintaxis más concisa: const nombre = (parámetros) => { código }
const dividir = (x, y) => {
    if (y === 0) {
        return "Error: División por cero"; // Validación para evitar errores matemáticos
    }
    return x / y; // Retorna el cociente de dos números
}

//Llamada a la función flecha
let cociente = dividir(10, 2);
console.log("El cociente es: " + cociente); // Salida: El cociente es: 5

//Llamada a funciones dentro de otras funciones (composición de funciones)
//Las funciones pueden llamar a otras funciones, creando código modular y reutilizable
function calcular() {
    let suma = sumar(10, 20); // Llama a la función sumar definida anteriormente
    let producto = multiplicar(5, 4); // Llama a la función anónima multiplicar
    console.log("Suma: " + suma + ", Producto: " + producto); // Muestra ambos resultados
}
calcular(); // Llama a la función calcular que ejecuta las otras dos funciones

//Funciones con parámetros rest (ES6+)
//El operador rest (...) permite recibir un número variable de argumentos como un array
function mostrarNumeros(...numeros) {
    console.log("Números recibidos: " + numeros.join(", ")); // Convierte el array a string separado por comas
}
mostrarNumeros(1, 2, 3, 4, 5); // Salida: Números recibidos: 1, 2, 3, 4, 5

//Funciones con parámetros rest y procesamiento avanzado
//Combina parámetros rest con métodos de array para procesamiento dinámico
function sumarTodos(...numeros) {
    // reduce() itera sobre el array sumando cada elemento al acumulador
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0); // 0 es el valor inicial
}
let total = sumarTodos(1, 2, 3, 4, 5);
console.log("Total de la suma: " + total); // Salida: Total de la suma: 15

//Funciones con retorno de múltiples valores usando un objeto
//JavaScript no soporta múltiples valores de retorno, pero se puede usar un objeto o array
function obtenerDatos() {
    return {
        nombre: "María",
        edad: 28,
        ciudad: "Barcelona"
    }; // Retorna un objeto con múltiples propiedades
}
let datos = obtenerDatos();
// Acceso a las propiedades del objeto retornado
console.log("Nombre: " + datos.nombre + ", Edad: " + datos.edad + ", Ciudad: " + datos.ciudad);

// Alternativa: destructuración del objeto retornado (ES6+)
// const { nombre, edad, ciudad } = obtenerDatos();
// console.log(`Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`);

