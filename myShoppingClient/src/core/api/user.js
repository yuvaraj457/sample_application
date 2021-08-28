import axiosInstance from "./index";
import { getAuthToken } from "../../shared/utils/session-storage";
import {url} from "../../config.json";


export const user = () => {
    const data = axiosInstance.get(url.user,
        { headers: { 'auth-token': getAuthToken() } }
    );
    return data;
}

export const login = (formData) => {
    const data = axiosInstance.post(url.login, formData);
    return data;
}

export const signup = (formData) => {
    const data = axiosInstance.post(url.signup, formData);
    return data;
}

export const checkout = (formData) => {
    const data = axiosInstance.post(url.checkout,formData,
        { headers: { 'auth-token': getAuthToken() } });
    return data;
}

export const getBillingAddress = () => {
    const data = axiosInstance.get(url.getBillingAddress, { headers: { 'auth-token': getAuthToken() }});
    return data;
}

export const removeBillingAddress = (billingAddress) => {
    const data = axiosInstance.delete(url.removeBillingAddress, 
        { headers: { 'auth-token': getAuthToken() }, params:{billingAddress}});
    return data;
}