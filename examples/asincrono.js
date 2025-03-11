'use strict'

/* 
Llamada1 - 2secs - texto1 - llamada2 - 2secs - texto2 - Fin
*/
function escribeTrasDosSegundos(texto, callback) {
    setTimeout(function() {
        console.log(texto)
        callback()
    }, 2000)
}

/* escribeTrasDosSegundos('texto1', function() {
    escribeTrasDosSegundos('texto2', function() {
        console.log('fin')
    })
})  */


/*
Repitamos la llamada a escribeTrasDosSegundos varias veces
*/
function serie(n, funcionQueQueremosEjecutar, callbackFinal) {
    if(n === 0) {
        // he terminado
        callbackFinal()
        return
    }
    n = n - 1
    funcionQueQueremosEjecutar('texto' + n, function() {
        serie(n, funcionQueQueremosEjecutar, callbackFinal)
    })
}

serie(5, escribeTrasDosSegundos, function() {
    console.log('fin')
})



