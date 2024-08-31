// Creacion de la clase
class Animal{
    constructor(nombre,especie,tamanio){
        this.nombre = nombre;
        this.tamanio = tamanio;
    }
    caminar(){
        console.log(`Tu mascota, ${this.nombre} esta caminando!!!`);
    }
    detenerse(){
        console.log(`${this.nombre} se detuvo!`);
    }
}

class Perros extends Animal{
    constructor(nombre,tamanio,raza){
        super(nombre,tamanio);
        this.raza = raza;
    }
    // Metodos de clase
    ladrar(){
        console.log("Guau,guau");
    }
    moverLaCola(){
        console.log(`Tu mascota,${this.nombre} esta moviendo la cola`);
    }
}

// Instanciacion de objetos
const bito = new Perros("Bito","pequenio","Maltes");
bito.caminar();
bito.ladrar();
bito.moverLaCola();
bito.detenerse();

