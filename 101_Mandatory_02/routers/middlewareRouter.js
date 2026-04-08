import { Router } from "express";

const middlewareRouter = Router();

function ipLogger(req, res, next) {
  console.log(req.ip);
  next();
}

//app.use sets up global middleware
//you can also use it with paths, which is a bit more clean
middlewareRouter.use("/room", ipLogger);

function butler(req, res, next) {
  console.log("Welcome to the mansion...");
  next();
}

function takeCoat(req, res, next) {
  req.takeCoat = true;
  next();
}

//we want to send JSON, because it is t standard for systems to use, when communicating
//Next function forwards us to the next endpoint in the stack, with this mapping
//butler as middleware
middlewareRouter.get("/room", ipLogger, butler, takeCoat, (req, res, next) => {
  //res.send({ data: "welcome to room 1" })
  console.log("you are in room 1", req.coatOff);
  next();
});

// inline middleware
middlewareRouter.get(
  "/room",
  (req, res, next) => {
    console.log("this is the inline middleware");
    next();
  },
  (req, res) => {
    res.send({ data: "welcome to room 2" });
  },
);

export default middlewareRouter;
