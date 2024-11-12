import { getAdminDetails, getUserDetails , getMerchantDetails, removeAdminDetails, removeUserDetails , removeMerchantDetails} from "./Storage";

//customer-auth

export const isUserAuthenticated = () =>{
    return getUserDetails() !== null ? true : false;
}


export const logoutUser = () =>{
    removeUserDetails();
}

//admin -auth

export const isAdminAuthenticated = () =>{
    return getAdminDetails() !== null ? true : false;
}


export const logoutAdmin = () =>{
    removeAdminDetails();
}

//merchant -auth

export const isMerchantAuthenticated = () =>{
    return getMerchantDetails() !== null ? true : false;
}


export const logoutMerchant = () =>{
    removeMerchantDetails();
}