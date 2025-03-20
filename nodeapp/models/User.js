import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },  // con el unique la base de datos crea un indice unico en el campo email para que no haya repetidos
    password: String
})

// metodo del modelo de usuario
userSchema.statics.hashPassword = (clearPassword) => {
    return bcrypt.hash(clearPassword, 7)
}

// metodo de las instancias de usuario
    /* en metodos de instancias, no usamos arrow functions para no cambiar el this que pone mongoose */
userSchema.methods.comparePassword = function(clearPassword) {
    // this --> user
    return bcrypt.compare(clearPassword, this.password)
    //            comprueba que la contraseña que me pasa el usuario coincide con la contraseña con hash
}

const User = mongoose.model('User', userSchema)

export default User