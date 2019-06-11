import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
    item: itemReducer,
    error: errorReducer,
    auth: authReducer
});