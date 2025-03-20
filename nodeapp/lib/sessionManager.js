import session from 'express-session'
import MongoStore from 'connect-mongo'

const INACTIVITY_EXPIRATION_2_DAYS = 1000 * 60 * 60 * 24 * 2

// middleware para gestionar sesiones
export const middleware = session({ 
    name: 'nodeapp-session', //nombre que tendra la sesion,
    secret: 'KpSU=b-Q+[yBJYR&N7?tW3', //las cookies de mi ordenador van a ser diferentes a las de otras personas
    //       esto se ha hecho con un strong password generator y se ha pegado. Es random
    saveUninitialized: true,  //crea una sesion vacia a cada usuario
    resave: false,
    cookie: { maxAge: INACTIVITY_EXPIRATION_2_DAYS },
    //        despues de X dias las cookies caducan por inactividad y se vuelven a pedir las credenciales
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/cursonode'
    })  // stor sirve para guardar la info de las sesiones y conectar el sitio donde las guardamos con nuestra base de datos
})

export function useSessionInViews(req, res, next) {
    res.locals.session = req.session
    next()
}

export function guard(req, res, next) {
    if (!req.session.userId) {
        res.redirect(`/login?redir=${req.url}`)  
        // cuando la persona se logea, la web lo lleva a la direccion a la que queria ir desde el principio
        return
    }
    next()
}