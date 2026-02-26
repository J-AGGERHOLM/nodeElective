const express = require("express")

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontPage.html");
})

app.listen(8080, () => {
    console.log("Server is running", 8080)
});