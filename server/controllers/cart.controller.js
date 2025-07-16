import CartModel from "../models/cart.method.js";

export const CartController = {
  SetWishlist: async (req, res) => {
    console.log("req", req);

    try {
      const user = await CartModel.create(req.body);
      res.status(201).json({
        success: true,
        data: user,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err.message,
      });
    }
  },
  GetWishlist: async (req, res) => {
    try {
      const user = await CartModel.find();
      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  },
  UpdateWishlist: async (req, res) => {
    try {
      const user = await CartModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          error: "User Not Found",
        });
      }

      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err.message,
      });
    }
  },
  DeleteWishlist: async (req, res) => {
    try {
      const user = await CartModel.findByIdAndDelete(req.params.id);

      if (!user) {
        return res.status(404).json({
          success: false,
          error: "User not found",
        });
      }

      res.status(200).json({
        success: true,
        data: {},
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  },
};
