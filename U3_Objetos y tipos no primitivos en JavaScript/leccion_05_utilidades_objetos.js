// Definimos un objeto llamado persona con tres propiedades
const persona = {
    nombre: "Natalia",
    edad: 30,
    profesion: "Desarrolladora"
};

// Object.keys() devuelve un arreglo con las claves (propiedades) del objeto
const claves = Object.keys(persona);
console.log("Claves del objeto persona:", claves); // ['nombre', 'edad', 'profesion']

// Object.values() devuelve un arreglo con los valores de las propiedades del objeto
const valores = Object.values(persona);
console.log("Valores del objeto persona:", valores); // ['Natalia', 30, 'Desarrolladora']

// Object.entries() devuelve un arreglo de pares [clave, valor] del objeto
const entradas = Object.entries(persona);
console.log("Entradas del objeto persona:", entradas); // [['nombre', 'Natalia'], ['edad', 30], ['profesion', 'Desarrolladora']]

// Object.assign() permite copiar las propiedades de un objeto a otro
// Aquí usamos el spread operator (...) para copiar persona en persona2
const persona2 = { ...persona };
console.log("Persona 2:", persona2); // { nombre: 'Natalia', edad: 30, profesion: 'Desarrolladora' }

// Object.freeze() previene cambios en el objeto (lo hace inmutable)
Object.freeze(persona2);
// Intentamos modificar una propiedad de persona2, pero no tendrá efecto porque está congelado
persona2.edad = 31; // No se modificará
console.log("Edad de persona 2 después de intentar modificar:", persona2.edad); // 30