import fs from "fs";

export function readPage(filePath) {
  return fs.readFileSync(filePath).toString();
}

export function constructPage(page, options = {}) {
  const header = readPage("./public/components/header.html");
  const navigation = readPage("./public/components/navigation.html");
  const footer = readPage("./public/components/footer.html");

  let markDownSection = "";
  if (options.markDownPath) {
    const markDown = readPage("./public/components/markDownContainer.html");
    markDownSection = markDown.replace(`$$MARKDOWN$$`, options.markDownPath);
  }

  return (
    header.replaceAll(`$$DOCUMENT_TITLE$$`, options.documentTitle || "Node.js Documentation") +
    navigation +
    page +
    markDownSection +
    footer
  );
}
