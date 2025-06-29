import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

const WishList = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Electric Toothbrush",
      price: 492,
      mrp: 1064,
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/Mi_Electric_Toothbrush_T300__1.jpeg?size=1200:675",
    },
    {
      id: 2,
      name: "Electric Toothbrush",
      price: 492,
      mrp: 1064,
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/Mi_Electric_Toothbrush_T300__1.jpeg?size=1200:675",
    },
    {
      id: 3,
      name: "Electric Toothbrush",
      price: 492,
      mrp: 1064,
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/Mi_Electric_Toothbrush_T300__1.jpeg?size=1200:675",
    },
    {
      id: 1,
      name: "Electric Toothbrush",
      price: 492,
      mrp: 1064,
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/Mi_Electric_Toothbrush_T300__1.jpeg?size=1200:675",
    },
    {
      id: 2,
      name: "Electric Toothbrush",
      price: 492,
      mrp: 1064,
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/Mi_Electric_Toothbrush_T300__1.jpeg?size=1200:675",
    },
    {
      id: 3,
      name: "Electric Toothbrush",
      price: 492,
      mrp: 1064,
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/Mi_Electric_Toothbrush_T300__1.jpeg?size=1200:675",
    },
    {
      id: 1,
      name: "Electric Toothbrush",
      price: 492,
      mrp: 1064,
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/Mi_Electric_Toothbrush_T300__1.jpeg?size=1200:675",
    },
    {
      id: 2,
      name: "Electric Toothbrush",
      price: 492,
      mrp: 1064,
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/Mi_Electric_Toothbrush_T300__1.jpeg?size=1200:675",
    },
    {
      id: 3,
      name: "Electric Toothbrush",
      price: 492,
      mrp: 1064,
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/Mi_Electric_Toothbrush_T300__1.jpeg?size=1200:675",
    },
    {
      id: 1,
      name: "Electric Toothbrush",
      price: 492,
      mrp: 1064,
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/Mi_Electric_Toothbrush_T300__1.jpeg?size=1200:675",
    },
    {
      id: 2,
      name: "Electric Toothbrush",
      price: 492,
      mrp: 1064,
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/Mi_Electric_Toothbrush_T300__1.jpeg?size=1200:675",
    },
    {
      id: 3,
      name: "Electric Toothbrush",
      price: 492,
      mrp: 1064,
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/Mi_Electric_Toothbrush_T300__1.jpeg?size=1200:675",
    },
    {
      id: 1,
      name: "Electric Toothbrush",
      price: 492,
      mrp: 1064,
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/Mi_Electric_Toothbrush_T300__1.jpeg?size=1200:675",
    },
    {
      id: 2,
      name: "Electric Toothbrush",
      price: 492,
      mrp: 1064,
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/Mi_Electric_Toothbrush_T300__1.jpeg?size=1200:675",
    },
    {
      id: 3,
      name: "Electric Toothbrush",
      price: 492,
      mrp: 1064,
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/Mi_Electric_Toothbrush_T300__1.jpeg?size=1200:675",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(wishlistItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = wishlistItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleDelete = (id) => {
    const updatedItems = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedItems);

    if (
      currentPage > 1 &&
      updatedItems.length <= (currentPage - 1) * itemsPerPage
    ) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleAddToCart = (item) => {
    console.log("Add to Cart:", item);
  };

  const handleMoveAllToCart = () => {
    wishlistItems.forEach((item) => handleAddToCart(item));
    setWishlistItems([]);
    setCurrentPage(1);
  };

  return (
    <>
      <section className="bg-[#e6edf5] mx-auto">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center py-7 px-10">
            <h2 className="text-[1.5rem] text-[#333333]">
              Your Wishlist{" "}
              <span className="font-medium">({wishlistItems.length})</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
              <button
                className="bg-[#146cda] text-white px-4 py-2 rounded hover:bg-[#0e5bb5] transition-all text-sm"
                onClick={handleMoveAllToCart}
                disabled={wishlistItems.length === 0}
              >
                Move All To Cart
              </button>
              <a href="#" className="flex text-[#333333] text-[14px]">
                Home
                <p className="ml-4 text-[#777777]">
                  | <span className="ml-4">Wishlist</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1400px] mx-auto py-10 px-10">
          {wishlistItems.length === 0 ? (
            <p className="text-center text-gray-600 text-lg">
              Your wishlist is empty.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {currentItems.map((item) => {
                  const discount = Math.round(
                    ((item.mrp - item.price) * 100) / item.mrp
                  );
                  return (
                    <div
                      key={item.id + Math.random()}
                      className="w-full border border-[#eee] rounded-sm overflow-hidden relative bg-white shadow-md"
                    >
                      <span className="absolute top-2.5 left-2.5 bg-[#f44334] text-white text-[0.8rem] py-1 px-2 rounded-sm">
                        -{discount}%
                      </span>
                      <span
                        className="absolute top-2.5 right-2.5 cursor-pointer text-[#555]"
                        onClick={() => handleDelete(item.id)}
                      >
                        <MdDelete size={20} />
                      </span>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-[200px] object-cover bg-[#f9f9f9]"
                      />
                      <div
                        className="bg-black text-white flex justify-center items-center gap-3 py-2 cursor-pointer hover:bg-[#146cda] transition-all duration-300 text-[1rem]"
                        onClick={() => handleAddToCart(item)}
                      >
                        <FaCartShopping /> Add To Cart
                      </div>
                      <div className="p-4">
                        <h4 className="text-[1rem] font-semibold mb-2">
                          {item.name}
                        </h4>
                        <span className="text-[#F44336] font-bold">
                          ₹{item.price}
                        </span>
                        <span className="text-[#888] ml-2 font-medium text-[0.9rem] line-through">
                          ₹{item.mrp}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-10 gap-2 flex-wrap">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-3 py-1 border rounded ${
                        currentPage === index + 1
                          ? "bg-[#146cda] text-white"
                          : "bg-white text-[#333] border-gray-300"
                      } hover:bg-[#146cda] hover:text-white transition-all`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default WishList;
