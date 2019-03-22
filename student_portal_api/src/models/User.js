import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import uniqueValidator from "mongoose-unique-validator";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
      unique: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    confirmationToken: {
      type: String,
      default: ""
    },
    confirmed: {
      type: Boolean,
      default: false
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

//Compare user password during login
UserSchema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

//Hashing ans salting password
UserSchema.methods.setPassword = function setPassword(password) {
  this.passwordHash = bcrypt.hashSync(password, 10);
};

//Store confirmation token
UserSchema.methods.setConfirmationToken = function setConfirmationToken() {
  this.confirmationToken = this.generateJTW();
};

UserSchema.methods.generateConfirmationUrl = function generateConfirmationUrl() {
  return `${process.env.HOST}/confirmation/${this.confirmationToken}`;
};

//generate JWT
UserSchema.methods.generateJTW = function generateJTW() {
  return jwt.sign(
    {
      email: this.email,
      confirmed: this.confirmed
    },
    process.env.JWT_SECRET
  );
};

//return user json
UserSchema.methods.toAuthJSON = function toAuthJSON() {
  return {
    email: this.email,
    confirmed: this.confirmed,
    isAdmin: this.isAdmin,
    token: this.generateJTW()
  };
};

UserSchema.plugin(uniqueValidator, { message: "This email is already in use" });

export default mongoose.model("User", UserSchema);
