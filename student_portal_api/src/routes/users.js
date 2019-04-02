import express from "express";
import User from "../models/User";
import parseErrors from "../controllers/parseErrors";
import { sendConfirmationEmail } from "../controllers/mailer";

const router = express.Router();

router.post("/", (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    location,
    studentClass
  } = req.body.user;
  const user = new User({ email, firstName, lastName, location, studentClass });
  user.setPassword(password);
  user.setConfirmationToken();
  user
    .save()
    .then(user => {
      sendConfirmationEmail(user);
      res.json({ user: user.toAuthJSON() });
    })
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

//Get All Approved Users
router.get("/", (req, res) => {
  User.find(
    {
      confirmed: { $in: ["false", false] },
      isAdmin: { $in: ["false", false] }
    },
    { passwordHash: 0 }
  ).then(user => {
    res.json(user);
    console.log("get All users ", user);
  });
});

//Get One User
router.get("/:id", (req, res) => {
  User.findById(req.body).then(user => {
    res.json(user);
    console.log("get only one", user);
  });
});

export default router;
