import policies from "../Utils/policy";


const CheckoutSummary = ({ cartItems }) => {
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  let totalPrice = Number(subtotalPrice)

  const Shipping = 7.00
  const TotalShipping = Number(Shipping)
  return (
    <div className="flex flex-col gap-4 w-[30%] mx-auto">
      <section className="bg-white">
        <div className="bg-white border border-gray-300 w-full rounded-sm">
          <div className="flex flex-col border-b border-gray-300">
            <div className="flex justify-between pt-4 px-4">
              <p className="font-semibold text-[#444444]">
                {itemCount} item(s)
              </p>
              <span className="font-semibold text-[#146CDA]">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between pb-4 px-4">
              <p className="font-semibold text-[#444444]">Shipping</p>
              <span className="font-semibold text-[#146CDA]">$ {Shipping.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-between pt-4 px-4">
            <p className="font-semibold text-[#444444]">Total</p>
            <span className="font-semibold text-[#146CDA]">
             ${(totalPrice + TotalShipping).toFixed(2)}
            </span>
          </div>
          <div className="px-4 py-2">
            <a href="#" className="text-[#146CDA] font-semibold underline">
              Have a promo code?
            </a>
          </div>
          <div className="px-4 pb-4">
            <input
              type="text"
              placeholder="Promo code"
              className="border border-gray-300 rounded p-2 w-[65%] mr-2"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              ADD
            </button>
          </div>
          <p className="text-[#777777] text-[1rem] px-4">
            Take advantage of our exclusive offers:
          </p>
          <p className=" px-4">
            <span className="text-[#146CDA] text-[0.9rem] font-semibold underline">
              GET25OFF
            </span>
            <span className="text-[#FF9A52] text-[0.9rem] font-semibold">
              - Promo Code
            </span>
          </p>

          <div className="w-fit mx-auto my-5">
            <button className="bg-[#146CDA] text-white font-semibold py-3 px-5 rounded-sm">
              Proceed to checkout
            </button>
          </div>
        </div>
      </section>

      <div className="rounded-sm mx-auto flex flex-col gap-1 mt-5 mb-20 bg-white w-full">
        {policies.map(({ id, title, description, icon }) => (
          <div
            key={id}
            className="flex items-start border-s-4 gap-3 bg-[#f7f7f7] border-s-[#146CDA] px-4 py-3"
          >
            <div className="pt-1">{icon}</div>
            <div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutSummary