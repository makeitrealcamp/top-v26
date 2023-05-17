import { useState, useEffect } from "react";
import { useSocket } from "./hooks/useSocket";

import "./App.css";

//const socket = io("http://localhost:3005");

function App() {
  const socket = useSocket("ws://localhost:3005", {
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    autoConnect: false,
  });

  const [chatList, setChatList] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    socket.connect();

    StartListeners();
    // socket.on("connect", () => {
    //   console.log("conetado...", socket);
    // });

    // socket.on("sendMessage", (m) => {
    //   console.log("llego un mensaje ", m);
    //   m &&
    //     setChatList((prev) => {
    //       return [...prev, { ...m, date: new Date(Date.now()) }];
    //     });
    // });

    // socket.on("broadcast", (m) => {
    //   console.log("llego un mensaje ", m);
    //   m &&
    //     setChatList((prev) => {
    //       return [...prev, { message: m, date: new Date(Date.now()) }];
    //     });
    // });
  }, []);

  const StartListeners = () => {
    socket.on("sendMessage", (m) => {
      console.log("llego un mensaje ", m);
      m &&
        setChatList((prev) => {
          return [...prev, { ...m, date: new Date(Date.now()) }];
        });
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = e.target.elements[0].value;
    console.log(message);
    socket.emit("clientMessage", { user, message });
  };

  return (
    <>
      chat form
      <input value={user} onChange={(e) => setUser(e.target.value)} />
      <div>
        {chatList.map((item) => (
          <h1>
            {item.user}: {item.message}
          </h1>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>send</button>
      </form>
    </>
  );
}

export default App;
