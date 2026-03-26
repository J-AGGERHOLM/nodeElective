import { Router } from "express";

const authRouter = Router();

function isAdmin(req, res, next) {
  //this simulates getting the value from the database
  //and/or comparing tokens / sessions
  const isAdmin = true;
  if (isAdmin) {
    req.user = {
      isAdmin,
      username: "bob",
    };
    return next();
  }
  res.status(403).res.send({ errorMessage: "You are not an admin" });
}

authRouter.get("/auth/admin", (req, res) => {
  console.log(req.user);
  res.send({ data: "You are an admin, you can see this: 10 active users" });
});

export default authRouter;
