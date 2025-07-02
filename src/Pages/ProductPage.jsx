import React from 'react'
import AccordionMenu from '../Components/AccordionMenu'
import { PiSquaresFourBold } from "react-icons/pi";
import { TbListDetails } from "react-icons/tb";

const ProductPage = () => {
  return (
    <>
      <div>
        <section className="bg-[#e6edf5]  mx-auto">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-center py-7 px-10">
              <h2 className="text-[1.5rem] text-[#333333]">
                Products
              </h2>
              <a href="" className="flex text-[#333333] text-[14px]">
                Home
                <p className="ml-4 text-[#777777]">
                  | <span className="ml-4">Product</span>
                </p>
              </a>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center py-10">
          <div className="container mx-auto max-w-[1450px] flex justify-around h-auto">
            <div className="w-[18%]">
              <div>
                <h2 className="">Home</h2>
                <hr className="my-3 text-gray-300" />
              </div>
              <AccordionMenu />
              <div className="mt-10">
                <img
                  src="/Images/headphones.jpg"
                  alt=""
                  className="rounded-md hover-animate"
                />
              </div>
            </div>
            <div className="w-[73%] flex flex-col">
              <div className='flex flex-col gap-5'>
                <img src="/public/Images/ProductBanner.jpg" alt="" className='rounded-sm' />
                <p className='text-[1rem] text-gray-500 font-medium font-lexend'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not now how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                <hr className="border-t border-gray-400 w-full my-3" />
              </div>
              {/* Products */}
              <div>
                <div className='flex justify-between w-full border-1 border-gray-300 p-5'>
                  <div className='flex flex-col items-start'>
                    <div className='flex gap-3'>
                      <PiSquaresFourBold size={30} className='text-gray-700'/>
                      <TbListDetails size={30} className='text-gray-700'/>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductPage
