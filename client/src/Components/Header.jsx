import React, { useState, useEffect } from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { BsArrowRepeat } from "react-icons/bs";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router";
import CartProduct from "../../Methods/CartData.js";
import WishlistProduct from '../../Methods/WishlistData.js'
import handleCartDelete from "../Utils/CartDelete.js";
import getCookie from "../Utils/GetCookies.js";

const Header = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate()

  const username = getCookie("username");
  useEffect(() => {
    const cookies = document.cookie.split(";").reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      acc[key] = value;
      return acc;
    }, {});
    if (cookies.username) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setIsLoggedIn(true);
    }
  }, []);

  const cartItems = CartProduct
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 7;

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleAccountDropdown = () => {
    if (showDropdown) {
      setIsAccountOpen(false);
      setTimeout(() => setShowDropdown(false), 200);
    } else {
      setShowDropdown(true);
      setTimeout(() => setIsAccountOpen(true), 10);
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleLogout = () => {
    document.cookie = "username=; max-age=0; path=/;";
    document.cookie = "email=; max-age=0; path=/;";

    localStorage.removeItem("username");

    navigate('/')
  };



  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 360 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="h-screen">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-2">
            <div className="py-2 px-4 flex justify-between items-center border-b border-b-gray-300">
              <h2 className="text-[17px]  font-semibold text-[#333333]">
                Shopping Cart ({cartItems.length})
              </h2>
              <button className="text-[18px] font-bold text-[#333333]">
                X
              </button>
            </div>

            <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-240px)]">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 border-b border-b-gray-300 pb-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-[#333333]">
                      {item.name}
                    </h4>
                    <p className="font-semibold text-[#777777]">
                      {item.quantity} x{" "}
                      <span className="text-[#146CDA]">
                        ${item.price.toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <MdDelete className="text-gray-500 hover:text-red-500 cursor-pointer mt-1" onClick={() => handleCartDelete(item)} />
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className="p-4 border-t border-t-gray-300 space-y-1">
              <div className="border-b border-b-gray-300 pb-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">
                    {cartItems.length} items
                  </span>
                  <span className="font-semibold text-[#146cda]">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Shipping</span>
                  <span className="font-semibold text-[#146cda]">
                    ${shipping.toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span className="text-gray-600 font-semibold">Total</span>
                <span className="text-[#146cda]">
                  ${(total + shipping).toFixed(2)}
                </span>
              </div>
            </div>
            <div className="p-4 flex gap-2 justify-around">
              <Link to="/cart">
                <button className="bg-gray-800 text-white py-2 px-10 rounded hover:bg-black transition">
                  View Cart
                </button>
              </Link>
              <Link to="/checkout">
                <button className="bg-blue-500 text-white py-2 px-10 rounded hover:bg-blue-600 transition">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );


  return (
    <>
      <header className="bg-[#171d27]">
        <div className="container mx-auto p-3">
          <div className="flex flex-col">
            <div className="flex justify-around items-center">
              <div>
                <p className="font-semibold text-white">
                  Tell a friends about Electech Electronics & get 30% off your
                  next order.
                </p>
              </div>
              <div className="flex justify-between items-center gap-5 text-white font-semibold">
                <div className="flex items-center gap-1">
                  <MdOutlineEmail />
                  <div className="flex items-center gap-5">
                    <p>ankitj1405@gmail.com </p>
                    <span className="text-gray-600">|</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <IoCallSharp />
                  <div className="flex items-center gap-5">
                    <p>+91 9723665181 </p>
                    <span className="text-gray-600">|</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-5">
                    <p className="flex items-center gap-1.5">
                      <select defaultValue="" className="bg-[#171d27]">
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Gujarati">Gujarati</option>
                        <option value="German">German</option>
                        <option value="Sanskrit">Sanskrit</option>
                      </select>
                    </p>
                    <span className="text-gray-600">|</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">Contact Us</div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>
      <hr className="border-t border-gray-600 w-full" />
      <header className="bg-[#171d27] py-4 text-white">
        <div className="container mx-auto px-6 flex items-center justify-evenly">
          <Link to="/">
            <div className="flex items-center">
              <img src="/Icons/asset 2.svg" alt="Logo" className="h-10" />
            </div>
          </Link>
          <div className="flex flex-1 max-w-2xl mx-6 rounded overflow-hidden bg-white text-black">
            <div className="flex items-center px-4 py-3 border-r max-w-[150px] text-sm font-semibold text-[#171d27]">
              <select className="w-full bg-transparent outline-none">
                <option value="0">All Categories</option>
                <option value="our-store">Our Store</option>
                <option value="tv-speaker">TV & Speaker</option>
                <option value="android-tv">&nbsp;&nbsp;&nbsp;Android TV</option>
                <option value="game-controller">
                  &nbsp;&nbsp;&nbsp;Game Controller
                </option>
                <option value="control-speakers">
                  &nbsp;&nbsp;&nbsp;Control Speakers
                </option>
                <option value="earbuds-bose">
                  &nbsp;&nbsp;&nbsp;Earbuds Bose
                </option>
                <option value="smart-devices">Smart Devices</option>
                <option value="wireless-printer">
                  &nbsp;&nbsp;&nbsp;Wireless Printer
                </option>
                <option value="smart-speakers">
                  &nbsp;&nbsp;&nbsp;Smart Speakers
                </option>
                <option value="android-tablet">
                  &nbsp;&nbsp;&nbsp;Android Tablet
                </option>
                <option value="smart-watches">
                  &nbsp;&nbsp;&nbsp;Smart Watches
                </option>
                <option value="digital-watches">
                  &nbsp;&nbsp;&nbsp;Digital Watches
                </option>
                <option value="cameras-2">Cameras</option>
                <option value="digital-camera">
                  &nbsp;&nbsp;&nbsp;Digital Camera
                </option>
                <option value="ip-camera">&nbsp;&nbsp;&nbsp;IP camera</option>
                <option value="point-and-shoot-camera">
                  &nbsp;&nbsp;&nbsp;Point And Shoot Camera
                </option>
                <option value="phones-2">Phones</option>
                <option value="basic-phones">
                  &nbsp;&nbsp;&nbsp;Basic Phones
                </option>
                <option value="feature-phones">
                  &nbsp;&nbsp;&nbsp;Feature Phones
                </option>
                <option value="smart-phones-phones-2">
                  &nbsp;&nbsp;&nbsp;Smart Phones
                </option>
                <option value="laptop-computers-2">Laptop & Computers</option>
                <option value="ultraportable-laptops">
                  &nbsp;&nbsp;&nbsp;Ultraportable Laptops
                </option>
                <option value="apple-ipad">&nbsp;&nbsp;&nbsp;Apple Ipad</option>
                <option value="convertible-laptops">
                  &nbsp;&nbsp;&nbsp;Convertible Laptops
                </option>
                <option value="personal-computers">
                  &nbsp;&nbsp;&nbsp;Personal Computers
                </option>
                <option value="chargers-cables-2">Chargers & Cables</option>
                <option value="bettery-chargers">
                  &nbsp;&nbsp;&nbsp;Bettery Chargers
                </option>
                <option value="usb-type-cable">
                  &nbsp;&nbsp;&nbsp;USB Type Cable
                </option>
                <option value="adapter-plug">
                  &nbsp;&nbsp;&nbsp;Adapter Plug
                </option>
                <option value="headphones">&nbsp;&nbsp;&nbsp;Headphones</option>
                <option value="special-offer">special offer</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Search Product Here..."
              className="flex-1 px-4 outline-none"
            />
            <button className="bg-[#1e73e8] px-4 flex items-center justify-center text-white">
              <FiSearch size={18} />
            </button>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={toggleAccountDropdown}
              >
                <FaRegUser size={30} />
                <div className="text-sm leading-tight">
                  <p className="font-semibold text-[1rem]">Account</p>
                  <p className="text-xs font-semibold text-gray-300 text-[1rem]">
                    {username ? username : "Login"}
                  </p>
                </div>
              </div>

              {showDropdown && (
                <div
                  className={`absolute right-[-40px] mt-2 w-48 bg-white text-black rounded shadow-lg z-50 transition-all duration-500 ${isAccountOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                >
                  {isLoggedIn ? (
                    <ul className="text-sm font-medium">
                      <li className="px-4 py-2 rounded hover:bg-[#146cda] cursor-pointer hover:text-white hover:py-3 transition-all duration-500">
                        {username}
                      </li>
                      <Link to="/orders">
                        <li className="px-4 py-2 rounded hover:bg-[#146cda] cursor-pointer hover:text-white hover:py-3 transition-all duration-500">
                          Orders
                        </li>
                      </Link>
                      <Link to="/credit-slips">
                        <li className="px-4 py-2 rounded hover:bg-[#146cda] cursor-pointer hover:text-white hover:py-3 transition-all duration-500">
                          Credit Slips
                        </li>
                      </Link>
                      <Link to="/vouchers">
                        <li className="px-4 py-2 rounded hover:bg-[#146cda] cursor-pointer hover:text-white hover:py-3 transition-all duration-500">
                          Vouchers
                        </li>
                      </Link>
                      <Link to="#" onClick={handleLogout}>
                        <li className="px-4 py-2 rounded hover:bg-[#146cda] cursor-pointer hover:text-white hover:py-3 transition-all duration-500">
                          Logout
                        </li>
                      </Link>

                    </ul>

                  ) : (
                    <ul className="text-sm font-medium">
                      <Link to="/login">
                        <li className="px-4 py-2 rounded hover:bg-[#146cda] cursor-pointer hover:text-white hover:py-3 transition-all duration-500">
                          Login
                        </li>
                      </Link>
                      <Link to="/signup">
                        <li className="px-4 py-2 rounded hover:bg-[#146cda] cursor-pointer hover:text-white hover:py-3 transition-all duration-500">
                          Register
                        </li>
                      </Link>
                    </ul>
                  )}
                </div>
              )}

            </div>

            <Link to="/wishlist">
              <div className="relative flex items-center">
                <FiHeart size={30} />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {WishlistProduct.length == 0 ? 0 : WishlistProduct.length}
                </span>
              </div>
            </Link>
            <div className="relative flex items-center">
              <BsArrowRepeat size={35} />
              <span className="absolute -top-1 -right-2 bg-blue-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {5}
              </span>
            </div>

            <div
              className="flex items-center space-x-2"
              onClick={toggleDrawer("right", true)}
            >
              <div className="relative">
                <FiShoppingCart size={30} />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              </div>
              <div className="text-sm leading-tight ml-[2px]">
                <p className="font-semibold text-[0.88rem]">My Cart</p>
                <p className="text-xs font-semibold text-[0.88rem] text-gray-300">
                  ${total.toFixed(2)}
                </p>
              </div>
            </div>

            <Drawer
              anchor="right"
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
            >
              {list("right")}
            </Drawer>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
