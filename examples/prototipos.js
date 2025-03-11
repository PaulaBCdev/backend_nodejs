'use strict';

function Persona(nombre) {
    this.nombre = nombre
    //this.saluda = function() { console.log('Hola soy', this.nombre) }
}

const pepe = new Persona("Pepe")
const luis = new Persona('Luis')

Persona.prototype.saluda = function() { console.log('Hola soy', this.nombre) }

pepe.saluda()
luis.saluda()



// Herencia simple

// Quiero hacer un tipo de Objetos "Agente" que hereden de "Persona"
function Agente(nombre) {
    // heredar el constructor de las personas
    // como: ejecutar el constructor Persona, pero con mi "this"
    Persona.call(this, nombre) // en python es el super() de OOP
}

// heredar las propiedades del prototipo de las personas
Object.setPrototypeOf(Agente.prototype, Persona.prototype)

const smith = new Agente('Smith')

smith.saluda()



// Herencia multiple

// Quiero que los agentes, ademas de heredar de las personas, tambien hereden de "Superheroe"
function Superheroe() {
    this.vuela = function() { console.log(this.nombre, 'vuela') }
}

// copiar todas las propiedades de los Superheroes
Object.assign(Agente.prototype, new Superheroe())

smith.vuela()

console.log(smith)  // Agente { nombre: 'Smith' }
console.log(Agente.prototype)  // Persona { vuela: [Function (anonymous)] }
console.log(smith instanceof Persona)  // true
console.log(smith instanceof Agente)  // true
console.log(smith instanceof Superheroe)  // false
