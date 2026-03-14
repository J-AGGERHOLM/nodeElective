import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

// ============ Pages ============

import pagesRouter from "./routers/pagesRouter.js";
app.use(pagesRouter);

// ============ API ============

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log("this server is running on port", server.address().port);
});
