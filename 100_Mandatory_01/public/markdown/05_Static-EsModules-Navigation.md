**2/26/2026**

to use the various files, without getting the MIME-error in the browser, we use:

    app.use(express.static("public"));

consider it a safety feature, because it prevents us from being able to directly access the files on the server, through the URL by saying `/frontpage.js` or similar.

## importing

to import with the require(), we need to remember that `./`, tells node that we are looking for a file in our directory, not our node modules. if we just used `/` node would look in node modules.

    const cookiesUtil = require("./util/cookiesUtil");

## function reference:

if exporting a function, that enables us to call methods, from another file:

    module.exports = getCookie;

if importing several files that interacts, they need to be structured correctly in order:

    <script src="./cookieFactory.js"></script>
    <script src="./cookies.js"></script>

## Circular dependency problem

another way to import, that mitigates the circular dependency problem is:

adding the `export default` keywords in one file:

    export default function getNewCookieBatch() {
    return ['🍪','🍪','🍪','🍪'];
    }

importing in the other file:
import getNewCookieBatch from './cookieFactory.js'

    console.log(getNewCookieBatch());

and setting the type in the HTML file

    <script type="module" src="./cookies.js"></script>

and in the package.json:

    {
    "type": "module",
    "dependencies": {
    "express":"5.2.1"
    }
    }

## ES Modules

from now on we wont’t be using the Common.js `required` anymore, we’ll be using the `import/export`.

\_\_dirname doesn’t work with ES Modules.
Well be using the path library instead:
import path from 'path';

new way of serving files with express using the path library:

    app.get("/redirection", (res,req) => {
    res.sendFile(path.resolve("public/redirection/redirection.html"))
    })

## Navigation

From the example above, note that in the string path we removed the first `/`. it resolves it to an absolute path.

you can do navigation for the frontend in these ways

    //window.location.href = '/'; //gives history
    location.replace('/') //does not give history

Instead of manually setting up the node project, use:

    NPM INIT

instead of manually adding express to the package.json file, we can run:

    NPM install express

## Optional Chaining

    //optional chaining
    const replCode = req.body?.replCode;
