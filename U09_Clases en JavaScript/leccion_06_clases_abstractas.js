//Clases abstractas en JavaScript
// - No se pueden instanciar directamente
// - Se definen métodos que deben ser implementados por las subclases
// - Permiten definir una interfaz común para diferentes implementaciones
// - Útiles para crear jerarquías de clases y evitar duplicación de código

class Animal {
    constructor(nombre) {
        // VERIFICACIÓN DE CLASE ABSTRACTA:
        if (this.constructor === Animal) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
        // ANÁLISIS DETALLADO:
        // - this.constructor: Referencia al constructor que creó la instancia
        // - === Animal: Verifica si se está intentando crear Animal directamente
        // - Si es true: Lanza error, impidiendo la creación
        // - Si es false: Permite la creación desde subclases (Perro, Gato)
        
        // CASOS PRÁCTICOS:
        // new Animal("Genérico") → ERROR ❌ (this.constructor === Animal)
        // new Perro("Rex", "Labrador") → OK ✅ (this.constructor === Perro)
        
        this.nombre = nombre;
        // PROPIEDAD COMPARTIDA:
        // - Todas las subclases heredarán esta propiedad
        // - Se inicializa una sola vez en la clase base
        // - Evita duplicación de código en cada subclase
    }

    // MÉTODO ABSTRACTO: Debe ser implementado por subclases
    hacerSonido() {
        throw new Error("Método 'hacerSonido' debe ser implementado por subclases");
        // PROPÓSITO del método abstracto:
        // - NO proporciona implementación real
        // - Actúa como CONTRATO: "Todas las subclases DEBEN implementar esto"
        // - Si una subclase NO lo implementa y se llama → Error
        // - Garantiza que todas las subclases tengan este método
        
        // FUNCIONAMIENTO:
        // - Si Perro NO implementa hacerSonido() y se llama → Error
        // - Si Perro SÍ implementa hacerSonido() → Ejecuta su versión
        // - Fuerza consistencia en la interfaz de todas las subclases
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        // LLAMADA AL CONSTRUCTOR PADRE:
        super(nombre);
        // ANÁLISIS de super():
        // - Ejecuta Animal.constructor(nombre)
        // - Incluye la verificación: this.constructor === Animal
        // - Como this.constructor es Perro (NO Animal), pasa la validación
        // - Establece this.nombre = "Rex"
        
        this.raza = raza;
        // PROPIEDAD ESPECÍFICA de Perro:
        // - Solo los perros tienen raza
        // - Extiende la funcionalidad base de Animal
        // - No interfiere con otras subclases
    }

    // IMPLEMENTACIÓN DEL MÉTODO ABSTRACTO:
    hacerSonido() {
        return `${this.nombre} dice: ¡Guau!`;
        // CUMPLIMIENTO DEL CONTRATO:
        // - Proporciona implementación REAL del método abstracto
        // - Reemplaza el error con comportamiento útil
        // - Usa la propiedad heredada this.nombre
        // - Comportamiento específico para Perro
        
        // RESULTADO:
        // - En lugar de error, retorna string útil
        // - Permite polimorfismo: mismo método, diferente comportamiento
    }
}   

class Gato extends Animal {
    constructor(nombre, color) {
        super(nombre);
        // MISMO PROCESO que Perro:
        // - Llama constructor de Animal
        // - Pasa validación de abstracción
        // - Inicializa this.nombre
        
        this.color = color;
        // PROPIEDAD DIFERENTE a Perro:
        // - Los gatos tienen color, los perros raza
        // - Cada subclase puede tener propiedades únicas
        // - Flexibilidad en el diseño
    }

    // IMPLEMENTACIÓN DIFERENTE del mismo método:
    hacerSonido() {
        return `${this.nombre} dice: ¡Miau!`;
        // POLIMORFISMO:
        // - MISMA INTERFAZ que Perro.hacerSonido()
        // - DIFERENTE IMPLEMENTACIÓN ("Miau" vs "Guau")
        // - Permite tratar Perro y Gato de forma uniforme
        // - Cada uno responde según su naturaleza
    }
}

// USO DE LAS CLASES:

// INSTANCIACIÓN CORRECTA de subclases:
const miPerro = new Perro("Rex", "Labrador");
// PROCESO INTERNO:
// 1. Se crea objeto vacío para Perro
// 2. Se ejecuta Perro.constructor("Rex", "Labrador")
// 3. Se llama super("Rex") → Animal.constructor("Rex")
// 4. Verificación: this.constructor es Perro ≠ Animal → Pasa ✅
// 5. Se establece this.nombre = "Rex"
// 6. Se establece this.raza = "Labrador"
// 7. Objeto completo: {nombre: "Rex", raza: "Labrador"}

console.log(miPerro.hacerSonido()); // Rex dice: ¡Guau!
// EJECUCIÓN:
// - Se busca hacerSonido en Perro → Lo encuentra
// - Se ejecuta Perro.hacerSonido()
// - Usa this.nombre ("Rex") en template literal
// - Retorna string específico de perro

const miGato = new Gato("Miau", "Gris");
// PROCESO SIMILAR a Perro:
// 1. Se crea objeto para Gato
// 2. super("Miau") → Animal.constructor
// 3. Verificación: this.constructor es Gato ≠ Animal → Pasa ✅
// 4. this.nombre = "Miau", this.color = "Gris"

console.log(miGato.hacerSonido()); // Miau dice: ¡Miau!
// POLIMORFISMO EN ACCIÓN:
// - MISMO método (hacerSonido)
// - DIFERENTE comportamiento ("Miau" vs "Guau")
// - Cada objeto responde según su tipo específico

// DEMOSTRACIÓN DEL ERROR de clase abstracta:
// Esto NO se puede hacer:
try {
    // const animal = new Animal("Genérico"); // ❌ Error
} catch (error) {
    console.log("Error:", error.message); // "No se puede instanciar una clase abstracta"
}

// DEMOSTRACIÓN DE POLIMORFISMO:
const animales = [miPerro, miGato];
// Array que contiene diferentes tipos, pero todos son Animal

animales.forEach(animal => {
    console.log(animal.hacerSonido());
    // RESULTADO:
    // Rex dice: ¡Guau!
    // Miau dice: ¡Miau!
    
    // ANÁLISIS:
    // - Mismo código (animal.hacerSonido())
    // - Diferentes resultados según el tipo real del objeto
    // - JavaScript determina automáticamente qué versión llamar
    // - No necesitamos saber si es Perro o Gato
});

// VERIFICACIONES ÚTILES:
console.log("miPerro es instancia de Animal:", miPerro instanceof Animal); // true
console.log("miPerro es instancia de Perro:", miPerro instanceof Perro);   // true
console.log("miGato es instancia de Animal:", miGato instanceof Animal);   // true
console.log("miGato es instancia de Gato:", miGato instanceof Gato);       // true

// ACCESO A PROPIEDADES ESPECÍFICAS:
console.log("Nombre del perro:", miPerro.nombre);  // "Rex" (heredado)
console.log("Raza del perro:", miPerro.raza);      // "Labrador" (específico)
console.log("Nombre del gato:", miGato.nombre);    // "Miau" (heredado)
console.log("Color del gato:", miGato.color);      // "Gris" (específico)

// EJEMPLO DE SUBCLASE QUE NO IMPLEMENTA EL MÉTODO:
/*
class Pajaro extends Animal {
    constructor(nombre, tipo) {
        super(nombre);
        this.tipo = tipo;
        // NO implementa hacerSonido()
    }
}

const miPajaro = new Pajaro("Tweety", "Canario");
// miPajaro.hacerSonido(); // ❌ Error: "Método 'hacerSonido' debe ser implementado por subclases"
*/

// VENTAJAS de este patrón:
// ✅ Garantiza que todas las subclases implementen métodos esenciales
// ✅ Previene instanciación accidental de la clase base
// ✅ Facilita el polimorfismo y código reutilizable
// ✅ Proporciona estructura común sin forzar implementación específica
// ✅ Detecta errores cuando falta implementación requerida

// CUÁNDO USAR clases abstractas:
// ✅ Múltiples clases comparten estructura básica
// ✅ Quieres garantizar implementación de métodos específicos
// ✅ Necesitas polimorfismo (tratar objetos diferentes de forma uniforme)
// ✅ Quieres evitar duplicación de código común
// ✅ Diseñas una jerarquía de clases relacionadas