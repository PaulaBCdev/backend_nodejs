import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },  // con el unique la base de datos crea un indice unico en el campo email para que no haya repetidos
    password: String
})

// metodo del modelo 
userSchema.statics.hashPassword = (clearPassword) => {
    return bcrypt.hash(clearPassword, 7)
}

const User = mongoose.model('User', userSchema)

export default User