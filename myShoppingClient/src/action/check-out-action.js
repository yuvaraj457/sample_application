import { billingAddress,  errors } from "./action-type";
import {getBillingAddress, } from '../core/api/user';


const fetchBillingAddress = (data) => {
    return {
        type : billingAddress,
        payload : data
    }
}


const fetchErrors = (errorMessage) => {
    return {
        type : errors,
        errorMessage
    }
}

export const fetchbillingAddressData = () => {
    return (dispatch) => {
        getBillingAddress()
            .then((res) => dispatch(fetchBillingAddress(res)))
            .catch((error) => dispatch(fetchErrors(error.message)))
    }
}

