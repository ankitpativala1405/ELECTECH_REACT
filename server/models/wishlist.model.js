import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    ProductID: {
      type: Number,
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
    image: {
      type: String,
      required: true,
    },
    MRP: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const WishlistModel = mongoose.model("wishlist", ProductSchema);
export default WishlistModel;
