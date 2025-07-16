import { ApiUrl } from "./api.js";

const WishlistMethod = {
  CreateWishlist: async (data) => {
    const request = await fetch(ApiUrl.wishlist, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return request;
  },
  GetAllWishlist: async () => {
    const request = await fetch(ApiUrl.wishlist);
    let response = await request.json();
    return response;
  },
  UpdateWishlist: async (data, id) => {
    await fetch(`${ApiUrl.wishlist}/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  DeleteWishlist: async (id) => {
    const request = await fetch(`${ApiUrl.wishlist}/${id}`, {
      method: "DELETE",
    });
    return request.json();
  },
};

export default WishlistMethod;
