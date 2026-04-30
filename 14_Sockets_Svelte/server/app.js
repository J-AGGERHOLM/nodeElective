import "dotenv/config";

import express from "express";
const app = express();

app.use(express.json());

import cors from "cors";
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

import session from "express-session";

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
});

app.use(sessionMiddleware);

import nicknameRouter from "./routers/nicknamesRouter.js";
app.use(nicknameRouter);

import http from "http";
const server = http.createServer(app);

//This URL Needs to return javascript code.
// it is what the client downloads to get access to the 'io()' function
//which is used to connect the Socket.IO server.
//
//http://localhost:8080/socket.io/socket.io.js

//IO is our server, it manages namespaces that are written simmilarly to a
// endpoint: '/' or '/admin'. IO is also our default namespace.
//namespaces are what a server and a client will communicate through
//creating multiple namespaces will allow for seperate lines of communications with different responsibilities
//namespaces manage connections called "sockets"
import { Server } from "socket.io";
//Initialize socket.io with the new server we created to use,
// with CORS configurations
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

//wires existing express session into socket.io, so it can access session data
io.engine.use(sessionMiddleware);

//socket on is the brain
//connect is a default event, so is disconnect
io.on("connection", (socket) => {
  console.log("A new socket connected witg id", socket.id);

  socket.on("client-sends-color", (data) => {
    const session = socket.request.session;

    session.timeSubmitted = (session.timeSubmitted || 0) + 1;
    session.save();

    data.nickname = session.nickname;
    data.timeSubmitted = session.timeSubmitted;

    // Emits to ALL sockets including itself
    io.emit("server-sends-color", data);

    //Broadcasts to all sockets EXCEPT itself:
    //socket.broadcast.emit("server-sends-color", data)

    //Emits to the socket ITSELF but not the others
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
