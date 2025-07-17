import getCookie from "../src/Utils/GetCookies.js";
import CartMethod from "./Cart.method.jsx";
const CartItem = await CartMethod.GetAllCart()
const username = getCookie("username");
const CartProduct = CartItem.data.filter((product)=>product.username == username )
export default CartProduct