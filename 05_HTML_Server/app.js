//const express = require("express")
import express from "express";

const app = express();

import path from "path";

//const cookiesUtil = require("./util/cookiesUtil");
//console.log(cookiesUtil.getCookie());

import { esModuleCookieFactory } from "./util/esModulesCookiesUtil.js";
console.log(esModuleCookieFactory());

app.use(express.static("public"));

console.log(path.resolve("public/redirection/redirection.html"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/frontpage/frontPage.html"));
});

app.get("/cookieFactory", (req, res) => {
  res.sendFile(path.resolve("public/cookiefactory/cookiefactory.html"));
});

app.get("/redirection", (req, res) => {
  res.sendFile(path.resolve("public/redirection/redirection.html"));
});

app.listen(8080, () => {
  console.log("Server is running", 8080);
});
