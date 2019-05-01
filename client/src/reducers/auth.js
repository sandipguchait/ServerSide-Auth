import { combineReducers } from 'redux';
import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const INITIAL_STATE = {
    authenticated:'',
    error: ''
}
const user_auth = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case AUTH_USER:
            return {
                ...state,
                authenticated: action.payload.token
            }
        case AUTH_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        default: 
            return state;
    }
};


const rootReducer = combineReducers({
    auth: user_auth,
});

export default rootReducer;