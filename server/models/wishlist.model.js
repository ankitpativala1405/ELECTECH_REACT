import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
  Poductname: {
    type: String,
    required: true
  },
  ProductDescription: {
    type: String,
    required: true
  },
  ProductPrice: {
    type: Number,
    required: true
  },
  ProductImage: {
    type: String,
    required: true
  },
  ProductMRP: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})


const WishlistModel = mongoose.model('wishlist', ProductSchema);
export default WishlistModel;
