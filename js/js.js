  
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
    let contenidoFinal = " "; /* creo*/ 
    let multiplica = 0;
    divEscribir=document.getElementById("Derecha");
    for (var i = 0; i < 10; i++) {
        if(cantidadFru[i] != 0){
            let multiplica = cantidadFru[i]*precioFru[i];
            contenidoFinal += "<p>" + nombrefru[i] + " --- "+ (cantidadFru[i]) + " Kilo " + " --- " + precioFru[i] + " €" + " --- " + parseFloat(multiplica) + " €";
        }
    }

    // ticekt
    contenidoFinal +="<p>Precio Medio: "+ parseInt(total/aux) + " € </p>";
    contenidoFinal+="<p>Precio Total: " + total + " Kilo </p>";
    divEscribir.innerHTML = contenidoFinal; // almacenar

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

var papaya = new FrutasVerano("Papaya", 1.56,true);
var frambuesa = new FrutasVerano("Frambuesa",15,92 ,true);
var arandanos = new FrutasVerano("Arandanos", 16,true);
var sandia  = new FrutasVerano("Sandia",2.03 ,true);
var platanos  = new FrutasVerano("Platanos",1.95 ,true);
var melocoton  = new FrutasVerano("Melocotón", 1.35,true);
var mango  = new FrutasVerano("Mango", 2.35,true);
var aguacate  = new FrutasVerano("Aguacate",4.69 ,true);
var nispero  = new FrutasVerano("nispero",5.38 ,true);
var guayaba  = new FrutasInvierno("guayaba",14.95,false);

function envioF(){
    ventana = window.open("", "pop-up", "width=500,height=300, toolbar=false, menubar=false, location=false");
    let nombreF = document.getElementById("nombre");
    let n
    nombreF.innerHTML = n;
    //let obtenNombre = nombreF.innerHTML;
    let apellidoF = document.getElementById("apellidos");
    let direccionF = document.getElementById("direccion");


    ventana.document.write("Nombre: " + n + "<br>");
    ventana.document.write("Apelldios: " + apellidoF + "<br>");
    ventana.document.write("Direccion: " + direccionF + "<br>");
    ventana.document.write("<button onclick='opener.cerrar();'>Cerrar</button>");

}




window.onload=() =>{
    let nombreF = document.getElementById("nombre");
    let apellidoF = document.getElementById("apellidos");
    let direccionF = document.getElementById("direccion");
    let tarjetaSI = document.getElementById("si");
    let tarjetaNO = documnet.getElementById("no");
    let correcto = true;


    form.addEventListener("submit", (event) => {
        if (todoCorrecto) {
            let ventanilla = window.open("./ventanaF.html", "pop-up", "width=500px height=300px");
            event.preventDefault();
        }
    }, false)





}