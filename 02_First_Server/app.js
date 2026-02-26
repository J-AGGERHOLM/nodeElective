// import express
const express = require("express");

// instantiate express
const app = express();

//use the parser, so that the body is converted to JSON
app.use(express.json());

// one-liner:
//const app = require('express')();
/*
app.get("/", (request, response) => {
  response.send({ data: "welcome to the first server" });
});
*/

// task create a new route call snowstorm, it should respond with a warning
app.get("/snowstorms", (request, response) => {
  response.send({ data: "WARNING: SNOWSTROM IS COMING" });
});


app.get("/forecast", (req,res) => {
  res.redirect("/snowstorms");
})


// how can we send data in a GET request

// path variable
app.get("/cars/:carModel/:year", (req, res) => {
  console.log(req.params);
  res.send({
    data: `Your ${req.params.carModel} ${req.params.year} is very nice`,
  });
});

// query string / query parameters
//?parametername=value&parametertwo=valuetwo
//http://localhost:8080/bag?itemOne=food&itemTwo=water
app.get("/bag", (req, res) => {
  res.send({ data: req.query });
});

//post endpoint
app.post("/dinosaurs", (req, res) => {
  console.log(req.body);

  res.send(req.body);
});

//assignment: Create a POST with the endpoint /energydrinks that adds energy drinks to an array
const energydrinks = [];

app.post("/energydrinks", (req, res) => {
  console.log(req.body);
  energydrinks.push(req.body);
  res.send(req.body);
});

console.log(__dirname);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/xss", (req, res) => {
  res.sendFile(__dirname + "/xss.html");
});

app.get("/proxy", (req, res) => {
  //assignment:
  //Create a proxy to https://www.google.com/
  //you have all the knowledge you need to solve this task already

  fetch(`https://www.google.com/`)
    .then((response) => response.text())
    .then((result) => {
      res.send(result);
    });
});

//telling app to listen on port 8080
//8080 is the comcat port
app.listen(8080);
//now we can check localhost:8080 on the browser to see if the app is running
