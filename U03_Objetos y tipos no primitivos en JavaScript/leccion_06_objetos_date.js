//Ejemplos de uso del objeto Date en JavaScript
// El objeto Date se utiliza para trabajar con fechas y horas en JavaScript

// Crear una nueva fecha con la fecha y hora actuales
const fechaActual = new Date();
console.log("Fecha y hora actual:", fechaActual); // Salida: Fecha y hora actual: Fri Oct 06 2023 12:34:56 GMT+0000 (Coordinated Universal Time)

// Crear una fecha específica (año, mes, día, hora, minuto, segundo)
const fechaEspecifica = new Date(2023, 9, 6, 12, 0, 0); // Meses empiezan desde 0 (enero es 0)
console.log("Fecha específica:", fechaEspecifica); // Salida: Fecha específica: Fri Oct 06 2023 12:00:00 GMT+0000 (Coordinated Universal Time)

// Obtener componentes de la fecha  
console.log("Año:", fechaActual.getFullYear()); // Salida: Año: 2023
console.log("Mes:", fechaActual.getMonth() + 1); // Salida: Mes: 10 (octubre)
console.log("Día del mes:", fechaActual.getDate()); // Salida: Día del mes: 6
console.log("Día de la semana:", fechaActual.getDay()); // Salida: Día de la semana: 5 (viernes)
console.log("Horas:", fechaActual.getHours()); // Salida: Horas: 12
console.log("Minutos:", fechaActual.getMinutes()); // Salida: Minutos: 34
console.log("Segundos:", fechaActual.getSeconds()); // Salida: Segundos: 56

// Obtener la marca de tiempo (timestamp) en milisegundos desde el 1 de enero de 1970
console.log("Marca de tiempo:", fechaActual.getTime()); // Salida: Marca de tiempo: 1696595696000

//Estblecer una fecha a partir de una marca de tiempo
const fechaDesdeTimestamp = new Date(1696595696000);
console.log("Fecha desde timestamp:", fechaDesdeTimestamp); // Salida: Fecha desde timestamp: Fri Oct 06 2023 12:34:56 GMT+0000 (Coordinated Universal Time)

//Establecer Fecha desde una cadena de fecha
const fechaDesdeCadena = new Date("2023-10-06T12:34:56Z");
console.log("Fecha desde cadena:", fechaDesdeCadena); // Salida: Fecha desde cadena: Fri Oct 06 2023 12:34:56 GMT+0000 (Coordinated Universal Time)

//Esablecefecha desde una cadena de fecha con formato específico
const fechaDesdeCadenaEspecifica = new Date("October 6, 2023 12:34:56");
console.log("Fecha desde cadena específica:", fechaDesdeCadenaEspecifica); // Salida: Fecha desde cadena específica: Fri Oct 06 2023 12:34:56 GMT+0000 (Coordinated Universal Time)

// Comparar fechas
const otraFecha = new Date(2023, 9, 7); // 7 de octubre de 2023
console.log("¿Es la fecha actual anterior a otra fecha?", fechaActual < otraFecha); // Salida: ¿Es la fecha actual anterior a otra fecha? true  

// Formatear la fecha a una cadena legible
console.log("Fecha formateada:", fechaActual.toLocaleDateString()); // Salida: Fecha formateada: 10/6/2023
console.log("Hora formateada:", fechaActual.toLocaleTimeString()); // Salida: Hora formateada: 12:34:56 PM

// Convertir la fecha a una cadena ISO
console.log("Fecha en formato ISO:", fechaActual.toISOString()); // Salida: Fecha en formato ISO: 2023-10-06T12:34:56.000Z

// Establecer componentes de la fecha
fechaActual.setFullYear(2024);
console.log("Fecha actual con año actualizado:", fechaActual); // Salida: Fecha actual con año actualizado: Fri Oct 06 2024 12:34:56 GMT+0000 (Coordinated Universal Time)

// Calcular la diferencia entre dos fechas
const fechaInicio = new Date(2023, 0, 1); // 1 de enero de 2023
const fechaFin = new Date(2023, 11, 31); // 31 de diciembre de 2023
const diferenciaTiempo = fechaFin - fechaInicio; // Diferencia en milisegundos
const diferenciaDias = diferenciaTiempo / (1000 * 60 * 60 * 24); // Convertir a días
console.log("Diferencia en días entre el 1 de enero y el 31 de diciembre de 2023:", diferenciaDias); // Salida: Diferencia en días entre el 1 de enero y el 31 de diciembre de 2023: 364

// Métodos adicionales
// Obtener la fecha UTC
console.log("Fecha UTC actual:", fechaActual.toUTCString()); // Salida: Fecha UTC actual: Fri, 06 Oct 2023 12:34:56 GMT
// Obtener la fecha en formato legible

console.log("Fecha legible:", fechaActual.toDateString()); // Salida: Fecha legible: Fri Oct 06 2023
// Obtener la hora en formato legible   

console.log("Hora legible:", fechaActual.toTimeString()); // Salida: Hora legible: 12:34:56 GMT+0000 (Coordinated Universal Time)

// Obtener la fecha y hora en formato legible
console.log("Fecha y hora legible:", fechaActual.toString()); // Salida: Fecha y hora legible: Fri Oct 06 2023 12:34:56 GMT+0000 (Coordinated Universal Time)

// Obtener la fecha en formato local
console.log("Fecha local:", fechaActual.toLocaleString()); // Salida: Fecha local: Fri Oct 06 2023 12:34:56 GMT+0000 (Coordinated Universal Time)




