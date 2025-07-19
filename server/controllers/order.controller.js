import OrderModel from "../models/order.model.js";

export const OrderController = {
  SetOrder: async (req, res) => {
    try {
      const user = await OrderModel.create(req.body);
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
  GetOrder: async (req, res) => {
    try {
      const user = await OrderModel.find();
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
  UpdateOrder: async (req, res) => {
    try {
      const user = await OrderModel.findByIdAndUpdate(req.params.id, req.body, {
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
  DeleteOrder: async (req, res) => {
    try {
      const user = await OrderModel.findByIdAndDelete(req.params.id);

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
