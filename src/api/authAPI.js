import axios from "axios";
const USER_INFO_LOCAL_STORAGE = localStorage.getItem("userInfo");
const USER_AUTH_TOKEN = JSON.parse(USER_INFO_LOCAL_STORAGE)?.auth_token;

console.log("AuthAPI USER_AUTH_TOKEN", USER_AUTH_TOKEN);

const instance = axios.create({
  baseURL: "https://rimamir.space/api",
  withCredentials: true,
  headers: {
    Authorization: `Token ${USER_AUTH_TOKEN}`,
    // "Content-type": "multipart/form-data",
  },
});

class AuthAPI {
  login = (email, password) => {
    return axios.post(`/auth/sign_in/`, {
      email: email,
      password: password,
    });
  };

  register = (email, password) => {
    return axios.post(`/auth/sign_up/`, {
      first_name: "",
      last_name: "",
      email: email,
      password: password,
    });
  };

  forgotPassword = (email) => {
    return axios.post(`/auth/forgot_password/`, {
      email: email,
    });
  };

  confirmEmailUser = (token) => {
    return axios.post(`/auth/confirm_email/`, {value: token});
  };

  setNewPassword = (token, password) => {
    return axios.post(`/auth/set_new_password/`, {
      token: token,
      password: password,
    });
  };

  sendEmailConfirmation = (token) => {
    const instance = axios.create({
      withCredentials: true,
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    return instance.post(`/auth/send_email_confirmation/`);
  };
}

const authAPI = new AuthAPI();
export default authAPI;
