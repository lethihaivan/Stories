import axios from "../axios";


const path = '/auth'
const register = ({
  username,
  fullName,
  password,
  role
}) => {
  return axios.post(path + "/register", {
    username,
    fullName,
    password,
    role
  });
};


const login = (username, password) => {
  return axios
    .post(path + "/login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
