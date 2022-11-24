// const Color = require('colors');

// function greet() {
//   return "Hola Mi nombre es Jhon Doe".green
// }

// console.log(greet())


/* function greet() {
  console.log("Hola soy " + student + " mucho gusto")
} */

/* const greet = () => {
  var student = "Jhon"
} */

const rate = 5

if (rate === 5) {
  const student = "Jhon"
  console.log(`Hola soy ${student} mucho gusto`)
} else {
  console.log("No es igual")
}

rate === 5 ? console.log("Si") : console.log("No")

//Destructuring - destructuración
//JSON - JavaScript Object Notation

const student = {
  name: "Jhon",
  lastname: "Doe",
  age: 33,
  pet: {
    petName: "Bruno",
    petAge: 8
  }
}

const { lastname, name, age, pet: { petName, petAge } } = student


console.log(`Hola soy ${name} ${lastname} y tengo ${age} años`)
console.log(petName, petAge)

const arrayNumbers = [1, 2, 3, 4]

const [first, second, third] = arrayNumbers

if (arrayNumbers[2] === 3)
  if (third === 3)

    console.log(first, second)