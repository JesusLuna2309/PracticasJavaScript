// CLASE CON INICIALIZACIÓN VÍA CONSTRUCTOR
class Persona {
    // CONSTRUCTOR: Método que se ejecuta automáticamente al crear instancias
    constructor(nombre, edad) {
        // ANÁLISIS DETALLADO del constructor con propiedades calculadas:
        // - Recibe parámetros obligatorios para la creación del objeto
        // - Permite validación y procesamiento de datos durante la inicialización
        // - Puede realizar cálculos y transformaciones inmediatas
        // - Las propiedades se crean dinámicamente en tiempo de ejecución
        
        // PROPIEDADES BÁSICAS (asignación directa):
        this.nombre = nombre;
        this.edad = edad;
        
        // PROPIEDADES CALCULADAS/DERIVADAS:
        this.largoNombre = nombre.length;
        // ANÁLISIS de nombre.length:
        // - Calcula automáticamente el número de caracteres
        // - Se ejecuta UNA VEZ durante la construcción
        // - El valor queda almacenado, no se recalcula
        // - Útil para propiedades que se usan frecuentemente
        
        this.largoEdad = edad.toString().length;
        // ANÁLISIS de edad.toString().length:
        // - PASO 1: edad.toString() convierte número a string
        // - PASO 2: .length cuenta los caracteres del string resultante
        // - Ejemplo: 22 → "22" → 2 caracteres
        // - Ejemplo: 100 → "100" → 3 caracteres
        // - Almacena cuántos dígitos tiene la edad
        
        // VENTAJAS de propiedades calculadas en constructor:
        // ✅ Cálculo único en la creación (eficiencia)
        // ✅ Valores disponibles inmediatamente
        // ✅ No requiere llamadas a métodos posteriores
        // ✅ Datos coherentes desde el inicio
        
        // DESVENTAJAS:
        // ❌ Si cambian las propiedades base, no se actualizan automáticamente
        // ❌ Aumenta el tiempo de construcción del objeto
        // ❌ Usa más memoria (almacena datos derivados)
        
        // PROPIEDADES ADICIONALES que podrían añadirse:
        // this.fechaCreacion = new Date(); // Timestamp de creación
        // this.nombreMayusculas = nombre.toUpperCase(); // Versión en mayúsculas
        // this.iniciales = nombre.split(' ').map(n => n[0]).join('.'); // Iniciales
        // this.categoria = edad < 18 ? 'menor' : 'adulto'; // Categorización
    }

    // MÉTODO que utiliza las propiedades (básicas y calculadas):
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
        // Este método podría también usar las propiedades calculadas:
        // console.log(`Mi nombre tiene ${this.largoNombre} caracteres y mi edad ${this.largoEdad} dígitos.`);
    }
    
    // MÉTODOS ADICIONALES que aprovechen las propiedades calculadas:
    mostrarEstadisticas() {
        console.log(`Estadísticas de ${this.nombre}:`);
        console.log(`- Edad: ${this.edad} años (${this.largoEdad} dígitos)`);
        console.log(`- Nombre: "${this.nombre}" (${this.largoNombre} caracteres)`);
    }
    
    // Método que demuestra el problema de sincronización:
    cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
        // PROBLEMA: largoNombre queda desactualizado
        // SOLUCIÓN 1: Recalcular manualmente
        this.largoNombre = nuevoNombre.length;
        
        // SOLUCIÓN 2: Usar getter en lugar de propiedad calculada
        // get largoNombre() { return this.nombre.length; }
    }
}

// INSTANCIACIÓN Y PRUEBAS:
let persona1 = new Persona("Jesús", 22);

// VERIFICACIÓN DE PROPIEDADES BÁSICAS:
console.log(persona1.nombre); // "Jesús"
console.log(persona1.edad); // 22

// VERIFICACIÓN DE PROPIEDADES CALCULADAS:
console.log(persona1.largoNombre); // 5 (NO 6 como dice el comentario - ERROR)
// CORRECCIÓN: "Jesús" tiene 5 caracteres, no 6
// J-e-s-ú-s = 5 caracteres

console.log(persona1.largoEdad); // 2 (correcto: "22" tiene 2 caracteres)

persona1.saludar(); // "Hola, me llamo Jesús y tengo 22 años."

// SEGUNDA INSTANCIA para demostrar independencia:
let persona2 = new Persona("María", 30);
console.log(persona2.nombre); // "María"
console.log(persona2.edad); // 30
console.log(persona2.largoNombre); // 5 (NO 6 como dice el comentario - ERROR)
// CORRECCIÓN: "María" tiene 5 caracteres, no 6
// M-a-r-í-a = 5 caracteres

console.log(persona2.largoEdad); // 2 (correcto: "30" tiene 2 caracteres)
persona2.saludar(); // "Hola, me llamo María y tengo 30 años."

// DEMOSTRACIÓN del problema de sincronización:
console.log("=== Problema de sincronización ===");
console.log("Antes del cambio:");
console.log(`${persona1.nombre} - largo: ${persona1.largoNombre}`);

persona1.nombre = "Juan Carlos"; // Cambio directo
console.log("Después del cambio (SIN actualizar largoNombre):");
console.log(`${persona1.nombre} - largo: ${persona1.largoNombre}`); // Valor obsoleto!

// Corrección manual:
persona1.largoNombre = persona1.nombre.length;
console.log("Después de corregir manualmente:");
console.log(`${persona1.nombre} - largo: ${persona1.largoNombre}`); // Valor correcto

// CLASE CON DECLARACIÓN DIRECTA DE CAMPOS (SINTAXIS MODERNA)
class Automovil {
    // CAMPO DE CLASE (Class Field): Declaración directa de propiedades
    marca = undefined;
    // ANÁLISIS DETALLADO de campos de clase:
    // - Sintaxis introducida en ES2022 (relativamente nueva)
    // - Se declara DIRECTAMENTE en el cuerpo de la clase
    // - NO requiere constructor para propiedades simples
    // - Valor por defecto se asigna a TODAS las instancias
    // - Equivale a hacer this.marca = undefined en constructor
    
    // OTROS EJEMPLOS de campos de clase:
    // modelo = "Sin especificar";     // String por defecto
    // año = new Date().getFullYear(); // Año actual
    // activo = true;                  // Boolean por defecto
    // caracteristicas = [];           // Array vacío (¡CUIDADO con referencias!)
    // configuracion = {};             // Objeto vacío (¡CUIDADO con referencias!)
    
    // CAMPOS PRIVADOS (con #):
    // #numeroSerie = Math.random().toString(36); // Privado, no accesible desde fuera
    
    // CAMPOS ESTÁTICOS:
    // static totalAutomoviles = 0;    // Compartido entre todas las instancias
    
    // VENTAJAS de campos de clase:
    // ✅ Sintaxis más limpia y declarativa
    // ✅ Valores por defecto explícitos
    // ✅ No requiere constructor para casos simples
    // ✅ Soporte para campos privados (#)
    // ✅ Mejor legibilidad del código
    
    // DESVENTAJAS:
    // ❌ Sintaxis relativamente nueva (compatibilidad)
    // ❌ Menos flexibilidad que constructor
    // ❌ No permite validación durante asignación inicial
    // ❌ Cuidado con tipos de referencia (arrays, objetos)
}

// INSTANCIACIÓN sin constructor explícito:
const automovil = new Automovil();
// ANÁLISIS:
// - JavaScript crea un constructor vacío automáticamente
// - Los campos de clase se inicializan con sus valores por defecto
// - Cada instancia recibe su propia copia de las propiedades

// ACCESO Y MODIFICACIÓN de campos de clase:
console.log(automovil.marca); // undefined (valor por defecto)

// MODIFICACIÓN posterior:
automovil.marca = "Toyota";
console.log(automovil.marca); // "Toyota"

// COMPARACIÓN DETALLADA de ambos enfoques:

// ========================
// ENFOQUE 1: Constructor
// ========================
class ProductoConConstructor {
    constructor(nombre, precio) {
        // OBLIGATORIO: parámetros en la creación
        this.nombre = nombre;
        this.precio = precio;
        
        // Validaciones posibles:
        if (precio < 0) {
            throw new Error('El precio no puede ser negativo');
        }
        
        // Cálculos inmediatos:
        this.iva = precio * 0.21;
        this.precioFinal = precio + this.iva;
    }
}

// Uso: DEBE pasar parámetros
const producto1 = new ProductoConConstructor("Laptop", 1000);

// ========================
// ENFOQUE 2: Campos de clase
// ========================
class ProductoConCampos {
    nombre = "Producto sin nombre";
    precio = 0;
    
    // Método para validar después de la creación:
    setPrecio(nuevoPrecio) {
        if (nuevoPrecio < 0) {
            throw new Error('El precio no puede ser negativo');
        }
        this.precio = nuevoPrecio;
    }
    
    // Getter para cálculos dinámicos:
    get iva() {
        return this.precio * 0.21;
    }
    
    get precioFinal() {
        return this.precio + this.iva;
    }
}

// Uso: PUEDE crear sin parámetros y configurar después
const producto2 = new ProductoConCampos();
producto2.nombre = "Mouse";
producto2.setPrecio(25);

// ========================
// ENFOQUE HÍBRIDO (RECOMENDADO)
// ========================
class ProductoHibrido {
    // Campos con valores por defecto:
    activo = true;
    fechaCreacion = new Date();
    
    // Constructor para propiedades obligatorias:
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        
        if (precio < 0) {
            throw new Error('El precio no puede ser negativo');
        }
    }
    
    // Getters para cálculos dinámicos:
    get iva() {
        return this.precio * 0.21;
    }
}

// PROBLEMAS COMUNES con campos de clase:

// PROBLEMA 1: Referencias compartidas
class ProblemaReferencias {
    // ❌ INCORRECTO: Todas las instancias comparten el mismo array!
    // items = []; // Mismo array para todas las instancias
    
    // ✅ CORRECTO: Cada instancia tiene su propio array
    constructor() {
        this.items = []; // Nuevo array por instancia
    }
}

// PROBLEMA 2: Funciones como valores por defecto
class ProblemaFunciones {
    // ❌ INCORRECTO: Se ejecuta solo una vez
    // timestamp = Date.now(); // Mismo timestamp para todas las instancias
    
    // ✅ CORRECTO: Se ejecuta en cada instancia
    constructor() {
        this.timestamp = Date.now(); // Timestamp único por instancia
    }
    
    // O usando getter:
    get timestampActual() {
        return Date.now(); // Siempre actualizado
    }
}

// CASOS DE USO RECOMENDADOS:

// ✅ Usar CONSTRUCTOR cuando:
// - Necesitas parámetros obligatorios
// - Requieres validación inicial
// - Realizas cálculos complejos
// - Trabajas con datos relacionados
// - Necesitas compatibilidad con versiones antiguas

// ✅ Usar CAMPOS DE CLASE cuando:
// - Propiedades simples con valores por defecto
// - Estados booleanos o números básicos
// - Configuraciones opcionales
// - Trabajas en entornos modernos
// - Quieres código más declarativo

// ✅ Usar ENFOQUE HÍBRIDO cuando:
// - Combinas propiedades obligatorias y opcionales
// - Necesitas flexibilidad máxima
// - Trabajas en proyectos grandes
// - Requieres tanto valores por defecto como validación

// EJEMPLO PRÁCTICO combinando ambos enfoques:
class Usuario {
    // Campos de clase para valores por defecto:
    activo = true;
    rol = 'usuario';
    configuracion = null; // Se inicializará en constructor
    
    // Constructor para datos obligatorios:
    constructor(email, nombre) {
        if (!email || !email.includes('@')) {
            throw new Error('Email inválido');
        }
        
        this.email = email;
        this.nombre = nombre;
        this.configuracion = {}; // Nuevo objeto por instancia
        this.fechaRegistro = new Date();
    }
    
    // Getters para propiedades calculadas:
    get nombreCompleto() {
        return this.nombre;
    }
    
    get estaActivo() {
        return this.activo;
    }
}