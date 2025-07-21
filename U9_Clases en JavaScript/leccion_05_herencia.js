// CLASE PADRE/BASE/SUPERCLASE: Define funcionalidad común
class Animal {
    // CONSTRUCTOR de la clase padre:
    constructor(name) {
        // ANÁLISIS DETALLADO:
        // - Acepta parámetro 'name' para inicializar la propiedad
        // - Esta propiedad será HEREDADA por todas las subclases
        // - El constructor padre se ejecuta ANTES que el de las subclases
        // - Simple pero fundamental para establecer estado base
        
        this.name = name;
        // CARACTERÍSTICAS de esta asignación:
        // - Crea propiedad 'name' en la instancia
        // - Será accesible desde subclases mediante 'this.name'
        // - Se hereda automáticamente sin necesidad de redefinir
        // - Establece el estado básico compartido
    }

    // MÉTODO DE LA CLASE PADRE: Comportamiento heredable
    hablar() {
        // ANÁLISIS DETALLADO del método heredado:
        // - PÚBLICO: Accesible desde subclases e instancias
        // - HEREDABLE: Disponible automáticamente en subclases
        // - SOBRESCRIBIBLE: Las subclases pueden redefinirlo (override)
        // - USA ESTADO HEREDADO: Accede a this.name desde subclases
        
        console.log(`${this.name} hace un sonido.`);
        
        // CONSIDERACIONES importantes:
        // - Template literals permiten usar this.name dinámicamente
        // - 'this' se refiere a la instancia específica que llama al método
        // - Cuando se llama desde subclase, 'this' es la instancia de la subclase
        // - Proporciona comportamiento genérico que puede especializarse
        
        // ALTERNATIVAS de implementación:
        // console.log(this.name + " hace un sonido."); // Concatenación tradicional
        // return `${this.name} hace un sonido.`; // Retornar en lugar de imprimir
    }
    
    // MÉTODOS ADICIONALES que podrían añadirse:
    /*
    dormir() {
        console.log(`${this.name} está durmiendo.`);
    }
    
    comer(comida) {
        console.log(`${this.name} está comiendo ${comida}.`);
    }
    
    obtenerInfo() {
        return {
            nombre: this.name,
            tipo: 'Animal genérico'
        };
    }
    */
}

// CLASE HIJA/DERIVADA/SUBCLASE: Extiende funcionalidad de la clase padre
class Perro extends Animal {
    // PALABRA CLAVE 'extends':
    // - Establece relación de herencia con Animal
    // - Perro "es un" Animal (relación is-a)
    // - Hereda TODAS las propiedades y métodos de Animal
    // - Puede agregar nuevas propiedades y métodos
    // - Puede sobrescribir métodos existentes
    
    // CONSTRUCTOR de la subclase:
    constructor(name, raza) {
        // PARÁMETROS:
        // - 'name': Heredado conceptualmente de Animal
        // - 'raza': Específico de Perro (nueva funcionalidad)
        
        // LLAMADA A SUPER: OBLIGATORIA en subclases con constructor
        super(name);
        // ANÁLISIS CRÍTICO de super():
        // - DEBE ser la PRIMERA línea del constructor de subclase
        // - Llama al constructor de la clase padre (Animal)
        // - Inicializa correctamente la parte "Animal" del objeto
        // - Establece this.name a través del constructor padre
        // - SIN super(), JavaScript lanza ReferenceError
        
        // ORDEN DE EJECUCIÓN:
        // 1. Se ejecuta Animal.constructor(name)
        // 2. Se establece this.name = name
        // 3. Se continúa con el resto del constructor Perro
        
        // NUEVA PROPIEDAD específica de Perro:
        this.raza = raza;
        // CARACTERÍSTICAS:
        // - Propiedad adicional que NO existe en Animal
        // - Extiende el estado del objeto con información específica
        // - Accesible solo en instancias de Perro (o sus subclases)
        // - Demuestra cómo las subclases pueden agregar funcionalidad
        
        // ESTADO FINAL del objeto:
        // - this.name (heredado de Animal)
        // - this.raza (específico de Perro)
        // - Acceso a hablar() (heredado de Animal)
        // - Acceso a ladra() (específico de Perro)
    }
    
    // MÉTODO ESPECÍFICO de la subclase:
    ladra() {
        // ANÁLISIS DETALLADO:
        // - Método NUEVO, no existe en Animal
        // - Específico del comportamiento de Perro
        // - Puede acceder a propiedades heredadas (this.name)
        // - Puede acceder a propiedades propias (this.raza)
        // - Extiende las capacidades más allá de la clase padre
        
        console.log(`${this.name} ladra muy fuerte.`);
        
        // ACCESO A ESTADO COMPLETO:
        // - this.name: Propiedad heredada de Animal
        // - this.raza: Propiedad específica de Perro
        // - Demuestra integración entre herencia y especialización
        
        // VERSIÓN MEJORADA que use más propiedades:
        // console.log(`${this.name} (${this.raza}) ladra muy fuerte.`);
    }
    
    // MÉTODOS ADICIONALES específicos de Perro:
    /*
    // Sobrescribir método heredado (override):
    hablar() {
        console.log(`${this.name} ladra: ¡Guau guau!`);
        // Especializa el comportamiento genérico de Animal
    }
    
    // Método que usa super para extender comportamiento:
    hablarEspecial() {
        super.hablar(); // Llama al método padre
        this.ladra();   // Añade comportamiento específico
    }
    
    // Método que usa todas las propiedades:
    obtenerInfo() {
        return {
            nombre: this.name,
            raza: this.raza,
            tipo: 'Perro'
        };
    }
    
    // Método estático específico:
    static esPerro(animal) {
        return animal instanceof Perro;
    }
    */
}

// INSTANCIACIÓN de la subclase:
let miPerro = new Perro("Rex", "Pastor Alemán");
// PROCESO INTERNO de creación:
// 1. Se crea objeto vacío para Perro
// 2. Se ejecuta Perro.constructor("Rex", "Pastor Alemán")
// 3. Dentro del constructor se llama super("Rex")
// 4. Se ejecuta Animal.constructor("Rex")
// 5. Se establece this.name = "Rex"
// 6. Se retorna el control a Perro.constructor
// 7. Se establece this.raza = "Pastor Alemán"
// 8. Se retorna el objeto completo

// VERIFICACIÓN DEL ESTADO FINAL:
console.log("Nombre:", miPerro.name);     // "Rex" (heredado)
console.log("Raza:", miPerro.raza);       // "Pastor Alemán" (específico)

// LLAMADA A MÉTODO HEREDADO:
miPerro.hablar(); // Rex hace un sonido.
// ANÁLISIS de la ejecución:
// - Se busca hablar() en Perro (no lo encuentra)
// - Se busca en la cadena de prototipos → Animal.prototype.hablar
// - Se ejecuta Animal.prototype.hablar con this = miPerro
// - 'this.name' resuelve a "Rex" de la instancia miPerro
// - Demuestra cómo la herencia proporciona funcionalidad automáticamente

// LLAMADA A MÉTODO ESPECÍFICO:
miPerro.ladra(); // Rex ladra muy fuerte.
// ANÁLISIS:
// - Método definido directamente en Perro
// - Acceso directo sin búsqueda en cadena de prototipos
// - Usa propiedad heredada (this.name) en comportamiento específico
// - Demuestra extensión de funcionalidad

// DEMOSTRACIONES ADICIONALES:

// Verificar relaciones de herencia:
console.log("miPerro instanceof Perro:", miPerro instanceof Perro);     // true
console.log("miPerro instanceof Animal:", miPerro instanceof Animal);   // true
console.log("miPerro instanceof Object:", miPerro instanceof Object);   // true

// Verificar cadena de prototipos:
console.log("Constructor de miPerro:", miPerro.constructor.name);        // "Perro"
console.log("Prototipo de Perro:", Object.getPrototypeOf(Perro.prototype)); // Animal.prototype

// Crear múltiples instancias para demostrar independencia:
const perro2 = new Perro("Luna", "Golden Retriever");
const animal1 = new Animal("Genérico");

console.log("=== Múltiples instancias ===");
miPerro.hablar();  // Rex hace un sonido.
perro2.hablar();   // Luna hace un sonido.
animal1.hablar();  // Genérico hace un sonido.

miPerro.ladra();   // Rex ladra muy fuerte.
perro2.ladra();    // Luna ladra muy fuerte.
// animal1.ladra(); // ❌ Error: animal1.ladra is not a function

// EJEMPLO DE HERENCIA MULTINIVEL:
class PerroPolicía extends Perro {
    constructor(name, raza, placa) {
        super(name, raza); // Llama a constructor de Perro
        this.placa = placa;
    }
    
    patrullar() {
        console.log(`${this.name} está patrullando con placa ${this.placa}.`);
    }
    
    // Sobrescribir método específico:
    ladra() {
        console.log(`${this.name} ladra en servicio: ¡ALTO!`);
    }
}

const policia = new PerroPolicía("Max", "Pastor Alemán", "K9-001");
policia.hablar();      // Max hace un sonido. (heredado de Animal)
policia.ladra();       // Max ladra en servicio: ¡ALTO! (sobrescrito)
policia.patrullar();   // Max está patrullando con placa K9-001. (específico)

// EJEMPLO DE OVERRIDE (sobrescritura):
class Gato extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    
    // Sobrescribir método heredado:
    hablar() {
        console.log(`${this.name} maúlla: ¡Miau!`);
        // Comportamiento específico que reemplaza al genérico
    }
    
    // Método que usa super para extender:
    hablarYRonronear() {
        super.hablar();  // Llama al método original de Animal
        console.log(`${this.name} también ronronea.`);
    }
}

const gato = new Gato("Whiskers", "negro");
gato.hablar();           // Whiskers maúlla: ¡Miau! (sobrescrito)
gato.hablarYRonronear(); // Whiskers hace un sonido. + Whiskers también ronronea.

// PATRONES COMUNES DE HERENCIA:

// Patrón 1: Especialización progresiva
class Vehículo {
    constructor(marca) {
        this.marca = marca;
    }
    
    arrancar() {
        console.log(`${this.marca} está arrancando.`);
    }
}

class Coche extends Vehículo {
    constructor(marca, puertas) {
        super(marca);
        this.puertas = puertas;
    }
    
    acelerar() {
        console.log(`${this.marca} está acelerando.`);
    }
}

class CocheEléctrico extends Coche {
    constructor(marca, puertas, batería) {
        super(marca, puertas);
        this.batería = batería;
    }
    
    cargar() {
        console.log(`${this.marca} está cargando la batería.`);
    }
}

// Patrón 2: Composición vs Herencia
class Motor {
    constructor(potencia) {
        this.potencia = potencia;
    }
    
    encender() {
        console.log(`Motor de ${this.potencia}hp encendido.`);
    }
}

class CocheConComposición {
    constructor(marca, motor) {
        this.marca = marca;
        this.motor = motor; // Composición: "tiene un" motor
    }
    
    arrancar() {
        this.motor.encender();
        console.log(`${this.marca} listo para conducir.`);
    }
}

// MEJORES PRÁCTICAS:

// ✅ Usar herencia cuando:
// - Existe una relación "es un" clara (Perro es un Animal)
// - Quieres reutilizar código de clase base
// - Las subclases son especializaciones naturales
// - Necesitas polimorfismo

// ✅ Usar composición cuando:
// - La relación es "tiene un" (Coche tiene un Motor)
// - Quieres mayor flexibilidad
// - Evitas jerarquías profundas
// - Los componentes pueden reutilizarse en otras clases

// ❌ Evitar herencia cuando:
// - La relación no es natural
// - Creas jerarquías demasiado profundas
// - Solo quieres reutilizar algunos métodos
// - La clase base puede cambiar frecuentemente

// CASOS DE ERROR COMUNES:

// Error 1: Olvidar super() en constructor
/*
class PerroError extends Animal {
    constructor(name, raza) {
        // super(name); // ❌ Falta esta línea
        this.raza = raza; // ReferenceError: Must call super constructor
    }
}
*/

// Error 2: Llamar super() después de usar this
/*
class PerroError2 extends Animal {
    constructor(name, raza) {
        this.raza = raza; // ❌ Error: this antes de super()
        super(name);
    }
}
*/

// Error 3: Intentar llamar métodos específicos en clase padre
/*
const animal = new Animal("Genérico");
// animal.ladra(); // ❌ TypeError: animal.ladra is not a function
*/

// VERIFICACIONES ÚTILES:

// Verificar si objeto es instancia de clase:
console.log("=== Verificaciones ===");
console.log("miPerro es Perro:", miPerro instanceof Perro);
console.log("miPerro es Animal:", miPerro instanceof Animal);
console.log("animal1 es Perro:", animal1 instanceof Perro);

// Verificar propiedades:
console.log("miPerro tiene name:", 'name' in miPerro);
console.log("miPerro tiene raza:", 'raza' in miPerro);
console.log("animal1 tiene raza:", 'raza' in animal1);

// Verificar métodos:
console.log("miPerro puede hablar:", typeof miPerro.hablar === 'function');
console.log("miPerro puede ladrar:", typeof miPerro.ladra === 'function');
console.log("animal1 puede ladrar:", typeof animal1.ladra === 'function');