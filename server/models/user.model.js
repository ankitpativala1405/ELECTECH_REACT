import express from 'express';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is must be required"],
      trim: true,
      minlength: [2, "First name must be at least 2 characters"],
      maxlength: [50, "First name must be at most 50 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is must be required"],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters"],
      maxlength: [50, "Last name must be at most 50 characters"],
    },
    birthDate: {
      type: Date,
      required: [true, "Birth date is must be required"],
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
      required: [true, "Email is must be required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    phone: {
      type: String,
      required: [true, "Mobile number is must be required"],
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
      required: [true, "Password is must be required"],
      minlength: [8, "Password must be at least 8 characters"],
      maxlength: [20, "Password not more than 20 characters"],
      select: false,
    },
    address: [
      {
        home: { type: String },
        society: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String },
        country: { type: String },
      },
    ],
    cart: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        MRP: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity must be at least 1"],
          default: 1,
        },
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
    wishlist: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        MRP: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity must be at least 1"],
          default: 1,
        },
      },
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: Date,
  },
  { timestamps: true }
);

// 🔒 Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// 🔒 Compare passwords
UserSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// Virtual full name
UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const User = mongoose.model('User', UserSchema);

export default User;
