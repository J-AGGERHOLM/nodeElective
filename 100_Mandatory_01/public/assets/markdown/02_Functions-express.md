**05/02/2026**

# Functions

In javascript, functions are first-class citizens. that means that the the entity, here functions, have most operations available to them. One of such is being able to pass them as an argument in a function call, or return them.

### Hoisting

    console.log(getRandomInt());

//Javascript: functions as first-class citizens

    function getRandomInt() {
        return 5;
    }

### Callback functions:

A callback is a function that is passed to another function as an argument.

three different ways to declare a function:

### Arrow functions:

    const getRandomIntArrowFunction = (min, max) => {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    };//semicolon here because it is a declaration

### Anonymous functions:

    const getRandomIntAnonymousFunction = function(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    };//semicolon here because it is a declaration

### callback functions:

                        // string, function reference
    function genericActionPerformer(name, action) {
        return action(name)
    }

## Build managers

`NPM` is the buildmanager for Node.js  
it is the file `package.json`.  
like with `pom.xml` it manages dependencies, meta information, lifecycles (in npm scripts).

### package.json:

    {
    "dependencies": {}
    }

### express:

https://www.npmjs.com/package/express

Write `npm install express` to install express

#### Semantic versioning:

^before versioning number upgrades minor builds.  
~before versioning number upgrades patches.

#### Installing Dependencies:

`npm install` to install the dependencies from the `package.json`.  
`node_modules` are our libraries from our dependencies.

**Do not** push `node_modules`.

#### Setting up the endpoints:

in app.js, import express:

    const express = require('express');

then instantiate it:

    const app = express()

and to view it, at the bottom of the page, write:'

    app.listen(8080)

#### Mapping endpoints:

path variables:

    app.get('/cars/:carModel/:year', (req, res) => {
        console.log(req.params);
        res.send({ data: 'Your ${req.params.carModel} ${req.params.year} is very nice' });
    });

query string:

    //?parametername=value&parametertwo=valuetwo
    //http://localhost:8080/bag?itemOne=food&itemTwo=water
    app.get("/bag", (req, res) => {
        res.send({ data: req.query });
    });

## Client Server Model:

request returns response

how can we send data in a GET request
two ways:
path variable
query string / query parameters
