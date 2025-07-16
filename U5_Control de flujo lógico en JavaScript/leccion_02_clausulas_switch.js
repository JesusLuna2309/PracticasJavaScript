//Clausulas switch - Alternativa a múltiples if-else para valores específicos
let dia = 3; // Variable que representa el día de la semana
switch (dia) { // Evalúa el valor de la variable dia
    case 1: // Si dia es igual a 1
        console.log("Lunes");
        break; // Termina la ejecución del switch
    case 2: // Si dia es igual a 2
        console.log("Martes");
        break;
    case 3: // Si dia es igual a 3
        console.log("Miércoles");
        break;
    case 4: // Si dia es igual a 4
        console.log("Jueves");
        break;
    case 5: // Si dia es igual a 5
        console.log("Viernes");
        break;
    case 6: // Si dia es igual a 6
        console.log("Sábado");
        break;
    case 7: // Si dia es igual a 7
        console.log("Domingo");
        break;
    default: // Si ningún caso anterior coincide
        console.log("Día no válido");
        break;
}

//Clausulas switch con múltiples casos - Agrupa casos que ejecutan el mismo código
let mes = 5; // Variable que representa el mes del año
switch (mes) {
    case 1: // Enero
    case 2: // Febrero
    case 3: // Marzo - todos ejecutan el mismo código
        console.log("Primer trimestre");
        break;
    case 4: // Abril
    case 5: // Mayo
    case 6: // Junio
        console.log("Segundo trimestre");
        break;
    case 7: // Julio
    case 8: // Agosto
    case 9: // Septiembre
        console.log("Tercer trimestre");
        break;
    case 10: // Octubre
    case 11: // Noviembre
    case 12: // Diciembre
        console.log("Cuarto trimestre");
        break;
    default: // Si el mes no está entre 1 y 12
        console.log("Mes no válido");
        break;
}

//Clausulas switch con expresión - Usa true para evaluar condiciones complejas
let numero = 2;
switch (true) { // Evalúa true, por lo que buscará el primer case que sea verdadero
    case numero < 0: // Si el número es negativo
        console.log("Número negativo");
        break;
    case numero === 0: // Si el número es exactamente cero
        console.log("Cero");
        break;
    case numero > 0 && numero <= 10: // Si el número está entre 1 y 10
        console.log("Número entre 1 y 10");
        break;
    default: // Si el número es mayor que 10
        console.log("Número mayor que 10");
        break;
}

//Clausulas switch con cadenas - También funciona con strings
let fruta = "manzana";
switch (fruta) { // Compara el valor exacto de la cadena
    case "manzana": // Comparación estricta con la cadena
        console.log("Es una manzana");
        break;
    case "plátano":
        console.log("Es un plátano");
        break;
    case "naranja":
        console.log("Es una naranja");
        break;
    default: // Si la fruta no coincide con ningún caso
        console.log("Fruta desconocida");
        break;
}

//Clausulas switch con objetos - Accede a propiedades de objetos
let persona = { nombre: "Juan", edad: 30 };
switch (persona.nombre) { // Evalúa la propiedad nombre del objeto
    case "Juan": // Si el nombre es "Juan"
        console.log("Hola Juan");
        break;
    case "Ana":
        console.log("Hola Ana");
        break;
    case "Pedro":
        console.log("Hola Pedro");
        break;
    default: // Si el nombre no coincide con ningún caso
        console.log("Persona desconocida");
        break;
}

//Clausulas switch dentro de funciones - Encapsula la lógica en una función reutilizable
function saludar(nombre) { // Función que recibe un parámetro nombre
    switch (nombre) { // Evalúa el parámetro recibido
        case "Juan":
            console.log("Hola Juan");
            break;
        case "Ana":
            console.log("Hola Ana");
            break;
        case "Pedro":
            console.log("Hola Pedro");
            break;
        default: // Si el nombre no está en los casos definidos
            console.log("Persona desconocida");
            break;
    }
}
// Para usar la función: saludar("Juan"); // Salida: "Hola Juan"
