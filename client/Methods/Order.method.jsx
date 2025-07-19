import { ApiUrl } from "./api.js";

const OrderMethod = {
  CreateOrder: async (data) => {
    const request = await fetch(ApiUrl.order, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return request;
  },
  GetAllOrder: async () => {
    const request = await fetch(ApiUrl.order);
    let response = await request.json();
    return response;
  },
  UpdateOrder: async (data, id) => {
    await fetch(`${ApiUrl.order}/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  DeleteOrder: async (id) => {
    const request = await fetch(`${ApiUrl.order}/${id}`, {
      method: "DELETE",
    });
    return request.json();
  },
};

export default OrderMethod;
