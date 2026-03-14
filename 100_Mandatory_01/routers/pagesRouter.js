import { Router } from "express";
import {
  aboutPage,
  indexPage,
  notesOnePage,
  notesTwoPage,
  notesThreePage,
  notesFourPage,
  notesFivePage,
  notesSixPage,
  notesSevenPage,
} from "../util/pagesUtil.js";

const pagesRouter = Router();

pagesRouter.get("/", (req, res) => {
  res.send(indexPage);
});

pagesRouter.get("/about", (req, res) => {
  res.send(aboutPage);
});

pagesRouter.get("/notes/1", (req, res) => {
  res.send(notesOnePage);
});

pagesRouter.get("/notes/2", (req, res) => {
  res.send(notesTwoPage);
});

pagesRouter.get("/notes/3", (req, res) => {
  res.send(notesThreePage);
});

pagesRouter.get("/notes/4", (req, res) => {
  res.send(notesFourPage);
});

pagesRouter.get("/notes/5", (req, res) => {
  res.send(notesFivePage);
});

pagesRouter.get("/notes/6", (req, res) => {
  res.send(notesSixPage);
});

pagesRouter.get("/notes/7", (req, res) => {
  res.send(notesSevenPage);
});

export default pagesRouter;
