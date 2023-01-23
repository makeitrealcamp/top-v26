// Las funciones son ciudadanos de primer tipo

// COMPOSICIÓN

function person(name, age){
  return {
    name,
    age
  }
}

const jhon = person("Jhon Doe", 33)

function teacher(name, age, lesson) {
  return {
    lesson,
    ...person(name, age)
  }
}

const sergio = teacher("Sergio", 28, "javascript")

console.log(sergio)

// INMUTABILIDAD

let arr = [1, 2, 3]
arr = arr.concat(4)

// FUNCIONES PURAS - SIDE EFFECT

let num = 1
let numSE = 2

function pureFunction(a, b) {
  a = 2
  b = 20
  return b
}


console.log(pureFunction(num, numSE))
console.log(num, numSE)

// Dados los mismos argumento siempre retorna el mismo resultado

function sum(a, b) {
  return a + b
}

console.log(sum(1, num))
console.log(sum(1, num))
num = 2
console.log(sum(1, num))

// formas de definir una función 

function test() {}

const test = () => {}
test()

(test = () => {})()

const test = function () {}
test()

// Diferencias

function test1(a, b) {
  return a + b
}
test1()

const test2 = (a, b) => a + b
test2()