//Movies API

const express = require("express");

const app = express();
const movies = [
  { id: 1, name: "Batman" },
  { id: 2, name: "Moulin Rouge" },
  { id: 3, name: "Avatar" },
  { id: 4, name: "Lord of the Rings" },
  { id: 5, name: "Jujutsu Kaisen" },
  { id: 6, name: "Meow" },
];

const findById = (id) => {
  id = Number(id);

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id === id) {
      return movies[i];
    }
  }
};

app.get("/movies", (request, response) => {
  response.send({ data: movies });
});

app.get("/movies/:id", (request, response) => {
  response.send({ data: findById(request.params.id) });
});

app.listen(8080);
