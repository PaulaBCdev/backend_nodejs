'use strict';

const EventEmitter = require('node:events')

const emitter = new EventEmitter()

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