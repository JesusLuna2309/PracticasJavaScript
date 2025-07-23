class Persona {
    // PROPIEDAD ESTÁTICA: Pertenece a la CLASE, no a las instancias
    static especie = "Homo Sapiens Sapiens";
    // ANÁLISIS DETALLADO de propiedades estáticas:
    // - Se declara con la palabra clave 'static'
    // - Pertenece a la CLASE en sí, no a objetos individuales
    // - Se accede con ClassName.property (Persona.especie)
    // - NO se puede acceder desde instancias (persona.especie = undefined)
    // - Compartida por TODAS las instancias de la clase
    // - Útil para constantes, contadores, configuraciones globales
    // - Se almacena UNA SOLA VEZ en memoria, independientemente del número de instancias
    
    // USOS COMUNES de propiedades estáticas:
    // - Constantes de clase: static PI = 3.14159
    // - Contadores globales: static totalInstancias = 0
    // - Configuraciones: static configuracionPorDefecto = {}
    // - Metadatos: static version = "1.0.0"
    
    constructor(nombreParametro, apellidoParametro){
        // PARÁMETROS con nombres descriptivos:
        // - nombreParametro: Parámetro de entrada
        // - this.nombre: Propiedad del objeto
        // Esta distinción evita confusión entre parámetros y propiedades
        
        // ASIGNACIÓN DIRECTA de propiedades básicas:
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        
        // PROPIEDAD CALCULADA/DERIVADA en constructor:
        this.largoNombreCompleto = this.nombre.length + this.apellido.length;
        // ANÁLISIS DETALLADO:
        // - Se calcula UNA VEZ durante la construcción
        // - Suma la longitud del nombre + longitud del apellido
        // - El valor queda ALMACENADO, no se recalcula
        // - Acceso rápido posterior (no requiere cálculo)
        
        // VENTAJAS de calcular en constructor:
        // ✅ Eficiencia: Cálculo único
        // ✅ Disponibilidad inmediata
        // ✅ No depende de llamadas a métodos
        
        // DESVENTAJAS:
        // ❌ Sincronización: Si cambia nombre/apellido, no se actualiza automáticamente
        // ❌ Memoria: Almacena datos que podrían calcularse sobre la marcha
        
        // ALTERNATIVAS para propiedades calculadas:
        
        // Opción 1: Getter (se calcula cada vez que se accede)
        // get largoNombreCompleto() {
        //     return this.nombre.length + this.apellido.length;
        // }
        
        // Opción 2: Método que retorna el cálculo
        // calcularLargoNombreCompleto() {
        //     return this.nombre.length + this.apellido.length;
        // }
        
        // PROPIEDADES ADICIONALES que podrían añadirse:
        // this.fechaCreacion = new Date(); // Timestamp de creación
        // this.id = Math.random().toString(36); // ID único
        // this.iniciales = nombreParametro[0] + apellidoParametro[0]; // Iniciales
        
        // INCREMENTAR contador estático (si existiera):
        // Persona.totalInstancias++; // Contar instancias creadas
    }

    // MÉTODO DE INSTANCIA: Pertenece a cada objeto individual
    obtenerNombreCompleto(){
        // ANÁLISIS DETALLADO del método:
        // - Se ejecuta CADA VEZ que se llama
        // - Genera el resultado dinámicamente
        // - Siempre actualizado (refleja valores actuales)
        // - Usa template literals para concatenación
        
        return `${this.nombre} ${this.apellido}`;
        
        // COMPARACIÓN con propiedad calculada:
        // - Método: Siempre actualizado, requiere llamada
        // - Propiedad: Rápido acceso, puede estar desactualizada
        
        // ALTERNATIVAS de implementación:
        // return this.nombre + " " + this.apellido; // Concatenación tradicional
        // return [this.nombre, this.apellido].join(" "); // Usando join()
        // return `${this.nombre} ${this.apellido}`.trim(); // Con trim() por seguridad
    }
    
    // MÉTODOS ADICIONALES que complementarían la clase:
    
    // Método para actualizar propiedades y recalcular derivadas:
    actualizarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
        // Recalcular propiedad derivada:
        this.largoNombreCompleto = this.nombre.length + this.apellido.length;
        return this; // Permite method chaining
    }
    
    actualizarApellido(nuevoApellido) {
        this.apellido = nuevoApellido;
        this.largoNombreCompleto = this.nombre.length + this.apellido.length;
        return this;
    }
    
    // Getter alternativo para largo del nombre completo:
    get largoNombreCompletoActualizado() {
        return this.nombre.length + this.apellido.length;
    }
    
    // Método estático para acceder a información de clase:
    static obtenerEspecie() {
        return Persona.especie;
    }
    
    // Método estático factory:
    static crearDesdeNombreCompleto(nombreCompleto) {
        const partes = nombreCompleto.split(' ');
        const nombre = partes[0] || '';
        const apellido = partes.slice(1).join(' ') || '';
        return new Persona(nombre, apellido);
    }
    
    // Método de comparación:
    equals(otraPersona) {
        return this.nombre === otraPersona.nombre && 
               this.apellido === otraPersona.apellido;
    }
    
    // Método toString personalizado:
    toString() {
        return `Persona: ${this.obtenerNombreCompleto()}`;
    }
}

// INSTANCIACIÓN: Creación de objeto específico
let persona = new Persona("Juan", "Pérez");
// ANÁLISIS del proceso de instanciación:
// 1. Se crea un nuevo objeto vacío
// 2. Se ejecuta el constructor con los parámetros
// 3. Se asignan las propiedades al objeto
// 4. Se calcula largoNombreCompleto
// 5. Se retorna el objeto completo

// ACCESO A PROPIEDADES DE INSTANCIA:
console.log(persona.nombre);
// RESULTADO: "Juan"
// - Acceso directo a propiedad pública
// - Valor asignado durante la construcción

console.log(persona.apellido);
// RESULTADO: "Pérez"
// - Misma mecánica que la propiedad nombre

console.log(persona.largoNombreCompleto);
// RESULTADO: 9 (Juan=4 + Pérez=5)
// - Propiedad calculada almacenada
// - Refleja el cálculo realizado en el constructor

// ACCESO A PROPIEDAD ESTÁTICA:
console.log(Persona.especie);
// RESULTADO: "Homo Sapiens Sapiens"
// ANÁLISIS CRÍTICO:
// - Se accede desde la CLASE, no desde la instancia
// - persona.especie sería undefined
// - Misma valor para todas las instancias presentes y futuras

// INVOCACIÓN DE MÉTODO DE INSTANCIA:
console.log(persona.obtenerNombreCompleto());
// RESULTADO: "Juan Pérez"
// - Método se ejecuta sobre la instancia específica
// - Accede a propiedades de ESTA instancia
// - Genera resultado dinámicamente

// DEMOSTRACIONES ADICIONALES:

// Verificar que la propiedad estática NO es accesible desde instancias:
console.log("Propiedad estática desde instancia:", persona.especie); // undefined

// Verificar que es accesible desde la clase:
console.log("Propiedad estática desde clase:", Persona.especie); // "Homo Sapiens Sapiens"

// Crear múltiples instancias para demostrar independencia:
const persona2 = new Persona("María", "García");
const persona3 = new Persona("Pedro", "López");

console.log("=== Múltiples instancias ===");
console.log("Persona 1:", persona.obtenerNombreCompleto(), "- Largo:", persona.largoNombreCompleto);
console.log("Persona 2:", persona2.obtenerNombreCompleto(), "- Largo:", persona2.largoNombreCompleto);
console.log("Persona 3:", persona3.obtenerNombreCompleto(), "- Largo:", persona3.largoNombreCompleto);

// Todas comparten la misma especie (propiedad estática):
console.log("Todas son:", Persona.especie);

// DEMOSTRACIÓN del problema de sincronización:
console.log("=== Problema de sincronización ===");
console.log("Antes del cambio:");
console.log("Nombre:", persona.nombre);
console.log("Largo calculado:", persona.largoNombreCompleto);

// Cambiar el nombre directamente:
persona.nombre = "Juan Carlos";
console.log("Después del cambio:");
console.log("Nombre:", persona.nombre); // "Juan Carlos"
console.log("Largo calculado (OBSOLETO):", persona.largoNombreCompleto); // Sigue siendo 9, pero debería ser 12

// Recalcular manualmente:
persona.largoNombreCompleto = persona.nombre.length + persona.apellido.length;
console.log("Largo calculado (CORREGIDO):", persona.largoNombreCompleto); // Ahora es 12

// El método siempre está actualizado:
console.log("Método actualizado:", persona.obtenerNombreCompleto()); // "Juan Carlos Pérez"

// COMPARACIÓN DE ENFOQUES:

// Enfoque 1: Propiedad calculada (actual)
console.log("=== Enfoque 1: Propiedad calculada ===");
console.log("Acceso rápido:", persona.largoNombreCompleto); // Rápido, pero puede estar obsoleto

// Enfoque 2: Getter (alternativo)
class PersonaConGetter {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    
    get largoNombreCompleto() {
        return this.nombre.length + this.apellido.length;
    }
    
    obtenerNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}

const personaGetter = new PersonaConGetter("Ana", "Martín");
console.log("=== Enfoque 2: Getter ===");
console.log("Valor inicial:", personaGetter.largoNombreCompleto); // 9

personaGetter.nombre = "Ana María";
console.log("Después del cambio (automático):", personaGetter.largoNombreCompleto); // 12 (automáticamente actualizado)

// PATRONES DE USO AVANZADOS:

// Patrón 1: Contador de instancias con propiedad estática
class PersonaConContador {
    static totalInstancias = 0;
    
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        PersonaConContador.totalInstancias++; // Incrementar contador
    }
    
    static obtenerTotalInstancias() {
        return PersonaConContador.totalInstancias;
    }
}

// Crear instancias y verificar contador:
new PersonaConContador("A", "B");
new PersonaConContador("C", "D");
console.log("Total instancias creadas:", PersonaConContador.obtenerTotalInstancias()); // 2

// Patrón 2: Configuración global con propiedades estáticas
class PersonaConConfiguracion {
    static configuracion = {
        formatoNombre: 'completo', // 'completo', 'inicial', 'apellido'
        idioma: 'es'
    };
    
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    
    obtenerNombreSegunConfiguracion() {
        switch (PersonaConConfiguracion.configuracion.formatoNombre) {
            case 'inicial':
                return `${this.nombre[0]}. ${this.apellido}`;
            case 'apellido':
                return this.apellido;
            case 'completo':
            default:
                return `${this.nombre} ${this.apellido}`;
        }
    }
    
    static cambiarConfiguracion(nuevaConfig) {
        PersonaConConfiguracion.configuracion = {
            ...PersonaConConfiguracion.configuracion,
            ...nuevaConfig
        };
    }
}

// Uso del patrón de configuración:
const personaConfig = new PersonaConConfiguracion("Roberto", "Silva");
console.log("Formato completo:", personaConfig.obtenerNombreSegunConfiguracion()); // "Roberto Silva"

PersonaConConfiguracion.cambiarConfiguracion({ formatoNombre: 'inicial' });
console.log("Formato inicial:", personaConfig.obtenerNombreSegunConfiguracion()); // "R. Silva"

// MEJORES PRÁCTICAS:

// ✅ Usar propiedades estáticas para:
// - Constantes de clase
// - Contadores globales
// - Configuraciones compartidas
// - Metadatos de clase

// ✅ Usar propiedades de instancia calculadas para:
// - Valores que se usan frecuentemente
// - Cálculos costosos que no cambian
// - Datos que se necesitan inmediatamente

// ✅ Usar getters para:
// - Valores que pueden cambiar
// - Cálculos que deben estar siempre actualizados
// - Propiedades que dependen de otras propiedades

// ✅ Usar métodos para:
// - Operaciones más complejas
// - Acciones que pueden fallar
// - Comportamientos que requieren parámetros

// ❌ Evitar:
// - Modificar propiedades directamente sin actualizar dependientes
// - Acceder a propiedades estáticas desde instancias
// - Usar propiedades calculadas para valores que cambian frecuentemente
// - Sobrecalcular en getters sin cache cuando es costoso

