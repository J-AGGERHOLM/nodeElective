0503/2026

## Scripts in the package.json

The package.json contains the app metadata.
however you can also save scripts in it

    NPM run <SXRIPT_NAME>

or
npm run set-up

## Post Assignment:

magic numbers:

to get rid oh harded coded values “magic numbers”, let’s define a variable that holds the port number:

    const PORT = 8080;


    app.listen(PORT, () => {
    console.log("this server is running on port", PORT);
    });

## environment variables:

    $env:PORT=9090

    console.log(process);
    console.log(process.env.port)

cross env:
cross-env is a wrapper for

    npm i cross-env

`i` is shorthand for `install`

we can make a script in the package.json to make it easier to set the port:
"scripts": {
"start-dev": "cross-env PORT=8080 node app.js"
}

upgrading the post listen():

    const PORT = process.env.PORT // || 8080;


    const server = app.listen(PORT, () => {
    console.log("this server is running on port", server.address().port());
    });

we can do as shown as above. It’s an example of asynchronous programming.
because we use a callback function, we can call the server’s methods later.

this is an version of prior functionality, with fallback logic,
this would typically be the way to do it, however if you replace PORT in the callback function with undefined, then the function would find an available port on it’s own.

this is how you’d define an environment variable in native node.js:

    PORT=8080 NODE_ENV=DEV node app.js"

adding a favIcon:

    <link rel="icon" type="image/png" href="/assets/images/logo.png" />

Destructuring:

you can destructure a function by pulling out a parameter from an object you’d otherwise pass to the function.
example:

    .then((response) => response.json())
    .then(({ data }) => {
        if (data.error) {
            console.log(data.error);

        } else {
            console.log(data.output, data.result);
        }


in this code snippet, instead of having to write response.data, again, and again, we destructure response, so that we may call data directly.
