import API from "../../api";
import {createAction} from "redux-actions";

export const oauthUserRequest = createAction("OAUTH_USER_REQUEST");
export const oauthUserRequestComplete = createAction("OAUTH_USER_REQUEST_COMPLETE");
export const oauthUserInfo = createAction("OAUTH_USER_INFO");
export const oauthError = createAction("OAUTH_ERROR");

// доделать когда будут работать все методы
export const signInGoogle = () => {
  return (dispatch) => {
    dispatch(oauthUserRequest());

    API.oauth
      .signIn()
      .then((googleUser) => {
        const profile = googleUser.getBasicProfile();

        // console.log("profile.getName(): ", profile.getName());
        // console.log("profile.getImageUrl(): ", profile.getImageUrl());
        // доделать передачу нужных данных о пользователе
        dispatch(oauthUserInfo(profile));

        // токен
        const id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);

        API.oauth
          .convertToken(id_token)
          .then((response) => {
            console.log("convertGoogleToken response", response);
            dispatch(oauthUserInfo(response.data));
          })
          .catch((error) => {
            console.log("convertGoogleToken catch", error);
          })
          .finally(() => {
            dispatch(oauthUserRequestComplete());
          });
      })
      .catch((error) => {
        dispatch(oauthError(error.response.data));
      });
  };
};
