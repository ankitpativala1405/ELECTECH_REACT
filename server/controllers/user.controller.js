import User from "../models/user.model.js";
// import bcrypt from 'bcryptjs';

export const UserController = {
  SetUser: async (req, res) => {
    console.log("req", req);

    try {
      const user = await User.create(req.body);
      res.status(201).json({
        success: true,
        data: user
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err.message
      })
    }
  },
  GetUser: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json({
        success: true,
        data: user
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        error: "Server Error"
      })
    }
  },
  UpdateUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          error: "User Not Found"
        })
      }

      res.status(200).json({
        success: true,
        data: user
      });

    } catch (err) {
      res.status(400).json({
        success: false,
        error: err.message
      })
    }
  },
  DeleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      if (!user) {
        return res.status(404).json({
          success: false,
          error: 'User not found'
        })
      }

      res.status(200).json({
        success: true,
        data: {}
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        error: "Server Error"
      })
    }
  },

}