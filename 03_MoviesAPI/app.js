const express = require("express");
const app = express();
app.use(express.json());

const movies = [
  { id: 1, title: "Garlic is as good as ten mothers" },
  { id: 2, title: "Microscopic Subway to Oblivion" },
];

let nextID = 3;

app.get("/movies", (req, res) => {
  res.send({ data: movies });
});

app.get("/movies/:id", (req, res) => {
  const providedMovieId = Number(req.params.id);
  const foundMovie = movies.find((movie) => movie.id === providedMovieId);

  if (!foundMovie) {
    res
      .status(404)
      .send({ errorMessage: `No movie found by id: ${req.params.id}` });
  } else {
    res.send(foundMovie);
  }
});

app.post("/movies", (req, res) => {
  const newMovie = req.body;
  newMovie.id = nextID++;

  if (!newMovie.title) {
    res.status(400).send({ errorMessage: `Movie must have a title` });
  } else {
    movies.push(newMovie);
    res.send({ data: newMovie });
  }
});

app.patch("/movies/:id", (req, res) => {
  const providedMovieId = Number(req.params.id);
  const foundMovieIndex = movies.findIndex(
    (movie) => movie.id === providedMovieId,
  );
  const foundMovie = movies[foundMovieIndex];

  if (!foundMovie) {
    res
      .status(404)
      .send({ errorMessage: `No movie found by id : ${providedMovieId}` });
  } else {
    const providedMovie = req.body;

    foundMovie.id = providedMovie.id;
    foundMovie.title = providedMovie.title;
    //combining the found and provided movies, the last entry overrides the parameters of the first one if they match. 
    //if there's a new parameter then it's added.
    const movieToCreate = { ...foundMovie, ...providedMovie };
    res.send({ data: movieToCreate });
  }
});

app.delete("/movies/:id", (req, res) => {
  const providedMovieId = Number(req.params.id);
  //good idea to use findIndex, fast and stops immidiately when it finds the correct entry.
  const foundMovieIndex = movies.findIndex(
    (movie) => movie.id === providedMovieId,
  );

  if (foundMovieIndex === -1) {
    res
      .status(404)
      .send({ errorMessage: `No movie found by id : ${providedMovieId}` });
  } else {
    movies.splice(foundMovieIndex, 1);
    const deletedMovie = movies[foundMovieIndex];

    res.status(204).send();
  }
});

/* 
    Status codes
2xx: Success
3xx: Redirection
4xx: Client error
5xx: Server error

*/
//the last lipstic will override the previous one:
const myBag = {
  lipstick: "red",
  lipstick: "dark red",
};

const yourBag = {
  lipstick: "black",
  hairspray: true,
};

//combine the objects in the console log
console.log({ ...myBag, ...yourBag });

app.listen(8080);
