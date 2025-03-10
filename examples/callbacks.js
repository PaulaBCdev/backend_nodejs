'use strict'

function suma(a, b, callback) {
    const resultado = a + b
    callback(resultado)
}

const resultado =  suma(3, 6, function(resultado) { // esto es lo que quiero que hagas despues de la suma
    console.log('terminado con resultado', resultado) 
})