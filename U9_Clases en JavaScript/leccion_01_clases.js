class Persona {
    // CONSTRUCTOR: Método especial que se ejecuta al crear una instancia
    constructor(nombre, apellidos, edad) {
        // ANÁLISIS DETALLADO del constructor:
        // - Se ejecuta AUTOMÁTICAMENTE al usar 'new'
        // - Recibe parámetros para inicializar la instancia
        // - 'this' hace referencia a la instancia que se está creando
        // - Cada instancia tendrá sus propias propiedades independientes
        // - Si no se define constructor, JavaScript crea uno vacío automáticamente
        
        this.nombre = nombre;        // Propiedad pública (accesible desde fuera)
        this.apellidos = apellidos;  // Asignación directa del parámetro a la propiedad
        this.edad = edad;           // 'this.edad' es la propiedad, 'edad' es el parámetro
        
        // CARACTERÍSTICAS IMPORTANTES:
        // - Las propiedades se crean dinámicamente (no need de declaración previa)
        // - Son públicas por defecto (accesibles desde fuera de la clase)
        // - JavaScript no tiene tipado, acepta cualquier tipo de dato
        // - No hay validación automática de parámetros
    }

    // MÉTODO DE INSTANCIA: Función que pertenece a cada objeto creado
    obtenerNombreCompleto() {
        // ANÁLISIS DETALLADO del método:
        // - Se define sin 'function' keyword (sintaxis ES6)
        // - 'this' se refiere a la instancia específica que llama al método
        // - Puede acceder a todas las propiedades de la instancia
        // - Retorna un valor (string en este caso)
        // - Usa template literals (backticks) para concatenación
        
        return `${this.nombre} ${this.apellidos}`;
        
        // ALTERNATIVAS de implementación:
        // return this.nombre + " " + this.apellidos;  // Concatenación tradicional
        // return [this.nombre, this.apellidos].join(" ");  // Con array.join()
    }

    // MÉTODO QUE USA OTRO MÉTODO: Demostración de reutilización de código
    saludar() {
        // ANÁLISIS DETALLADO:
        // - Utiliza otro método de la misma clase (this.obtenerNombreCompleto())
        // - Demuestra encapsulación y reutilización de código
        // - Combina datos (propiedades) con comportamiento (métodos)
        // - Usa console.log() para efectos secundarios (no retorna valor)
        
        console.log(`Hola, me llamo ${this.obtenerNombreCompleto()} y tengo ${this.edad} años.`);
        
        // MEJORAS POSIBLES:
        // - Podría retornar el string en lugar de imprimirlo
        // - Podría aceptar parámetros para personalizar el saludo
        // - Podría validar que los datos existan antes de mostrarlos
    }
    
    // MÉTODOS ADICIONALES que podrían añadirse:
    
    // Método para validar edad:
    esMayorDeEdad() {
        return this.edad >= 18;
    }
    
    // Método para actualizar edad:
    cumplirAños() {
        this.edad++;
        console.log(`¡Feliz cumpleaños! Ahora tienes ${this.edad} años.`);
    }
    
    // Método estático (pertenece a la clase, no a instancias):
    static compararEdades(persona1, persona2) {
        return persona1.edad - persona2.edad;
    }
    
    // Getter (propiedad calculada):
    get iniciales() {
        return `${this.nombre[0]}.${this.apellidos.split(' ').map(a => a[0]).join('.')}.`;
    }
    
    // Setter (validación al asignar):
    set edad(nuevaEdad) {
        if (nuevaEdad >= 0 && nuevaEdad <= 150) {
            this._edad = nuevaEdad;
        } else {
            throw new Error('Edad debe estar entre 0 y 150 años');
        }
    }
    
    get edad() {
        return this._edad;
    }
}

// INSTANCIACIÓN: Creación de objetos a partir de la clase
let persona1 = new Persona("Jesús", "Luna Romero", 22);
// ANÁLISIS DETALLADO de la instanciación:
// - 'new' es OBLIGATORIO para crear instancias
// - Ejecuta el constructor automáticamente
// - Crea un nuevo objeto con las propiedades especificadas
// - El objeto hereda todos los métodos de la clase
// - Cada instancia es independiente de las demás

// ACCESO A PROPIEDADES: Notación de punto
console.log(persona1.nombre); // "Jesús"
// CARACTERÍSTICAS:
// - Acceso directo a propiedades públicas
// - JavaScript no tiene private por defecto (aunque ES2022 añadió # para private)
// - Las propiedades pueden ser modificadas desde fuera: persona1.nombre = "Otro"

console.log(persona1.apellidos); // "Luna Romero"

// INVOCACIÓN DE MÉTODOS: Notación de punto + paréntesis
console.log(persona1.obtenerNombreCompleto()); // "Jesús Luna Romero"
// ANÁLISIS:
// - Los paréntesis son OBLIGATORIOS para ejecutar el método
// - El método puede recibir parámetros entre los paréntesis
// - 'this' dentro del método se refiere a persona1

persona1.saludar(); // "Hola, me llamo Jesús Luna Romero y tengo 22 años."

// SEGUNDA INSTANCIA: Demostración de independencia entre objetos
let persona2 = new Persona("María", "Gómez Pérez", 30);
// IMPORTANTE: persona2 es completamente independiente de persona1
// - Tienen las mismas propiedades y métodos (misma clase)
// - Pero con valores diferentes y memoria separada

console.log(persona2.nombre); // "María"
console.log(persona2.apellidos); // "Gómez Pérez"
console.log(persona2.obtenerNombreCompleto()); // "María Gómez Pérez"
persona2.saludar(); // "Hola, me llamo María Gómez Pérez y tengo 30 años."

// VERIFICACIONES ADICIONALES:

// Verificar el tipo de las instancias:
console.log("persona1 es instancia de Persona:", persona1 instanceof Persona); // true
console.log("Tipo de persona1:", typeof persona1); // "object"
console.log("Constructor de persona1:", persona1.constructor.name); // "Persona"

// Verificar independencia entre instancias:
console.log("persona1 === persona2:", persona1 === persona2); // false (objetos diferentes)

// Modificar una instancia no afecta a la otra:
persona1.nombre = "Juan Carlos";
console.log("Después del cambio:");
console.log("persona1.nombre:", persona1.nombre); // "Juan Carlos"
console.log("persona2.nombre:", persona2.nombre); // "María" (sin cambios)

// COMPARACIÓN CON SINTAXIS PRE-ES6 (Función constructora):
/*
function PersonaOld(nombre, apellidos, edad) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
}

PersonaOld.prototype.obtenerNombreCompleto = function() {
    return this.nombre + " " + this.apellidos;
};

PersonaOld.prototype.saludar = function() {
    console.log("Hola, me llamo " + this.obtenerNombreCompleto() + " y tengo " + this.edad + " años.");
};

var personaVieja = new PersonaOld("Ana", "Martínez", 25);
*/

// VENTAJAS DE LA SINTAXIS DE CLASES ES6:
// ✅ Más clara y legible
// ✅ Sintaxis familiar para developers de otros lenguajes
// ✅ Mejor organización del código
// ✅ Soporte nativo para herencia con 'extends'
// ✅ Métodos estáticos más claros
// ✅ Getters y setters más simples

// LIMITACIONES Y CONSIDERACIONES:
// ⚠️ Las clases son "syntax sugar" sobre prototipos
// ⚠️ Las propiedades son públicas por defecto (hasta ES2022)
// ⚠️ No hay sobrecarga de constructores nativa
// ⚠️ No hay interfaces como en lenguajes tipados
// ⚠️ 'this' puede cambiar según el contexto de llamada

// EJEMPLOS DE PROBLEMAS COMUNES:

// Problema con el contexto de 'this':
const metodoDescontextualizado = persona1.saludar;
// metodoDescontextualizado(); // Error: 'this' será undefined o window

// Solución: bind, call, apply, o arrow functions
const metodoConContexto = persona1.saludar.bind(persona1);
metodoConContexto(); // Funciona correctamente

// PATRONES DE USO COMUNES:

// Factory pattern con clases:
class PersonaFactory {
    static crearDesdeString(datosString) {
        const [nombre, apellidos, edad] = datosString.split(',');
        return new Persona(nombre.trim(), apellidos.trim(), parseInt(edad.trim()));
    }
    
    static crearPersonaDefault() {
        return new Persona("Nombre", "Apellidos", 0);
    }
}

// Uso del factory:
const personaDesdeString = PersonaFactory.crearDesdeString("Luis, García López, 28");
console.log("Persona desde string:", personaDesdeString.obtenerNombreCompleto());

// MEJORES PRÁCTICAS:

// 1. Validación en el constructor:
class PersonaMejorada {
    constructor(nombre, apellidos, edad) {
        if (!nombre || typeof nombre !== 'string') {
            throw new Error('Nombre debe ser un string válido');
        }
        if (!apellidos || typeof apellidos !== 'string') {
            throw new Error('Apellidos debe ser un string válido');
        }
        if (typeof edad !== 'number' || edad < 0) {
            throw new Error('Edad debe ser un número positivo');
        }
        
        this.nombre = nombre.trim();
        this.apellidos = apellidos.trim();
        this.edad = edad;
    }
    
    // 2. Métodos que retornan valores en lugar de efectos secundarios:
    obtenerSaludo() {
        return `Hola, me llamo ${this.obtenerNombreCompleto()} y tengo ${this.edad} años.`;
    }
    
    // 3. Métodos chainable (que retornan this):
    actualizarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
        return this; // Permite encadenar: persona.actualizarNombre("Luis").saludar()
    }
    
    // 4. Métodos de comparación:
    equals(otraPersona) {
        return this.nombre === otraPersona.nombre && 
               this.apellidos === otraPersona.apellidos &&
               this.edad === otraPersona.edad;
    }
    
    // 5. Método toString() para representación string:
    toString() {
        return `Persona(${this.obtenerNombreCompleto()}, ${this.edad} años)`;
    }
}

// CASOS DE USO RECOMENDADOS:

// ✅ Usar clases cuando:
// - Necesitas crear múltiples objetos similares
// - Tienes datos y comportamientos relacionados
// - Quieres encapsular funcionalidad
// - Planeas usar herencia
// - El código será mantenido por un equipo

// ❌ Evitar clases cuando:
// - Solo necesitas un objeto (usar object literal)
// - La funcionalidad es muy simple
// - Prefieres programación funcional
// - No hay estado compartido entre métodos