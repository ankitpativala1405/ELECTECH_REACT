import WishlistMethod from "./Wishlist.method.jsx";


const WishlistItem = await WishlistMethod.GetAllWishlist()

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

const username = getCookie("username");
console.log("Username from cookie:", username);
console.log("CartItem",WishlistItem);

const WishlistProduct = WishlistItem.data.filter((product)=>product.username == username )
 
export default WishlistProduct