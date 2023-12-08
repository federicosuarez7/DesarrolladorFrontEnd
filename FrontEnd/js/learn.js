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

//Variables constantes
const PI = 3.1416;
console.log(PI);

//Cadenas de texto
let nombre="Federico";
let apellido='Suarez';
let resultado="Mi nombre completo es: "+nombre+" "+apellido;
console.log(resultado);
let resultado2="Mi nombre tiene: "+nombre.length+" letras";
console.log(resultado2);
let resultado3="Mi nombre completo en mayúsculas es: ";
console.log(resultado3+nombre.toUpperCase()+" "+apellido.toUpperCase());