import User from '../models/User.js'

export function index(req, res, next) {
    res.locals.error = ''
    res.locals.email = ''
    res.render('login')
}

export async function postLogin(req, res, next) {
    try {
        const { email, password } = req.body
        const redir = req.query.redir
    
        // buscar el usuario en la base de datos
        const user = await User.findOne({ email: email })
        //                              { nombre de la propiedad en la base de datos: nombre del req.body}
    
        // si no encuentra el usuario o la contraseña no coincide --> error
        if (!user || !(await user.comparePassword(password))) {
            res.locals.error = 'Invalid credentials'
            res.locals.email = email
            res.render('login')
            return
        }
    
        // si el usuario existe y la contraseña es buena --> redirect a la home
        /* apuntar que el usuario esta logeado */
        req.session.userId = user.id

        res.redirect(redir ? redir : '/')

    } catch (error) {
        next(error)
    }
}

export function logout(req, res, next) {
    req.session.regenerate(err => {
        if (err) {
            next(err)
            return
        } 

        res.redirect('/')
    })
}