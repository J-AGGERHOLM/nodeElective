const express = require('express');
const app = express();

const movies = [
    { id: 1, title: 'Garlic is as good as ten mothers' },
    { id: 2, title: 'Microscopic Subway to Oblivion' }
];

app.get("/movies", (req, res) => {
    res.send({ data: movies });
});

app.get("/movies/:id", (req, res) => {
    const providedMovieId = Number(req.params.id);
    const foundMovie = movies.find((movie) => movie.id === providedMovieId);

    if (!foundMovie) {
        res.status(404).send({ errorMessage: `No movie found by id: ${req.params.id}` });
    } else {
        res.send(foundMovie);
    }
});

/* 
    Status codes
2xx: Success
3xx: Redirection
4xx: Client error
5xx: Server error

*/


app.listen(8080);