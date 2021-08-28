import { signupSuccessMessage } from "../action/action-type"
const initialState = {
    success: false,
    error: false
}

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case signupSuccessMessage:
            return{
                success : true
            }
        default:
            return state
    }
}
