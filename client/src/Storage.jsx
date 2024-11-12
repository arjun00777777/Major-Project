// customer 

export const  setUserDetails = (token) =>{
    localStorage.setItem("userToken", token);
}

export const  getUserDetails = () =>{
   return localStorage.getItem("userToken");
}

export const  removeUserDetails = () =>{
    localStorage.removeItem("userToken");
}

//admin

export const  setAdminDetails = (token) =>{
    localStorage.setItem("adminToken", token);
}

export const  getAdminDetails = () =>{
   return localStorage.getItem("adminToken");
}

export const  removeAdminDetails = () =>{
    localStorage.removeItem("adminToken");
}

//merchant

export const  setMerchantDetails = (token) =>{
    localStorage.setItem("merchantToken", token);
}

export const  getMerchantDetails = () =>{
   return localStorage.getItem("merchantToken");
}

export const  removeMerchantDetails = () =>{
    localStorage.removeItem("merchantToken");
}
