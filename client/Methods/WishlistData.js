import getCookie from "../src/Utils/GetCookies.js";
import WishlistMethod from "./Wishlist.method.jsx";
const WishlistItem = await WishlistMethod.GetAllWishlist()
const username = getCookie("username");
const WishlistProduct = WishlistItem.data.filter((product)=>product.username == username )
export default WishlistProduct