import express from "express";

const app = express();

app.use(express.static("public"));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

//socket on is the brain
//connect is a default event, so is disconnect
io.on("connection", (socket) => {
  console.log("A new socket connected witg id", socket.id);

  //socket emits data to the client
  socket.on("client-sends-color", (data) => {
    //io is not socket, it is our namespace
    io.emit("server-sends-color", data);

    //socket.broadcast.emit("server-sends-color", data);

    //console.log(data);
    //socket.emit("server-sends-color", data);
  });

  socket.on("disconnect", () => {
    console.log("A socket disconnected", socket.id);
  });
});

const PORT = process.env.PORT ?? 8080;

server.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
