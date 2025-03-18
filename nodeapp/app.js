import path from 'node:path'
import express from 'express'
import createError from 'http-errors'
import logger from 'morgan'
import * as homeController from './controllers/homeController.js'

const app = express()

// aqui decimos que las vistas las va a encontrar en la carpeta views y que los tiene que cargar con la extension ejs. Si fuesemos a usar html, se escribe html
app.set('views', 'views') // views folder
app.set('view engine', 'ejs')
app.locals.appName = 'NodeApp'

/* app.use((req, res, next) => {
    console.log('Llega peticion de tipo', req.method, 'a', req.url) 
    // o respondemos o llamamos a next. Si no se queda colgado cargando en el browser
    next()
}) */
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))  //permite que las peticiones (menos get) tengan un body
app.use(express.static(path.join(import.meta.dirname, 'public')))


// aplication routes
app.get('/', homeController.index)
app.get('/param_in_route/:num?', homeController.paramInRoute)
app.get('/param_in_route_multiple/:product/size/:size(XS|S|M|L|XL)/color/:color', homeController.paramInRouteMultiple)
app.get('/param_in_query', homeController.validateparamInQuery, homeController.paramInQuery)
app.post('/post_with_body', homeController.postWithBody)

// catch 404 and send error
app.use((req, res, next) => {
    /* const error = new Error('no encuentro lo que me pides')
    error.status = 404 */
    next(createError(404))
})

// error handler
app.use((err, req, res, next) => {

    // manage validation errors
    if (err.array) {
        err.message = 'Invalid request:  ' + err.array()
            .map(e => `${e.location} ${e.type} ${e.path} ${e.msg}`)
            .join(', ')
        
            err.status = 422
    }
    // .array es un objeto que se le añade al error si es enviado por un metodo .throw() como el que hay en HomeController.js

    res.status(err.status || 500) // la respuesta del servidor va a ser el tipo de error que le hemos mandado desde el next de arriba. Si no hay ningun error marcado, se muestra en pantalla el 500
    //res.send('Ocurrio un error: ' + err.message)

    // set locals, including error information in development
    res.locals.message = err.message
    res.locals.error = process.env.NODEAPP_ENV === 'development' ? err : {}

    res.render('error')
})

export default app