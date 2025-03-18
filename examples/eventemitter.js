'use strict';

const EventEmitter = require('node:events')  // importamos la clase EventEmitter del modulo nativo de Node.js

const emitter = new EventEmitter()  // creamos una instancia de EventEmitter que usaremos para emitir y escuchar eventos

emitter.on('llamada de telefono', (payload) => {
    if (payload.llamante === 'hermana') {
        return
    }
    console.log('ring ring')
})

emitter.once('llamada de telefono', () => {
    console.log('brr brr')
})

emitter.emit('llamada de telefono', { llamante: 'hermana' })
emitter.emit('llamada de telefono', { llamante: 'hermana' })
emitter.emit('llamada de telefono', { llamante: 'hermana' })