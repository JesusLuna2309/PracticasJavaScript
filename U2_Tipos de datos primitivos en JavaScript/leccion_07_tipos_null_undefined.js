//Asignacion explicita de un valor null a una variable
let valorNulo = null; // Se asigna el valor nulo explícitamente a la variable
console.log("Ejemplo de Null:", valorNulo); //Salida: Ejemplo de Null

//Asignacion de un valor null a una variable dentro de una función
function mostrarValorNulo() {
    return  null; // La función retorna un valor nulo
}
console.log("Valor retornado por la función:", mostrarValorNulo()); //Salida: Valor retornado por la función: null

//Asignacion explicita de un valor undefined a una variable
let valorIndefinido; // Variable declarada pero no inicializada, su valor es undefined
console.log("Ejemplo de Undefined:", valorIndefinido); //Salida: Ejemplo de Undefined

//Asignacion de un valor undefined a una variable dentro de una función
function mostrarValorIndefinido() {
    return  undefined; // La función retorna undefined explícitamente
}
console.log("Valor retornado por la función:", mostrarValorIndefinido()); //Salida: Valor retornado por la función: undefined