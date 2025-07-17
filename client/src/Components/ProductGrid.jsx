import React, { useState, useEffect } from "react";
import products from "../Utils/products";
import { CiHeart } from "react-icons/ci";
import { LuChartNoAxesColumn } from "react-icons/lu";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { FaAngleUp, FaAngleDown, FaXTwitter } from "react-icons/fa6";
import { FaStar, FaRegHeart, FaFacebookF, FaPinterest } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import WishlistMethod from "../../Methods/Wishlist.method.jsx";
import CartMethod from "../../Methods/Cart.method.jsx";
import { useNavigate } from "react-router";
import CartProduct from "../../Methods/CartData.js";


const CartData = CartProduct

function ProductGrid({ currentIndex, productsPerPage }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [_, setcart] = useState([])


  const navigate = useNavigate()
  useEffect(() => {
    const fetchWishlist = async () => {
      const data = await WishlistMethod.GetAllWishlist();
      setWishlist(Array.isArray(data) ? data : []);
    };
    fetchWishlist();
  }, []);



  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  const handleWishlist = async (product) => {
    try {

      const username = getCookie("username");
      console.log("Username from cookie:", username);

      if (!username) {
        let UserChoise = window.confirm(`You Are Not Logged in Yet...\n
          if YOu Want To Login Click --> "OK" \n else Click "Cancel to Stay Logged Out.`)
        if (UserChoise) {
          navigate("/login")
        }
        return
      }

      const latestWishlist = await WishlistMethod.GetAllWishlist();
      const wishlistArray = latestWishlist?.data || [];
      const Isexists = wishlistArray.find(
        (item) => item.ProductID == product.id
      );
      console.log("Isexists", Isexists);

      if (Isexists) {
        await WishlistMethod.DeleteWishlist(Isexists._id);
        setWishlist((prev) => prev.filter((item) => item.id !== product.id));
        alert("Removed from wishlist!");
        window.location.reload();

      } else {
        const data = {
          name: product.name,
          image: product.image,
          price: product.price,
          description: product.description,
          MRP: product.originalPrice,
          ProductID: product.id,
          username: username
        };
        console.log("Data to send:", data);
        const response = await WishlistMethod.CreateWishlist(data);
        const result = await response.json();

        if (response.ok) {
          setWishlist((prev) => [...prev, result.data]);
          alert("Added to wishlist!");
          window.location.reload();

        } else {
          console.error("Error:", result.error);
          alert("Failed to add to wishlist!");
        }
      }
    } catch (error) {
      console.error("Wishlist error:", error);
    }
  };

  const isProductInWishlist = (productId) => {
    return wishlist.some((item) => item.ProductID === productId);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const getGridCols = (count) => {
    switch (count) {
      case 5:
        return "grid-cols-5";
      case 6:
        return "grid-cols-6";
      default:
        return "grid-cols-3";
    }
  };

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));


  const handleCart = async (product) => {
    try {
      const username = getCookie("username");
      console.log("Username from cookie:", username);

      if (!username) {
        let UserChoise = window.confirm(`You Are Not Logged in Yet...\n
          if YOu Want To Login Click --> "OK" \n else Click "Cancel to Stay Logged Out.`)
        if (UserChoise) {
          navigate("/login")
        }
        return
      }

      console.log("CartData", CartData);


      const data = {
        name: product.name,
        image: product.image,
        price: product.price,
        description: product.description,
        MRP: product.originalPrice,
        ProductID: product.id,
        username: username
      };

      const IsExist = CartData.find((ele) => ele.ProductID == data.ProductID)
      if (IsExist) {
        console.log("IsExist", IsExist);


        const UpdateCart = { ...data, quantity: IsExist.quantity + 1 }
        console.log("UpdateCart", UpdateCart);
        await CartMethod.UpdateCart(UpdateCart, IsExist._id)
        alert("Quantity Increased")
        window.location.reload();
        return
      }
      console.log("Data to send:", data);
      const response = await CartMethod.CreateCart(data)
      const result = await response.json();

      if (response.ok) {
        setcart((prev) => [...prev, result.data]);
        alert("Added to Cart!");
        window.location.reload();
      } else {
        console.error("Error:", result.error);
        alert("Failed to add to Cart!");
      }


    } catch (error) {
      console.error("Cart error:", error);
    }
  };

  return (
    <>
      <div
        className={`grid ${getGridCols(
          productsPerPage
        )} px-4 max-w-[1500px] mx-auto mb-[100px]`}
      >
        {products
          .slice(currentIndex, currentIndex + productsPerPage)
          .map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg py-4 px-5 text-left transition-transform hover:-translate-y-1 cursor-pointer relative"
            >
              <div className="relative h-40 w-full mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover border border-gray-200 rounded-md transition-opacity duration-300 group-hover:duration-1000 group-hover:opacity-0"
                />
                <img
                  src={product.HoverImage}
                  alt={product.name + " hover"}
                  className="h-full w-full object-cover border border-gray-200 rounded-md absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:duration-1000 group-hover:opacity-100"
                />
              </div>

              <p className="text-[14px] px-2 text-[#848484] font-semibold">
                {product.brand}
              </p>
              <p className="font-semibold px-2 text-[#333333] line-clamp-2">
                {product.name}
              </p>
              <p className="px-2 text-yellow-500 flex gap-1 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < product.rating ? "text-yellow-500" : "text-gray-300"
                    }
                  />
                ))}
              </p>

              <p className="px-2 font-bold mt-2 flex gap-3">
                <del className="text-[#777777]">${product.originalPrice}</del>
                <span className="text-[#146cda]">${product.price}</span>
              </p>

              <div className="absolute top-[-100px] right-7 flex flex-col gap-2 text-gray-500 transition-all duration-300 group-hover:top-6 group-hover:duration-1000 group-hover:opacity-100 opacity-0">
                {isProductInWishlist(product.id) ? (
                  <span className="bg-white border border-gray-300 rounded-full p-1 hover:bg-[#146cda] hover:text-white transition-all duration-200">
                    <IoMdHeart
                      size={20}
                      onClick={() => handleWishlist(product)}
                      className="text-red-600"
                    />
                  </span>
                ) : (
                  <span className="bg-white border border-gray-300 rounded-full p-1 hover:bg-[#146cda] hover:text-white transition-all duration-200">
                    <CiHeart
                      size={20}
                      onClick={() => handleWishlist(product)}
                    />
                  </span>
                )}

                <span className="bg-white border border-gray-300 rounded-full p-1 hover:bg-[#146cda] hover:text-white transition-all duration-200">
                  <LuChartNoAxesColumn size={20} />
                </span>
                <span
                  onClick={() => openModal(product)}
                  className="bg-white border border-gray-300 rounded-full p-1 hover:bg-[#146cda] hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <HiOutlineArrowsExpand size={20} />
                </span>
              </div>

              <div onClick={() => handleCart(product)} className="uppercase w-[80%] text-center absolute bottom-10 opacity-0 right-0 left-0 m-auto font-semibold bg-[#146cda] text-white group-hover:bottom-[-30px] group-hover:opacity-100 group-hover:duration-1000 py-2 px-4 rounded-lg">
                Add To Cart
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-auto">
          <div className="relative bg-white p-8 rounded-xl w-[90%] max-w-5xl flex flex-col md:flex-row">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>

            <div className="w-full md:w-[50%]">
              <div className="flex flex-col gap-2">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full rounded object-contain max-h-[375px]"
                />

                <div className="flex gap-2 justify-between mt-4 flex-nowrap">
                  {[
                    selectedProduct.image1,
                    selectedProduct.image2,
                    selectedProduct.image3,
                    selectedProduct.image4,
                  ].map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="w-25 h-25 bg-gray-100 rounded border border-gray-300 overflow-hidden"
                    >
                      <img
                        src={imgSrc}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-[60%] md:pl-8 gap-4 mt-6 md:mt-0">
              <h1 className="text-2xl font-bold">{selectedProduct.name}</h1>

              {/* <p className="text-gray-600 text-sm leading-relaxed">
                {selectedProduct.description}
              </p> */}

              {/* <hr className="border-t border-gray-300" /> */}

              <div className="flex justify-between">
                <div className="space-y-1 text-sm">
                  <p className="mb-2">
                    <span className="font-semibold">Brand :</span>
                    <span className="pl-2 font-semibold text-gray-500">
                      {selectedProduct.brand}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Condition :</span>
                    <span className="pl-2 font-semibold text-gray-500">
                      {selectedProduct.condition}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Available In Stock:</span>
                    <span className="pl-2 font-semibold text-[#4cbb6c]">
                      {selectedProduct.stock} Items
                    </span>
                  </p>
                </div>

                {selectedProduct.brandLogo && (
                  <img
                    src={selectedProduct.brandLogo}
                    alt="Brand Logo"
                    className="w-44 h-auto"
                  />
                )}
              </div>

              {Array.isArray(selectedProduct.colors) &&
                selectedProduct.colors.length > 0 && (
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold">Color:</span>
                    <div className="flex gap-2">
                      {selectedProduct.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-6 h-6 rounded-full border border-gray-400 cursor-pointer"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}

              <div className="text-[1.5rem] font-bold text-[#146cda]">
                ${selectedProduct.price}
              </div>

              <p className="text-[#777777] font-semibold text-sm mt-[-18px]">
                Est. Delivery Time {selectedProduct.deliveryTime}
              </p>
              <div className="flex items-center gap-4 p-2">
                <div className="flex border border-gray-300">
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-12 text-center pl-4 text-xl font-semibold text-gray-700"
                  />
                  <div className="flex flex-col border-l border-gray-300">
                    <button onClick={increment} className="p-1">
                      <FaAngleUp />
                    </button>
                    <button
                      onClick={decrement}
                      className="p-1 border-t border-gray-300"
                    >
                      <FaAngleDown />
                    </button>
                  </div>
                </div>
                <button onClick={() => handleCart(selectedProduct)} className="bg-blue-600 text-white font-semibold px-6 py-3 w-[50%] rounded hover:bg-blue-700">
                  ADD TO CART
                </button>
              </div>

              <div className="flex gap-4 text-[#333333] font-medium">
                {isProductInWishlist(selectedProduct.id) ? (
                  <div className="bg-white rounded-full p-1 transition-all duration-200">
                    <div className="flex gap-2 items-center">
                      <IoMdHeart
                        size={20}
                        onClick={() => handleWishlist(selectedProduct)}
                        className="text-red-600"
                      />
                      <p>Add to Wishlist</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-full p-1  transition-all duration-200">
                    <div className="flex gap-2 items-center">
                      <CiHeart
                        size={20}
                        onClick={() => handleWishlist(selectedProduct)}
                      />
                      <p>Add to Wishlist</p>
                    </div>
                  </div>
                )}
                <div className="flex gap-2 items-center">
                  <LuChartNoAxesColumn />
                  <p>Add to Compare</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-[#435f9f] border-1 border-[#435f9f] px-5 py-2"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="text-black border-1 border-black px-5 py-2"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="#"
                    className="text-[#ce1f21] border-1 border-[#ce1f21] px-5 py-2"
                  >
                    <FaPinterest />
                  </a>
                </div>
              </div>

              <fieldset className="border border-gray-300 p-4">
                <legend className="text-[1.1rem] text-[#333333] font-semibold mb-2 px-5 text-center">
                  Guarantee Safe Checkout
                </legend>
                <div className="flex items-center gap-4">
                  <img src="/Images/trust_badge.png" alt="" />
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductGrid;
