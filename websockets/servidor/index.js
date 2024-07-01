const http = require("http").createServer();

const io = require("socket.io")(http, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    socket.on("message", (data) => {
        console.log("Conexión con:", data);
    });
});

http.listen(2810);
