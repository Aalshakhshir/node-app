import { GET_USER_COMPLAINTS, GET_USER_COMPLAINTS_SUCCESS, GET_USER_COMPLAINTS_FAILURE, UPDATE_COMPLAINT_STATUS, UPDATE_COMPLAINT_STATUS_FAILURE, GET_ALL_COMPLAINTS, UPDATE_COMPLAINT_STATUS_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
    complaints: [],
    loading: false,
    error: '',
};

export default function complaints(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USER_COMPLAINTS:
            return { ...state, loading: true }
        case GET_USER_COMPLAINTS_SUCCESS:
            return { ...state, complaints: action.payload.complaints };
        case GET_USER_COMPLAINTS_FAILURE:
            return { ...state, error: action.payload.error };
        case GET_ALL_COMPLAINTS: //for admin only
            return { ...state, complaints: action.payload.complaints };
        case UPDATE_COMPLAINT_STATUS_SUCCESS: //admin
            return {
                ...state, complaints: [...complaints, state.complaints.map(item => {
                    if (item.id === action.payload.id) return { ...item, status: action.payload.status }
                    return item;
                })]
            }
        case UPDATE_COMPLAINT_STATUS_FAILURE:
            return { ...state, error: action.payload.error };
        case UPDATE_COMPLAINT_STATUS:
            return { ...state, loading: true };
        default:
            return state;
    }
}
