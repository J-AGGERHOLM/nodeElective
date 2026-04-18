import "dotenv/config";

import express from "express";
const app = express();

app.use(express.json());

import helmet from "helmet";
app.use(helmet());

import cors from "cors";
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

import session from "express-session";
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  }),
);

import { rateLimit } from "express-rate-limit";

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-8", // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
  // store: ... , // Redis, Memcached, etc. See below.
});

app.use(generalLimiter);

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  ipv6Subnet: 56,
});

app.use("/auth", authLimiter);

//======== Routers ========//
import authRouter from "./routers/authRouter.js";
app.use(authRouter);




//======== 404 handling ========//
app.get("/{*splat}", (req, res) => {
  res.send(`
        <div>
            <h1>404</h1>
            <h2>Page - ${req.path}doesn't exist</h2>
        </div>`);
});

app.all("/{*splat}", (req, res) => {
  console.log(req.method);
  res.send({ errorMessage: `the route for ${req.path} and the HTTP method ${req.method} does not exist` });
});

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
