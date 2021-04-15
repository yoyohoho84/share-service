import axios from "axios";
// import {USER_AUTH_TOKEN} from "../helpers/initApp";
const USER_INFO_LOCAL_STORAGE = localStorage.getItem("userInfo");
const USER_AUTH_TOKEN = JSON.parse(USER_INFO_LOCAL_STORAGE)?.auth_token;

console.log("USER_INFO_LOCAL_STORAGE:", USER_AUTH_TOKEN);

const instance = axios.create({
  baseURL: "https://rimamir.space/api",
  withCredentials: true,
  headers: {
    Authorization: `Token ${USER_AUTH_TOKEN}`,
    // "Content-type": "multipart/form-data",
  },
});

class ProfileAPI {
  getCurrentUserInfo = async (token) => {
    const res = await axios.get("user/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return res.data;
  };

  uploadUserAvatar = async (selectedFile) => {
    console.log("uploadUserAvatar selectedFile:", selectedFile);
    const formData = new FormData();
    formData.append("avatar", selectedFile);
    console.log("uploadUserAvatar formData:", formData);

    const res = await instance.post("user/avatar/", formData);
    return res.data;
  };

  updateUserFirstLastName = async (firstName, lastName, id) => {
    const res = await instance.patch(`user/${id}`, {
      first_name: firstName,
      last_name: lastName,
    });
    return res.data;
  };
}

const profileAPI = new ProfileAPI();
export default profileAPI;
