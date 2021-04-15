import axios from "axios";
import {CLIENT_GOOGLE_PUBLIC_KEY} from "./consts";

class OauthAPI {
  signIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    return auth2.signIn();
  };

  convertToken = (token) => {
    return axios.post(`/oauth/convert-token/`, {
      grant_type: "convert_token",
      client_id: CLIENT_GOOGLE_PUBLIC_KEY,
      backend: "google-oauth2",
      token: token,
    });
  };
}

const oauthAPI = new OauthAPI();
export default oauthAPI;
