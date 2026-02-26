import express from "express";

const app = express();

// ================== Pages ==================

// ================== API ==================
app.post('/api/repl', (req, res) => {
    let replCode = req.body?.replCode;

    if (!replCode) {
        return res.status(400).send({ errorMessage: 'Missing the key replCode in the JSON body' });
    }
    
    replCode = replCode.replace('console.log("', '').replace('")', '');

    res.send({ data: replCode });
});

app.listen(8080, () => {
    console.log("this server is running on port", 8080)
})