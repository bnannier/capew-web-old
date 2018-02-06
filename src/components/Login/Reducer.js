import { combineReducers } from 'redux';
import {
    FACEBOOK_LOGIN,
    SITE_LOGIN
} from './Actions';

const initialState = {
    name: ""
}

function facebookLogin(state = initialState, action) {
    switch (action.type) {
        case FACEBOOK_LOGIN:
            return {
                name: action.login.name
            }
        default:
            return state;
    }
}

const reducers = combineReducers({
    facebookLogin
});

export default reducers;