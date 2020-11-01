// VARIABLES ARRAYS
var cantidadFru = new Array(0,0,0,0,0,0,0,0,0,0);
var precioFru = new Array(1.56,15.92,16.00,2.03,1.95,1.35,2.35,4.69,5.38,14.95);
var nombrefru = new Array("Papaya","Frambuesa","Arandanos","Sandia","Platanos","Melocoton","Mango","Aguacate","Nispero","Guayaba");
// crear un array de objetos en el que ya meto todo esto, y esto sobra
var PT = new Array(0,0,0,0,0,0,0,0,0,0);
var total=0;
var aux=0;

// FUNCIONES
function acumulador(numero){
    let indicark = Number(prompt("¿Cuantos kilos de fruta quieres comrpar?"));
    for(var i=0;i<10;i++){
        if(i==numero){
            cantidadFru[i]++;
            aux++;
            PT[i]=parseFloat(cantidadFru[i] + indicark)*parseFloat( precioFru[i]);
            total+=parseFloat(PT[i]);
        }
    }
}

// SEGUNDA FUNCION
function envio(){
    let divEscribir;
    let divMas;
    let contenidoFinal = " "; /* creo*/ 
    let multiplica = 0;
    divEscribir=document.getElementById("final");
    divMas = document.getElementById("final");
    for (var i = 0; i < 10; i++) {
        if(cantidadFru[i] != 0){
            let multiplica = cantidadFru[i]*precioFru[i];
            contenidoFinal += "<p>" + nombrefru[i] + " --- "+ cantidadFru[i] + " Kilo " + " --- " + precioFru[i] + " €" + " --- " + parseFloat(multiplica) + " €";
        }
    }

    // ticekt
    contenidoFinal +="<p>Precio Medio: "+ parseInt(total/aux) + " € </p>";
    contenidoFinal+="<p>Precio Total: " + total + " Kilo </p>";

    let contenidoplus = " ";
    divEscribir.innerHTML = contenidoFinal; // almacenar
    contenidoplus = document.getElementById("final");
    contenidoplus = papaya.getNombre() + " --- " + papaya.getKilos + " --- " + papaya.getKilos();
    contenidoplus = frambuesa.getNombre() + " --- " + frambuesa.getKilos + " --- " + frambuesa.getKilos();
    contenidoplus = arandanos.getNombre() + " --- " + arandanos.getKilos + " --- " + arandanos.getKilos();
    contenidoplus = sandia.getNombre() + " --- " + sandia.getKilos + " --- " + sandia.getKilos();
    contenidoplus = platanos.getNombre() + " --- " + platanos.getKilos + " --- " + platanos.getKilos();
    contenidoplus = melocoton.getNombre() + " --- " + melocoton.getKilos + " --- " + melocoton.getKilos();
    contenidoplus = mango.getNombre() + " --- " + mango.getKilos + " --- " + mango.getKilos();
    contenidoplus = aguacate.getNombre() + " --- " + aguacate.getKilos + " --- " + aguacate.getKilos();
    contenidoplus = nispero.getNombre() + " --- " + nispero.getKilos + " --- " + nispero.getKilos();
    contenidoplus = guayaba.getNombre() + " --- " + guayaba.getKilos + " --- " + guayaba.getKilos();
    divMas.innerHTML = divMas;
    

}

class Frutas{
    constructor(precio,kilos, nombre){
        this.kilos = kilos;
        this.precio = precio;
        this.nombre = nombre;
    }
    getNombre(){
        return this.nombre;
    }

    getKilos(){
        return this.kilos;
    }

    getPrecio(){
        return this.precio;
    }

    sumardeKilos(kilos){
        this.kilos += kilos;
    }
}


class FrutasVerano extends Frutas{
    constructor(kilos, precio, nombre, proximidadSiNo){
        super(kilos, precio, nombre);
        this.proximidadSiNo = proximidadSiNo;
       
    }
}

class FrutasInvierno extends Frutas{
    constructor(kilos, precio, nombre, neveraSiNo){
        super(kilos, precio, nombre);
        this.neveraSiNo = neveraSiNo;
    }
    getConservar(){
        return this.neveraSiNo;
    }
}
