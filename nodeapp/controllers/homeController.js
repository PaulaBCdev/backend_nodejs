import { query, validationResult } from 'express-validator';  //para hacer validaciones

export function index(req, res, next) {
    // res.locals.appName = 'NodeAPP'

    res.locals.users = [
        { name: 'Smith', age: 45 },
        { name: 'Brown', age: 28 },
        { name: 'Jones', age: 34 },
    ]

    const now = new Date()
    res.locals.esPar = (now.getSeconds() % 2) === 0
    res.locals.segundoActual = now.getSeconds()

    res.locals.codigo = '<script>alert("inyectado!!!")</script>'

    res.render('home')
}

export function paramInRoute(req, res, next) {
    const num = req.params.num
    
    res.send('me has pasado ' + num)
}

export function paramInRouteMultiple(req, res, next) {
    const product = req.params.product
    const size = req.params.size
    const color = req.params.color
    
    res.send(`quieres un ${product} de talla ${size} y color ${color}`)
}

export const validateparamInQuery = [
    query('color')
        /* .notEmpty() */
        .custom(value => {            
            return ['red', 'blue'].includes(value)
        })
        .withMessage('must be red or blue'),
    
    query('talla')
        .isNumeric()
        .withMessage('must be numeric')
]  //quiero validar el parametro de la query que esta en los parentesis
export function paramInQuery(req, res, next) {
    validationResult(req).throw()
    // throw() lanza una excepcion de js si hay errores de validacion

    const color = req.query.color

    res.send(`El color es ${color}`)
}

export function postWithBody(req, res, next) {
    /* const age = req.body.age
    const color = req.body.color */
    const { age, color } = req.body  //esto es lo mismo que lo de encima 

    res.send('ok')
}