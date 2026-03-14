
import { readPage, constructPage } from "./templatingEngine.js";

const frontPage = readPage("./public/pages/frontend/frontend.html");
export const frontPagePage = constructPage(frontPage, {
  cssLinks: '<link rel="stylesheet" href="/assets/css/frontend.css">',
});

const about = readPage("./public/pages/about.html");
export const aboutPage = constructPage(about, {
  documentTitle: "Online Node.js REPL | About",
  cssLinks: '<link rel="stylesheet" href="/assets/css/frontend.css">',
});

const contact = readPage("./public/pages/contact/contact.html");
export const contactPage = constructPage(contact, {
  documentTitle: "Online Node.js REPL | Contact",
  cssLinks: '<link rel="stylesheet" href="/assets/css/frontend.css">',
});
