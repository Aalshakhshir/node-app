import { GET_USER_COMPLAINTS, GET_USER_COMPLAINTS_SUCCESS, GET_USER_COMPLAINTS_FAILURE } from "./types"
import { getAllUserComplaints } from "../api/endpoints"

export const getUserComplaints = (userId) => (dispatch, getState) => {
    const token = getState().auth.token || localStorage.getItem('token');
    dispatch({
        type: GET_USER_COMPLAINTS
    })
    getAllUserComplaints({id: userId, token: token }).then(res => {
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