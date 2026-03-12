import express from "express";
const app = express();
app.use(express.static("public"));

app.use(express.json());

// ================== Pages ==================
import pagesRouter from "./routers/pagesRouter.js";

app.use(pagesRouter);

// ================== API ==================

import replRouter from "./routers/replRouter.js";
app.use(replRouter);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log("this server is running on port", server.address().port);
});
