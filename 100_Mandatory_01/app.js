import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

// ============ Pages ============

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/frontend/index.html"));
});

app.get("/notes/1", (req, res) => {
  res.sendFile(path.resolve("public/frontend/01_notes.html"));
});

app.get("/notes/2", (req, res) => {
  res.sendFile(path.resolve("public/frontend/02_notes.html"));
});

app.get("/notes/3", (req, res) => {
  res.sendFile(path.resolve("public/frontend/03_notes.html"));
});

app.get("/notes/4", (req, res) => {
  res.sendFile(path.resolve("public/frontend/04_notes.html"));
});

app.get("/notes/5", (req, res) => {
  res.sendFile(path.resolve("public/frontend/05_notes.html"));
});

app.get("/notes/6", (req, res) => {
  res.sendFile(path.resolve("public/frontend/06_notes.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve("public/frontend/about.html"));
});

// ============ API ============

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log("this server is running on port", server.address().port);
});
