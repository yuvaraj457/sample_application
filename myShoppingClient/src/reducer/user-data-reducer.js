import { userData, addCartData, removeCartData, errors} from "../action/action-type"
const initialState = {
    successMessage : false,
    cartCount: 0,
    error: ''
}

export const UserReducer = (state=initialState, action) => {
    switch (action.type) {
        case userData:
            return {
                ...state,
                ...action.payload.data,
                cartCount: action.payload.data.cartProducts.length,
            }
        case errors:
            return {
                ...state,
                error: action.errorMessage
            }
        case addCartData:
            return {
                ...state,
                cartCount: state.cartCount + 1
            }
        case removeCartData:
            return {
                ...state,
                cartCount: state.cartCount - 1
            }

        default:
            return state
    }
}