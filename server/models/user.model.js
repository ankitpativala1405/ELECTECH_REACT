import express from 'express';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      enum: ["Mr.", "Mrs."],
      // required: true
    },
    firstName: {
      type: String,
      // required: [true, "First name is must be required"],
      trim: true,
      minlength: [2, "First name must be at least 2 characters"],
      maxlength: [50, "First name must be at most 50 characters"],
    },
    lastName: {
      type: String,
      // required: [true, "Last name is must be required"],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters"],
      maxlength: [50, "Last name must be at most 50 characters"],
    },
    birthdate: {
      type: Date,
      validate: {
        validator: function (value) {
          const today = new Date();
          const age = today.getFullYear() - value.getFullYear();
          return age >= 13;
        },
        message: "User must be at least 13 years old",
      },
    },
    email: {
      type: String,
      // required: [true, "Email is must be required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },

    username: {
      type: String,
      // required: [true, "Username is must be required"],
      trim: true
    },
    phone: {
      type: String,
      // required: [true, "Mobile number is must be required"],
      trim: true,
      validate: {
        validator: function (v) {
          return validator.isMobilePhone(v, "any");
        },
        message: "Please provide a valid phone number",
      },
    },
    password: {
      type: String,
      // required: [true, "Password is must be required"],
      minlength: [8, "Password must be at least 8 characters"],
      maxlength: [20, "Password not more than 20 characters"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    offers: {
      type: Boolean,
      default: false
    },
    newsletter: {
      type: Boolean,
      default: false
    },
    terms: {
      type: Boolean,
      default: false
    },
    privacy: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);


UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const User = mongoose.model('User', UserSchema);

export default User;
