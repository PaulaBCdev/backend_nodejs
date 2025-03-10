'use strict'

function escribeTrasDosSegundos(texto, callback) {
    setTimeout(function() {
        console.log(texto)
        callback()
    }, 2000)
}

escribeTrasDosSegundos('texto1', function() {
    escribeTrasDosSegundos('texto2', function() {
        console.log('fin')
    })
})