import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE } from "../actions/types";

const INITIAL_STATE = {
    loading: false,
    error: '',
    users: [],
    token: '',
    user: {}
};

export default function Auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loading: true };
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, token: action.payload.token };
        case LOGIN_USER_FAILURE:
            return { ...state, loading: false, error: action.payload.error };
        case SIGNUP_USER: 
            return { ...state, loading: true };
        case SIGNUP_USER_SUCCESS: 
            return {...state, loading:false, user: action.payload.user }
        case SIGNUP_USER_FAILURE: 
            return { ...state, loading: false, error: action.payload.error }

        default:
        return state;
    }
}