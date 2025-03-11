console.log('soy un módulo')

module.exports = {
  suma(a, b) { return a + b},
  texto: ''
}

// esto es similar a lo de arriba
module.exports.suma = (a, b) => { return a + b}
module.exports.text = ''

// exports es un alias a module.exports
// exports.texto2 = 'este es texto2'