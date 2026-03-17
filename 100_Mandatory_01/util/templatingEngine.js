import fs from "fs";

export function readPage(filePath) {
  return fs.readFileSync(filePath).toString();
}

export function constructPage(page, options = {}) {
  const header = readPage("public/components/header.html");
  const navigation = readPage("public/components/navigation.html");
  const footer = readPage("public/components/footer.html");

  let markDownSection = "";
  if (options.markDownPath) {
    const markDown = readPage("public/components/markDownContainer.html");
    markDownSection = markDown.replace(`$$MARKDOWN$$`, options.markDownPath);
  }

  let assignmentsSection = "";
  if (options.active === "assignments") {
    //this is where i'll add the logic for loading in assignment components later
  }

  return (
    header.replaceAll(`$$DOCUMENT_TITLE$$`, options.documentTitle || "Node.js Documentation") +
    navigation
      .replace(`$$OVERVIEW_ACTIVE$$`, options.active === "overview" ? "text-primary" : "")
      .replace(`$$ABOUT_ACTIVE$$`, options.active === "about" ? "text-primary" : "")
      .replace("$$ASSIGNMENTS_ACTIVE$$", options.active === "assignments" ? "text-primary" : "")
      .replace("$$NOTE_01_ACTIVE$$", options.active === "note-01" ? "text-primary" : "")
      .replace("$$NOTE_02_ACTIVE$$", options.active === "note-02" ? "text-primary" : "")
      .replace("$$NOTE_03_ACTIVE$$", options.active === "note-03" ? "text-primary" : "")
      .replace("$$NOTE_04_ACTIVE$$", options.active === "note-04" ? "text-primary" : "")
      .replace("$$NOTE_05_ACTIVE$$", options.active === "note-05" ? "text-primary" : "")
      .replace("$$NOTE_06_ACTIVE$$", options.active === "note-06" ? "text-primary" : "")
      .replace("$$NOTE_07_ACTIVE$$", options.active === "note-07" ? "text-primary" : "") +
    page +
    markDownSection +
    assignmentsSection +
    footer
  );
}
