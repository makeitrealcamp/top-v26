// ES6 - EcmaScript 6 --> 2015

// OPERADOR TERNIARIO

/* const _name = "Nicolas"

if(_name === "Nicolas") {
  console.log("Usuario aceptado")
} else {
  console.log("Usuario rechazado")
}

"condicion" ? "verdadera" : "false"
_name === "Nicolas" ? console.log("Usuario aceptado") : console.log("usuario rechazado") */

// función flecha ó arrow function

/* function test(a, b) {
  return a + b
}

const test = (a, b) => {} */

// Ambito de variables en bloque (let const)

//

// //

// // //


/* if(true) {
  const num = 3 
}

console.log("Este es un var:", num) */

// Plantillas literales 

/* const top = "TOP 24"

console.log("Hola " + top + " bienvenidos")
console.log(`Hola ${top} bienvenidos`) */

// Sintaxis corta de objetos

/* const _name = "Jhon"
const lastname = "Doe"

const user = { _name: _name, lastname: lastname }
const _user = { _name, lastname }


console.log("USUARIO:", user)
console.log("USUARIO:", _user) */

// Spread operator

/* const _name = "Jhon"
const lastname = "Doe"

const user = { _name, lastname}

const sesion = {
  teacher: "Sergio",
  date: "19-ene-2023",
  ...user
} */

// Destructuring o destructuramiento

const person = {
  _name: "Jhon",
  lastname: "Doe",
  age: 33,
  city: "gotica"

}

console.log(person._name)
const { lastname, age, city } = person
console.log(lastname)

const students = ["Carlos", "Diana", "Ivan", "Felipe"]
const [x, y, z, a] = students
const arrNames = [...students, "Laura"]
console.log(a)
console.log(arrNames)

// Valores por defecto

const test = (a, b = 0) => {
  return a + b
}

console.log(test(1))