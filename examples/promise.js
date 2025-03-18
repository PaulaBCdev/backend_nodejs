'use strict'

// una funcion que devuelve una promesa
function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

const promesa = sleep(1000)

promesa.then(() => {
    console.log('ha pasado 1 segundo')
    return sleep(1000)
    // throw new Error('fatal!!!!')
}).then(() => {
    console.log('sigo')
}).catch(err => {
    console.error('Hubo un error', err.message)
})