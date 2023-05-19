import { Server } from "socket.io";
import {
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData,
} from "./types";
import * as http from "http";

const server: http.Server = http.createServer();

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(server, {
  cors: {
    origin: "*",
    methods: ["GET"],
  },
});

io.on("connection", (socket) => {
  console.log("open connection....");

  socket.emit("welcomeMsg", "Hello!");

  socket.on("disconnect", () => {
    console.log("close connection!!!");
  });

  socket.on("newText", (data) => {
    // Send broadcast
    io.emit("chat", data);
  });
});

server.listen("3005", () => {
  console.log("Server initialized!!");
});
