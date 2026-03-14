
import fs from "fs";

export function readPage(filePath) {

  return fs.readFileSync(filePath).toString();
  
}

//default value of options in an empty object
export function constructPage(page, options = {}) {
  const header = readPage("./public/components/header/header.html");
  const footer = readPage("./public/components/footer.html");

  return (
    header
      .replace(`$$DOCUMENT_TITLE$$`, options.documentTitle || "Online Node.js REPL")
      .replace(`$$CSS_FILE$$`, options.cssLinks || "") +
    page +
    footer
  );
}
