  
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
    divEscribir.innerHTML = contenidoplus; // almacenar
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
    
    ventana = window.open("", "pop-up", "width=500,height=300, toolbar=false, menubar=false, location=false");
    ventana.document.write(contenidoFinal);
    ventana.document.write("<input type=button value=Terminar pedido><br>");
    ventana.document.write("<input type=button value=Volver>");


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

var papaya = new FrutasVerano("papaya", 1.56,true);
var frambuesa = new FrutasVerano("frambuesa",15,92 ,true);
var arandanos = new FrutasVerano("arandanos", 16,true);
var sandia  = new FrutasVerano("sandia",2.03 ,true);
var platanos  = new FrutasVerano("platanos",1.95 ,true);
var melocoton  = new FrutasVerano("melocotón", 1.35,true);
var mango  = new FrutasVerano("mango", 2.35,true);
var aguacate  = new FrutasVerano("aguacate",4.69 ,true);
var nispero  = new FrutasVerano("nispero",5.38 ,true);
var guayaba  = new FrutasInvierno("guayaba",14.95,false);


function envioF(){
    ventana = window.open("", "pop-up", "width=500,height=300, toolbar=false, menubar=false, location=false");
    let nombreF = document.getElementById("nombre").innerHTML;

    let apellidoF = document.getElementById("apellidos").innerHTML;

    let direccionF = document.getElementById("direccion").innerHTML;

    ventana.document.write("Nombre: " + nombreF + "<br>");
    ventana.document.write("Apelldios: " + apellidoF + "<br>");
    ventana.document.write("Direccion: " + direccionF + "<br>");
    ventana.document.write("<button onclick='opener.cerrar();'>Cerrar</button>");

}


/**
 * 
 *  window.onload=() =>{
    let nombreF = document.getElementById("nombre").textContent;
    let obtenN = document.nombreF.innerHTML;
    let apellidoF = document.getElementById("apellidos").textContent;
    let direccionF = document.getElementById("direccion").textContent;
    let tarjetaSI = document.getElementById("si");
    let tarjetaNO = documnet.getElementById("no");
    let correcto = true;


    form.addEventListener("submit", (event) => {
        if (todoCorrecto) {
            let ventanilla = window.open("./ventanaF.html", "pop-up", "width=500px height=300px");
            let ventanilla
            event.preventDefault();
        }
    }, false)
}


 */

/* FORMULARIO*/

function Vnombre(){
    var n = document.forms["Formulario"]["nombre"].value;
    if(n == ""){
        alert("No se ha rellenado");
        return false;
    }
}

/**
 * 
 * 
 * 
 */
window.onload = function(){
    document.getElementById("formulario").addEventListener('submit',function(event){
        let validar=validaciones(event);
        if(validar){
            ventana();
            event.preventDefault();
        }
    },false);
    document.getElementById("si").addEventListener('click',tarjeta,false);
}


function validaciones(event){

    /** VALICACIÓN DE NOMBRE */
    var nombre = document.getElementById("nombre");
    var nombreF= document.getElementById("NombreP"); 
    if(!nombre.validity.valid){
        nombreF.style.color = "red";
        alert("Tienes que introducir el nombre");
        event.preventDefault();
        return false;
    }

    /** VALICACIÓN DE APELLIDO */
    var apellidos = document.getElementById("apellidos");
    var apellidosF= document.getElementById("ApellidosP"); 
    if(!apellidos.validity.valid){
        apellidosF.style.color = "red";
        alert("Tienes que introducir el apellido");
        event.preventDefault();
        return false;
    }

    /** VALICACIÓN DE DIRECCION */
    var direccion = document.getElementById("direccion");
    var direccionP = document.getElementById("DireccionP");
    if(!direccion.validity.valid){
        direccionP.style.color = "red";
        alert("Tienes que completar la dirección");
        event.preventDefault();
        return false;
    }

    /** VALICACIÓN DE EMAIL */
    var email = document.getElementById("email");
    var emailP = document.getElementById("EmailP");
    if(!email.validity.valid){
        emailP.style.color = "red";
        alert("Tienes que rellenar el email");
        event.preventDefault();
        return false;
    }

    /** VALICACIÓN DE PAGO */
    var pago = document.querySelector("input[name=entrega]:checked");
    var pagoP = document.getElementById("pagoP");
    if(!pago.validiti.valid){
        pago.style.color = "red";
        alert("Tienes que completar el campo");
        event.preventDefault();
        return false;
    }

    return true;
}


/** CREACION DE TARJETA */

function tarjeta(){
    var tarjetaCampo = document.getElementById("sino");
    var campoCreado = document.createElement("p");
    var campo = document.createElement("input");

    tarjetaCampo.appendChild(campoCreado);
    tarjetaCampo.appendChild(campo);

    campoCreado.innerHTML = "Codigo del cliente";
    campoCreado.setAttribute("id","codigoCliente");
    campoCreado.setAttribute("for","codigoClienteFor");

    campo.setAttribute("id","codigoCliente");
    campo.setAttribute("name","codigoCliente");
    campo.setAttribute("required","");
    campo.setAttribute("pattern","[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}");
    campoCreado.setAttribute();
}