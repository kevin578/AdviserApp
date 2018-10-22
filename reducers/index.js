import { combineReducers } from "redux";
import userReducer from './userReducer';
import monthReducer from './monthReducer';

export default combineReducers({
    user: userReducer,
    month: monthReducer
});