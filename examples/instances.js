'use strict';

// crear una funcion para usarla como un constructor de objetos
function Fruta(nombre) {
    this.nombre = nombre
    this.saluda = function() { console.log('Hola, soy', this.nombre) }
}

const limon = new Fruta('limon')

/*
JavaScript, para determinar cual es el contenido del "this" en un metodo, 
busca el primer punto a la izquierda de los parentesis de ejecucion
y lo que hay a la izquierda de ese punto es el "this"
*/

//limon.saluda() -> aqui, el "this" es limon
// setTimeout(limon.saluda, 2000) -> aqui nos da "Hola, sopy undefined" porque no hay parentesis de ejecucion en el metodo, ya que si hubiese no esperaria los 2s
/*
const miFuncion = limon.saluda
miFuncion() -> tambien me da error porque, aunque hay parentesis de ejecucion, no hay punto, por lo que no encuentra el "this"
*/

// Para que funcione bien el "this"
setTimeout(limon.saluda.bind(limon), 2000) // "bind" es un metodo que tienen todas las funciones. Entre parentesis se pone lo que seria el "this"

const miFuncion = limon.saluda.bind(limon)
miFuncion()

// tambien se puede solucionar el problema del "this" asignando una arrow function en el momento de declarar el metodo. Por ejemplo:
/*
function Fruta(nombre) {
    this.nombre = nombre
    this.saluda = () => { console.log('Hola, soy', this.nombre) }
}
*/