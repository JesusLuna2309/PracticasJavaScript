class Persona {
  // PROPIEDAD ESTÁTICA: Compartida por toda la clase
  static especie = 'Homo sapiens';
  // ANÁLISIS DETALLADO:
  // - Pertenece a la clase Persona, no a instancias individuales
  // - Se accede con Persona.especie o this.especie dentro de métodos estáticos
  // - Todas las instancias comparten este mismo valor
  // - Útil para constantes, configuraciones globales, o contadores
  
  constructor(nombreParametro, apellidoParametro) {
    // ASIGNACIÓN BÁSICA de propiedades de instancia:
    this.nombre = nombreParametro;
    this.apellido = apellidoParametro;
    
    // TÉCNICA AVANZADA: Llamar a método desde constructor
    this.largoNombreCompleto = this.obtenerNombreCompleto().length;
    // ANÁLISIS CRÍTICO:
    // ✅ VENTAJAS:
    // - Reutiliza código existente (método obtenerNombreCompleto)
    // - Evita duplicar la lógica de concatenación
    // - Mantiene consistencia en el formato del nombre
    // - Si cambia la lógica del método, se refleja automáticamente
    
    // ❌ POTENCIALES PROBLEMAS:
    // - Dependencia circular si el método dependiera del constructor
    // - Puede ser confuso para desarrolladores novatos
    // - Si el método falla, el constructor falla
    
    // ALTERNATIVA DIRECTA (sin llamar al método):
    // this.largoNombreCompleto = (nombreParametro + " " + apellidoParametro).length;
    
    // ORDEN DE EJECUCIÓN en este constructor:
    // 1. Se asigna this.nombre = nombreParametro
    // 2. Se asigna this.apellido = apellidoParametro  
    // 3. Se llama a this.obtenerNombreCompleto() → "David Quesada"
    // 4. Se calcula .length → 13
    // 5. Se asigna this.largoNombreCompleto = 13
  }

  // MÉTODO DE INSTANCIA: Pertenece a cada objeto individual
  obtenerNombreCompleto() {
    // ANÁLISIS DETALLADO:
    // - Método PÚBLICO (accesible desde fuera de la clase)
    // - Usa 'this' para acceder a propiedades de la instancia específica
    // - Template literals para concatenación legible
    // - NO tiene efectos secundarios (pure function)
    // - Retorna un valor, no modifica estado
    
    return `${this.nombre} ${this.apellido}`;
    
    // ALTERNATIVAS de implementación:
    // return this.nombre + " " + this.apellido; // Concatenación tradicional
    // return [this.nombre, this.apellido].join(" "); // Con array.join()
    // return `${this.nombre} ${this.apellido}`.trim(); // Con trim por seguridad
    
    // CONSIDERACIONES:
    // - Simple y directo
    // - Siempre actualizado (lee valores actuales)
    // - Reutilizable desde otros métodos
  }

  // MÉTODO CON PARÁMETROS: Comportamiento condicional
  obtenerSaludo(hora) {
    // ANÁLISIS DEL PARÁMETRO:
    // - 'hora' determina el tipo de saludo
    // - Acepta string ('mañana' o cualquier otro valor)
    // - Podría beneficiarse de validación más robusta
    
    if (hora === 'mañana') {
      return `Buenos días, mi nombre es ${this.obtenerNombreCompleto()}`;
    } else {
      return `Buenas tardes, mi nombre es ${this.obtenerNombreCompleto()}`;
    }
    
    // ANÁLISIS CRÍTICO de la implementación:
    // ✅ VENTAJAS:
    // - Reutiliza obtenerNombreCompleto() (DRY principle)
    // - Lógica clara y legible
    // - Patrón if/else simple
    
    // ⚠️ ÁREAS DE MEJORA:
    // - Solo maneja 2 casos (mañana vs todo lo demás)
    // - No valida el parámetro de entrada
    // - Podría ser más flexible
    
    // VERSIÓN MEJORADA:
    /*
    obtenerSaludo(hora = 'tarde') {
      const saludos = {
        'mañana': 'Buenos días',
        'tarde': 'Buenas tardes', 
        'noche': 'Buenas noches'
      };
      
      const saludo = saludos[hora] || saludos['tarde'];
      return `${saludo}, mi nombre es ${this.obtenerNombreCompleto()}`;
    }
    */
    
    // VERSIÓN CON VALIDACIÓN:
    /*
    obtenerSaludo(hora) {
      if (typeof hora !== 'string') {
        throw new Error('El parámetro hora debe ser un string');
      }
      
      const horaLower = hora.toLowerCase();
      
      switch(horaLower) {
        case 'mañana':
        case 'manaña': // Typo común
          return `Buenos días, mi nombre es ${this.obtenerNombreCompleto()}`;
        case 'tarde':
          return `Buenas tardes, mi nombre es ${this.obtenerNombreCompleto()}`;
        case 'noche':
          return `Buenas noches, mi nombre es ${this.obtenerNombreCompleto()}`;
        default:
          return `Buenas tardes, mi nombre es ${this.obtenerNombreCompleto()}`;
      }
    }
    */
  }

  // MÉTODO ESTÁTICO: Pertenece a la clase, no a instancias
  static metodoEstatico() {
    // ANÁLISIS DETALLADO del contexto estático:
    // - 'this' se refiere a la CLASE (Persona), no a una instancia
    // - NO puede acceder a propiedades de instancia (this.nombre, this.apellido)
    // - SÍ puede acceder a propiedades estáticas (this.especie)
    // - Se llama desde la clase: Persona.metodoEstatico()
    // - NO se puede llamar desde instancias: david.metodoEstatico() ❌
    
    console.log(Persona.especie); // Salida: 'Homo sapiens'
    // ACCESO EXPLÍCITO a propiedad estática usando nombre de clase
    // - Forma más clara y explícita
    // - Recomendada para legibilidad
    
    console.log(this.especie); // Salida: 'Homo sapiens'
    // ACCESO IMPLÍCITO usando 'this'
    // - 'this' en método estático = la clase Persona
    // - Funciona pero puede ser confuso
    // - Útil cuando el nombre de clase es muy largo
    
    console.log(this.nombre); // Salida: undefined
    // DEMOSTRACIÓN: Las propiedades de instancia NO existen en contexto estático
    // - this.nombre busca Persona.nombre (que no existe)
    // - NO busca en ninguna instancia específica
    // - Resultado: undefined
    
    // USOS TÍPICOS de métodos estáticos:
    // - Factory methods: static crearPersona(datosString)
    // - Validaciones: static esNombreValido(nombre)
    // - Utilidades: static compararPersonas(p1, p2)
    // - Constantes calculadas: static obtenerEspecieCompleta()
  }
  
  // MÉTODOS ESTÁTICOS ADICIONALES (ejemplos útiles):
  
  // Factory method:
  static crearDesdeNombreCompleto(nombreCompleto) {
    const partes = nombreCompleto.split(' ');
    const nombre = partes[0] || '';
    const apellido = partes.slice(1).join(' ') || '';
    return new Persona(nombre, apellido);
  }
  
  // Método de comparación:
  static compararPorNombre(persona1, persona2) {
    return persona1.obtenerNombreCompleto().localeCompare(persona2.obtenerNombreCompleto());
  }
  
  // Validación estática:
  static esNombreValido(nombre) {
    return typeof nombre === 'string' && nombre.trim().length > 0;
  }
  
  // Contador estático:
  static totalPersonas = 0;
  static incrementarContador() {
    return ++Persona.totalPersonas;
  }
}

// INSTANCIACIÓN: Creación de objeto concreto
let david = new Persona('David', 'Quesada');
// PROCESO INTERNO:
// 1. Se crea objeto vacío: {}
// 2. Se ejecuta constructor:
//    - this.nombre = 'David'
//    - this.apellido = 'Quesada'  
//    - this.obtenerNombreCompleto() → 'David Quesada'
//    - this.largoNombreCompleto = 13
// 3. Se retorna objeto completo

// LLAMADA A MÉTODO DE INSTANCIA:
console.log(david.obtenerNombreCompleto()); // Salida: 'David Quesada'
// ANÁLISIS:
// - Se ejecuta sobre la instancia 'david'
// - 'this' dentro del método = objeto david
// - Accede a david.nombre y david.apellido
// - Retorna concatenación específica de esta instancia

// LLAMADA A MÉTODO CON PARÁMETRO:
console.log(david.obtenerSaludo('tarde'));
// Salida: 'Buenas tardes, mi nombre es David Quesada'
// ANÁLISIS:
// - Parámetro 'tarde' ≠ 'mañana', entonces ejecuta rama 'else'
// - Dentro del método llama a this.obtenerNombreCompleto()
// - Concatena el saludo con el nombre completo

// LLAMADA A MÉTODO ESTÁTICO:
Persona.metodoEstatico();
// ANÁLISIS:
// - Se llama desde la CLASE, no desde instancia
// - 'this' dentro del método = Persona (la clase)
// - Ejecuta las tres líneas console.log del método

// DEMOSTRACIONES ADICIONALES:

// Error común: Intentar llamar método estático desde instancia
try {
  // david.metodoEstatico(); // ❌ TypeError: david.metodoEstatico is not a function
} catch (error) {
  console.log("Error:", error.message);
}

// Correcto: Llamar método de instancia desde instancia
console.log("Nombre completo:", david.obtenerNombreCompleto()); // ✅

// Correcto: Llamar método estático desde clase
Persona.metodoEstatico(); // ✅

// Verificar independencia entre instancias:
const ana = new Persona('Ana', 'López');
console.log("David:", david.obtenerNombreCompleto()); // 'David Quesada'
console.log("Ana:", ana.obtenerNombreCompleto()); // 'Ana López'
console.log("Ambos comparten especie:", Persona.especie); // 'Homo sapiens'

// Demostrar diferentes saludos:
console.log("Saludo mañana:", david.obtenerSaludo('mañana'));
console.log("Saludo tarde:", david.obtenerSaludo('tarde'));
console.log("Saludo noche:", david.obtenerSaludo('noche')); // Se trata como 'tarde'

// Verificar propiedad calculada:
console.log("Largo nombre completo de David:", david.largoNombreCompleto); // 13

// PATRONES DE USO AVANZADOS:

// Patrón 1: Method chaining (encadenamiento de métodos)
class PersonaChainable extends Persona {
  actualizarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
    this.largoNombreCompleto = this.obtenerNombreCompleto().length;
    return this; // Retorna la instancia para encadenar
  }
  
  actualizarApellido(nuevoApellido) {
    this.apellido = nuevoApellido;
    this.largoNombreCompleto = this.obtenerNombreCompleto().length;
    return this;
  }
}

// Uso con encadenamiento:
const personaChain = new PersonaChainable('Juan', 'Pérez');
const resultado = personaChain
  .actualizarNombre('Juan Carlos')
  .actualizarApellido('Pérez García');
console.log("Resultado encadenado:", resultado.obtenerNombreCompleto());

// Patrón 2: Factory methods estáticos
const persona1 = Persona.crearDesdeNombreCompleto('María García López');
console.log("Creada desde string:", persona1.obtenerNombreCompleto());

// Patrón 3: Validación estática
console.log("¿'David' es válido?", Persona.esNombreValido('David')); // true
console.log("¿'' es válido?", Persona.esNombreValido('')); // false

// CASOS DE USO RECOMENDADOS:

// ✅ Usar métodos de instancia cuando:
// - Necesitas acceder a datos específicos del objeto
// - El comportamiento depende del estado del objeto
// - Vas a modificar propiedades del objeto
// - El método representa una acción que hace el objeto

// ✅ Usar métodos estáticos cuando:
// - El método NO necesita datos de instancia específica
// - Creas factory methods o builders
// - Implementas utilidades relacionadas con la clase
// - Validas datos antes de crear instancias
// - Mantienes contadores o configuraciones globales

// ❌ Evitar:
// - Llamar métodos estáticos desde instancias
// - Acceder a propiedades de instancia desde métodos estáticos
// - Mezclar lógica estática con lógica de instancia sin claridad
// - Métodos que podrían ser estáticos pero están como instancia
