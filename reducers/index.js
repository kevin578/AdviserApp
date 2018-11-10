import { combineReducers } from "redux";
import userReducer from './userReducer';
import monthReducer from './monthReducer';
import applicationReducer from './applicationReducer';

export default combineReducers({
    user: userReducer,
    month: monthReducer,
    application: applicationReducer
});