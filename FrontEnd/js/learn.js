/*DIFERENCIA ENTRE LET Y VAR
--Let: sirve para variables de ámbito local o de bloque
--Var: sirve para declarar variables de ámbito global (no recomendado)
*/
var hola = "Hola mundo";
console.log(hola);
let hello = "Hello World";
console.log(hello);

var musica = "Rock";
console.log("Variable musica antes del bloque",musica);
{
    var musica = "Pop";
    console.log("Variable musica dentro del bloque",musica);
}
console.log("Variable musica despues del bloque",musica);