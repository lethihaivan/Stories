import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:9091/api";

const getPublicContent = () => {
    return axios.get(API_URL + '/stories');

}
const getInFor = () => {
    return axios.get(API_URL + '/me');

}
const getUserBoard = () => {
    return axios.get(API_URL + '/user', { headers: authHeader() });
}
const getAuthorBoard = () => {
    return axios.get(API_URL + '/author', { headers: authHeader() });
}

const getAdminBoard = () => {
    return axios.get(API_URL + "/admin", { headers: authHeader() });
};

export default {
    getInFor,
    getPublicContent,
    getUserBoard,
    getAuthorBoard,
    getAdminBoard,
};