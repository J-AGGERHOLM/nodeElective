import "dotenv/config";
import express from "express";
const app = express();





app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))
import resturantRouter from "./routers/resturantRouter.js"
app.use(resturantRouter)
import visitorRouter from "./routers/visitorRouter.js"
app.use(visitorRouter);

const PORT = process.env.PORT ?? 8080
app.listen(PORT ?? 8080);



