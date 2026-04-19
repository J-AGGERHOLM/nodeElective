import { Router } from "express";
import db from "../database/connection.js";

const router = Router();

function isAdmin(req, res, next) {
  const isAdmin = req.session.admin;

  if (isAdmin) {
    return next();
  }
  res.status(403).send({ errorMessage: "You are not an admin!" });
}

router.post("/auth/login", async (req, res) => {
  //compare password to DB here:
  const { username, password } = req.body;
  const result = await db.get(`SELECT role FROM users WHERE  username = ? AND password = ? `, [username, password]);
  let isMatch = false;
  console.log(req.body);

  if (result) {
    isMatch = true;
  }

  if (isMatch && result.role === "Admin") {
    req.session.admin = true;
  } else {
    req.session.admin = false;
  }

  if (isMatch) {
    req.session.loggedIn = true;
    console.log(req.session);
    res.status(200).send({ message: "You're logged in" });
  } else {
    //if not a match, return false for toastr alert:
    req.session.loggedIn = false;
    res.status(401).send({ message: "Invalid credentials" });
  }
});

router.get("/auth/authorize", isAdmin, (req, res) => {
  res.send({ message: "You are an admin, yay!" });
});

router.get("/auth/logout", (req, res) => {
  req.session.destroy((error) => {
    res.status(200).send({ message: "You're logged out" });
  });
});

export default router;
