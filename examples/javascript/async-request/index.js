// CRUD 
// CREATE - READ - UPDATE - DELETE
// POST - GET - PUT - DELETE

const btnSend = document.querySelector("#send")

// btnSend.addEventListener("click", () => {
//   const student = "Jhon Doe"

//   setTimeout(() => {
//     console.log("EStudiante:", student)
//   }, 2000)
// })

// btnSend.addEventListener("click", () => {
//   fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => {
//     console.log("Ups! ocurrió un error", error)
//   })
// })

// Respuesta de fetch tiene status entre 200 y 399 el no entra al cacth

// btnSend.addEventListener("click", async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//     throw new Error("Salió un error")
//     const json = await response.json()
//     console.log("Esta es la respuesta", json)

//   } catch(error) {
//     console.dir(error)
//   }
// })

// Respuesta de axios tiene status entre 200 y 299 el no entra al cacth


btnSend.addEventListener("click", async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log("Respuesta de axios:", response.data)
  } catch {
    console.dir(error)
  }
})



// API --> Aplication Programming Interfaces
// Es una forma sencilla de ejecutar procesos complejos