exports.sum = (a, b) => {
  if(a < 0 || b < 0) {
    return "numeros invalidos"
  }
  return a + b
} 

exports.multiply = (a, b) => {
  return a * b
}

exports.subs = (a, b) => {
  return a - b
}

exports.person = (name, age) => {
  return {
    name,
    age,
    greet() {
      return `Hola soy ${name}`
    }
  }
} 

exports.map = (cb) => {
  return cb()
}

exports.createRobot = (x, y), position => {
  let x = "coordenada en x";
  let y = "coordenada en y";
  let orientation = position // dirección a la que apunta el robot "N", "E", "S", "W"

  function advance() {
    // función para avanzar
  }

  function turnRight() {
    // función para girar a la derecha
  }

  function turnLeft() {
    // función para girar a la izquierda
  }

  function instructions() {
    // función para recibir una serie de instrucciones Ejm: "RAALAL"
  }

  function getPosition() {
    return { coordinate: [x, y], position: orientation }
  }

}