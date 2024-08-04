// Funciones constructoras (prototipos)
function Autos (motor,color,numPasajeros){
    // Atributos
    this.motor = motor;
    this.color = color;
    this.numPasajeros = numPasajeros;

    // Metodos
    this.arrancar = function(){
        console.log("----El vehiculo arrancó----\n");
    }
    this.frenar = function(){
        console.log("----El vehiculo frenó----\n");
    }
    this.estacionar = function(){
        console.log("----El vehiculo estacionó----\n");
    }
}

// Instanciamos un objeto de Autos
const renault = new Autos(1600,"azul",5),
    fiat = new Autos(1500,"blanco",2);

console.log(renault.arrancar);
console.log(renault.frenar);
console.log(renault.estacionar);