import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import "./App.css";

const socket: Socket = io("http://localhost:3005");

function App() {
  const [connected, setConnected] = useState<boolean>(false);
  const [msj, setMsj] = useState<string>("");
  const [text, setText] = useState<string>("");

  useEffect(() => {
    listeners();
  }, []);

  const listeners = () => {
    socket.on("connect", () => {
      setConnected(true);
    });

    socket.on("welcomeMsg", (data) => {
      console.log("Message received! ", data);
      setMsj(data);
    });

    socket.on("chat", (data) => {
      setMsj(data);
    });
  };

  const sendText = () => {
    socket.emit("newText", text);
  };

  return (
    <>
      chat form {connected && <h1>Connected!</h1>}
      <h1>{msj}</h1>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={sendText}>send</button>
      </div>
    </>
  );
}

export default App;
