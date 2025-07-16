//Este es un valor unico y no se puede cambiar
const simboloEjemplo = Symbol(); // Crear un símbolo sin descripción
console.log(typeof simboloEjemplo); //Salida: symbol

//Con descripción
const simboloConDescripcion = Symbol('mi simbolo'); // Crear un símbolo con una descripción
console.log("Ejemplo de Symbol:", simboloConDescripcion); //Salida: Ejemplo de Symbol: Symbol(mi simbolo)

//Uso con llave unica
const llaveunica = Symbol('llave unica'); // Crear un símbolo para usar como clave única en un objeto
let objeto = {
    [llaveunica]: "Valor asociado a la llave unica" // Asignar un valor usando el símbolo como clave
};
console.log("Valor asociado al símbolo:", objeto[llaveunica]); //Salida: Valor asociado al símbolo: Valor asociado a la llave unica

//Comparación de símbolos
const simbolo1 = Symbol('test'); // Crear un símbolo con descripción 'test'
const simbolo2 = Symbol('test'); // Crear otro símbolo con la misma descripción
console.log("¿Son iguales los símbolos?", simbolo1 === simbolo2); //Salida: ¿Son iguales los símbolos? false
//Los símbolos son únicos, incluso si tienen la misma descripción
//Esto es útil para evitar colisiones de nombres en objetos y propiedades

//Uso en objetos
const objetoSimbolos = {
    [simbolo1]: "Valor asociado a simbolo1", // Asignar valor usando simbolo1 como clave
    [simbolo2]: "Valor asociado a simbolo2"  // Asignar valor usando simbolo2 como clave
};
console.log("Valor de simbolo1 en objeto:", objetoSimbolos[simbolo1]); //Salida: Valor de simbolo1 en objeto: Valor asociado a simbolo1