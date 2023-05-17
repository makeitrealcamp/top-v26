import * as http from "http";
import { Server } from "socket.io";
import {
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData,
} from "./types";

const server: http.Server = http.createServer();

// types for the main namespace
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
  console.log("Conecion OK...........");
  socket.emit("noArg");
  socket.emit("basicEmit", 1, "2", Buffer.from([3]));
  socket.emit("withAck", "4", (e) => {
    // e is inferred as number
  });

  socket.on("disconnect", () => {
    console.log("disconnected....");
  });

  // works when broadcast to all
  // io.emit("noArg");

  // works when broadcasting to a room
  //io.to("room1").emit("basicEmit", 1, "2", Buffer.from([3]));

  socket.on("clientMessage", (data) => {
    console.log("recibe un mensaje", data);
    io.emit("sendMessage", data);
    socket.emit("sendMessage", { message: "recibido" });
  });
});

console.log("aaaaaaaaaaaa");

server.listen("3005", () => {
  console.log("servidor...");
});
