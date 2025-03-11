'use strict'

function creaVehiculo(nombre) {
    let numeroRuedas = 4
    return {
        saluda: function() { console.log('Hola soy', nombre, 'y tengo', numeroRuedas, 'ruedas') },
        ponRuedas: function(valor) { numeroRuedas = valor}
    }
}

const coche = creaVehiculo('seat')

coche.ponRuedas(8)

//coche.saluda()

setTimeout(coche.saluda, 2000)