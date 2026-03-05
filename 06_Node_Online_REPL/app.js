import express from "express";
const app = express();
app.use(express.static("public"));

app.use(express.json());

import path from "path";

// ================== Pages ==================

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/pages/frontend/frontend.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve("public/pages&frontend/about.html"));
});

// ================== API ==================
import { getOrCreateSandboxContext, executeCodeInSandbox } from "./util/replUtil.js";

app.post("/api/repl", (req, res) => {
  if (!req.body) {
    return res.status(400).send({ errorMessage: "Missing a JSON body" });
  }

  const { replcode, sandboxId } = req.body;

  if (!replCode) {
    return res.status(400).send({ errorMessage: "Missing the key replCode in the JSON body" });
  }

  const sandbox = getOrCreateSandboxContext(sandboxId);
  const { error, success, output, result } = executeCodeInSandbox(sandbox, replcode);

  if (error) {
    return res.status(500).send({ errorMessage: "Error executing the provided code", error });
  }

  res.send({ data: replCode });
});

const PORT = process.env.PORT; // || 8080;

const server = app.listen(PORT, () => {
  console.log("this server is running on port", server.address().port);
});
