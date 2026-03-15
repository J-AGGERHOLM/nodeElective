import { readPage, constructPage } from "./templatingEngine.js";

const index = readPage("./public/pages/index.html");
export const indexPage = constructPage(index, {
  documentTitle: "Overview",
  active: "overview",
});

const about = readPage("./public/pages/about.html");
export const aboutPage = constructPage(about, {
  documentTitle: "About",
  markDownPath: "/assets/markdown/00_about.md",
  active: "about",
});

const notesOne = readPage("./public/pages/01_notes.html");
export const notesOnePage = constructPage(notesOne, {
  documentTitle: "Node Intro",
  markDownPath: "/assets/markdown/01_Node.md",
  active: "note-01",
});

const notesTwo = readPage("./public/pages/02_notes.html");
export const notesTwoPage = constructPage(notesTwo, {
  documentTitle: "Functions & Express",
  markDownPath: "/assets/markdown/02_Functions-express.md",
  active: "note-02",
});

const notesThree = readPage("./public/pages/03_notes.html");
export const notesThreePage = constructPage(notesThree, {
  documentTitle: "Loops & Body Parser",
  markDownPath: "/assets/markdown/03_Loop-bodyParser.md",
  active: "note-03",
});

const notesFour = readPage("./public/pages/04_notes.html");
export const notesFourPage = constructPage(notesFour, {
  documentTitle: "Falsy, Methods & Styling",
  markDownPath: "/assets/markdown/04_Falsy-methods-styling.md",
  active: "note-04",
});

const notesFive = readPage("./public/pages/05_notes.html");
export const notesFivePage = constructPage(notesFive, {
  documentTitle: "Static, ES Modules & Navigation",
  markDownPath: "/assets/markdown/05_Static-EsModules-Navigation.md",
  active: "note-05",
});

const notesSix = readPage("./public/pages/06_notes.html");
export const notesSixPage = constructPage(notesSix, {
  documentTitle: "Scripts Ports & ENV",
  markDownPath: "/assets/markdown/06_PackageJsonScripts-envVariables.md",
  active: "note-06",
});

const notesSeven = readPage("./public/pages/07_notes.html");
export const notesSevenPage = constructPage(notesSeven, {
  documentTitle: "Routers, Components & SSR",
  markDownPath: "/assets/markdown/07_Routers-components-SSR.md",
  active: "note-07",
});
