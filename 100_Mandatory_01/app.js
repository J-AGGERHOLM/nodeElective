import express from 'express'
import path from 'path'

const app = express()

app.use(express.static('public'));

// ============ Pages ============

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/frontend/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve('public/frontend/about.html'))
})


// ============ API ============

app.listen(8080, () => {
    console.log('The server is running on port', 8080)
})