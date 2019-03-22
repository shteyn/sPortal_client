import express from "express";
import User from "../models/User";
import { sendResetPasswordEmail } from "../controllers/mailer";

const router = express.Router();

router.post("/", (req, res) => {
  const { credentials } = req.body;
  User.findOne({ email: credentials.email }).then(user => {
    if (user && user.isValidPassword(credentials.password)) {
      res.json({ user: user.toAuthJSON() });
    } else {
      res.status(400).json({ errors: { global: "Invalid credentials" } });
    }
  });
});

//find user and update user record

router.post("/confirmation", (req, res) => {
  const token = req.body.token;
  User.findOneAndUpdate(
    //first param: what we are searching for
    //second param: what we want to update
    //third param: options
    { confirmationToken: token },
    { confirmationToken: "", confirmed: true },
    { new: true }
  ).then(user =>
    user ? res.json({ user: user.toAuthJSON() }) : res.status(400).json({})
  );
});

//reset password rout
router.post("/reset_password_request", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      sendResetPasswordEmail(user);
      res.json({});
    } else {
      res.status(400).json({ errors: { global: "There is no such user " } });
    }
  });
});

export default router;
