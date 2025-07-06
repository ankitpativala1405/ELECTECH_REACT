import { ApiUrl } from "./api.js";

const UserMethod = {
  create: async (data) => {
    const request = await fetch(ApiUrl.users, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return request;
  },
  GetAll: async () => {
    const request = await fetch(ApiUrl.users);
    let response = await request.json();
    return response;
  },
  update: async (data, id) => {
    await fetch(`${ApiUrl.users}/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  delete:async(id)=>{
   const request = await fetch(`${ApiUrl.users}/${id}`, {
      method: "DELETE",
      })
      return request.json()
  }
 
};

export default UserMethod
