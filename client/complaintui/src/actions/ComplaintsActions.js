import { GET_USER_COMPLAINTS, GET_USER_COMPLAINTS_SUCCESS, GET_USER_COMPLAINTS_FAILURE, UPDATE_COMPLAINT_STATUS, UPDATE_COMPLAINT_STATUS_SUCCESS, UPDATE_COMPLAINT_STATUS_FAILURE, ADD_NEW_COMPLAINT, ADD_NEW_COMPLAINT_SUCCESS, ADD_NEW_COMPLAINT_FAILURE } from "./types"
import { getAllUserComplaints, updateComplaintStatus, addNewComplaint } from "../api/endpoints"

export const getUserComplaints = (userId) => (dispatch, getState) => {
    const token = getState().auth.token || localStorage.getItem('token');
    dispatch({
        type: GET_USER_COMPLAINTS
    })
    getAllUserComplaints({ id: userId, token: token }).then(res => {
        dispatch({
            type: GET_USER_COMPLAINTS_SUCCESS,
            payload: {
                complaints: res
            }
        })
    }).catch(e => {
        dispatch({
            type: GET_USER_COMPLAINTS_FAILURE,
            payload: {
                error: e
            }
        })
    })
}

export const updateComplaintStatusByAdmin = ({ id, newStatus } ) => (dispatch, getState) => {
    const token = getState().auth.user.token || localStorage.getItem('token');
    dispatch({
        type: UPDATE_COMPLAINT_STATUS
    })
    updateComplaintStatus({ id, status: newStatus, token }).then(res => {
        dispatch({
            type: UPDATE_COMPLAINT_STATUS_SUCCESS
        })
    }).catch(e => {
        dispatch({
            type: UPDATE_COMPLAINT_STATUS_FAILURE,
            payload: {
                error: e
            }
        })
    })
}

export const addNewUserComplaint = ({ id, message }) => (dispatch, getState) => {
    const token = getState().auth.user.token || localStorage.getItem('token');
    dispatch({
        type: ADD_NEW_COMPLAINT
    })
    addNewComplaint({ id, message, token }).then(res => {
        dispatch({
            type: ADD_NEW_COMPLAINT_SUCCESS,
            payload: res,
        })
    }).catch(e => {
        dispatch({
            type: ADD_NEW_COMPLAINT_FAILURE,
            payload: {
                error: e
            }
        })
    })
}