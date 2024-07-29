// Destructuracion
const arreglo = ["uno",2,"tres",4];
const [num1,num2,num3,num4] = arreglo;
console.log(num1,num2,num3,num4);
const persona = {
    nombre: "Fede",
    apellido: "Suarez",
    edad:35
}
const {nombre,apellido,edad} = persona;
console.log("Mi nombre es "+nombre);
console.log("Mi apellido es "+apellido);
console.log("Mi edad es "+edad);
console.log("*********************************");
