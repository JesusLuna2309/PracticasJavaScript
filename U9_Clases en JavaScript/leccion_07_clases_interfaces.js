//Interfaces en JavaScript
// JavaScript NO tiene interfaces nativas como Java o C#
// Se simulan usando clases abstractas con verificaciones manuales
// Proporcionan un "contrato" que las clases deben cumplir
// Útiles para garantizar que diferentes clases implementen los mismos métodos

class IAnimal {
    constructor() {
        // VERIFICACIÓN de que es una interfaz (no se puede instanciar):
        if (this.constructor === IAnimal) {
            throw new Error("No se puede instanciar una interfaz abstracta");
        }
        // ANÁLISIS:
        // - this.constructor: Referencia al constructor real usado
        // - Si alguien hace "new IAnimal()" → this.constructor === IAnimal → Error
        // - Si alguien hace "new Perro()" → this.constructor === Perro → OK
    }

    // MÉTODO QUE DEBE SER IMPLEMENTADO por subclases:
    hacerSonido() {
        throw new Error("Método 'hacerSonido' debe ser implementado");
        // PROPÓSITO:
        // - NO proporciona funcionalidad real
        // - Obliga a las subclases a implementar este método
        // - Si una subclase no lo implementa y se llama → Error
        // - Define qué métodos son obligatorios
    }
}

// CLASE que implementa la interfaz:
class Perro extends IAnimal {
    // NO necesita constructor si solo va a heredar
    // El constructor de IAnimal se ejecuta automáticamente
    
    // IMPLEMENTACIÓN OBLIGATORIA del método de la interfaz:
    hacerSonido() {
        return "Guau!";
        // CUMPLE EL CONTRATO:
        // - Proporciona implementación real en lugar del error
        // - Retorna un valor útil
        // - Específico para perros
    }
}

class Gato extends IAnimal {
    // IMPLEMENTACIÓN DIFERENTE del mismo método:
    hacerSonido() {
        return "Miau!";
        // POLIMORFISMO:
        // - Mismo nombre de método que Perro
        // - Diferente comportamiento
        // - Permite tratar ambos de forma uniforme
    }
}

// FUNCIÓN que usa la interfaz:
function hacerSonidoAnimal(animal) {
    // VERIFICACIÓN de que el objeto implementa la interfaz:
    if (!(animal instanceof IAnimal)) {
        throw new Error("El objeto no implementa la interfaz IAnimal");
    }
    // ANÁLISIS:
    // - instanceof IAnimal: Verifica si el objeto hereda de IAnimal
    // - Si es Perro o Gato → true (ambos extienden IAnimal)
    // - Si es otro tipo → false → Error
    
    console.log(animal.hacerSonido());
    // POLIMORFISMO:
    // - Mismo código para diferentes tipos
    // - JavaScript determina qué versión llamar automáticamente
}

// CREACIÓN de instancias:
const miPerro = new Perro();
// PROCESO:
// - Se crea objeto Perro
// - Se ejecuta IAnimal.constructor()
// - Verificación: this.constructor es Perro ≠ IAnimal → OK
// - Objeto listo para usar

const miGato = new Gato();
// PROCESO IDÉNTICO para Gato

// USO:
hacerSonidoAnimal(miPerro); // Salida: Guau!
hacerSonidoAnimal(miGato);  // Salida: Miau!

// EJEMPLO PRÁCTICO: Servicio de autenticación

// INTERFAZ para servicios de autenticación:
class IAuthService {
    constructor() {
        // MISMA VERIFICACIÓN que IAnimal:
        if (this.constructor === IAuthService) {
            throw new Error("No se puede instanciar una interfaz abstracta");
        }
    }

    // MÉTODOS OBLIGATORIOS que debe implementar cualquier servicio de auth:
    login(username, password) {
        throw new Error("Método 'login' debe ser implementado");
        // CONTRATO:
        // - Cualquier servicio de auth DEBE tener login
        // - Debe aceptar username y password
        // - Las subclases definen cómo implementarlo
    }

    logout() {
        throw new Error("Método 'logout' debe ser implementado");
        // CONTRATO:
        // - Cualquier servicio de auth DEBE tener logout
        // - Las subclases definen cómo implementarlo
    }
}

// IMPLEMENTACIÓN CONCRETA de la interfaz:
class AuthService extends IAuthService {
    constructor() {
        // LLAMADA AL CONSTRUCTOR de la interfaz:
        super();
        // ANÁLISIS:
        // - Ejecuta IAuthService.constructor()
        // - Verificación: this.constructor es AuthService ≠ IAuthService → OK
        // - Permite continuar con la inicialización
        
        // ESTADO INICIAL del servicio:
        this.isAuthenticated = false;
        // PROPIEDAD ESPECÍFICA:
        // - No está definida en la interfaz
        // - Específica de esta implementación
        // - Rastrea si el usuario está autenticado
    }

    // IMPLEMENTACIÓN REAL del método login:
    login(username, password) {
        // LÓGICA DE AUTENTICACIÓN (simulada):
        if (username === "user" && password === "pass") {
            // CREDENCIALES CORRECTAS:
            this.isAuthenticated = true;
            console.log("Usuario autenticado");
            // CAMBIO DE ESTADO:
            // - Marca al usuario como autenticado
            // - Proporciona feedback al usuario
        } else {
            // CREDENCIALES INCORRECTAS:
            throw new Error("Credenciales incorrectas");
            // MANEJO DE ERROR:
            // - No cambia el estado
            // - Lanza error para informar el problema
        }
        
        // CONSIDERACIONES:
        // - En aplicación real, verificaría contra base de datos
        // - Podría generar tokens, cookies, etc.
        // - Incluiría validaciones más complejas
    }

    // IMPLEMENTACIÓN REAL del método logout:
    logout() {
        // LÓGICA DE DESCONEXIÓN:
        this.isAuthenticated = false;
        console.log("Usuario desconectado");
        // ANÁLISIS:
        // - Resetea el estado de autenticación
        // - Proporciona feedback al usuario
        // - Simple pero efectivo para el ejemplo
        
        // EN APLICACIÓN REAL:
        // - Invalidaría tokens
        // - Limpiaría cookies/localStorage
        // - Notificaría al servidor
    }
}

// USO DEL SERVICIO:
const authService = new AuthService();
// CREACIÓN:
// - Se ejecuta AuthService.constructor()
// - Se llama super() → IAuthService.constructor()
// - Verificación pasa (AuthService ≠ IAuthService)
// - Se establece isAuthenticated = false

// PRUEBA DE AUTENTICACIÓN:
console.log("Estado inicial:", authService.isAuthenticated); // false

// LOGIN EXITOSO:
authService.login("user", "pass");
// RESULTADO:
// - Cambia isAuthenticated a true
// - Imprime "Usuario autenticado"
console.log("Después de login:", authService.isAuthenticated); // true

// LOGIN FALLIDO:
try {
    authService.login("wrong", "credentials");
} catch (error) {
    console.log("Error de login:", error.message); // "Credenciales incorrectas"
}

// LOGOUT:
authService.logout();
// RESULTADO:
// - Cambia isAuthenticated a false
// - Imprime "Usuario desconectado"
console.log("Después de logout:", authService.isAuthenticated); // false

// VERIFICACIONES:
console.log("authService es instancia de IAuthService:", authService instanceof IAuthService); // true
console.log("authService es instancia de AuthService:", authService instanceof AuthService);   // true

// FUNCIÓN que usa cualquier servicio de autenticación:
function procesarAutenticacion(servicio, usuario, contraseña) {
    // VERIFICACIÓN de que implementa la interfaz:
    if (!(servicio instanceof IAuthService)) {
        throw new Error("El servicio debe implementar IAuthService");
    }
    
    // USO POLIMÓRFICO:
    try {
        servicio.login(usuario, contraseña);
        console.log("Autenticación exitosa");
        return true;
    } catch (error) {
        console.log("Fallo en autenticación:", error.message);
        return false;
    }
}

// PRUEBA de la función polimórfica:
procesarAutenticacion(authService, "user", "pass"); // Éxito
procesarAutenticacion(authService, "bad", "creds"); // Fallo

// VENTAJAS de este enfoque:
// ✅ Garantiza que las clases implementen métodos específicos
// ✅ Permite polimorfismo (tratar diferentes implementaciones igual)
// ✅ Proporciona estructura clara para el desarrollo
// ✅ Facilita el testing y mantenimiento
// ✅ Documenta qué métodos son esenciales

// LIMITACIONES:
// ❌ Verificación solo en tiempo de ejecución
// ❌ Requiere disciplina del desarrollador
// ❌ No hay autocompletado automático de métodos
// ❌ Errores solo se detectan cuando se ejecuta el código

// CUÁNDO USAR:
// ✅ Múltiples clases necesitan implementar los mismos métodos
// ✅ Quieres garantizar consistencia en diferentes implementaciones
// ✅ Necesitas polimorfismo para intercambiar implementaciones
// ✅ Trabajas en equipo y necesitas contratos claros
// ✅ Diseñas APIs que otros desarrolladores van a implementar