// import express
const express = require('express');

// instantiate express
const app = express()

// one-liner:
//const app = require('express')();


app.get('/', (request, response) => {
    response.send({data: "welcome to the first server"});
});

// task create a new route call snowstorm, it should respond with a warning
app.get('/snowstorms', (request, response) => {
    response.send({data: "WARNING: SNOWSTROM IS COMING"});
});

// how can we send data in a GET request

// path variable
app.get('/cars/:carModel/:year', (req, res) => {
    console.log(req.params);
    res.send({ data: `Your ${req.params.carModel} ${req.params.year} is very nice` });
});

// query string / query parameters
//?parametername=value&parametertwo=valuetwo
//http://localhost:8080/bag?itemOne=food&itemTwo=water
app.get("/bag", (req, res) => {
    res.send({ data: req.query });
});


//telling app to listen on port 8080
//8080 is the comcat port
app.listen(8080)
//now we can check localhost:8080 on the browser to see if the app is running