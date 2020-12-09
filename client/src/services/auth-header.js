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

export const getMe = () => axios.get('/auth/me').then(res => res.data)