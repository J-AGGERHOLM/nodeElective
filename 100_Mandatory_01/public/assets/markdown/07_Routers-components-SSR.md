**12/03/2026**

## Router:

To keep the app.js file smaller, should be splitting the code up across several components. We will from now on be using Express’ Router. Instead of defining endpoints directly in app.js, we’ll create a Router

so in a `router.js` file we first import Router from express:

    import {Router} from 'express'

Instead of importing all of the express library we can destructure it with `{}` on the import.  
Then we instantiate the router:

    const router = Router();

then now inside this router.js file, we can define behaviour for different endpoint, like this:

    router.get("/hello", (req, res) => {
    res.send({ data: "hello" });
    })

then, at the very end of the `router.js` file, we have to export it, so that we can use it in our `app.js` file:

export default router;

note that you can only have one `‘default’` export in a .js file.

now, to use the router, we need to import it into app.js, and tell it to use the router, also called mounting:

    import pagesRouter from "./routers/pagesRouter.js";

    app.use(pagesRouter);

this will allow us to use the routing behaviour for the application.

## Components:

We want to have the rendering of the application to be on the server side (SSR). it’s lighter and better for SE0.  
So we will split the repetitive parts of the code for the pages, into components, and assemble them when we serve them to the frontend.

we need to use the fs Module, from Node.js. so in a dedicated .js file well import it:

    import fs from "fs";

fs stands for filesystem.  
we can use the fs module to read files, so if we define some behaviour for reading a file in a specified path, we’ll have:

    export function readPage(filePath) {
    return fs.readFileSync(filePath).toString();
    }

now that we can read component files, we can define behaviour to assemble out pages:

    export function constructPage(page, options = {}) {
    const header = readPage("./public/components/header/header.html");
    const footer = readPage("./public/components/footer.html");

        return (
          header
            .replace(`$$DOCUMENT_TITLE$$`, options.documentTitle || "Online Node.js REPL")
            .replace(`$$CSS_FILE$$`, options.cssLinks || "") +
          page +
          footer
        );

    }

We can edit parts of the pages we’ve read, by using the .replace method. So if we in out component files add elements titled $$DOCUMENT_TITLE$$, we can find and replace it in the component with something new and page specific, as shown above.  
in the above example we also pass `options = {}`, an empty object as an argument. that’ll allow us to load out edits into the function when calling it later, as long as we adhere to the naming conventions of the variables.

to use the templating engine that we just created, we make a new file, and import the functions we just created:

    import { readPage, constructPage } from "./templatingEngine.js";

now we actually assemble and export the individual pages:

    const about = readPage("./public/pages/about.html");
    export const aboutPage = constructPage(about, {
    documentTitle: "Online Node.js REPL | About",
    cssLinks: '<link rel="stylesheet" href="/assets/css/frontend.css">',
    });

where we are able to edit documentTitle and cssLinks for the individual pages, by passing the parameters inside the empty object.

now that’s we’ve assembled and exported, we can use the router to define some endpoint for the pages.
first the needed imports:

    import { Router } from "express";
    import { frontPagePage, aboutPage, contactPage } from "../util/pagesUtil.js";

instantiate the router:
const pagesRouter = Router();

and define some endpoints:

    pagesRouter.get("/", (req, res) => {
    res.send(frontPagePage);
    console.log("IndexPage");
    });

and then export:

    export default pagesRouter;

and then in app.js, we make the app use it:

    import replRouter from "./routers/replRouter.js";
    app.use(replRouter);

## Asynchronous vs Synchronous

asynchronous and synchronous file reading is something we use depending on how we want a program to compile.  
if something is synchronous, the file compiles line-by-line, and will for example stall to read a file, and then continue.  
if we use an asynchronous function call to read or fetch a file, the reading/fetching will happen in the background, as the rest of the script compiles.  
so in out code, we’ve used:

    return fs.readFileSync(filePath).toString();

to read a file synchronously.  
some of the cons to this, is that it slows server and prevent the program from prevents handling other requests.  
as a rule of thumb, we don’t wanna be making synchronous method calls inside of other functions. it’ll slow down the program a fair bit. better to have that logic on server start or something similar.

### Quick quips from Anders:

2nd argument in a endpoint function is a callback function  
we want SSR (Server side rendering), because it is lighter that is better for SE0
