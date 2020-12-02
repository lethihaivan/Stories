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

/* const login = (username, password) => {
  return axios
    .post(path + "/login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        const user = {
          token: '123123',
          accessToken: '123123',
          id: 12,
          username: 'Hai Van',
          email: "email@gmail.comn",
          roles: ['ROLE_USER', "ROLE_MOD"]
        }
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("user", JSON.stringify(user));
      }

      return response.data;
    });
}; */
const login = (username, password) => {
  return axios
    .post(path + "/login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
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
