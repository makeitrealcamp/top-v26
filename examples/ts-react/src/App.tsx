import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./components/Login"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <><Login label1="username" label2="email"/></>;
}

export default App;
