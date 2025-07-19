import CartMethod from "../../Methods/Cart.method.jsx"
import CartProduct from "../../Methods/CartData.js"

const cartItems = CartProduct
const handleCartDelete = async (item) => {
  const DeleteProduct = cartItems.find((product) => product._id == item._id)
  await CartMethod.DeleteCart(DeleteProduct._id)
  window.location.reload()
}

export default handleCartDelete