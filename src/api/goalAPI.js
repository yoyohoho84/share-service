import axios from "axios";
const USER_INFO_LOCAL_STORAGE = localStorage.getItem("userInfo");
const USER_AUTH_TOKEN = JSON.parse(USER_INFO_LOCAL_STORAGE)?.auth_token;

console.log("GoalAPI USER_INFO_LOCAL_STORAGE:", USER_AUTH_TOKEN);

const instance = axios.create({
  baseURL: "https://rimamir.space/api",
  withCredentials: true,
  headers: {
    Authorization: `Token ${USER_AUTH_TOKEN}`,
    // "Content-type": "multipart/form-data",
  },
});

class GoalAPI {
  goalCategories = () => {
    return axios.get(`/goal/categories/`);
  };

  getGoalCards = () => {
    return axios.get(`/goal/`);
  };

  getGoalById = (id) => {
    return axios.get(`/goal/${id}/`, {
      id: id,
    });
  };

  joinParty = (id) => {
    return instance.post(`/goal/${id}/join/`, {
      id,
    });
  };
}

const goalAPI = new GoalAPI();
export default goalAPI;
