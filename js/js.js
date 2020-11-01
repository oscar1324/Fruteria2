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