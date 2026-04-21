import { Router } from "express";
import db from "../database/connection.js";
import { comparePassword } from "../util/bcryptCompare.js";
import { transporter, getPreviewUrl } from "../util/nodemailerTransporter.js";

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
  const result = await db.prepare(`SELECT role, password FROM users WHERE  username = ? `)
  .get(username);

  const isMatch = await comparePassword(password, result.password);

  if (isMatch && result.role === "Admin") {
    req.session.admin = true;
  } else {
    req.session.admin = false;
  }

  if (isMatch) {
    req.session.loggedIn = true;
    console.log(req.session);

    // =============== email part ===============//
    const info = await transporter.sendMail({
      from: '"me" <myEmail@example.com',
      to: "recipient@example.com",
      subject: "New login detected",
      text: `Hi ${username}, you just logged in.`,
      html: `<b>Hi ${username}</b>, you just logged in.`,
    });

    console.log("Preview URL: %s", getPreviewUrl(info));
    // =============== email part ends ===============//

    res.status(200).send({ message: "You're logged in" });
  } else {
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
