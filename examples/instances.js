'use strict';

// crear una funcion para usarla como un constructor de objetos
function Fruta(nombre) {
    this.nombre = nombre
    this.saluda = function() { console.log('Hola, soy', this.nombre) }
}

const limon = new Fruta('limon')

console.log(limon)

limon.saluda()