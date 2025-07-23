//Objetos JavaScript

// Un objeto es una colección de propiedades y métodos
// Las propiedades son valores asociados a un objeto
let persona = {
    nombre: "Juan", // Propiedad nombre
    edad: 30, // Propiedad edad
    saludar: function() { // Método saludar
        console.log("Hola, mi nombre es " + this.nombre);
    }
};

// Acceso a propiedades
console.log("Nombre:", persona.nombre); // Salida: Nombre: Juan
console.log("Edad:", persona.edad); // Salida: Edad: 30

// Llamada a un método
persona.saludar(); // Salida: Hola, mi nombre es Juan

// Modificación de propiedades
persona.edad = 31; // Cambiamos la edad 
console.log("Nueva edad:", persona.edad); // Salida: Nueva edad: 31

// Añadir una nueva propiedad
persona.ocupacion = "Desarrollador"; // Añadimos una nueva propiedad
console.log("Ocupación:", persona.ocupacion); // Salida: Ocupación: Desarrollador

// Eliminar una propiedad
delete persona.ocupacion; // Eliminamos la propiedad ocupacion

//Objetos anidados
let coche = {
    marca: "Toyota", // Propiedad marca
    modelo: "Corolla", // Propiedad modelo
    año: 2020, // Propiedad año
    especificaciones: { // Objeto anidado especificaciones
        color: "Rojo", // Propiedad color
        transmision: "Automática", // Propiedad transmision
        motor: "1.8L" // Propiedad motor
    },
    detalles: function() { // Método detalles
        console.log("Coche: " + this.marca + " " + this.modelo + ", Año: " + this.año +
            ", Color: " + this.especificaciones.color +
            ", Transmisión: " + this.especificaciones.transmision +
            ", Motor: " + this.especificaciones.motor   );
    }
};
// Acceso a propiedades anidadas
console.log("Marca del coche:", coche.marca); // Salida: Marca del coche: Toyota
coche.detalles(); // Salida: Coche: Toyota Corolla, Año: 2020, Color: Rojo, Transmisión: Automática, Motor: 1.8L   
 
// Modificación de una propiedad anidada
coche.especificaciones.color = "Azul"; // Cambiamos el color del coche
coche.detalles(); // Salida: Coche: Toyota Corolla, Año: 2020, Color: Azul, Transmisión: Automática, Motor: 1.8L
