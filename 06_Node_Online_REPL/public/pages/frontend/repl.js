const replCodeOutput = document.getElementById("repl-code-output");
const replInput = document.getElementById("repl-input");

replInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    runReplInput();
    replInput.value = "";
  }
});

function runReplInput() {
  fetch("/api/repl", {
    method: "POST",
    body: JSON.stringify({ replCode: replInput.value }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result.data);
    });
}
