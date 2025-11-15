const express = require("express");
const http = require("http");

// Create Socket Server
const { Server } = require("socket.io");

const app = express();
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const io = new Server(server);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("🟢 User Connected");

  socket.on("message", (msg) => {
    console.log("Message:", msg);

    socket.broadcast.emit("message", msg);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
