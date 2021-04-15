import axios from "axios";
import authAPI from "./authAPI";
import oauthAPI from "./oauthAPI";
import profileAPI from "./profileAPI";
import goalAPI from "./goalAPI";
import qrCodeAPI from "./qrCodeAPI";
import {BASE_URL} from "./consts";
import {version} from "../../package.json";
import {USER_INFO_LOCAL_STORAGE} from "../helpers";
import {USER_AUTH_TOKEN} from "../helpers/initApp";

// axios.defaults.baseURL = "https://share-service.mircod.one/api";
axios.defaults.baseURL = "https://rimamir.space/api";
// axios.defaults.headers.common["Authorization"] = `Token ${USER_AUTH_TOKEN}`;

class APIService {
  auth = authAPI;
  oauth = oauthAPI;
  profile = profileAPI;
  goal = goalAPI;
  qrCode = qrCodeAPI;
}

const API = new APIService();
export default API;
