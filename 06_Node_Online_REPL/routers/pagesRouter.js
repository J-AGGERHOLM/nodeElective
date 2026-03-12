import { Router } from "express";
import { frontPagePage } from "../util/pagesUtil.js";

const pagesRouter = Router();

pagesRouter.get("/", (req, res) => {
  res.send(frontPagePage);
});

pagesRouter.get("/about", (req, res) => {
  res.send(about);
});

pagesRouter.get("/contact", (req,res) => {
    res.send(contactPage)
})

export default pagesRouter;
