import { Route, Routes } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import HomePage from "../Pages/HomePage";
import WishList from "../Pages/WishList";
import CartPage from "../Pages/CartPage";
import CheckOutPage from "../Pages/CheckOutPage";
import ProductPage from "../Pages/ProductPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
}

export default AllRoutes;
