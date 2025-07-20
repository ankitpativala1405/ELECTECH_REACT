import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  personalDetails: {
    title: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  },
  address: {
    houseNumber: String,
    societyName: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    phone: String,
    useForInvoice: Boolean,
  },
  shippingMethod: {
    option: String,
    comment: String,
  },
  paymentMethod: {
    method: String,
    cardDetails: {
      number: String,
      name: String,
      expiry: String,
      cvv: String,
    },
  },
  cartItems: Array,
}, { timestamps: true });

const OrderModel = mongoose.model('order', orderSchema);
export default OrderModel;