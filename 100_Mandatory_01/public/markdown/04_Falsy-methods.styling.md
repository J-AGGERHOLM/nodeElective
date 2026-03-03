**2/19/2026**

Undefined.id is an error that happens often when, when we haven’t imported the express json body parser.

post fix notation.
prefix notation.

The spread operator example:

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

## Proxy calls:

we can ask express to redirect to a external domain, through our localHost port.
that is called a proxy call.
example of proxy call:

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

## Fetch:

when we make a fetch call to a domain like google.com, we get a response in the shape of a readableStream.

Date methods in Javascript:
zulu?
console.log(new Date()); // UTC date + time

    console.log(Date()) // Local time


    console.log(Date.now()) // unix epoch time (Seconds since Jan. 1st 1970)

## Falsy values:

    /*falsy values:
    false, null, undefined, NaN, "" (empty strings)
    */

## Port Error Handling:

we should add error handling to the port listener from now on:
app.listen(8080, (error) => {

        if(error){//error by default is undefined
            console.log("Error starting the server")
        }


        console.log("server is running on port", 8080)
    });

## Styling

Three different ways of styling HTML:
inline:

    <!-- 1. inline CSS -->
    <h1 style="color: aqua">Welcome to my website</h1>

header:

    <!---- 2. CSS in HTML file head -->
    <style>
      .frontPage-sub-title {
        color: blue;
      }
    </style>

with a stylesheet:

    <!-- 3. CSS file-->
    <link rel="styleSheet" href="frontpage.css">
