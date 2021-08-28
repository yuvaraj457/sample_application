import { combineReducers } from 'redux';

import { checkOutReducer } from './check-out-reducer';
import { UserReducer } from './user-data-reducer';
import { alertReducer } from './alert-reducer';

export default combineReducers({
    billingAddress : checkOutReducer,
    userData : UserReducer,
    alert : alertReducer
})