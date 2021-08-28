import { userData, errors, addCartData, removeCartData } from "./action-type";
import {user} from '../core/api/user';


const fetchUser = (data) => {
    return {
        type : userData,
        payload : data
    }
}

const fetchErrors = (errorMessage) => {
    return {
        type : errors,
        errorMessage
    }
}

export const fetchUserData = () => {
    return  (dispatch) => {
        user()
            .then((res) => dispatch(fetchUser(res)))
            .catch((error) => dispatch(fetchErrors(error.message)))
    }
}

export const addProduct = () => {
    return {
        type : addCartData
    }
}

export const removeProduct = () => {
    return {
        type : removeCartData
    }
}


