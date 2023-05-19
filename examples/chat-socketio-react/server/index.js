"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = require("socket.io");
var http = require("http");
var server = http.createServer();
var io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET"],
    },
});
io.on("connection", function (socket) {
    console.log("open connection....");
    socket.emit("welcomeMsg", "Hello!");
    socket.on("disconnect", function () {
        console.log("close connection!!!");
    });
    socket.on("newText", function (data) {
        // Send broadcast
        io.emit("chat", data);
    });
});
server.listen("3005", function () {
    console.log("Server initialized!!");
});
