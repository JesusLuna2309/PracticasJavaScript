//Clases Módulos en JavaScript
// INTRODUCCIÓN COMPLETA:
// - JavaScript ES6 introdujo clases como azúcar sintáctico sobre prototipos
// - Los módulos permiten organizar código en archivos separados
// - Combinación de clases + módulos = aplicaciones escalables y mantenibles
// - Definición de clases para encapsular datos y comportamiento
// - Uso de módulos para organizar el código en archivos separados
// - Mejores prácticas en el uso de clases y módulos
// - Ejemplos de herencia y polimorfismo
// - Implementación de clases abstractas y métodos estáticos
// - Uso de interfaces para definir contratos

// CLASE BÁSICA: Fundamento de encapsulación
class Persona {
    constructor(nombre, apellidos, edad) {
        // VALIDACIONES BÁSICAS que podrían añadirse:
        // if (!nombre || !apellidos) throw new Error("Nombre y apellidos son obligatorios");
        // if (typeof edad !== 'number' || edad < 0) throw new Error("Edad debe ser un número positivo");
        
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        // PROPIEDADES DE INSTANCIA:
        // - Cada objeto Persona tiene su propia copia de estas propiedades
        // - Accesibles mediante this.propiedad
        // - Modificables después de la creación
    }

    // MÉTODO UTILITARIO: Combina propiedades para crear valor derivado
    obtenerNombreCompleto() {
        return `${this.nombre} ${this.apellidos}`;
        // CARACTERÍSTICAS:
        // - No modifica estado del objeto (función pura)
        // - Siempre devuelve resultado actualizado
        // - Reutilizable en otros métodos
    }

    // MÉTODO CON EFECTO SECUNDARIO: Interactúa con el entorno
    saludar() {
        console.log(`Hola, me llamo ${this.obtenerNombreCompleto()} y tengo ${this.edad} años.`);
        // ANÁLISIS:
        // - Usa obtenerNombreCompleto() → Reutilización de código
        // - console.log() → Efecto secundario (salida por consola)
        // - Template literals para legibilidad
        // - Accede a múltiples propiedades del objeto
    }
}

// CLASE ABSTRACTA: No se puede instanciar directamente
class Animal {
    constructor(nombre) {
        // VERIFICACIÓN DE ABSTRACCIÓN: Previene instanciación directa
        if (this.constructor === Animal) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
        // ANÁLISIS DETALLADO:
        // - this.constructor: Referencia al constructor real usado para crear el objeto
        // - new Animal("Test") → this.constructor === Animal → Error ❌
        // - new Perro("Rex", "Labrador") → this.constructor === Perro → OK ✅
        // - Permite herencia pero previene uso directo
        
        this.nombre = nombre;
        // PROPIEDAD COMÚN:
        // - Compartida por todas las subclases
        // - Se inicializa una vez en la clase base
        // - Evita duplicación en subclases
    }

    // MÉTODO ABSTRACTO: Debe ser implementado por subclases
    hacerSonido() {
        throw new Error("Método 'hacerSonido' debe ser implementado por subclases");
        // PROPÓSITO DEL MÉTODO ABSTRACTO:
        // - Define CONTRATO: "Toda subclase DEBE implementar esto"
        // - NO proporciona implementación real
        // - Error si subclase no lo implementa y se llama
        // - Documenta interfaz esperada
        
        // CASOS DE USO:
        // - Perro implementa → Retorna "¡Guau!"
        // - Gato implementa → Retorna "¡Miau!"
        // - SubclaseIncompleta NO implementa → Error al llamar
    }
}

// SUBCLASE CONCRETA: Implementación específica de Animal
class Perro extends Animal {
    constructor(nombre, raza) {
        // LLAMADA AL CONSTRUCTOR PADRE: Obligatoria en subclases
        super(nombre);
        // ANÁLISIS DE super():
        // - Debe ser primera línea en constructor de subclase
        // - Ejecuta Animal.constructor(nombre)
        // - Incluye verificación de abstracción
        // - this.constructor es Perro ≠ Animal → Pasa validación
        // - Establece this.nombre correctamente
        
        this.raza = raza;
        // PROPIEDAD ESPECÍFICA:
        // - Solo los perros tienen raza
        // - Extiende funcionalidad base
        // - No interfiere con otras subclases
    }

    // IMPLEMENTACIÓN DEL MÉTODO ABSTRACTO:
    hacerSonido() {
        return `${this.nombre} dice: ¡Guau!`;
        // CUMPLIMIENTO DEL CONTRATO:
        // - Reemplaza error con implementación real
        // - Usa propiedad heredada (this.nombre)
        // - Comportamiento específico para Perro
        // - Retorna string en lugar de imprimir (más flexible)
    }

    // MÉTODO ESPECÍFICO DE PERRO:
    presentarse() {
        return `Soy un perro de raza ${this.raza} y me llamo ${this.nombre}.`;
        // CARACTERÍSTICAS:
        // - Funcionalidad única de Perro
        // - Usa tanto propiedad heredada (nombre) como específica (raza)
        // - No existe en Animal ni en Gato
        // - Demuestra especialización de subclases
    }
}

// SEGUNDA SUBCLASE: Diferente implementación de Animal
class Gato extends Animal {
    constructor(nombre, color) {
        super(nombre);
        // MISMO PATRÓN que Perro:
        // - Llama super() para inicialización base
        // - Pasa verificación de abstracción
        // - Hereda this.nombre
        
        this.color = color;
        // PROPIEDAD DIFERENTE a Perro:
        // - Los gatos tienen color, perros tienen raza
        // - Cada subclase puede especializarse diferente
        // - Demuestra flexibilidad del diseño
    }

    // IMPLEMENTACIÓN DIFERENTE del mismo método:
    hacerSonido() {
        return `${this.nombre} dice: ¡Miau!`;
        // POLIMORFISMO:
        // - MISMA INTERFAZ que Perro.hacerSonido()
        // - DIFERENTE COMPORTAMIENTO ("Miau" vs "Guau")
        // - Permite intercambiabilidad
        // - JavaScript determina automáticamente cuál llamar
    }

    // MÉTODO ESPECÍFICO DE GATO:
    presentarse() {
        return `Soy un gato de color ${this.color} y me llamo ${this.nombre}.`;
        // POLIMORFISMO EN MÉTODO ESPECÍFICO:
        // - MISMO NOMBRE que Perro.presentarse()
        // - DIFERENTE INFORMACIÓN (color vs raza)
        // - Comportamiento apropiado para cada tipo
        // - Permite tratar ambos uniformemente si es necesario
    }
}

// INTERFAZ SIMULADA: Define contrato sin implementación
class IAnimal {
    constructor() {
        // VERIFICACIÓN DE INTERFAZ: Similar a clase abstracta
        if (this.constructor === IAnimal) {
            throw new Error("No se puede instanciar una interfaz abstracta");
        }
        // DIFERENCIA CON Animal:
        // - NO tiene propiedades propias
        // - NO tiene constructor con parámetros
        // - Solo define métodos que deben implementarse
        // - Más "pura" como contrato
    }

    // MÉTODO DE INTERFAZ: Solo define signatura
    hacerSonido() {
        throw new Error("Método 'hacerSonido' debe ser implementado por subclases");
        // PROPÓSITO:
        // - Define QUÉ métodos debe tener una clase
        // - NO define CÓMO implementarlos
        // - Contrato más flexible que herencia
        // - Permite múltiples "interfaces" si fuera necesario
    }
}

// CLASE QUE IMPLEMENTA INTERFAZ: ⚠️ Ejemplo problemático
class AuthService extends IAnimal {
    constructor() {
        super();
        // PROBLEMA CONCEPTUAL:
        // - AuthService extiende IAnimal
        // - Un servicio de autenticación NO es un animal
        // - Viola principio "es un" de herencia
        // - Debería usar composición o interfaz diferente
        
        // DISEÑO CORRECTO sería:
        // class IAuthService { login(), logout() }
        // class AuthService extends IAuthService { ... }
    }

    // MÉTODOS DE AUTENTICACIÓN: No relacionados con Animal
    login(username, password) {
        // IMPLEMENTACIÓN BÁSICA de login:
        console.log(`Usuario ${username} ha iniciado sesión.`);
        // EN APLICACIÓN REAL:
        // - Validaría credenciales contra base de datos
        // - Generaría token de sesión
        // - Manejaría errores de autenticación
        // - Registraría evento en logs
    }

    logout() {
        // IMPLEMENTACIÓN BÁSICA de logout:
        console.log("Usuario ha cerrado sesión.");
        // EN APLICACIÓN REAL:
        // - Invalidaría token de sesión
        // - Limpiaría datos de usuario
        // - Notificaría al servidor
        // - Registraría evento en logs
    }
}

// PATRÓN FACTORY: Creación controlada de objetos
class PersonaFactory {
    // MÉTODO FACTORY DESDE STRING:
    static crearDesdeString(str) {
        // PROCESAMIENTO DE ENTRADA:
        const [nombre, apellidos, edad] = str.split(',').map(part => part.trim());
        // ANÁLISIS:
        // - split(',') → Divide string por comas
        // - map(part => part.trim()) → Elimina espacios en blanco
        // - Destructuring assignment → Asigna a variables
        
        // VALIDACIÓN DE ENTRADA:
        if (!nombre || !apellidos || isNaN(edad)) {
            throw new Error("Formato de string inválido");
        }
        // VERIFICACIONES:
        // - !nombre: String vacío o undefined
        // - !apellidos: String vacío o undefined  
        // - isNaN(edad): No es un número válido
        
        // CREACIÓN DE OBJETO:
        return new Persona(nombre, apellidos, parseInt(edad));
        // parseInt(edad) → Convierte string a número entero
        // new Persona() → Usa constructor normal
        // Retorna instancia válida o lanza error
    }

    // MÉTODO FACTORY DESDE OBJETO:
    static crearDesdeObjeto(obj) {
        // DESTRUCTURING: Extrae propiedades del objeto
        const { nombre, apellidos, edad } = obj;
        // VENTAJAS:
        // - Sintaxis clara y concisa
        // - Falla graciosamente si propiedades no existen
        // - Permite valores por defecto si es necesario
        
        // VALIDACIÓN SIMILAR a crearDesdeString:
        if (!nombre || !apellidos || isNaN(edad)) {
            throw new Error("Objeto inválido");
        }
        
        // CREACIÓN CON LIMPIEZA:
        return new Persona(nombre.trim(), apellidos.trim(), parseInt(edad));
        // .trim() → Elimina espacios extras en strings
        // parseInt(edad) → Asegura tipo number
        // Manejo defensivo de datos de entrada
    }
    
    // MÉTODOS ADICIONALES que podrían añadirse:
    /*
    static crearDesdeArray([nombre, apellidos, edad]) {
        return new Persona(nombre, apellidos, edad);
    }
    
    static crearVacio() {
        return new Persona("", "", 0);
    }
    
    static esValido(obj) {
        return obj instanceof Persona && 
               obj.nombre && 
               obj.apellidos && 
               typeof obj.edad === 'number';
    }
    */
}

// DEMOSTRACIÓN DE USO:

// INSTANCIACIÓN DIRECTA de subclases:
const miPerro = new Perro("Rex", "Labrador");
// PROCESO INTERNO:
// 1. Se crea objeto Perro vacío
// 2. Se ejecuta Perro.constructor("Rex", "Labrador")
// 3. super("Rex") → Animal.constructor("Rex")
// 4. Verificación: this.constructor es Perro ≠ Animal → OK
// 5. this.nombre = "Rex"
// 6. this.raza = "Labrador"
// 7. Objeto completo: {nombre: "Rex", raza: "Labrador"}

console.log(miPerro.hacerSonido()); // Rex dice: ¡Guau!
// EJECUCIÓN:
// - Busca hacerSonido en Perro → Lo encuentra
// - Ejecuta implementación específica de Perro
// - Usa this.nombre en template literal
// - Retorna string específico

console.log(miPerro.presentarse()); // Soy un perro de raza Labrador y me llamo Rex.
// MÉTODO ESPECÍFICO:
// - Solo existe en Perro, no en Animal
// - Usa tanto propiedad heredada como específica
// - Demuestra especialización de subclase

const miGato = new Gato("Misifu", "Gris");
// PROCESO IDÉNTICO a Perro pero con propiedades diferentes

console.log(miGato.hacerSonido()); // Misifu dice: ¡Miau!
// POLIMORFISMO:
// - MISMO método que Perro
// - DIFERENTE implementación
// - JavaScript resuelve automáticamente cuál usar

console.log(miGato.presentarse()); // Soy un gato de color Gris y me llamo Misifu.
// ESPECIALIZACIÓN:
// - Mismo nombre de método que Perro.presentarse()
// - Información específica de Gato (color vs raza)

// USO DEL PATRÓN FACTORY:
const personaDesdeString = PersonaFactory.crearDesdeString("Luis, García López, 28");
// PROCESO:
// 1. "Luis, García López, 28".split(',') → ["Luis", " García López", " 28"]
// 2. .map(part => part.trim()) → ["Luis", "García López", "28"]
// 3. Destructuring → nombre="Luis", apellidos="García López", edad="28"