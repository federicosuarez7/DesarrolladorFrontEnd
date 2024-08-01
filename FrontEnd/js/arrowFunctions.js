// ArrowFunction sin parametros
const saludo = ()=>{
    console.log("Hola");
}

// ArrowFunction con parametros
const saludarNombre = (nombre) =>{
    console.log("Hola como estas "+nombre);
}

saludo();
saludarNombre("Federico");

const arrayNumeros = [1,2,3,4,5,6];
arrayNumeros.forEach((valor,posicion) =>{
    console.log(`El valor:${valor}, esta en la posicion: ${posicion}`);
})