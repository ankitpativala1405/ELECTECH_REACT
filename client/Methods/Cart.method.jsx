import { ApiUrl } from "./api.js";

const CartMethod = {
  CreateCart: async (data) => {
    const request = await fetch(ApiUrl.Cart, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return request;
  },
  GetAllCart: async () => {
    const request = await fetch(ApiUrl.Cart);
    let response = await request.json();
    return response;
  },
  UpdateCart: async (data, id) => {
    await fetch(`${ApiUrl.Cart}/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  DeleteCart: async (id) => {
    const request = await fetch(`${ApiUrl.Cart}/${id}`, {
      method: "DELETE",
    });
    return request.json();
  },
};

export default CartMethod;
