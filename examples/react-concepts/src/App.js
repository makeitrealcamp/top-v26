import React, { useState } from "react";
import Input from "./components/class/Input";
import "./App.css";

function App() {
  const [state, setState] = useState("default");



  return (
    <div
      className="App"
      style={{
        color: "red",
        textAlign: "center",
      }}
    >
      

      <Input />
      <h1>{state}</h1>
    </div>
  );
}

export default App;
