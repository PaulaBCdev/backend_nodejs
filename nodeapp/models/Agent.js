import mongoose, { Schema } from 'mongoose'

// definir el esquema de los agentes
const agentSchema = new Schema({
    name: String,
    age: { type: Number, min: 18, max: 130 },
    updated: { type: Date, default: Date.now },
    owner: { type: Schema.Types.ObjectId, ref: 'User', index: true }  // para que te salgan solo los agentes que has creado tu
}, {
    collection: 'agentes'  // para forzar el nombre de la coleccion (en la base de datos se llama agentes, pero aqui lo llamamos Agent)
})

// crear el modelo
const Agent = mongoose.model('Agent', agentSchema)
//                 nombre del modelo, esquema creado arriba

export default Agent

// este modelo lo vamos a usar en el homeController para poder sacar de la base de datos los datos
