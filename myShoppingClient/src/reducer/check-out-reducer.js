import { billingAddress,   errors } from "../action/action-type"
const initialState = {
    data: [],
    error: ''
}

export const checkOutReducer = (state = initialState, action) => {
    switch (action.type) {
        case billingAddress:
            return {
                ...state,
                data: action.payload
            }
        case errors:
            return {
                ...state,
                error: action.errorMessage
            }
        default:
            return state
    }
}

