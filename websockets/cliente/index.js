const io = require("socket.io-client");

const socket = io("ws://localhost:2810");

socket.emit("message", "Juan Carlos");