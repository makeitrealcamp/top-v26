import React, { useState } from "react";
import Input from "./components/class/Input";
import InputFunction from "./components/function/InputFunction";
import Header from "./components/class/Header";
import CssModules from "./components/function/CssModules";
import "./App.scss";

function App() {
  const [text, setText] = useState("default");
  const [showFilter, setShowFilter] = useState(false);
  const [showFilterFunction, setShowFilterFunction] = useState(false);

  return (
    <div
      className="App"
      style={{
        color: "black",
        textAlign: "center",
      }}
    >
      <Header>
        <h1>Welcome!!</h1>
        <button onClick={() => setShowFilter(!showFilter)}>
          {showFilter ? "Hide filter Class" : "Show filter Class"}
        </button>
        <button onClick={() => setShowFilterFunction(!showFilterFunction)}>
          {showFilterFunction ? "Hide filter Function" : "Show filter Function"}
        </button>
      </Header>
      {showFilter && (
        <>
          Text: <Input placeholder="Escriba su nombre" setValue={setText} />
        </>
      )}
      {showFilterFunction && (
        <>
          Text Function:
          <InputFunction placeholder="Escriba su nombre" setValue={setText} />
        </>
      )}

      <br />
      <h2>Text: {text}</h2>
      <CssModules />
    </div>
  );
}

export default App;
