import React, { useState } from "react";

import Input from "./components/class/Input";

import "./App.css";

function App() {
  const [text, setText] = useState("default");
  const [name, setName] = useState("default");

  return (
    <div
      className="App"
      style={{
        color: "red",
        textAlign: "center",
      }}
    >
      Text: <Input placeholder="Escriba su nombre" setValue={setText} />
      <br />
      Nombre: <Input placeholder="Escriba su nombre" setValue={setName} />
      {/*Apellido: <Input placeholder="Escriba su apellido" />
      Edad: <Input placeholder="Escriba su apellido" type="number" /> */}
      <h2>Text: {text}</h2>
      <h2>Nombre: {name}</h2>
    </div>
  );
}

export default App;
