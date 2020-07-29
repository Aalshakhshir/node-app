import {combineReducers} from "redux";
import complaintsReducer from './complaintsReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    complaints: complaintsReducer,
    auth: AuthReducer,
})