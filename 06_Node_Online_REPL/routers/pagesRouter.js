import { Router } from "express";
import { frontPagePage, aboutPage, contactPage } from "../util/pagesUtil.js";

const pagesRouter = Router();

pagesRouter.get("/", (req, res) => {
  res.send(frontPagePage);
  console.log("IndexPage");
});

pagesRouter.get("/about", (req, res) => {
  console.log("aboutPage");
  res.send(aboutPage);
});

pagesRouter.get("/contact", (req, res) => {
  console.log("contactPage");
  res.send(contactPage);
});

export default pagesRouter;
