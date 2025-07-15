//Este es un valor unico y no se puede cambiar
const simboloEjemplo = Symbol(); // Crear un símbolo sin descripción
console.log(typeof simboloEjemplo); //Salida: symbol

//Con descripción
const simboloConDescripcion = Symbol('mi simbolo'); // Crear un símbolo con una descripción
console.log("Ejemplo de Symbol:", simboloConDescripcion); //Salida: Ejemplo de Symbol: Symbol(mi simbolo)

//Uso con llave unica
const llaveunica = Symbol('llave unica');
let objeto = {
    [llaveunica]: "Valor asociado a la llave unica"
};
console.log("Valor asociado al símbolo:", objeto[llaveunica]); //Salida: Valor asociado al símbolo: Valor asociado a la llave unica

//Comparación de símbolos
const simbolo1 = Symbol('test');
const simbolo2 = Symbol('test');
console.log("¿Son iguales los símbolos?", simbolo1 === simbolo2); //Salida: ¿Son iguales los símbolos? false
//Los símbolos son únicos, incluso si tienen la misma descripción
//Esto es útil para evitar colisiones de nombres en objetos y propiedades

//Uso en objetos
const objetoSimbolos = {
    [simbolo1]: "Valor asociado a simbolo1",
    [simbolo2]: "Valor asociado a simbolo2"
};
console.log("Valor de simbolo1 en objeto:", objetoSimbolos[simbolo1]); //Salida: Valor de simbolo1 en objeto: Valor asociado a simbolo1