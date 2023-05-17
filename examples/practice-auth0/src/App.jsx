import { useState } from "react";
import { CustomRouterProvider } from "./router";
import "./App.css";

function App() {
  return (
    <>
      <CustomRouterProvider />
    </>
  );
}

export default App;
