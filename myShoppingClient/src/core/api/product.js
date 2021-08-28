import axiosInstance from "./index";
import { getAuthToken } from "../../shared/utils/session-storage";
import {url} from "../../config.json";

export const getProduct = async () => {
    const products = await axiosInstance.get(url.products);
    return products.data;
}

export const productDetails = (id) => {
    const product = axiosInstance.get(url.productDetails, { params: { productId: id } });
    return product;
}

export const addToCart = (data) => {
    const product =  axiosInstance.get(url.addToCart,
        { headers: { 'auth-token': getAuthToken() }, params: {
            productId : data._id,
            productPrice : data.productPrice,
            productName: data.productName,
            productImage : data.productImage,
             }}   
    );
    return product;
}

export const removeFromCart = (id) => {
    const product = axiosInstance.delete(url.removeFromCart,
        { headers: { 'auth-token': getAuthToken() }, params: { productId: id } },
    );
    return product;
}

export const cartTotalPrice = (id, quantity) => {
    const product = axiosInstance.get(url.cartTotalPrice,
        { headers: { 'auth-token': getAuthToken() }, params: { productId: id, productQuantity: quantity } },
    );
    return product;
}
