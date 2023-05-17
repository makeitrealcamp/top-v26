"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var socket_io_1 = require("socket.io");
var server = http.createServer();
// types for the main namespace
var io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET"],
    },
});
io.on("connection", function (socket) {
    console.log("Conecion OK...........");
    socket.emit("noArg");
    socket.emit("basicEmit", 1, "2", Buffer.from([3]));
    socket.emit("withAck", "4", function (e) {
        // e is inferred as number
    });
    socket.on("disconnect", function () {
        console.log("disconnected....");
    });
    socket.on("close", function () {
        console.log("e desconectó el socket");
    });
    // works when broadcast to all
    // io.emit("noArg");
    // works when broadcasting to a room
    //io.to("room1").emit("basicEmit", 1, "2", Buffer.from([3]));
    socket.on("clientMessage", function (data) {
        console.log("recibe un mensaje", data);
        io.emit("sendMessage", data);
        socket.emit("sendMessage", { message: "recibido" });
    });
});
console.log("aaaaaaaaaaaa");
server.listen("3005", function () {
    console.log("servidor...");
});
