import mongoose from 'mongoose'

export default function connectMongoose() {
    return mongoose.connect('mongodb://localhost/cursonode')
    .then(mongoose => mongoose.connection)
    // en los parentesis ponemos la "url" en la que esta la base de datos y la "carpeta" donde tenemos la base de datos dentro de NoSQLBooster
}