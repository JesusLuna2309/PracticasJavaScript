//Recorriendo objetos y arrays con bucles for...in
// El bucle for...in se utiliza para iterar sobre las propiedades enumerables de un objeto.
// IMPORTANTE: Solo accede a propiedades que tienen enumerable: true

// Creamos dos objetos separados para demostrar la combinación
const persona1 = { nombre: "Ana", edad: 25, ciudad: "Barcelona" };
const persona2 = { profesion: "Arquitecta", pais: "España" };

// El operador spread (...) crea un NUEVO objeto copiando todas las propiedades
// NO modifica los objetos originales (inmutabilidad)
// Si hubiera propiedades con el mismo nombre, las del segundo objeto sobrescribirían las del primero
const personaCompleta = { ...persona1, ...persona2 };
console.log("Persona completa:", personaCompleta); 
// Resultado: {nombre: "Ana", edad: 25, ciudad: "Barcelona", profesion: "Arquitecta", pais: "España"}

// BUCLE FOR...IN CON OBJETOS
// La variable 'clave' toma el NOMBRE de cada propiedad (no el valor)
// En cada iteración: clave = "nombre", luego "edad", luego "ciudad", etc.
for (let clave in personaCompleta) {
    // personaCompleta[clave] usa notación de corchetes para acceder al valor
    // Es equivalente a: personaCompleta.nombre, personaCompleta.edad, etc.
    // Pero con notación de corchetes podemos usar variables como índice
    console.log(clave + ": " + personaCompleta[clave]);
    // Imprime: nombre: Ana, edad: 25, ciudad: Barcelona, profesion: Arquitecta, pais: España
}

// BUCLE FOR...IN CON ARRAYS
// IMPORTANTE: Con arrays, for...in itera sobre los ÍNDICES, no los valores
// Los índices se devuelven como STRINGS ("0", "1", "2"), no números
const frutas = ["manzana", "banana", "naranja"];
for (let indice in frutas) {
    // 'indice' contendrá "0", "1", "2" (como strings)
    // frutas[indice] accede al valor en esa posición
    console.log("Fruta en el índice " + indice + ": " + frutas[indice]);
    // Imprime: Fruta en el índice 0: manzana, Fruta en el índice 1: banana, etc.
}
// NOTA: Para arrays es mejor usar for...of o forEach() en lugar de for...in

// EJEMPLO BÁSICO CON OTRO OBJETO
// Demuestra el patrón básico: clave -> valor
const coche = { marca: "Toyota", modelo: "Corolla", año: 2020 };
for (let propiedad in coche) {
    // 'propiedad' es el nombre de la propiedad (marca, modelo, año)
    // coche[propiedad] es el valor correspondiente
    console.log(propiedad + ": " + coche[propiedad]);
    // Imprime: marca: Toyota, modelo: Corolla, año: 2020
}   

// FOR...IN CON STRINGS
// Los strings son tratados como objetos "array-like"
// Cada carácter tiene un índice numérico
const mensaje = "Hola";
for (let indice in mensaje) {
    // 'indice' será "0", "1", "2", "3" (strings)
    // mensaje[indice] accede al carácter en esa posición
    console.log("Carácter en el índice " + indice + ": " + mensaje[indice]);
    // Imprime: Carácter en el índice 0: H, Carácter en el índice 1: o, etc.
}

// BUCLE FOR...IN CON OBJETOS ANIDADOS
// Demuestra cómo manejar estructuras de datos complejas
const usuario = {
    nombre: "Carlos",           // Propiedad simple (string)
    detalles: {                 // Propiedad compleja (objeto)
        edad: 28,
        ciudad: "Madrid"
    }
};

for (let clave in usuario) {
    // typeof determina el tipo de dato de la propiedad
    if (typeof usuario[clave] === "object") {
        // Si es un objeto, necesitamos un bucle anidado para acceder a sus propiedades
        console.log("Explorando objeto anidado: " + clave);
        for (let subClave in usuario[clave]) {
            // Acceso a propiedades anidadas: usuario["detalles"]["edad"]
            console.log(clave + " - " + subClave + ": " + usuario[clave][subClave]);
            // Imprime: detalles - edad: 28, detalles - ciudad: Madrid
        }
    } else {
        // Si es una propiedad simple, la mostramos directamente
        console.log(clave + ": " + usuario[clave]);
        // Imprime: nombre: Carlos
    }
}

// BUCLE FOR...IN CON ARRAY DE OBJETOS
// Patrón muy común en aplicaciones reales (listas de usuarios, productos, etc.)
const estudiantes = [
    { nombre: "Laura", edad: 22 },    // Índice 0
    { nombre: "Pedro", edad: 24 },    // Índice 1
    { nombre: "Sofía", edad: 21 }     // Índice 2
];

for (let indice in estudiantes) {
    // 'indice' será "0", "1", "2"
    // estudiantes[indice] nos da el objeto completo en esa posición
    // estudiantes[indice].nombre accede a la propiedad 'nombre' de ese objeto
    console.log("Estudiante " + indice + ": " + estudiantes[indice].nombre + ", Edad: " + estudiantes[indice].edad);
    // Imprime: Estudiante 0: Laura, Edad: 22, etc.
}

// EJEMPLO CON PROPIEDADES DINÁMICAS
// Útil para configuraciones que pueden cambiar en tiempo de ejecución
const configuracion = {
    tema: "oscuro",              // boolean convertido a string al mostrar
    idioma: "español",           // string
    notificaciones: true         // boolean
};

for (let clave in configuracion) {
    // Este patrón es útil para mostrar todas las configuraciones sin saber de antemano cuáles existen
    console.log("Configuración - " + clave + ": " + configuracion[clave]);
    // Imprime: Configuración - tema: oscuro, Configuración - idioma: español, etc.
}

// CONSIDERACIONES IMPORTANTES:
// 1. for...in incluye propiedades heredadas del prototipo
// 2. El orden de iteración no está garantizado (aunque suele ser predecible)
// 3. Solo itera sobre propiedades enumerables
// 4. Para arrays, considera usar for...of, forEach(), o for tradicional
// 5. Para verificar propiedades propias, usa Object.hasOwnProperty()