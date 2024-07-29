try{
    console.log("En el try se coloca el codigo a evaluar");
    varNoExiste;
    console.log("Segundo msj");
}catch(error){
 console.log("Captura cualquier error lanzado en try");
 console.log("Mensaje de error: "+error);
}finally{
    console.log("Siempre se ejecuta este bloque al final");
}
console.log("**********************************");

// Manejo de errores propios
try{
    let num = "a";
    if (isNaN(num)) {
        throw new Error("El valor ingresado no es un numero");
    }
    console.log(num*6);
}catch(error){
   console.log("Mensaje del error: "+ error); 
}