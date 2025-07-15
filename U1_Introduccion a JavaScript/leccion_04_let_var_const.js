/**
 * * Ejemplo de uso de let, var y const
 */

//Ejemplo de uso de var
function ejemploVar() {
    var x = 10;
    console.log("Valor de x (var):", x);
    
    if (true) {
        var x = 20; // Reasignación de la variable x
        console.log("Valor de x dentro del bloque (var):", x);
    }
    
    console.log("Valor de x después del bloque (var):", x); // Se mantiene el valor 20
}

ejemploVar();
//console.log(x); // Esto causaría un error, ya que x no está definida fuera de la función ejemploVar

//Ejemplo de uso de let
function ejemploLet() {
    let y = 10;
    console.log("Valor de y (let):", y);
    
    if (true) {
        let x = 25; // Nueva variable x dentro del bloque
        let y = 20; // Nueva variable y dentro del bloque
        console.log("Valor de y dentro del bloque (let):", y); // Imprime 20
    }
    
    console.log("Valor de y después del bloque (let):", y); // Imprime 10, ya que no se afecta la variable externa
    //console.log("Valor de x después del bloque (let):", x); // Esto causaría un error, ya que x no está definida fuera del bloque
}
ejemploLet();

//Ejemplo de uso de const
function ejemploConst() {
    const z = 10;
    console.log("Valor de z (const):", z);
    
    // z = 20; // Esto causaría un error, ya que no se puede reasignar una constante
    
    if (true) {
        const z = 20; // Nueva constante z dentro del bloque
        console.log("Valor de z dentro del bloque (const):", z); // Imprime 20
    }
    
    console.log("Valor de z después del bloque (const):", z); // Imprime 10, ya que no se afecta la constante externa
}

/**
 * Diferencias entre var, let y const:
 *
 * - var: Tiene alcance de función (function scope) y permite la redeclaración y reasignación. 
 *   Si se declara dentro de un bloque, sigue siendo accesible fuera de él si está en la misma función.
 * 
 * - let: Tiene alcance de bloque (block scope) y permite la reasignación, pero no la redeclaración en el mismo bloque. 
 *   Las variables let solo existen dentro del bloque donde se declaran.
 * 
 * - const: Tiene alcance de bloque (block scope) y NO permite la reasignación ni la redeclaración. 
 *   Una vez asignado un valor, no puede cambiar. Sin embargo, si el valor es un objeto o arreglo, sus propiedades pueden modificarse.
 */

/**
 * Diferencia entre alcance de función y alcance de bloque:
 *
 * - Alcance de función (function scope):
 *   Las variables declaradas con "var" solo existen dentro de la función donde fueron declaradas.
 *   No importa si están dentro de un bloque (if, for, etc.), siguen siendo accesibles en toda la función.
 *
 * - Alcance de bloque (block scope):
 *   Las variables declaradas con "let" y "const" solo existen dentro del bloque donde fueron declaradas
 *   (por ejemplo, dentro de un if, for, while, etc.). Fuera de ese bloque, no se pueden acceder.
 */