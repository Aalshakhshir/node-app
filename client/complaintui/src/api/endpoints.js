import Axios from 'axios';
const prefix = 'http://localhost:3000/';

export const LoginUser = (username, password) => {
    return new Promise((resolve, reject) => {
        Axios.post(`${prefix}api/auth/login`, {
            username,
            password
        }).then(res => {
            console.log(res);
            resolve({ token: res.data.token, user: res.data.user }
            )
        }).catch(e => reject(e.response))
    })
}
export const signUserUp = ({ username, email, password, firstname, lastname }) => {
    return new Promise((resolve, reject) => {
        Axios.post(`${prefix}api/auth/signup`, {
            username,
            password,
            email,
            firstname,
            lastname,
        }).then(res => resolve(res.data.user)).catch(e => reject(e.response))
    })
}
export const getAllUserComplaints = ({ id, token }) => {
    console.log(id);
    return new Promise((resolve, reject) => {
        Axios.get(`${prefix}api/complaints/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => resolve(res.data)).catch(e => reject(e.response))
    })
}


export const updateComplaintStatus = ({ id, status, token }) => {
    console.log(status);
    return new Promise((resolve, reject) => {
        Axios.put(`${prefix}api/complaints/${id}`, {
            status
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => resolve(res.data)).catch(e => reject(e.response))
    })
}

export const addNewComplaint = ({ id, message, token }) => {
    return new Promise((resolve, reject) => {
        Axios.post(`${prefix}api/complaints/create`, {
            message
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => resolve(res.data)).catch(e => reject(e.response))
    })
}
