const modulo = require('./modulo')
const modulo2 = require('./modulo')
const modulo3 = require('./modulo')
const modulo4 = require('./modulo')
const modulo5 = require('./modulo')
const modulo6 = require('./modulo')
const modulo7 = require('./modulo')
const moduloES = require('./modulo-es.mjs')

console.log(modulo3.suma(3, 5))

modulo3.texto = 'texto asignado en modulo3'

console.log(modulo7.texto)

// ejemplo de cargar modulos ES
console.log(moduloES.default.suma(4, 8))

console.log(moduloES.texto3)