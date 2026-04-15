import { Router } from "express";

const router = Router();

router.post("/auth/login", (req, res) => {
  //compare password to DB here:
  let isMatch = false;
  const tempUsername = "jacob";
  console.log(req.body);

  if (req.body.username === tempUsername) {
    isMatch = true;
  }

  if (isMatch) {
    req.session.loggedIn = true;
    res.status(200).send({ message: "You're logged in" });
  } else {
    //if not a match, return false for toastr alert:
    req.session.loggedIn = false;
    res.status(401).send({ message: "Invalid credentials" });
  }
});

router.get("/auth/logout", (req, res) => {
  req.session.destroy((error) => {
    res.status(200).send({ data: "You're logged out" });
  });
});

export default router;
