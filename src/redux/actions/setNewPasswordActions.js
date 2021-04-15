import axios from "axios";
import API from "../../api";
import {createAction} from "redux-actions";
import {navigate} from "@reach/router";
import {BASE_URL} from "../../api/consts";

export const setNewPasswordUserRequest = createAction("SET_NEW_PASSWORD_USER_REQUEST");
export const setNewPasswordUserComplete = createAction("SET_NEW_PASSWORD_USER_COMPLETE");
export const setNewPasswordUserSuccess = createAction("SET_NEW_PASSWORD_USER_SUCCESS");
export const setNewPasswordUserError = createAction("SET_NEW_PASSWORD_USER_ERROR");

export const setNewPasswordActions = (token, password) => {
  return (dispatch) => {
    dispatch(setNewPasswordUserRequest());

    API.auth
      .setNewPassword(token, password)
      .then((response) => {
        console.log("setNewPassword response", response);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        dispatch(setNewPasswordUserSuccess(response.data));
        navigate("/successful-password-change");
        setTimeout(() => {
          navigate("/goal-page");
        }, 2000);
      })
      .catch((error) => {
        if (error.response) {
          dispatch(setNewPasswordUserError(error.response.data));
        } else {
          dispatch(setNewPasswordUserError(["Server ERROR"]));
        }

        console.log("setNewPassword catch", error);
      })
      .finally(() => {
        dispatch(setNewPasswordUserComplete());
      });
  };
};
