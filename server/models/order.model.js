import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    ProductID: {
      type: Number,
    },
    username: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1
    },
    image: {
      type: String,
      required: true,
    },
    MRP: {
      type: Number,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model("order", OrderSchema);
export default OrderModel;
