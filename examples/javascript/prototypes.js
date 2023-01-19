//Objeto Literal
const person= {
  isHuman: true,
  // métodos concisos (ES&)
  sayHello() { //metodo
    console.log(`Hola me llamo ${this.name}`)
  }
}

/* const laura = {
  name: 'Laura Esmoris',
  age: 30,
  // métodos concisos (ES&)
  sayHello() { //metodo
    console.log(`Hola me llamo ${this.name}`)
  }
} */

// Podemos cambiar el prototipo de un obejeto de dos formas

// 1. Object.create()
const felipe = Object.create(person, { name: {  value: 'Felipe Ramirez'}, age: { value: 30 }, isHuman: { value: false} })

/* console.log(felipe.age)
console.log(felipe.isHuman)

console.log(Object.getPrototypeOf(felipe)) */

// 2. funciones constructoras

function Person(name, age) { // parametros
  // Cada vez que se cree un objeto a partir de esta función se ejecuta el bloque de código
  //console.log('Esto se ejecuta') 
  this.name = name,
  this.age = age
}

Person.prototype = {
  isHuman: true,
  sayHello() {
    return `Hola me llamo ${this.name}`
  },
}


const diana = new Person("Diana", 30)
/* console.log(diana.name)
console.log(diana.age)
console.log(diana.isHuman)
console.log(diana.sayHello()) */

//const arr = new Array()

const arr = [1, 2, 3, 4, 5]

Array.prototype.sum = function() {
  let s = 0
  for(let i=0; i < this.length; i++){
    s += this[i]
  }

  return s
}

console.log('Suma del arreglo:', [1, 13, 20].sum())

"39200000".formatCurrency() //$39.200.000
