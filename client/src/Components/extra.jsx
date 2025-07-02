const Address = () => {
  return (
    <>
      <div
        className={`border-1 flex flex-col justify-center border-gray-300 rounded-md p-5 mx-auto`}
      >
        <p className="text-[#444444] text-[18px] font-semibold gap-4 flex">
          <span>2</span> <span>Addresses</span>
        </p>
        <form action="" className="flex flex-col">
          <p className="text-[#777777] text-[14px] font-semibold py-4 px-5">
            The selected address will be used both as your personal address (for
            invoice) and as your delivery address.
          </p>
          <div className="flex px-20 gap-2 my-3">
            <div className="w-[23%]">
              <p className="py-2 text-[#444444] font-semibold text-[14px]">
                House/Flat Number
              </p>
            </div>
            <div className="w-[75%]">
              <input
                type="text"
                placeholder="Enter Your House/Flat Number....."
                className="border-1 border-gray-300 w-[68%] py-2 px-4 rounded-sm"
              />
            </div>
          </div>
          <div className="flex px-20 gap-2 my-3">
            <div className="w-[23%]">
              <p className="py-2 text-[#444444] font-semibold text-[14px]">
                Society name
              </p>
            </div>
            <div className="w-[75%]">
              <input
                type="text"
                placeholder="Enter Your Society Name....."
                className="border-1 border-gray-300 w-[68%] py-2 px-4 rounded-sm"
              />
            </div>
          </div>
          <div className="flex px-20 gap-2 my-3">
            <div className="w-[23%]">
              <p className="py-2 text-[#444444] font-semibold text-[14px]">
                City name
              </p>
            </div>
            <div className="w-[75%]">
              <input
                type="text"
                placeholder="Enter Your City Name....."
                className="border-1 border-gray-300 w-[68%] py-2 px-4 rounded-sm"
              />
            </div>
          </div>
          <div className="flex px-20 gap-2 my-3">
            <div className="w-[23%]">
              <p className="py-2 text-[#444444] font-semibold text-[14px]">
                State name
              </p>
            </div>
            <div className="w-[75%]">
              <select name="" id="" className="border-1 border-gray-300 w-[68%] text-[#444444] py-2 px-4 rounded-sm selectdownarrow">
                <option value="" className="text-[#444444]">Please Choose</option>
                <option value="">opt-1</option>
                <option value="">opt-2</option>
                <option value="">opt-3</option>
              </select>
            </div>
          </div>
          <div className="flex px-20 gap-2 my-3">
            <div className="w-[23%]">
              <p className="py-2 text-[#444444] font-semibold text-[14px]">
                Zip/Postal Code
              </p>
            </div>
            <div className="w-[75%]">
              <input
                type="text"
                placeholder="Enter Your Zip/Postal Code....."
                className="border-1 border-gray-300 w-[68%] py-2 px-4 rounded-sm"
              />
            </div>
          </div>
          <div className="flex px-20 gap-2 my-3">
            <div className="w-[23%]">
              <p className="py-2 text-[#444444] font-semibold text-[14px]">
                Country
              </p>
            </div>
            <div className="w-[75%]">
              <select name="" id="" className="border-1 border-gray-300 w-[68%] text-[#444444] py-2 px-4 rounded-sm selectdownarrow">
                <option value="" className="text-[#444444]">Please Choose</option>
                <option value="">opt-1</option>
                <option value="">opt-2</option>
                <option value="">opt-3</option>
              </select>
            </div>
          </div>
          <div className="flex px-20 gap-2 my-3">
            <div className="w-[23%]">
              <p className="py-2 text-[#444444] font-semibold text-[14px]">
                Phone
              </p>
            </div>
            <div className="w-[75%]">
              <input
                type="text"
                placeholder="Enter Your Phone Number....."
                className="border-1 border-gray-300 w-[68%] py-2 px-4 rounded-sm"
              />
            </div>
          </div>
          <div className="flex px-20 gap-2 my-3">
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <label className="text-[#444444] text-[15px] font-semibold">Use this address for invoice too</label>
            </div>
          </div>
          <div className="flex justify-end px-20 gap-2 my-3">
            <button type="submit" className="w-fit bg-blue-600 text-white py-2 rounded px-4 hover:bg-blue-700 font-medium">CONTINUE</button>
          </div>
        </form>
      </div>
    </>
  );
};
