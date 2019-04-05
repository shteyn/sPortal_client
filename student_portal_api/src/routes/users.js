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
router.post("/users", (req, res) => {
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
router.post("/users/waiting-users/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      sendConfirmationEmail(user);
      updateConfirmationEmailStatus(user);
      res.json({
        success: true
      });
    })
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

//Reject waiting user by admin
router.delete("/users/delete-users/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.remove().then(user => {
        if (user.confirmed) {
          sendDeleteUserEmail(user);
        } else {
          sendRejectEmail(user);
        }
        res.json({
          success: true
        });
      });
    })
    .catch(error =>
      res.json({
        success: false,
        message: "User is not exists"
      })
    );
});
//Change status of user when admin approved request
const updateConfirmationEmailStatus = user => {
  User.findByIdAndUpdate(
    user._id,
    { confirmationEmailSend: true },
    { new: true }
  ).then(updatedUser => {
    console.log("updateConfirmationEmailStatus(user)", updatedUser);
  });
};

//Get All Approved Users
router.get("/users", (req, res) => {
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
router.post("/users/dashboard", (req, res) => {
  console.log("axios called with: ", req.body.email);
  User.findOne(
    { email: req.body.email },
    {
      passwordHash: 0,
      isAdmin: 0,
      confirmationToken: 0,
      confirmed: 0,
      confirmationEmailSend: 0
    }
  )
    .then(user => {
      console.log("user router back", user);
      res.json(user);
    })
    .catch(error =>
      res.json({
        success: false,
        message: "User is not exists"
      })
    );
});
export default router;
