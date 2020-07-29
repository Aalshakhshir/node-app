const { LOGIN_USER,LOGOUT_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE } = require("./types")
const { LoginUser, signUserUp } = require("../api/endpoints")

export const loginUser = (username, password) => (dispatch) => {
    dispatch({
        type: LOGIN_USER
    })
    LoginUser(username, password).then(res => {
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: {
                token: res.token,
                user: res.user
            }
        })
        localStorage.setItem('token', res.token);
        localStorage.setItem('userId', res.user.id);
    }).catch(e => {
        dispatch({
            type: LOGIN_USER_FAILURE,
            payload: {
                error: e
            }
        })
    })
}

export const LOGOUT = () => (dispatch) => {
    dispatch({
       type: LOGOUT_USER
    })
    localStorage.removeItem('token');
}

export const SignUpUser = ({username, password, email, firstname, lastname }) => (dispatch) => {
    dispatch({
        type: SIGNUP_USER
    })
    signUserUp({ username, email, password, firstname, lastname}).then(res => {
        dispatch({
            type: SIGNUP_USER_SUCCESS,
            payload: {
                user: res
            }
        })
    }).catch(e => {
        dispatch({
            type: SIGNUP_USER_FAILURE,
            payload: {
                error: e
            }
        })
    })
}