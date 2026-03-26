import express from "express";
import helmet from "helmet"


const app = express();

import middlewareRouter from "./routers/middlewareRouter.js";
app.use(middlewareRouter);
app.use(helmet());

//needs to be after middleware, because */{splat} will always match
//wildcard /{*splat} is  the new syntax in Express 5.x before it was just /*
app.get("/{*splat}", (req, res) => {
  res.send(`
        <div>
            <h1>404</h1>
            <h2>Page - ${req.path}doesn't exist</h2>
        </div>`);
});

app.all("/{*splat}", (req, res) => {
    console.log(req.method)
  res.send({ errorMessage: `the route for ${req.path} and the HTTP method ${req.method} does not exist` });
});

//Nullish coalesence operator
const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
