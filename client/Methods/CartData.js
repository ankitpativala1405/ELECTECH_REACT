import CartMethod from "./Cart.method.jsx";

const CartItem = await CartMethod.GetAllCart()

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

const username = getCookie("username");
console.log("Username from cookie:", username);
console.log("CartItem",CartItem);


const CartProduct = CartItem.data.filter((product)=>product.username == username )

export default CartProduct