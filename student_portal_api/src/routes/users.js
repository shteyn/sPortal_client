import express from "express";
import User from "../models/User";
import parseErrors from "../controllers/parseErrors";
import {
  sendConfirmationEmail,
  sendDeleteUserEmail,
  sendRejectEmail
} from "../controllers/mailer";

const router = express.Router();

//REGISTRATION
router.post("/", (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    location,
    studentClass
  } = req.body.user;
  const user = new User({
    email,
    firstName,
    lastName,
    location,
    studentClass
  });
  user.setPassword(password);
  user.setConfirmationToken();
  user
    .save()
    .then(user => {
      //sendConfirmationEmail(user);
      res.json({ user: user.toAuthJSON() });
    })
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

//Approve user by admin
router.post("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => sendConfirmationEmail(user))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

//Reject waiting user by admin
router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.remove().then(user => {
        if (user.confirmed) {
          sendDeleteUserEmail(user);
        } else {
          sendRejectEmail(user);
        }
      });
    })
    .catch(error => res.status(404).json({ success: "User is not exists" }));
});

//Get All Approved Users
router.get("/", (req, res) => {
  User.find(
    {
      //confirmed: { $in: ["true", true] },
      isAdmin: { $in: ["false", false] }
    },
    { passwordHash: 0 }
  ).then(user => {
    res.json(user);
  });
});

//Get One User
router.get("/:id", (req, res) => {
  User.findById(req.body).then(user => {
    res.json(user);
  });
});

export default router;
