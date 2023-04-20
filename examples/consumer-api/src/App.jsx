import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODE5NTE4MDgsImV4cCI6MTY4MTk1NTQwOH0.LmDUzS455zXa97KJQXxarP1A-nEmPyF35_kC8uSMGtg" 

  const getData = () => { 
    const url = "http://localhost:4000/gestor"
    fetch(url, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(data=>data.json())
    .then(data =>{
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(()=>{
    getData()
  })

  return (
    <div className="App">
    hello
    </div>
  )
}

export default App
