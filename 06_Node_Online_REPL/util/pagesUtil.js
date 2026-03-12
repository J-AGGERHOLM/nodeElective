import { readPage } from "./templatingEngine.js";

const frontPage = readPage("./public/pages/frontend/frontend.html");
const about = readPage("./public/pages/about.html");
const contact = readPage("./public/pages/contact/contact.html");

const header = readPage("./public/components/header/header.html");
const footer = readPage("./public/components/footer.html");

export const frontPagePage = header + frontPage + footer;

export const contactPage = header + contact + footer;
