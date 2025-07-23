//this hace referencia al objeto que invoca la función
// En JavaScript, el valor de 'this' depende del contexto de ejecución
// En funciones regulares, 'this' se refiere al objeto global (window en navegador)
function mostrarContexto() {
    console.log("Contexto de this:", this);
    // En el contexto global (navegador): this === window
    // En Node.js: this === global
    // En modo estricto ('use strict'): this === undefined
}
mostrarContexto(); // En navegador, imprime el objeto global (window)
// En modo estricto, 'this' es undefined

// En funciones de objetos, 'this' se refiere al objeto que invoca la función
const objeto = {
    nombre: "Objeto de ejemplo",
    mostrarNombre: function() {
        console.log("Nombre del objeto:", this.nombre);
        // IMPORTANTE: 'this' se determina en TIEMPO DE EJECUCIÓN, no de definición
        // Aquí 'this' se refiere al objeto que está a la izquierda del punto (.)
        // objeto.mostrarNombre() -> 'this' es 'objeto'
    }
};
objeto.mostrarNombre(); // Salida: Nombre del objeto: Objeto de ejemplo

// En funciones flecha, 'this' se hereda del contexto donde se define la función
const objetoFlecha = {
    nombre: "Objeto flecha",
    mostrarNombre: () => {
        console.log("Nombre del objeto flecha:", this.nombre); 
        // CRÍTICO: Las funciones flecha NO tienen su propio 'this'
        // Heredan 'this' del ámbito léxico donde fueron DEFINIDAS
        // Como esta función se definió en el ámbito global, 'this' es el objeto global
        // Por eso this.nombre es undefined (el objeto global no tiene propiedad 'nombre')
    }
};
objetoFlecha.mostrarNombre(); // Salida: Nombre del objeto flecha: undefined

//Diferencia this en una función regular y una flecha
const unObjeto = {
    nombre: "Objeto de ejemplo",
    funcionRegular: function() {
        console.log("Función regular - this.nombre:", this.nombre); 
        // Función regular: 'this' se determina por cómo se llama la función
        // unObjeto.funcionRegular() -> 'this' es unObjeto
    },
    funcionFlecha: () => {
        console.log("Función flecha - this.nombre:", this.nombre); 
        // Función flecha: 'this' se hereda del contexto donde se definió
        // Se definió en el ámbito global, por lo tanto 'this' es el objeto global
    },
    
    // Ejemplo adicional para demostrar el comportamiento
    metodoConCallback: function() {
        console.log("En método regular, this.nombre:", this.nombre); // "Objeto de ejemplo"
        
        // Callback con función regular
        setTimeout(function() {
            console.log("En callback regular, this.nombre:", this.nombre); // undefined
            // Aquí 'this' es el objeto global porque setTimeout llama la función sin contexto
        }, 100);
        
        // Callback con función flecha
        setTimeout(() => {
            console.log("En callback flecha, this.nombre:", this.nombre); // "Objeto de ejemplo"
            // La función flecha hereda 'this' del método que la contiene
        }, 200);
    }
};

unObjeto.funcionRegular(); // Salida: Función regular - this.nombre: Objeto de ejemplo
unObjeto.funcionFlecha(); // Salida: Función flecha - this.nombre: undefined

// Ejemplo de uso de 'this' en un constructor
function Persona(nombre) {
    this.nombre = nombre; // 'this' se refiere a la instancia del objeto que se está creando
    this.saludar = function() {
        console.log("Hola, mi nombre es " + this.nombre);
        // Cuando se llama persona1.saludar(), 'this' se refiere a persona1
    };
    
    // IMPORTANTE: Si olvidas usar 'new', 'this' se refiere al objeto global
    // Ejemplo problemático: let persona = Persona("Ana"); // Sin 'new'
    // En este caso, this.nombre asignaría 'nombre' al objeto global
}   
let persona1 = new Persona("Juan");
persona1.saludar(); // Salida: Hola, mi nombre es Juan  

// Ejemplo de uso de 'this' en un método de un objeto
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    mostrarDetalles: function() {
        console.log("Coche: " + this.marca + " " + this.modelo);
        // 'this' se refiere al objeto 'coche' porque se llama como coche.mostrarDetalles()
    },
    
    // Demostración de pérdida de contexto
    obtenerDetalle: function() {
        return this.marca + " " + this.modelo;
    }
};

coche.mostrarDetalles(); // Salida: Coche: Toyota Corolla

// CASOS PROBLEMÁTICOS COMUNES:

// 1. Pérdida de contexto al asignar método a variable
const funcionSuelta = coche.mostrarDetalles;
// funcionSuelta(); // Error: this.marca y this.modelo son undefined
// Porque 'this' ya no se refiere a 'coche', sino al objeto global

// 2. Pasando método como callback
// setTimeout(coche.mostrarDetalles, 1000); // Error: pérdida de contexto

// SOLUCIONES:

// Solución 1: bind() - vincula permanentemente el contexto
const funcionVinculada = coche.mostrarDetalles.bind(coche);
funcionVinculada(); // Funciona correctamente

// Solución 2: call() - llama la función con un contexto específico
coche.mostrarDetalles.call(coche); // Funciona correctamente

// Solución 3: apply() - similar a call() pero con argumentos en array
// coche.mostrarDetalles.apply(coche, []); // Para este ejemplo no hay argumentos

// Solución 4: Función flecha en callback
setTimeout(() => coche.mostrarDetalles(), 1000); // Funciona porque la flecha preserva el contexto

// EJEMPLO AVANZADO: Comportamiento en diferentes contextos
const ejemploAvanzado = {
    valor: 42,
    
    // Método regular
    metodo: function() {
        return this.valor;
    },
    
    // Función flecha como propiedad
    flecha: () => {
        return this.valor; // undefined - hereda del ámbito global
    },
    
    // Método que retorna función regular
    crearFuncionRegular: function() {
        return function() {
            return this.valor; // Depende de cómo se llame
        };
    },
    
    // Método que retorna función flecha
    crearFuncionFlecha: function() {
        return () => {
            return this.valor; // 42 - hereda de crearFuncionFlecha
        };
    }
};

console.log("Método regular:", ejemploAvanzado.metodo()); // 42
console.log("Función flecha:", ejemploAvanzado.flecha()); // undefined

const funcionRegularCreada = ejemploAvanzado.crearFuncionRegular();
const funcionFlechaCreada = ejemploAvanzado.crearFuncionFlecha();

console.log("Función regular creada:", funcionRegularCreada()); // undefined
console.log("Función flecha creada:", funcionFlechaCreada()); // 42