import React from "react";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail, TfiPrinter } from "react-icons/tfi";
import {
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className="bg-[#146cda]">
        <div className="flex justify-evenly py-3 max-w-[1400px] mx-auto">
          <div className="text-white w-[40%] p-3">
            <h3 className="text-[1.5rem]">Sign Up & Subscribe To Our Newsletter</h3>
            <p className="text-[14px] mt-2">
              Subscribe to our latest newsletter to get news about special
              discounts & upcoming sales
            </p>
          </div>
          <div className="flex flex-col justify-center w-[49%]">
            <div className="flex flex-row justify-around w-full">
              <input type="email" placeholder="Your Email Address" className="bg-white rounded py-[10px] w-[80%] px-[15px]" />
              <input type="submit" className="py-[10px] px-[15px] bg-[#adccf2] rounded w-[18%] text-[#28476d] hover:bg-[#171d27] hover:text-[#adccf2] transition-all duration-2000" />
            </div>
            <div className="flex flex-row mt-3 gap-2 text-white">
              <input type="checkbox" />
              <p>I agree to the terms and conditions and the privacy policy</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#171d27] text-white relative">
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between gap-9 border-b border-gray-700 py-20">
          <div>
            <h3 className="font-semibold mb-2 border-b-2 border-blue-600 inline-block pb-1">
              Our Information
            </h3>
            <p className="text-sm leading-relaxed mt-3 max-w-[300px]">
              Welcome to our store, where we pride ourselves on providing
              exceptional products and unparalleled customer service. Our store
              is a haven for those who appreciate quality, style, and
              innovation.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2 border-b-2 border-blue-600 inline-block pb-1">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:translate-x-[10px] transition-all duration-1000">
                Prices Drop
              </li>
              <li className="cursor-pointer hover:translate-x-[10px] transition-all duration-1000">
                New Products
              </li>
              <li className="cursor-pointer hover:translate-x-[10px] transition-all duration-1000">
                Best Sellers
              </li>
              <li className="cursor-pointer hover:translate-x-[10px] transition-all duration-1000">
                Contact Us
              </li>
              <li className="cursor-pointer hover:translate-x-[10px] transition-all duration-1000">
                Sitemap
              </li>
              <li className="cursor-pointer hover:translate-x-[10px] transition-all duration-1000">
                Accessories
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 border-b-2 border-blue-600 inline-block pb-1">
              Our Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:translate-x-[10px] transition-all duration-1000">
                Delivery
              </li>
              <li className="cursor-pointer hover:translate-x-[10px] transition-all duration-1000">
                Legal Notice
              </li>
              <li className="cursor-pointer hover:translate-x-[10px] transition-all duration-1000">
                Terms And Conditions Of Use
              </li>
              <li className="cursor-pointer hover:translate-x-[10px] transition-all duration-1000">
                About Us
              </li>
              <li className="cursor-pointer hover:translate-x-[10px] transition-all duration-1000">
                Secure Payment
              </li>
              <li className="cursor-pointer hover:translate-x-[10px] transition-all duration-1000">
                Stores
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 border-b-2 border-blue-600 inline-block pb-1">
              Your Account
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:translate-x-[10px] transition-all duration-1000">
                Order Tracking
              </li>
              <li className="cursor-pointer hover:translate-x-[10px] transition-all duration-1000">
                Sign In
              </li>
              <li className="cursor-pointer hover:translate-x-[10px] transition-all duration-1000">
                Create Account
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 border-b-2 border-blue-600 inline-block pb-1">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <IoLocationOutline size={20} />
                <span>
                  Demo Store
                  <br />
                  507-Union Trade Center
                  <br />
                  France
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <TfiEmail size={18} />
                <span>demo@example.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <IoCallOutline size={18} />
                <span>(+91) 9876-543-210</span>
              </li>
              <li className="flex items-center space-x-2">
                <TfiPrinter size={18} />
                <span>654321</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between mx-auto py-4 items-center">
            <div className="flex items-center space-x-2">
              <ul className="flex items-center space-x-3">
                <li className="bg-white p-2 rounded-full hover:bg-[#1e73e8] transition-all duration-1000 group">
                  <FaFacebookF className="text-[#171d27] group-hover:text-white transition-all duration-1000" />
                </li>
                <li className="bg-white p-2 rounded-full hover:bg-[#1e73e8] transition-all duration-1000 group">
                  <FaXTwitter className="text-[#171d27]  group-hover:text-white transition-all duration-1000" />
                </li>
                <li className="bg-white p-2 rounded-full hover:bg-[#1e73e8] transition-all duration-1000 group">
                  <FaYoutube className="text-[#171d27]  group-hover:text-white transition-all duration-1000" />
                </li>
                <li className="bg-white p-2 rounded-full hover:bg-[#1e73e8] transition-all duration-1000 group">
                  <FaPinterestP className="text-[#171d27]  group-hover:text-white transition-all duration-1000" />
                </li>
                <li className="bg-white p-2 rounded-full hover:bg-[#1e73e8] transition-all duration-1000 group">
                  <FaInstagram className="text-[#171d27]  group-hover:text-white transition-all duration-1000" />
                </li>
              </ul>
            </div>
            <div>
              <p>© 2025 - Ecommerce software by Ankit_Pativala™ </p>
            </div>
            <div className="flex gap-5">
              <img
                className="h-[40px] w-[70px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROj-1yvCA8BCnM2XKjftArKatQ7x5f3nWLTw&s"
                alt=""
              />
              <img
                className="h-[60px] w-[70px] mt-[-10px]"
                src="https://cdn-icons-png.flaticon.com/512/349/349228.png"
                alt=""
              />
              <img
                className="h-[40px] w-[70px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjj9QW3dOBBqwQmKF3-mdc-hViCw4hBDUbA&s"
                alt=""
              />
              <img
                className="h-[40px] w-[70px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozWDvSKRp8jg5PEJr-uxJy-G58abIgofu8A&s"
                alt=""
              />
              <img
                className="h-[40px] w-[70px] bg-white rounded-sm"
                src="https://download.logo.wine/logo/PayPal/PayPal-Logo.wine.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
