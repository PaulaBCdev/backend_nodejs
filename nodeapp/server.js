
import http from 'node:http'
import app from './app.js'

const port = process.env.PORT || 3000


// create http server
const server = http.createServer(app)

server.on('error', err => console.error(err))  // cuando salte un error, se muestra en la pantalla ese error
server.on('listening', () => {
    console.log(`Server started on http://localhost:${port}`)
})
server.listen(port)