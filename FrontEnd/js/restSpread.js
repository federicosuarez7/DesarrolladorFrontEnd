// Parametros rest
function sumar(a,b,...c){
    let resultado = a + b;
    c.forEach(function(n){
        resultado += n;
    });
    return resultado;
}
console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));

// Operador spread

const arreglo1 = [1,2,3,4,5];
const arreglo2 = [6,7,8,9,0];
console.log("****Operacion sin spread operator****")
console.log(arreglo1,arreglo2);
console.log("****Operacion con spread operator****")
let arreglo3 = [...arreglo1,...arreglo2];
console.log(arreglo3);

