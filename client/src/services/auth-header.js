import axios from '../axios'
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        return {
            authorization: 'Bearer ' + user.token,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        };
    }
    else {
        return {};
    }
}



export const EditMe = (id, user) => axios.put(`/users/${id}`, user);
export const getMe = () => axios.get('/auth/me').then(res => res.data)
export const getComments = () => axios.get('/comments').then(res => res.data)
export const postComments = (comment) => axios.get('/comments', comment)
