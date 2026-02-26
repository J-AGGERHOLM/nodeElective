//const express = require("express")
import express from "express";

const app = express();

//const cookiesUtil = require("./util/cookiesUtil");
//console.log(cookiesUtil.getCookie());

import { esModuleCookieFactory } from "./util/esModulesCookiesUtil.js";
console.log(esModuleCookieFactory());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/frontpage/frontPage.html");
});

app.get("/cookieFactory", (req, res) => {
  res.sendFile(__dirname + "/public/cookiefactory/cookiefactory.html");
});

app.listen(8080, () => {
  console.log("Server is running", 8080);
});
